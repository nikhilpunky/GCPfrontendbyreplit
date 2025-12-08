import PricingCard from '../PricingCard';

export default function PricingCardExample() {
  return (
    <div className="max-w-sm">
      <PricingCard
        name="Starter"
        price="$499"
        description="Perfect for small businesses getting started online."
        features={[
          "5-page responsive website",
          "Mobile-optimized design",
          "Basic SEO setup",
          "Contact form",
          "1 month support"
        ]}
        popular
      />
    </div>
  );
}
