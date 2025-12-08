import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  delay?: number;
  onSelect?: () => void;
}

export default function PricingCard({
  name,
  price,
  period = "/project",
  description,
  features,
  popular = false,
  delay = 0,
  onSelect,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "glass-panel rounded-xl p-6 flex flex-col h-full transition-all duration-300",
        popular && "glow-maroon border-primary/50"
      )}
      data-testid={`card-pricing-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex items-center justify-between gap-2 mb-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        {popular && (
          <Badge variant="default" className="text-xs">
            Popular
          </Badge>
        )}
      </div>

      <div className="mb-4">
        <span className="text-4xl font-bold text-gradient">{price}</span>
        <span className="text-muted-foreground">{period}</span>
      </div>

      <p className="text-muted-foreground mb-6">{description}</p>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={popular ? "default" : "secondary"}
        className="w-full"
        onClick={() => {
          console.log(`Selected ${name} plan`);
          onSelect?.();
        }}
        data-testid={`button-select-${name.toLowerCase().replace(/\s+/g, '-')}`}
      >
        Get Started
      </Button>
    </motion.div>
  );
}
