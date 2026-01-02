import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import FeatureCard from "@/components/FeatureCard";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Brain, 
  Shield, 
  Clock, 
  Users, 
  TrendingUp, 
  Heart,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const features = [
  {
    title: "AI-Powered Intelligence",
    description: "Our advanced AI understands your business context and provides tailored recommendations.",
    icon: Brain,
  },
  {
    title: "No Bias, No Commission",
    description: "We don't sell websites or earn commission. Our only goal is to help you make the right choice.",
    icon: Shield,
  },
  {
    title: "Save Time & Money",
    description: "Avoid costly mistakes and endless research. Get answers in minutes, not weeks.",
    icon: Clock,
  },
  {
    title: "Built for Non-Tech People",
    description: "We translate complex tech concepts into simple, actionable advice anyone can understand.",
    icon: Users,
  },
  {
    title: "Stay Ahead of Trends",
    description: "Our AI is trained on the latest web development trends and best practices.",
    icon: TrendingUp,
  },
  {
    title: "Genuinely Helpful",
    description: "We're here to empower you with knowledge, not confuse you with jargon.",
    icon: Heart,
  },
];

// todo: remove mock functionality
const stats = [
  { value: "5,000+", label: "Consultations" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "$2M+", label: "Saved by Users" },
  { value: "24/7", label: "Available" },
];

export default function WhyGrowithCP() {
  return (
    <PageLayout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient">CyberPunk AI</span>?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe everyone deserves access to honest, expert website guidance 
              without the confusing technical jargon or sales pressure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel-strong rounded-2xl p-8 mb-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <GlassCard>
              <h3 className="text-xl font-semibold mb-6">Our Promise to You</h3>
              <ul className="space-y-4">
                {[
                  "Honest, unbiased recommendations",
                  "Clear explanations without jargon",
                  "Fair pricing guidance based on real data",
                  "No hidden agendas or upselling",
                  "Free to use, forever",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard>
              <h3 className="text-xl font-semibold mb-6">Who We Help</h3>
              <ul className="space-y-4">
                {[
                  "Small business owners exploring online presence",
                  "Startups planning their first website",
                  "Non-profits needing digital presence",
                  "Entrepreneurs validating website costs",
                  "Anyone overwhelmed by tech decisions",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel-strong rounded-2xl p-8 text-center glow-maroon"
          >
            <h2 className="text-2xl font-bold mb-4">Experience the Difference</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Join thousands who've discovered what their business really needs online.
            </p>
            <Link href="/">
              <Button size="lg" className="gap-2" data-testid="button-try-now">
                Try It Now <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
