import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  delay?: number;
}

export default function GlassCard({ 
  children, 
  className, 
  glowOnHover = true,
  delay = 0 
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "glass-panel rounded-xl p-6 transition-all duration-300",
        glowOnHover && "hover:glow-maroon-subtle",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
