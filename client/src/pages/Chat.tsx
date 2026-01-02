import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send } from "lucide-react";
import { useSessionId } from "@/hooks/use-session-id";

interface Message {
  text: string;
  sender: "user" | "ai";
}

export default function Chat() {
  const sessionId = useSessionId();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const addMessage = (text: string, sender: "user" | "ai") => {
    setMessages(prev => [...prev, { text, sender }]);
  };

  const sendMessage = async () => {
    const text = inputValue.trim();
    if (!text) return;

    addMessage(text, "user");
    setInputValue("");
    setIsTyping(true);

    try {
      const res = await fetch("https://giguai.growithcp.live/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, sessionId })
      });

      const data = await res.json();
      addMessage(data.reply || "No response", "ai");
    } catch (error) {
      addMessage("Sorry, there was an error. Please try again.", "ai");
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl h-[80vh] glass-panel-strong rounded-2xl overflow-hidden glow-maroon"
      >
        <div className="flex items-center justify-center gap-3 p-6 border-b border-border">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">CyberPunk AI Chat</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4" style={{ height: 'calc(100% - 140px)' }}>
          {messages.length === 0 && (
            <div className="text-center text-muted-foreground">
              <p>Hi! I'm your AI assistant. How can I help you with your website needs today?</p>
            </div>
          )}

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
                {message.text}
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
        </div>

        <div className="p-6 border-t border-border">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              className="flex-1"
            />
            <Button onClick={sendMessage} disabled={!inputValue.trim() || isTyping}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
