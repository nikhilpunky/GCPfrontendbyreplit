import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PricingCard from "@/components/PricingCard";
import GlassCard from "@/components/GlassCard";
import { HelpCircle } from "lucide-react";

// todo: remove mock functionality
const pricingPlans = [
  {
    name: "Starter",
    price: "$499",
    description: "Perfect for small businesses getting started online.",
    features: [
      "5-page responsive website",
      "Mobile-optimized design",
      "Basic SEO setup",
      "Contact form integration",
      "1 month of support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$1,499",
    description: "Ideal for growing businesses that need more features.",
    features: [
      "10-page responsive website",
      "Custom design elements",
      "Advanced SEO optimization",
      "Blog or news section",
      "Social media integration",
      "3 months of support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$3,999+",
    description: "For businesses requiring custom solutions.",
    features: [
      "Unlimited pages",
      "Custom functionality",
      "E-commerce capabilities",
      "Advanced integrations",
      "Priority support",
      "6 months of support",
    ],
    popular: false,
  },
];

const faqs = [
  {
    question: "Are these actual prices or estimates?",
    answer: "These are typical market ranges. Our AI helps you understand what's fair based on your specific needs.",
  },
  {
    question: "Do you build the websites?",
    answer: "We help you understand what you need. We can connect you with trusted developers or guide you to build it yourself.",
  },
  {
    question: "How accurate is the pricing guidance?",
    answer: "Our AI considers current market rates and your specific requirements to provide realistic pricing expectations.",
  },
];

export default function Pricing() {
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
              <span className="text-gradient">Transparent</span> Pricing Guide
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understand typical website costs so you can make informed decisions. 
              These ranges help you know what to expect.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.name}
                {...plan}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {faqs.map((faq, index) => (
                <GlassCard key={index} delay={index * 0.1}>
                  <div className="flex items-start gap-3 mb-3">
                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold">{faq.question}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm pl-8">{faq.answer}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel-strong rounded-2xl p-8 text-center glow-maroon-subtle"
          >
            <h2 className="text-2xl font-bold mb-4">Need a Custom Quote?</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Use our AI consultant to get personalized pricing based on your specific business needs.
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
