
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Plus, Minus, ShoppingCart } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface OrderData {
  name: string;
  mobile: string;
  address: string;
  weight: string;
  mixType: string;
  quantity: number;
  deliveryDate: Date | undefined;
  timeSlot: string;
  deliveryMode: string;
  specialNotes: string;
}

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [orderData, setOrderData] = useState<OrderData>({
    name: '',
    mobile: '',
    address: '',
    weight: location.state?.selectedSize || '500g',
    mixType: 'regular',
    quantity: 1,
    deliveryDate: undefined,
    timeSlot: '',
    deliveryMode: 'one-time',
    specialNotes: ''
  });

  const weights = [
    { value: '250g', label: '250g - ₹69 (Regular) / ₹89 (Premium)' },
    { value: '500g', label: '500g - ₹119 (Regular) / ₹149 (Premium)' },
    { value: '750g', label: '750g - ₹159 (Regular) / ₹199 (Premium)' }
  ];

  const mixTypes = [
    { value: 'regular', label: 'Regular Mix', description: 'Seasonal fruits like apple, banana, orange, pomegranate' },
    { value: 'premium', label: 'Premium Mix', description: 'Exotic fruits like kiwi, dragon fruit, berries, mango' },
    { value: 'custom', label: 'Custom Mix', description: 'Tell us your preferences in special notes' }
  ];

  const timeSlots = [
    { value: '8-10', label: '8:00 AM - 10:00 AM' },
    { value: '5-7', label: '5:00 PM - 7:00 PM' }
  ];

  const getPricing = () => {
    const pricing: { [key: string]: { regular: number; premium: number } } = {
      '250g': { regular: 69, premium: 89 },
      '500g': { regular: 119, premium: 149 },
      '750g': { regular: 159, premium: 199 }
    };
    return pricing[orderData.weight] || pricing['500g'];
  };

  const calculateTotal = () => {
    const prices = getPricing();
    const basePrice = orderData.mixType === 'premium' ? prices.premium : prices.regular;
    return basePrice * orderData.quantity;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!orderData.name || !orderData.mobile || !orderData.address || !orderData.deliveryDate || !orderData.timeSlot) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    try {
      // In a real app, you would save to Firebase here
      console.log('Order submitted:', {
        ...orderData,
        total: calculateTotal(),
        timestamp: new Date().toISOString()
      });

      toast({
        title: "Opening WhatsApp!",
        description: "Please confirm and send the pre-filled message in WhatsApp.",
      });

      // Navigate to confirmation page
      navigate('/confirmation', { 
        state: { 
          orderData: {
            ...orderData,
            total: calculateTotal()
          }
        } 
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to place order. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-fruit-green/5 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Place Your Order
          </h1>
          <p className="text-lg text-gray-600">
            Fresh fruit mixes delivered to your doorstep
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Order Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={orderData.name}
                        onChange={(e) => setOrderData({ ...orderData, name: e.target.value })}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="mobile">Mobile Number *</Label>
                      <Input
                        id="mobile"
                        type="tel"
                        value={orderData.mobile}
                        onChange={(e) => setOrderData({ ...orderData, mobile: e.target.value })}
                        placeholder="+91 9876543210"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Delivery Address *</Label>
                    <Textarea
                      id="address"
                      value={orderData.address}
                      onChange={(e) => setOrderData({ ...orderData, address: e.target.value })}
                      placeholder="Enter your complete delivery address"
                      required
                    />
                  </div>

                  {/* Product Selection */}
                  <div>
                    <Label>Choose Weight *</Label>
                    <RadioGroup
                      value={orderData.weight}
                      onValueChange={(value) => setOrderData({ ...orderData, weight: value })}
                      className="mt-2"
                    >
                      {weights.map((weight) => (
                        <div key={weight.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={weight.value} id={weight.value} />
                          <Label htmlFor={weight.value} className="flex-1 cursor-pointer">
                            {weight.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div>
                    <Label>Select Mix Type *</Label>
                    <RadioGroup
                      value={orderData.mixType}
                      onValueChange={(value) => setOrderData({ ...orderData, mixType: value })}
                      className="mt-2"
                    >
                      {mixTypes.map((mix) => (
                        <div key={mix.value} className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value={mix.value} id={mix.value} />
                            <Label htmlFor={mix.value} className="cursor-pointer font-medium">
                              {mix.label}
                            </Label>
                          </div>
                          <p className="text-sm text-gray-500 ml-6">{mix.description}</p>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Quantity */}
                  <div>
                    <Label>Quantity</Label>
                    <div className="flex items-center space-x-3 mt-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setOrderData({ ...orderData, quantity: Math.max(1, orderData.quantity - 1) })}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="text-lg font-semibold w-12 text-center">{orderData.quantity}</span>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setOrderData({ ...orderData, quantity: orderData.quantity + 1 })}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Delivery Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Delivery Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !orderData.deliveryDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {orderData.deliveryDate ? format(orderData.deliveryDate, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={orderData.deliveryDate}
                            onSelect={(date) => setOrderData({ ...orderData, deliveryDate: date })}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <Label htmlFor="timeSlot">Time Slot *</Label>
                      <Select
                        value={orderData.timeSlot}
                        onValueChange={(value) => setOrderData({ ...orderData, timeSlot: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot.value} value={slot.value}>
                              {slot.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Delivery Mode */}
                  <div>
                    <Label>Delivery Mode</Label>
                    <RadioGroup
                      value={orderData.deliveryMode}
                      onValueChange={(value) => setOrderData({ ...orderData, deliveryMode: value })}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="one-time" id="one-time" />
                        <Label htmlFor="one-time">One-time Order</Label>
                      </div>
                      {/* <div className="flex items-center space-x-2">
                        <RadioGroupItem value="weekly" id="weekly" />
                        <Label htmlFor="weekly">Weekly Subscription (10% off)</Label>
                      </div> */}
                    </RadioGroup>
                  </div>

                  {/* Special Notes */}
                  <div>
                    <Label htmlFor="notes">Special Notes</Label>
                    <Textarea
                      id="notes"
                      value={orderData.specialNotes}
                      onChange={(e) => setOrderData({ ...orderData, specialNotes: e.target.value })}
                      placeholder="Any special requests or dietary preferences..."
                    />
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Size:</span>
                  <span className="font-semibold">{orderData.weight}</span>
                </div>
                <div className="flex justify-between">
                  <span>Mix Type:</span>
                  <span className="font-semibold capitalize">{orderData.mixType}</span>
                </div>
                <div className="flex justify-between">
                  <span>Quantity:</span>
                  <span className="font-semibold">{orderData.quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span>Price per unit:</span>
                  <span className="font-semibold">
                    ₹{orderData.mixType === 'premium' ? getPricing().premium : getPricing().regular}
                  </span>
                </div>
                {/* {orderData.deliveryMode === 'weekly' && (
                  <div className="flex justify-between text-green-600">
                    <span>Weekly Discount (10%):</span>
                    <span>-₹{Math.round(calculateTotal() * 0.1)}</span>
                  </div>
                )} */}
                <hr />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-fruit-green">
                    ₹{orderData.deliveryMode === 'weekly' ? Math.round(calculateTotal() * 0.9) : calculateTotal()}
                  </span>
                </div>
                
                <Button 
                  onClick={handleSubmit}
                  className="w-full bg-fruit-green hover:bg-fruit-green/90 text-white font-semibold py-3"
                >
                  Place Order
                </Button>
                
                <p className="text-sm text-gray-500 text-center">
                  You'll receive WhatsApp confirmation after placing the order
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
