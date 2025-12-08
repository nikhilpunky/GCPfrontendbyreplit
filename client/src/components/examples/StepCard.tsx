import StepCard from '../StepCard';
import { MessageCircle } from 'lucide-react';

export default function StepCardExample() {
  return (
    <div className="max-w-sm">
      <StepCard
        step={1}
        title="Start a Conversation"
        description="Tell our AI about your business, goals, and vision for your website."
        icon={MessageCircle}
      />
    </div>
  );
}
