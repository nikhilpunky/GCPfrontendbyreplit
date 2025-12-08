import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import StepCard from "@/components/StepCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  MessageCircle, 
  ClipboardList, 
  DollarSign, 
  Rocket,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Start a Conversation",
    description: "Tell our AI about your business, goals, and vision for your website. No technical knowledge required.",
    icon: MessageCircle,
  },
  {
    step: 2,
    title: "Get Recommendations",
    description: "Our AI analyzes your needs and provides personalized website type recommendations.",
    icon: ClipboardList,
  },
  {
    step: 3,
    title: "Understand Pricing",
    description: "Receive transparent pricing guidance based on your specific requirements.",
    icon: DollarSign,
  },
  {
    step: 4,
    title: "Launch Your Project",
    description: "Armed with knowledge, connect with trusted developers or start building yourself.",
    icon: Rocket,
  },
];

export default function HowItWorks() {
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
              How <span className="text-gradient">GrowithCP</span> Works
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to understand your website needs and get fair pricing guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {steps.map((step, index) => (
              <StepCard
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
                icon={step.icon}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel-strong rounded-2xl p-8 text-center glow-maroon"
          >
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Start your free consultation now and discover what kind of website your business really needs.
            </p>
            <Link href="/">
              <Button size="lg" className="gap-2" data-testid="button-start-consultation">
                Start Free Consultation <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
