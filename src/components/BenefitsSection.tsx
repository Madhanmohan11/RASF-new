
import { Card, CardContent } from '@/components/ui/card';
import { 
  Truck, 
  Leaf, 
  Clock, 
  Star, 
  Heart,
  Shield
} from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Leaf className="h-6 w-6 sm:h-8 sm:w-8 text-fruit-green" />,
      title: 'Freshly Cut Daily',
      description: 'All fruits are cut fresh every morning to ensure maximum freshness and nutrition'
    },
    {
      icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-fruit-orange" />,
      title: 'Eco-Friendly Box',
      description: 'Sustainable packaging that keeps your fruits fresh while caring for the environment'
    },
    {
      icon: <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-fruit-yellow" />,
      title: 'Local Fast Delivery',
      description: 'Same-day delivery within the city. Order by 6 PM for next day morning delivery'
    },
    {
      icon: <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-fruit-red" />,
      title: 'Flexible Timing',
      description: 'Choose your preferred delivery slot: 8-10 AM or 5-7 PM'
    },
    {
      icon: <Star className="h-6 w-6 sm:h-8 sm:w-8 text-fruit-green" />,
      title: 'Premium Quality',
      description: 'Hand-picked seasonal fruits from trusted local farmers'
    },
    {
      icon: <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-fruit-orange" />,
      title: 'Health First',
      description: 'Rich in vitamins, antioxidants, and natural energy for your daily nutrition'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-fruit-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Rise & Shine Fruits?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            We're committed to delivering the freshest, highest quality fruit mixes right to your door
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-r from-fruit-green/10 to-fruit-orange/10 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
