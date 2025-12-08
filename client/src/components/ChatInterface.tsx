import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send, Minimize2, Sparkles } from "lucide-react";

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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (inputValue.trim()) {
        handleExpand();
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-3xl px-4"
        data-testid="chat-container"
      >
        {!isExpanded ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <form onSubmit={handleSubmit}>
              <div className="glass-panel-strong rounded-2xl p-3 glow-maroon-subtle">
                <Textarea
                  placeholder="Tell us about your business and website needs..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="min-h-[80px] bg-transparent border-0 resize-none text-base focus-visible:ring-0 placeholder:text-muted-foreground/60"
                  data-testid="input-chat"
                />
                
                <div className="flex items-center justify-between gap-4 pt-2 border-t border-border/50 mt-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm">GrowithCP AI</span>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="gap-2 px-6"
                    data-testid="button-start-chat"
                  >
                    Start Chat <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </form>

            <p className="text-sm text-muted-foreground text-center">
              No signup required. Free AI consultation for your website needs.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass-panel-strong rounded-2xl overflow-hidden glow-maroon"
            style={{ height: "min(600px, 75vh)" }}
          >
            <div className="flex items-center justify-between gap-4 p-4 border-b border-border">
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
            
            <div className="h-[calc(100%-60px)]">
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
