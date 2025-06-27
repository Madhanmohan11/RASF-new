import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Hero = () => {
  const fruitBoxes = [
    {
      size: "250g",
      price: "₹1,008",
      image: "https://image.made-in-china.com/202f0j00zBOhwVPKQyci/Wholesale-Disposable-Food-Grade-Fresh-Fruit-Plastic-Packaging-Cut-Box-for-Supermarket.webp",
      description: "Perfect for individuals",
      features: ["Apples", "Bananas", "Oranges", "Grapes"],
      color: "green",
    },
    {
      size: "500g",
      price: "₹1,848",
      image: "https://image.made-in-china.com/2f0j00zvFVJeIHyNkl/Wholesale-Disposable-Food-Grade-Fresh-Fruit-Plastic-Packaging-Cut-Box-for-Supermarket.webp",
      description: "Ideal for couples",
      features: ["Mixed Berries", "Kiwi", "Mango", "Pineapple"],
      color: "orange",
    },
    {
      size: "750g",
      price: "₹2,688",
      image: "https://res.cloudinary.com/dxozetwzm/image/upload/v1751010747/750g_rheolh.png",
      description: "Great for families",
      features: ["Seasonal Fruits", "Exotic Mix", "Tropical Blend", "Premium Selection"],
      color: "purple",
    },
  ];

  return (
    <section className="pt-24 pb-16 px-4 relative overflow-hidden bg-gray-600 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-300 text-sm">Trusted by 2000+ customers</span>
            </div>

            {/* Brand Name Styled Like Logo */}
            <div className="text-center">
  <h1 className="text-5xl lg:text-6xl font-bold mb-3 leading-tight">
    <span className="text-[#0A2148] drop-shadow-[0_1px_1px_white]">Rise</span>
    <span className="text-[#FFA726]"> & </span>
    <span className="text-[#0A2148] drop-shadow-[0_1px_1px_white]">Shine</span>
  </h1>

  <h2 className="text-2xl lg:text-3xl font-bold text-[#FFA726] mb-1 tracking-wide uppercase">
    Fruits
  </h2>

  <p className="text-lg text-[#0A2148] mb-9 max-w-2xl mx-auto tracking-wide">
    Fueling Your Healthy Day
  </p>
</div>


            {/* Description */}
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-200 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Skip the Prep, Savor the Freshness. Your Perfect Morning Starts Here.
            </h3>
            <p className="text-lg text-gray-400 mb-9 max-w-2xl mx-auto lg:mx-0">
              Tired of rushing your breakfast? Get wholesome fruit mixes delivered daily.
              Fuel your day with fresh, perfectly prepared fruit – one delicious mix at a time.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* <Link
                to="/order"
                className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-lg font-semibold shadow-lg hover:shadow-xl"
              >
                Order Your Fresh Mix Now!
                <ArrowRight className="h-5 w-5 " />
              </Link> */}

              <Link
                to="/subscribe"
                className="border-2 border-green-500 text-green-400 px-8 py-4 rounded-xl hover:bg-green-900/30 transition-all flex items-center justify-center gap-2 text-lg font-semibold"
              >
                Subscribe & Save Daily!
              </Link>
            </div>
          </div>

          {/* Right Images with Carousel */}
          <div className="flex-1 relative">
            <Carousel className="w-full max-w-lg mx-auto">
              <CarouselContent>
                {fruitBoxes.map((box, index) => (
                  <CarouselItem key={index}>
                    <div className="relative group">
                      <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                        <img
                          src={box.image}
                          alt={`${box.size} fruit mix`}
                          className="w-full h-full object-cover"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-t from-${box.color}-900/40 to-transparent`}
                        ></div>

                        {/* Overlay Content */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-2xl font-bold mb-2">{box.size} Box</h3>
                            <p className="text-lg opacity-90 mb-2">{box.description}</p>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {box.features.map((feature, idx) => (
                                <span key={idx} className="bg-white/20 px-2 py-1 rounded-full text-xs">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Price Badge */}
                      <div
                        className={`absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-${box.color}-100 transform -rotate-12 group-hover:rotate-0 transition-transform duration-300`}
                      >
                        <div className="text-center">
                          <div className={`text-xl font-bold text-${box.color}-600`}>{box.size}</div>
                          <div className="text-sm text-gray-600">{box.price}</div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 text-black" />
              <CarouselNext className="right-4 text-black" />
            </Carousel>

            {/* Floating Badge */}
            <div className="absolute top-4 left-4 bg-white p-4 rounded-xl shadow-lg border border-green-100 animate-pulse">
              <div className="text-center">
                <div className="text-xl font-bold text-green-600">Fresh</div>
                <div className="text-sm text-gray-600">Daily Prepared</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
