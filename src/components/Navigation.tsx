import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '/public/logo/RASF_LOGO.png'; 

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    // Added backdrop-filter, backdrop-blur-lg, bg-white/30, and removed shadow-sm
    <nav className="sticky top-0 z-50 bg-white/30 backdrop-filter backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
           
            <img
              src={logo}
              alt="Fresh Morning Mix Logo"
              className="h-23 w-20"  
            />
            {/* <div>
              <h1 className="text-xl font-bold text-gray-900">Rise & Shine Fruits</h1>
              <p className="text-xs text-gray-700 ">Fueling Your Healthy Day</p>  
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-fruit-green' : 'text-gray-800 hover:text-fruit-green' // Adjusted text color
              }`}
            >
              Home
            </Link>
            <Link 
              to="/order" 
              className={`text-sm font-medium transition-colors ${
                isActive('/order') ? 'text-fruit-green' : 'text-gray-800 hover:text-fruit-green' // Adjusted text color
              }`}
            >
              Order Now
            </Link>
            <Link 
              to="/subscribe" 
              className={`text-sm font-medium transition-colors ${
                isActive('/subscribe') ? 'text-fruit-green' : 'text-gray-800 hover:text-fruit-green' // Adjusted text color
              }`}
            >
              Subscribe
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-fruit-green' : 'text-gray-800 hover:text-fruit-green' // Adjusted text color
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-fruit-green' : 'text-gray-800 hover:text-fruit-green' // Adjusted text color
              }`}
            >
              Contact
            </Link>
            <Link 
              to="/admin" 
              className={`text-sm font-medium transition-colors ${
                isActive('/admin') ? 'text-fruit-green' : 'text-gray-800 hover:text-fruit-green'  
              }`}
            >
              Admin
            </Link>
            <Button 
              asChild
              className="bg-fruit-green hover:bg-fruit-green/90"
            >
              <a 
                href="https://wa.me/8680996316" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Phone className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-fruit-green"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Added glass effect to the mobile menu background as well */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 bg-white/60 backdrop-filter backdrop-blur-md rounded-b-lg mt-2 p-4"> 
            <Link 
              to="/" 
              className={`block text-sm font-medium transition-colors ${
                isActive('/') ? 'text-fruit-green' : 'text-gray-800' 
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/order" 
              className={`block text-sm font-medium transition-colors ${
                isActive('/order') ? 'text-fruit-green' : 'text-gray-800' // Adjusted text color
              }`}
              onClick={() => setIsOpen(false)}
            >
              Order Now
            </Link>
            <Link 
              to="/subscribe" 
              className={`block text-sm font-medium transition-colors ${
                isActive('/subscribe') ? 'text-fruit-green' : 'text-gray-800' // Adjusted text color
              }`}
              onClick={() => setIsOpen(false)}
            >
              Subscribe
            </Link>
            <Link 
              to="/about" 
              className={`block text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-fruit-green' : 'text-gray-800' // Adjusted text color
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`block text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-fruit-green' : 'text-gray-800' // Adjusted text color
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/admin" 
              className={`block text-sm font-medium transition-colors ${
                isActive('/admin') ? 'text-fruit-green' : 'text-gray-800' // Adjusted text color
              }`}
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
            <a 
              href="https://wa.me/8680996316" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-fruit-green"
            >
              <Phone className="h-4 w-4 mr-2" />
              WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;