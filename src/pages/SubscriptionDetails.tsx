import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, MapPin, Package, CreditCard } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const SubscriptionDetails = () => {
  const [searchParams] = useSearchParams();

  const planType = searchParams.get('plan') || 'weekly';
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    instructions: ''
  });

  const planDetails = {
    daily: {
      title: "Daily Fresh",
      price: 89,
      originalPrice: 89,
      period: "per day",
      savings: "",
      description: "Perfect for trying our service",
      features: [
        "Fresh daily fruit mix",
        "Choose your preferred size",
        "Morning delivery",
        "Skip anytime"
      ]
    },
    weekly: {
      title: "Weekly Plan",
      price: 560,
      originalPrice: 623,
      period: "per week",
      savings: "Save ₹63",
      description: "Most popular choice for regular customers",
      features: [
        "7 days of fresh fruit mixes",
        "10% discount",
        "Priority delivery",
        "Free delivery",
        "Flexible scheduling"
      ]
    },
    monthly: {
      title: "Monthly Plan",
      price: 2225,
      originalPrice: 2670,
      period: "per month",
      savings: "Save ₹445",
      description: "Best value for committed healthy eaters",
      features: [
        "30 days of fresh fruit mixes",
        "17% discount",
        "Premium priority delivery",
        "Free delivery",
        "Dedicated support",
        "Nutrition consultation"
      ]
    }
  };

  const selectedPlan = planDetails[planType as keyof typeof planDetails];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubscribe = () => {
    const requiredFields = ["fullName", "email", "phone", "address", "city", "state", "pincode"];

    const isFormComplete = requiredFields.every((field) => formData[field as keyof typeof formData].trim() !== "");

    if (!isFormComplete) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please fill all required fields before subscribing."
      });
      return;
    }

    const message = `Hello, I would like to subscribe to the ${selectedPlan.title} (₹${selectedPlan.price} ${selectedPlan.period}).\n\nCustomer Details:\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nAddress: ${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}\nInstructions: ${formData.instructions || 'N/A'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/918680996316?text=${encodedMessage}`;  

    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50 pt-32 pb-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
            Complete Your Subscription
          </h1>
          <p className="text-xl text-gray-600">
            Just a few more details and you're all set!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Package Details */}
          <Card className="border-2 border-fruit-orange shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl text-gray-900">{selectedPlan.title}</CardTitle>
                {selectedPlan.savings && (
                  <Badge className="bg-green-500 text-white">{selectedPlan.savings}</Badge>
                )}
              </div>
              <p className="text-gray-600">{selectedPlan.description}</p>
            </CardHeader>

            <CardContent>
              <div className="mb-6">
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  {selectedPlan.originalPrice !== selectedPlan.price && (
                    <span className="text-lg text-gray-400 line-through">₹{selectedPlan.originalPrice}</span>
                  )}
                  <span className="text-3xl font-bold text-fruit-green">₹{selectedPlan.price}</span>
                  <span className="text-gray-600">{selectedPlan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Package className="h-5 w-5 text-fruit-orange" />
                  <span className="font-medium text-gray-900">Package Includes:</span>
                </div>
                <ul className="space-y-2 ml-8">
                  {selectedPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-fruit-green flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Delivery Schedule:</h4>
                <p className="text-sm text-gray-600">
                  {planType === 'daily' && "Every day between 6:00 AM - 8:00 AM"}
                  {planType === 'weekly' && "Mon, Wed, Fri & Sun between 6:00 AM - 8:00 AM"}
                  {planType === 'monthly' && "Daily for 30 days between 6:00 AM - 8:00 AM"}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Address Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-fruit-green" />
                <span>Delivery Details</span>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <Input name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <Input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <Input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 9876543210" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Complete Address *</label>
                <Textarea name="address" value={formData.address} onChange={handleInputChange} placeholder="House/Flat No, Building Name, Street Name" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                  <Input name="city" value={formData.city} onChange={handleInputChange} placeholder="City" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                  <Input name="state" value={formData.state} onChange={handleInputChange} placeholder="State" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">PIN Code *</label>
                  <Input name="pincode" value={formData.pincode} onChange={handleInputChange} placeholder="123456" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Instructions (Optional)</label>
                <Textarea name="instructions" value={formData.instructions} onChange={handleInputChange} placeholder="Any special instructions for delivery..." />
              </div>

              <div className="pt-4 border-t">
                <Button onClick={handleSubscribe} className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                  <CreditCard className="h-5 w-5" />
                  Subscribe Now - ₹{selectedPlan.price} {selectedPlan.period}
                </Button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  You can cancel or modify your subscription anytime
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionDetails;
