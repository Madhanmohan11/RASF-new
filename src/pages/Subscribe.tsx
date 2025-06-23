
import React from 'react';
import SubscriptionPricing from '@/components/SubscriptionPricing';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Truck, Shield, Clock } from 'lucide-react';

const Subscribe = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-orange-100 via-yellow-50 to-green-100 overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 bg-orange-200 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-20 right-16 w-12 h-12 bg-green-200 rounded-full opacity-40 animate-bounce delay-1000"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-yellow-500 to-green-600 bg-clip-text text-transparent">
            Subscribe & Save
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Never worry about breakfast again. Get fresh, delicious fruit mixes delivered daily with our flexible subscription plans.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">100% Fresh</h3>
                <p className="text-gray-600 text-sm">Daily fresh cut fruits, never frozen or preserved</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Free Delivery</h3>
                <p className="text-gray-600 text-sm">Complimentary delivery on weekly and monthly plans</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Flexible Plans</h3>
                <p className="text-gray-600 text-sm">Pause, skip, or cancel anytime without penalties</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Morning Delivery</h3>
                <p className="text-gray-600 text-sm">Fresh fruits delivered before 8 AM every day</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <SubscriptionPricing />
    </div>
  );
};

export default Subscribe;
