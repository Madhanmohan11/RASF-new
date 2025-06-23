import React from 'react';
import { Sunrise, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // IMPORTANT: This Footer component uses React Router's <Link> components.
    // It must be rendered within a <BrowserRouter> (or <HashRouter>, etc.)
    // in your application's root (e.g., App.js or index.js) for routing to work correctly.
    // Example:
    // import { BrowserRouter as Router } from 'react-router-dom';
    // ReactDOM.createRoot(document.getElementById('root')).render(
    //   <React.StrictMode>
    //     <Router>
    //       <App /> {/* Or whatever your main application component is */}
    //     </Router>
    //   </React.StrictMode>
    // );
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16 font-inter"> {/* Added Inter font class */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-200">
                <img
                  src="/public/logo/RASF_LOGO.png"
                  alt="Rise & Shine Fruits Logo"
                  className="h-23 w-20 rounded-lg object-contain" 
                />
              </Link>
              <div>
                <h3 className="text-2xl font-bold text-blue-200">Rise & Shine Fruits</h3> {/* Changed color-blue-200 to text-blue-200 */}
                <p className="text-orange-200 text-lg">Fueling Your Healthy Day</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Transforming Chennai's mornings with fresh, premium fruit mixes delivered right to your doorstep. 
              Healthy eating made effortless, one bowl at a time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-orange-500 hover:bg-orange-600 p-3 rounded-full cursor-pointer transition-colors flex items-center justify-center shadow-lg">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full cursor-pointer transition-colors flex items-center justify-center shadow-lg">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-sky-500 hover:bg-sky-600 p-3 rounded-full cursor-pointer transition-colors flex items-center justify-center shadow-lg">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-gray-300 hover:text-orange-200 transition-colors">Our Mixes</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-orange-200 transition-colors">How It Works</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-orange-200 transition-colors">Pricing Plans</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-orange-200 transition-colors">About Us</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-orange-200 transition-colors">Customer Stories</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-400" />
                <span className="text-gray-300">hello@riseshinefruit.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Fresh Street,<br />
                  T. Nagar, Chennai - 600017<br />
                  Tamil Nadu, India
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Service Areas */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h4 className="text-xl font-bold mb-4 text-center">Delivery Areas in Chennai</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            <span className="text-gray-300 hover:text-orange-200 cursor-pointer transition-colors">T. Nagar</span>
            <span className="text-gray-300 hover:text-orange-200 cursor-pointer transition-colors">Anna Nagar</span>
            <span className="text-gray-300 hover:text-orange-200 cursor-pointer transition-colors">Adyar</span>
            <span className="text-gray-300 hover:text-orange-200 cursor-pointer transition-colors">Velachery</span>
            <span className="text-gray-300 hover:text-orange-200 cursor-pointer transition-colors">OMR</span>
            <span className="text-gray-300 hover:text-orange-200 cursor-pointer transition-colors">Tambaram</span>
            <span className="text-gray-300 hover:text-orange-200 cursor-pointer transition-colors">Porur</span>
            <span className="text-gray-300 hover:text-orange-200 cursor-pointer transition-colors">Mylapore</span>
            <span className="text-gray-300 hover:text-orange-200 cursor-pointer transition-colors">Nungambakkam</span>
            <span className="text-gray-300 hover:text-orange-200 cursor-pointer transition-colors">Chromepet</span>
            <span className="text-gray-300 hover:text-orange-200 cursor-pointer transition-colors">Guindy</span>
            <span className="text-gray-300 hover:text-orange-200 cursor-pointer transition-colors">Besant Nagar</span>
          </div>
        </div>

        {/* Call to Action/Motto */}
        <div className="text-center mt-8 p-6 bg-gradient-to-r from-orange-900/30 to-yellow-900/30 rounded-xl">
          <p className="text-orange-200 font-medium mb-2">
            🌟 Freshness you can taste, convenience you'll love, only from Rise & Shine Fruits! 🌟
          </p>
          <p className="text-gray-300 text-sm">
            Don't compromise on your health – make every morning count with Rise & Shine Fruits!
          </p>
        </div>
        <br /> {/* Added br tag as per your original code's trailing br */}
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Rise & Shine Fruits. All rights reserved. | Made with ❤️ in Chennai
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-orange-200 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-orange-200 transition-colors">Terms of Service</Link>
              <Link to="/refund" className="text-gray-400 hover:text-orange-200 transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
