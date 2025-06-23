
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

interface PricingCardProps {
  size: string;
  weight: string;
  regularPrice: number;
  premiumPrice: number;
  isPopular?: boolean;
  features: string[];
  onOrder: (size: string) => void;
}

const PricingCard = ({ 
  size, 
  weight, 
  regularPrice, 
  premiumPrice, 
  isPopular, 
  features,
  onOrder 
}: PricingCardProps) => {
  return (
    <Card className={`relative transition-all duration-300 hover:scale-105 hover:shadow-xl ${
      isPopular ? 'border-fruit-orange border-2 shadow-lg' : 'border-gray-200'
    }`}>
      {isPopular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-fruit-orange text-white">
          Most Popular
        </Badge>
      )}
      
      <CardHeader className="text-center pb-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-fruit-green to-fruit-orange flex items-center justify-center mb-4">
          <span className="text-2xl font-bold text-white">{size}</span>
        </div>
        <CardTitle className="text-2xl font-bold text-gray-900">{weight}</CardTitle>
        <div className="space-y-1">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-sm text-gray-500">Regular:</span>
            <span className="text-lg font-semibold text-fruit-green">₹{regularPrice}</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-sm text-gray-500">Premium:</span>
            <span className="text-lg font-semibold text-fruit-orange">₹{premiumPrice}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-6">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-fruit-green flex-shrink-0" />
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="pt-4">
        <Button 
          className="w-full bg-fruit-green hover:bg-fruit-green/90 text-white font-semibold py-2"
          onClick={() => onOrder(weight)}
        >
          Order {weight}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
