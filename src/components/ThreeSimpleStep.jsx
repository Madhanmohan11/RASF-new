import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ChefHat, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: "Choose Your Mix & Plan",
      description: "Browse our vibrant menu of signature fruit mixes or create your custom blend. Select your preferred portion size and delivery frequency – daily, weekly, or monthly.",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      icon: ChefHat,
      title: "We Prepare with Care",
      description: "Our expert team meticulously washes, cuts, and mixes your fruits overnight, ensuring peak freshness and hygiene in our sanitized kitchen.",
      iconColor: "text-green-600",
      borderColor: "border-green-200"
    },
    {
      icon: Truck,
      title: "Delivered by Morning",
      description: "Enjoy a hassle-free morning! Your chilled, perfectly portioned fruit mix arrives fresh and ready to eat before you start your day.",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50 font-inter">
      <div className="container mx-auto px-5 md:px-6">  
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 animate-fade-in-down">  
            Your Fresh Morning, In 3 Simple Steps
          </h2>
          <p className="text-lg sm:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"> 
            From selection to delivery, we've made healthy eating effortless. 
            Here's how Rise & Shine Fruit brings freshness to your doorstep.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-start">
          {/* Connecting line for desktop, hidden on mobile */}
          <div className="hidden md:block absolute top-[90px] left-[calc(1/6*100%)] w-[calc(2/3*100%)] h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-orange-200 z-0"></div>
          
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card 
                key={index} 
                // Added 'group' class to the Card for group-hover effects
                className="group relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 bg-white rounded-xl overflow-hidden z-10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15 + 0.2}s` }}
              >
                {/* Step number moved to be a direct child of Card and positioned at top-right */}
                <div 
                  className="absolute top-4 right-4 bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg shadow-md border-2 border-gray-100
                             transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" // Hover animation for the number
                >
                  {index + 1}
                </div>

                <CardContent className="p-8 text-center flex flex-col items-center h-full">
                  <div className="relative mb-6">
                    {/* Icon circle - now only contains the icon, number moved out */}
                    <div 
                      className={`bg-white p-6 rounded-full inline-block shadow-lg border-2 ${step.borderColor} flex items-center justify-center
                                 transition-transform duration-300 group-hover:scale-105`}  
                    >
                      <IconComponent className={`h-12 w-12 ${step.iconColor}`} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed flex-grow">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto animate-fade-in">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Ready to Transform Your Mornings?
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              Join hundreds of satisfied customers who start their day the Rise & Shine way!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
              <Link to="/journey">
                <Button className="bg-green-100 text-green-700 border border-green-500 hover:bg-green-200 font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full transform hover:scale-105 transition-all duration-200 shadow-md">
                  Start My Journey
                </Button>
              </Link>
              <Link to="/learn-more">
                <Button className="bg-orange-100 text-orange-700 border border-orange-500 hover:bg-orange-200 font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full transform hover:scale-105 transition-all duration-200 shadow-md">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
