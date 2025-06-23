
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Heart, 
  Users, 
  MapPin, 
  Clock,
  Award,
  Leaf,
  MessageCircle
} from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fruit-green/10 via-fruit-yellow/10 to-fruit-orange/10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About FreshMix
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Born from a passion for healthy living and convenience, FreshMix is revolutionizing 
            how people enjoy fresh fruits in their daily lives.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  FreshMix started in 2024 when our founder realized how difficult it was 
                  to maintain a healthy diet in today's busy lifestyle. The idea was simple: 
                  make fresh, nutritious fruit consumption as convenient as ordering food online.
                </p>
                <p>
                  What began as a small operation serving a few neighborhoods has grown into 
                  a trusted name for fresh fruit delivery. We partner directly with local 
                  farmers and suppliers to ensure the highest quality seasonal fruits reach 
                  your doorstep every day.
                </p>
                <p>
                  Our mission is to make healthy eating accessible, convenient, and enjoyable 
                  for everyone while supporting local agriculture and sustainable practices.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-fruit-green/20 to-fruit-orange/20 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <Heart className="h-24 w-24 text-fruit-red mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Made with Love</h3>
                <p className="text-gray-600">Every fruit mix is prepared with care and attention to quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do, from sourcing to delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Leaf className="h-12 w-12 text-fruit-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  Eco-friendly packaging and supporting local farmers for a greener future
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-fruit-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
                <p className="text-gray-600">
                  Hand-picked seasonal fruits that meet our strict quality standards
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-fruit-yellow mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600">
                  Building relationships with customers and supporting local communities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sourcing Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fresh from Source to You
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work directly with trusted suppliers to bring you the freshest fruits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Sourcing Process</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-fruit-green flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Farm Partnerships</h4>
                    <p className="text-gray-600">Direct relationships with trusted local farmers and suppliers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-fruit-orange flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Daily Quality Checks</h4>
                    <p className="text-gray-600">Every batch is inspected for freshness, taste, and quality</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-fruit-yellow flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fresh Preparation</h4>
                    <p className="text-gray-600">Cut fresh every morning in our hygienic facility</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-fruit-red flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Safe Delivery</h4>
                    <p className="text-gray-600">Temperature-controlled delivery to maintain freshness</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-fruit-green/20 via-fruit-yellow/20 to-fruit-orange/20 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Seasonal Availability</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Spring:</span>
                  <span className="text-gray-600">Mango, Pineapple, Strawberry</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Summer:</span>
                  <span className="text-gray-600">Watermelon, Muskmelon, Grapes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Monsoon:</span>
                  <span className="text-gray-600">Pomegranate, Pear, Apple</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Winter:</span>
                  <span className="text-gray-600">Orange, Kiwi, Dragon Fruit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="h-16 w-16 text-fruit-green mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Service Area
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Currently serving the greater metropolitan area with plans to expand to more cities soon.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Clock className="h-8 w-8 text-fruit-green mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">Same-day delivery within city limits</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Users className="h-8 w-8 text-fruit-orange mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">500+ Customers</h3>
              <p className="text-gray-600 text-sm">Growing community of healthy eaters</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Award className="h-8 w-8 text-fruit-yellow mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">5-Star Rated</h3>
              <p className="text-gray-600 text-sm">Excellent customer satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 fruit-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <MessageCircle className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Have questions? Want to provide feedback? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-fruit-green hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              onClick={() => window.open('https://wa.me/YOUR_PHONE_NUMBER', '_blank')}
            >
              Chat on WhatsApp
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-fruit-green px-8 py-4 text-lg"
              onClick={() => window.open('tel:+919876543210')}
            >
              Call Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
