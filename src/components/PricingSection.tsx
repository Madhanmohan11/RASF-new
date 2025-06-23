
import PricingCard from '@/components/PricingCard';

interface PricingSectionProps {
  onOrder: (size: string) => void;
}

const PricingSection = ({ onOrder }: PricingSectionProps) => {
  const pricingOptions = [
    {
      size: 'S',
      weight: '250g',
      regularPrice: 69,
      premiumPrice: 89,
      features: ['Perfect for 1 person', 'Fresh daily cut', 'Eco-friendly packaging', '2-3 fruit varieties']
    },
    {
      size: 'M',
      weight: '500g',
      regularPrice: 119,
      premiumPrice: 149,
      isPopular: true,
      features: ['Perfect for 2-3 people', 'Fresh daily cut', 'Eco-friendly packaging', '4-5 fruit varieties', 'Free delivery']
    },
    {
      size: 'L',
      weight: '750g',
      regularPrice: 159,
      premiumPrice: 199,
      features: ['Perfect for families', 'Fresh daily cut', 'Eco-friendly packaging', '5-6 fruit varieties', 'Free delivery', 'Priority support']
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Size
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Fresh, seasonal fruit mixes available in three convenient sizes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pricingOptions.map((option, index) => (
            <PricingCard
              key={index}
              {...option}
              onOrder={onOrder}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
