
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, MessageCircle, Home, ShoppingBag } from 'lucide-react';
import { format } from 'date-fns';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const orderData = location.state?.orderData;

  if (!orderData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="max-w-md">
          <CardContent className="text-center p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Order Found</h2>
            <p className="text-gray-600 mb-6">It seems like you haven't placed an order yet.</p>
            <Button onClick={() => navigate('/order')}>Place an Order</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getOrderId = () => {
    return `FM${Date.now().toString().slice(-6)}`;
  };

  const getTimeSlotText = (slot: string) => {
    return slot === '8-10' ? '8:00 AM - 10:00 AM' : '5:00 PM - 7:00 PM';
  };

  const whatsappMessage = `Hi! I've placed an order on Rise & Shine Fruits.

Order ID: ${getOrderId()}
Name: ${orderData.name}
Size: ${orderData.weight}
Mix Type: ${orderData.mixType}
Quantity: ${orderData.quantity}
Delivery Date: ${orderData.deliveryDate ? format(new Date(orderData.deliveryDate), 'PPP') : 'Not selected'}
Time Slot: ${getTimeSlotText(orderData.timeSlot)}
Delivery Mode: ${orderData.deliveryMode}
Total: ₹${orderData.total}

Address: ${orderData.address}

${orderData.specialNotes ? `Special Notes: ${orderData.specialNotes}` : ''}

Please confirm my order. Thank you!`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-fruit-green/10 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          Almost There! Confirm Your Order
          </h1>
          <p className="text-lg text-gray-600">
         Thanks for choosing Rise & Shine Fruits! To confirm your order, simply click the <b>"Confirm Your Order via WhatsApp"</b>  button. Your order isn't final until you do!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Order Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">Order ID</p>
                <p className="font-mono font-semibold text-lg">{getOrderId()}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Customer Name</p>
                  <p className="font-semibold">{orderData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Mobile Number</p>
                  <p className="font-semibold">{orderData.mobile}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500">Delivery Address</p>
                <p className="font-semibold">{orderData.address}</p>
              </div>

              <hr />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Size</p>
                  <p className="font-semibold">{orderData.weight}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Mix Type</p>
                  <p className="font-semibold capitalize">{orderData.mixType}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Quantity</p>
                  <p className="font-semibold">{orderData.quantity}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Delivery Mode</p>
                  <p className="font-semibold capitalize">{orderData.deliveryMode.replace('-', ' ')}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Delivery Date</p>
                  <p className="font-semibold">
                    {orderData.deliveryDate ? format(new Date(orderData.deliveryDate), 'PPP') : 'Not selected'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Time Slot</p>
                  <p className="font-semibold">{getTimeSlotText(orderData.timeSlot)}</p>
                </div>
              </div>

              {orderData.specialNotes && (
                <div>
                  <p className="text-sm text-gray-500">Special Notes</p>
                  <p className="font-semibold">{orderData.specialNotes}</p>
                </div>
              )}

              <hr />

              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total Amount:</span>
                <span className="text-2xl font-bold text-fruit-green">₹{orderData.total}</span>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>What's Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-fruit-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">WhatsApp Confirmation</h4>
                    <p className="text-sm text-gray-600">
                      We'll send you a WhatsApp message to confirm your order details
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-fruit-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Fresh Preparation</h4>
                    <p className="text-sm text-gray-600">
                      Your fruits will be freshly cut on the delivery morning
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-fruit-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Delivery</h4>
                    <p className="text-sm text-gray-600">
                      Fresh fruit mix delivered to your doorstep at your chosen time
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

           <Card className="border-green-200 bg-green-50">
            <CardContent className="p-6 text-center">
              <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                The above are your order summary details.
              </h3>
              <p className="text-green-700 text-sm mb-4">
                Chat with us on WhatsApp for any modifications to your order.
              </p>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() =>
                  window.open(
                    `https://wa.me/8680996316?text=${encodeURIComponent(whatsappMessage)}`,
                    '_blank'
                  )
                }
              >
                Confirm Your Order via WhatsApp
              </Button>
            </CardContent>
          </Card>


            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => navigate('/')}
              >
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
              <Button
                className="flex-1 bg-fruit-green hover:bg-fruit-green/90"
                onClick={() => navigate('/order')}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Order Again
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
