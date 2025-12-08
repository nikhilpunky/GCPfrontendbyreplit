import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import ContactForm from "@/components/ContactForm";
import GlassCard from "@/components/GlassCard";
import { Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@growithcp.live",
    description: "We'll respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Remote First",
    description: "We work with clients worldwide",
  },
  {
    icon: Clock,
    title: "Availability",
    content: "24/7 AI Support",
    description: "Human support Mon-Fri 9-5",
  },
];

export default function Contact() {
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
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message 
              and we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <GlassCard key={item.title} delay={index * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-foreground mb-1">{item.content}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel-strong rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-8 flex flex-col justify-center"
            >
              <h2 className="text-2xl font-bold mb-6">
                Prefer Instant Answers?
              </h2>
              <p className="text-muted-foreground mb-6">
                Our AI consultant is available 24/7 to answer your questions about 
                website needs, pricing, and recommendations. No waiting required!
              </p>
              <div className="glass-panel-strong rounded-xl p-6 glow-maroon-subtle">
                <h3 className="font-semibold mb-2">Quick Tips:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Describe your business type for better recommendations</li>
                  <li>Mention your target audience</li>
                  <li>Share your budget range if you have one</li>
                  <li>Ask about specific features you need</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
