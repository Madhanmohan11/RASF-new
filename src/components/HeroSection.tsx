import React from 'react';
import { Button } from '@/components/ui/button';
import { Truck, Heart, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-yellow-50 to-green-100 overflow-hidden pt-5 pb-16">  
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-green-200 rounded-full opacity-60 animate-bounce delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-yellow-200 rounded-full opacity-60 animate-bounce delay-500"></div>
      <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-pink-200 rounded-full opacity-40 animate-pulse delay-700"></div>
      <div className="absolute bottom-1/4 left-1/4 w-14 h-14 bg-purple-200 rounded-full opacity-50 animate-pulse delay-300"></div>

      {/* Floating fruit emojis */}
      <div className="absolute top-32 right-32 text-4xl animate-bounce delay-200">🍓</div>
      <div className="absolute bottom-40 left-20 text-3xl animate-bounce delay-700">🥭</div>
      <div className="absolute top-40 left-1/2 text-3xl animate-bounce delay-1000">🍊</div>
      <div className="absolute bottom-1/3 right-1/3 text-2xl animate-bounce delay-500">🍌</div>

      {/* Main content container - Removed px-6 to eliminate horizontal padding */}
      <div className="container mx-auto text-center relative z-10 animate-fade-in">
        <h1 className="text-3xl md:text-8xl font-bold mb-5 bg-gradient-to-r from-orange-600 via-yellow-500 to-green-600 bg-clip-text text-transparent leading-tight animate-scale-in">
          Rise & Shine Fruits
        </h1>

        <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-medium animate-fade-in delay-200">
          Fueling Your Healthy Day
        </p>

        <h2 className="text-1xl md:text-4xl font-bold text-gray-800 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-300">
          Skip the Prep, Savor the Freshness. Your Perfect Morning Starts Here.
        </h2>

        <p className="text-1xl text-gray-600 mb-9 max-w-2xl mx-auto animate-fade-in delay-400">
          Tired of rushing your breakfast? Get wholesome fruit mixes delivered daily.
          Fuel your day with fresh, perfectly prepared fruit – one delicious mix at a time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
          <Link to="/order">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 hover:shadow-2xl animate-pulse hover:animate-none"
            >
              <Heart className="h-5 w-5 mr-2 animate-bounce" />
              Order Your Fresh Mix Now!
            </Button>
          </Link>

          <Link to="/subscribe">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-green-500 text-green-700 hover:bg-green-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 hover:shadow-2xl"
            >
              <Truck className="h-5 w-5 mr-2" />
              Subscribe & Save Daily!
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center animate-fade-in delay-700">
          <div className="p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-orange-500 mb-2 animate-bounce">100%</div>
            <div className="text-gray-700 font-medium">Fresh & Natural</div>
          </div>
          <div className="p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-green-500 mb-2 animate-bounce delay-100">Daily</div>
            <div className="text-gray-700 font-medium">Morning Delivery</div>
          </div>
          <div className="p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-yellow-500 mb-2 animate-bounce delay-200">500+</div>
            <div className="text-gray-700 font-medium">Happy Customers</div>
          </div>
        </div>
      </div> {/* Closing tag for main content container */}

      {/* Scroll indicator - Moved outside the 'container' div but still inside 'section' */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center z-10 text-black animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs opacity-75">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-black/60 rounded-full flex justify-center relative">
            <div className="w-1 h-3 bg-black/80 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
