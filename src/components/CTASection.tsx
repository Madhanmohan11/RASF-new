
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 sm:py-16 lg:py-20 fruit-gradient">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
          Ready to Get Your Fresh Fruit Mix?
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">
          Join hundreds of satisfied customers who enjoy fresh, healthy fruit mixes delivered daily
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto bg-white text-fruit-green hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
            onClick={() => navigate('/order')}
          >
            Place Your Order
          </Button>
          <Button 
            size="lg"
            className="w-full sm:w-auto bg-white text-fruit-green hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
            onClick={() => navigate('/about')}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
