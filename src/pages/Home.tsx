
import { useNavigate } from 'react-router-dom';
import { Hero } from '@/components/HeroSection';
// import PricingSection from '@/components/PricingSection';
import BenefitsSection from '@/components/BenefitsSection';
import CTASection from '@/components/CTASection';
import ThreeSimpleStep from '../components/ThreeSimpleStep';

const Home = () => {
  const navigate = useNavigate();

  const handleOrder = (size: string) => {
    navigate('/order', { state: { selectedSize: size } });
  };

  return (
    <div className="min-h-screen">
      <Hero />
      <ThreeSimpleStep />
      {/* <PricingSection onOrder={handleOrder} /> */}
      <BenefitsSection />
      <CTASection />
    </div>
  );
};

export default Home;
