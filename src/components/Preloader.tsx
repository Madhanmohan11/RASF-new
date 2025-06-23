import React from "react";
import { Loader } from "lucide-react";

/**
 * @param {object} props  
 * @param {boolean} props.isLoading  
 */
const Preloader = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-700 ease-in-out">
      <div className="relative text-center z-20 p-8">
        <img
          src="/logo/RASF_LOGO.png"
          alt="Rise & Shine Fruit Logo"
          className="w-64 md:w-80 h-auto mx-auto mb-4 animate-pulse-subtle object-contain"
        />

        {/* Warm welcoming message with improved text shadow for clarity */}
        <p
          className="text-black text-1xl md:text-2xl font-semibold mb-6 tracking-wide"
          style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.6)" }}
        >
          Welcome to your daily dose of freshness!
        </p>

        {/* Loading text with a subtle fade-in-out animation and enhanced text styling */}
        <p
          className="text-blue text-1xl md:text-3xl font-bold animate-fade-in-out mb-4 tracking-wide"
          style={{ textShadow: "1px 1px 4px rgba(154, 191, 226, 0.6)" }}
        >
          Loading your fresh morning...
        </p>

        <Loader className="h-10 w-10 text-green-600 mx-auto animate-spin" />
      </div>
    </div>
  );
};

export default Preloader;
