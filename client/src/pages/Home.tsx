import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import ChatInterface from "@/components/ChatInterface";
import GlassCard from "@/components/GlassCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Shield, Zap, MessageCircle, X } from "lucide-react";
import logo from "@/assets/logo.png";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Ensure page stays at top on component mount
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    // Scroll immediately
    scrollToTop();

    // Also scroll after a delay to ensure it takes effect
    const timeoutId = setTimeout(scrollToTop, 100);

    // And scroll again after animations might have loaded
    const timeoutId2 = setTimeout(scrollToTop, 500);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
    };
  }, []);

  return (
    <PageLayout>
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 flex flex-col items-center"
          >
            <motion.img
              src={logo}
              alt="CyberPunk AI Logo"
              className="w-32 h-32 mb-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              loading="lazy"
            />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Confused about <span className="text-gradient">website needs</span>?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let our AI guide you to the perfect website solution and fair pricing.
            </p>
          </motion.div>

          {/* Chat Interface in Hero Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 cursor-pointer"
            onClick={() => setIsChatOpen(true)}
          >
            <ChatInterface />
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose CyberPunk AI?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We make website planning simple and transparent.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard delay={0.1}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI-Powered Guidance</h3>
              <p className="text-muted-foreground text-sm">
                Our AI understands your needs and recommends the perfect website solution.
              </p>
            </GlassCard>

            <GlassCard delay={0.2}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fair Pricing</h3>
              <p className="text-muted-foreground text-sm">
                Get transparent pricing guidance so you never overpay for your website.
              </p>
            </GlassCard>

            <GlassCard delay={0.3}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No Tech Skills Needed</h3>
              <p className="text-muted-foreground text-sm">
                We speak your language. No technical jargon, just clear recommendations.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Full-screen Chat Modal */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsChatOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-4 sm:inset-6 lg:inset-8 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full max-w-none bg-background rounded-2xl shadow-2xl overflow-hidden relative">
                {/* Close Button */}
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-background transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Full-screen Chat Interface */}
                <div className="h-full flex flex-col">
                  <ChatInterface isFullscreen={true} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}
