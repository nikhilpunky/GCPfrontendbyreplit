import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, Sparkles } from "lucide-react";
import { useSessionId } from "@/hooks/use-session-id";

interface Message {
  text: string;
  sender: "user" | "ai";
}

interface ChatInterfaceProps {
  isFullscreen?: boolean;
}

function LinkableText({ text }: { text: string }) {
  // Regex to match URLs (http, https, or www)
  const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/g;

  // Split text by URLs and create elements
  const parts = text.split(urlRegex);

  return (
    <>
      {parts.map((part, index) => {
        if (urlRegex.test(part)) {
          // It's a URL - make it a link
          const href = part.startsWith('http') ? part : `https://${part}`;
          return (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary/60 transition-colors"
            >
              {part}
            </a>
          );
        } else {
          // Regular text
          return <span key={index}>{part}</span>;
        }
      })}
    </>
  );
}

function FormattedMessage({ text }: { text: string }) {
  // Check if text contains numbered points (1., 2., etc.) or double newlines
  const hasNumberedPoints = /\d+\.\s/.test(text);
  const hasDoubleNewlines = text.includes('\n\n');

  if (!hasNumberedPoints && !hasDoubleNewlines) {
    return <div className="whitespace-pre-wrap"><LinkableText text={text} /></div>;
  }

  // Split by numbered points (1., 2., etc.) or double newlines
  const points = hasNumberedPoints
    ? text.split(/\d+\.\s*/).filter(point => point.trim())
    : text.split('\n\n').filter(point => point.trim());

  return (
    <div className="space-y-2">
      {points.map((point, index) => (
        <div key={index} className="response-point">
          {hasNumberedPoints && index > 0 && (
            <span className="font-medium text-primary mr-2">{index}.</span>
          )}
          <span className="whitespace-pre-wrap">
            <LinkableText text={point.trim()} />
          </span>
        </div>
      ))}
    </div>
  );
}

export default function ChatInterface({ isFullscreen = false }: ChatInterfaceProps) {
  const sessionId = useSessionId();
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I'm your AI assistant. How can I help you with your website needs today?", sender: "ai" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addMessage = (text: string, sender: "user" | "ai") => {
    setMessages(prev => [...prev, { text, sender }]);
  };

  // Auto scroll when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const sendMessage = async () => {
    const text = inputValue.trim();
    if (!text || isTyping) return;

    addMessage(text, "user");
    setInputValue("");
    setIsTyping(true);

    try {
      const res = await fetch("http://localhost:3555/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, sessionId })
      });

      const data = await res.json();
      addMessage(data.reply || "No response", "ai");
    } catch (error) {
      // Fallback demo responses when external API is unavailable
      console.warn("External API unavailable, using demo responses:", error);
      const responses = [
        "Based on what you've described, I'd recommend starting with a responsive business website with e-commerce integration. This would typically cost between $2,500-$5,000 depending on complexity.",
        "For a small business like yours, a WordPress-based solution would be most cost-effective and easy to manage. We can help you choose the right hosting provider too.",
        "I understand you want a professional online presence. Let me ask a few questions to better understand your budget and timeline...",
        "That's a great business model! You'd benefit from a landing page that highlights your unique value proposition. We can build something that converts visitors into customers."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      addMessage(randomResponse, "ai");
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (isFullscreen) {
    return (
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between gap-4 p-6 border-b border-border bg-background/95 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="font-semibold text-lg">GrowithCP AI Consultant</span>
              <p className="text-sm text-muted-foreground">Your website planning assistant</p>
            </div>
          </div>
        </div>

        <div
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto p-6 space-y-6"
        >
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[75%] p-4 rounded-2xl ${
                message.sender === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted/50 border border-border'
              }`}>
                {message.sender === 'ai' ? (
                  <FormattedMessage text={message.text} />
                ) : (
                  message.text
                )}
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-muted/50 border border-border p-4 rounded-2xl">
                AI is typing...
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="flex-shrink-0 p-6 border-t border-border bg-background/95 backdrop-blur-sm">
          <div className="flex gap-3">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything about your website..."
              className="flex-1 text-base py-3 px-4 rounded-xl"
              onKeyDown={handleKeyDown}
              disabled={isTyping}
              autoFocus
            />
            <Button
              onClick={sendMessage}
              disabled={!inputValue.trim() || isTyping}
              size="lg"
              className="px-6 py-3 rounded-xl"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-4xl mx-auto"
      data-testid="chat-container"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-panel-strong rounded-2xl overflow-hidden glow-maroon"
      >
        <div className="flex items-center justify-between gap-4 p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-primary" />
            </div>
            <span className="font-medium">GrowithCP AI Consultant</span>
          </div>
        </div>

        <div
          ref={messagesContainerRef}
          className="overflow-y-auto p-6 space-y-4"
        >
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[70%] p-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted'
              }`}>
                {message.sender === 'ai' ? (
                  <FormattedMessage text={message.text} />
                ) : (
                  message.text
                )}
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-muted p-3 rounded-lg">
                AI is typing...
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="flex-shrink-0 p-6 border-t border-border bg-background/50 backdrop-blur-sm">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything about your website..."
              className="flex-1"
              onKeyDown={handleKeyDown}
              disabled={isTyping}
              autoFocus
            />
            <Button onClick={sendMessage} disabled={!inputValue.trim() || isTyping}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
