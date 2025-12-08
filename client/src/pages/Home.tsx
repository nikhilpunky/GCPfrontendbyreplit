import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import ChatInterface from "@/components/ChatInterface";
import GlassCard from "@/components/GlassCard";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Shield, Zap } from "lucide-react";

export default function Home() {
  return (
    <PageLayout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <Badge variant="secondary" className="mb-4">
              AI-Powered Website Consultant
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Build the <span className="text-gradient">Perfect Website</span>
              <br />for Your Business
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Not sure what kind of website you need? Let our AI guide you through 
              the process and help you understand fair pricing.
            </p>
          </motion.div>

          <ChatInterface />
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
            <h2 className="text-3xl font-bold mb-4">Why Choose GrowithCP?</h2>
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
    </PageLayout>
  );
}
