import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SubscriptionPlan {
  title: string;
  period: string;
  originalPrice: number;
  discountedPrice: number;
  savings: string;
  isPopular?: boolean;
  features: string[];
  description: string;
  planKey: string;
}

const SubscriptionPricing = () => {
  const navigate = useNavigate();

  const plans: SubscriptionPlan[] = [
    {
      title: "Daily Fresh",
      period: "per day",
      originalPrice: 89,
      discountedPrice: 89,
      savings: "",
      description: "Perfect for trying our service",
      planKey: "daily",
      features: [
        "Fresh daily fruit mix",
        "Choose your preferred size",
        "Morning delivery",
        "Skip anytime"
      ]
    },
    {
      title: "Weekly Plan",
      period: "per week",
      originalPrice: 623,
      discountedPrice: 560,
      savings: "Save ₹63",
      isPopular: true,
      description: "Most popular choice for regular customers",
      planKey: "weekly",
      features: [
        "7 days of fresh fruit mixes",
        "10% discount",
        "Priority delivery",
        "Free delivery",
        "Flexible scheduling"
      ]
    },
    {
      title: "Monthly Plan",
      period: "per month",
      originalPrice: 2670,
      discountedPrice: 2225,
      savings: "Save ₹445",
      description: "Best value for committed healthy eaters",
      planKey: "monthly",
      features: [
        "30 days of fresh fruit mixes",
        "17% discount",
        "Premium priority delivery",
        "Free delivery",
        "Dedicated support",
        "Nutrition consultation"
      ]
    }
  ];

  const handlePlanSelect = (planKey: string) => {
    navigate(`/subscription-details?plan=${planKey}`);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-green-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
            Subscription Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Save more with our flexible subscription plans. Cancel anytime!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              plan.isPopular ? 'border-fruit-orange border-2 shadow-lg' : 'border-gray-200'
            }`}>
              {plan.isPopular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-fruit-orange text-white">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.title}</CardTitle>
                <p className="text-gray-600 text-sm">{plan.description}</p>
                
                <div className="mt-4">
                  {plan.savings && (
                    <div className="text-green-600 font-semibold text-sm mb-2">{plan.savings}</div>
                  )}
                  <div className="flex items-baseline justify-center gap-2">
                    {plan.originalPrice !== plan.discountedPrice && (
                      <span className="text-lg text-gray-400 line-through">₹{plan.originalPrice}</span>
                    )}
                    <span className="text-3xl font-bold text-fruit-green">₹{plan.discountedPrice}</span>
                    <span className="text-gray-600 text-sm">{plan.period}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="px-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-fruit-green flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-4">
                <Button 
                  onClick={() => handlePlanSelect(plan.planKey)}
                  className={`w-full font-semibold py-3 rounded-full transition-all duration-300 ${
                    plan.isPopular 
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg' 
                      : 'bg-fruit-green hover:bg-fruit-green/90 text-white'
                  }`}
                >
                  {plan.isPopular ? 'Choose This Plan' : 'Subscribe Now'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">All plans include:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-fruit-green" />
              100% Fresh Guarantee
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-fruit-green" />
              Cancel Anytime
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-fruit-green" />
              Money Back Guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPricing;
