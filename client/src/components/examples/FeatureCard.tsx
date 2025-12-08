import FeatureCard from '../FeatureCard';
import { Zap } from 'lucide-react';

export default function FeatureCardExample() {
  return (
    <div className="max-w-sm">
      <FeatureCard
        title="Lightning Fast"
        description="Get instant recommendations without waiting for consultations."
        icon={Zap}
      />
    </div>
  );
}
