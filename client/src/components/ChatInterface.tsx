import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X, Minimize2 } from "lucide-react";

export default function ChatInterface() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleCollapse = () => {
    setIsExpanded(false);
    setInputValue("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      handleExpand();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`
          glass-panel-strong rounded-2xl overflow-hidden
          ${isExpanded ? 'animate-pulse-glow' : 'glow-maroon-subtle animate-float'}
          transition-all duration-700 ease-out
        `}
        style={{
          width: isExpanded ? "min(900px, 95vw)" : "min(480px, 95vw)",
          height: isExpanded ? "min(600px, 80vh)" : "auto",
        }}
        data-testid="chat-container"
      >
        {!isExpanded ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                Confused about website needs?
              </h2>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Let our AI consultant guide you to the perfect website solution and pricing.
            </p>

            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input
                placeholder="Tell us about your business..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 bg-background/50 border-border focus:border-primary"
                data-testid="input-chat"
              />
              <Button 
                type="submit" 
                className="gap-2"
                data-testid="button-start-chat"
              >
                Start <Send className="w-4 h-4" />
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              No signup required. Free consultation.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="h-full flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">GrowithCP AI Consultant</span>
              </div>
              <Button 
                size="icon" 
                variant="ghost"
                onClick={handleCollapse}
                data-testid="button-minimize-chat"
              >
                <Minimize2 className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex-1 relative">
              <iframe
                src="https://giguai.growithcp.live/chat"
                className="w-full h-full border-0"
                title="GrowithCP AI Chat"
                data-testid="iframe-chat"
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
