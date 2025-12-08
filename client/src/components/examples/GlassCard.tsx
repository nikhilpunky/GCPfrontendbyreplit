import GlassCard from '../GlassCard';
import { Sparkles } from 'lucide-react';

export default function GlassCardExample() {
  return (
    <GlassCard className="max-w-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold">Sample Card</h3>
      </div>
      <p className="text-muted-foreground">
        This is a glassmorphism card with smooth animations and hover effects.
      </p>
    </GlassCard>
  );
}
