import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const topProducts = [
  {
    id: 1,
    name: "Purina ONE +Plus Vibrant Maturity Adult 7+ Formula",
    brand: "PURINA",
    image: "/2.jpeg",
    price: 6886,
    originalPrice: null,
    weight: "16.5 lbs (approx. 7.5 kg)"
  },
  {
    id: 2,
    name: "Pedigree Puppy Dry Dog Food – Meat & Milk",
    brand: "PEDIGREE",
    image: "/3.jpeg",
    price: 3605,
    originalPrice: null,
    weight: "20 kg"
  },
  {
    id: 3,
    name: "Meat Up 100% Vegetarian Adult Dry Dog Food",
    brand: "MEAT UP",
    image: "/4.jpeg",
    price: 718,
    originalPrice: null,
    weight: "3 kg"
  },
  {
    id: 4,
    name: "Kennel Kitchen Chicken Chunks in Gravy Wet Dog Food",
    brand: "KENNEL KITCHEN",
    image: "/image copy copy copy copy copy copy.png",
    price: 45,
    originalPrice: null,
    weight: "100 g"
  },
  {
    id: 5,
    name: "Royal Canin Medium Adult Dog Food",
    brand: "ROYAL CANIN",
    image: "https://m.media-amazon.com/images/I/71VHFGvRHJL._AC_SL1500_.jpg",
    price: 2848,
    originalPrice: 3200,
    weight: "10 kg"
  },
  {
    id: 6,
    name: "Pedigree Adult Dry Dog Food Chicken & Vegetables",
    brand: "PEDIGREE",
    image: "https://m.media-amazon.com/images/I/71s7NZtDVlL._AC_SL1500_.jpg",
    price: 1653,
    originalPrice: 1900,
    weight: "10 kg"
  },
  {
    id: 7,
    name: "Whiskas Adult Cat Food Ocean Fish",
    brand: "WHISKAS",
    image: "https://m.media-amazon.com/images/I/81ZC2vJLCfL._AC_SL1500_.jpg",
    price: 765,
    originalPrice: 850,
    weight: "3 kg"
  },
  {
    id: 8,
    name: "Drools Chicken & Egg Adult Dog Food",
    brand: "DROOLS",
    image: "https://m.media-amazon.com/images/I/71kLfT8CSXL._AC_SL1500_.jpg",
    price: 1899,
    originalPrice: 2150,
    weight: "10 kg"
  },
  {
    id: 9,
    name: "Purina Pro Plan Adult Dog Food",
    brand: "PURINA",
    image: "https://m.media-amazon.com/images/I/81RCvGnMEpL._AC_SL1500_.jpg",
    price: 3250,
    originalPrice: 3600,
    weight: "14 kg"
  },
  {
    id: 10,
    name: "Sheba Premium Wet Cat Food Variety Pack",
    brand: "SHEBA",
    image: "https://m.media-amazon.com/images/I/71hNxLT4pxL._AC_SL1500_.jpg",
    price: 202,
    originalPrice: 238,
    weight: "12 × 85g"
  }
];

export function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % topProducts.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % topProducts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + topProducts.length) % topProducts.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  return (
    <div
      className="py-16 bg-gray-50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Top selling products carousel"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-3 text-gray-900">
          Top Selling Products 🔥
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          Discover What Best Sellers Your Pet Would Adore 😍😍
        </p>

        <div className="relative max-w-7xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 via-gray-50/50 to-transparent z-10 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 via-gray-50/50 to-transparent z-10 pointer-events-none"
              aria-hidden="true"
            />

            <div className="overflow-hidden px-4">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 25}%)`
                }}
              >
                {topProducts.map((product, index) => {
                  const distance = Math.abs(index - currentIndex);
                  const isCenterOrNear = distance <= 1;
                  const opacity = isCenterOrNear ? 1 : 0.6;
                  const scale = distance === 0 ? 1.05 : distance === 1 ? 1 : 0.95;

                  return (
                    <div
                      key={product.id}
                      className="flex-shrink-0 px-3 transition-all duration-700"
                      style={{
                        width: '25%',
                        minWidth: '300px',
                        opacity,
                        transform: `scale(${scale})`
                      }}
                    >
                      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 border border-gray-200 transition-all duration-300 hover:border-blue-200 h-full flex flex-col">
                        <span className="inline-block bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-4 self-start">
                          Now
                        </span>

                        <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden bg-gray-50">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain p-4"
                            loading="lazy"
                          />
                        </div>

                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-semibold">
                          {product.brand}
                        </p>
                        <h3 className="font-bold text-gray-900 mb-2 text-lg h-14 line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">{product.weight}</p>

                        <div className="flex items-baseline gap-3 mb-6 mt-auto">
                          <span className="text-3xl font-bold text-blue-600">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                          {product.originalPrice && (
                            <span className="text-gray-400 line-through text-lg">
                              ₹{product.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>

                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-colors shadow-md">
                          Order Now
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 z-20 border border-gray-200 hover:scale-110"
            aria-label="Previous products"
            tabIndex={0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 z-20 border border-gray-200 hover:scale-110"
            aria-label="Next products"
            tabIndex={0}
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-10" role="tablist" aria-label="Carousel navigation">
          {topProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-10 bg-blue-600 shadow-md'
                  : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to product ${index + 1}`}
              aria-current={index === currentIndex}
              role="tab"
              tabIndex={0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
