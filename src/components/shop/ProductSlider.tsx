import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const topProducts = [
  {
    id: 1,
    name: "Royal Canin Medium Adult Dog Food",
    brand: "Royal Canin",
    image: "https://m.media-amazon.com/images/I/71VHFGvRHJL._AC_SL1500_.jpg",
    price: 2848,
    originalPrice: 3200,
    weight: "10 kg"
  },
  {
    id: 2,
    name: "Pedigree Adult Dry Dog Food Chicken & Vegetables",
    brand: "Pedigree",
    image: "https://m.media-amazon.com/images/I/71s7NZtDVlL._AC_SL1500_.jpg",
    price: 1653,
    originalPrice: 1900,
    weight: "10 kg"
  },
  {
    id: 3,
    name: "Whiskas Adult Cat Food Ocean Fish",
    brand: "Whiskas",
    image: "https://m.media-amazon.com/images/I/81ZC2vJLCfL._AC_SL1500_.jpg",
    price: 765,
    originalPrice: 850,
    weight: "3 kg"
  },
  {
    id: 4,
    name: "Drools Chicken & Egg Adult Dog Food",
    brand: "Drools",
    image: "https://m.media-amazon.com/images/I/71kLfT8CSXL._AC_SL1500_.jpg",
    price: 1899,
    originalPrice: 2150,
    weight: "10 kg"
  },
  {
    id: 5,
    name: "Choostix Dog Treats Chicken Flavor",
    brand: "Choostix",
    image: "https://m.media-amazon.com/images/I/71j8KLcqRYL._AC_SL1500_.jpg",
    price: 425,
    originalPrice: 499,
    weight: "450g"
  },
  {
    id: 6,
    name: "Sheba Premium Wet Cat Food Variety Pack",
    brand: "Sheba",
    image: "https://m.media-amazon.com/images/I/71hNxLT4pxL._AC_SL1500_.jpg",
    price: 202,
    originalPrice: 238,
    weight: "12 × 85g"
  },
  {
    id: 7,
    name: "Pedigree Dentastix Daily Oral Care",
    brand: "Pedigree",
    image: "https://m.media-amazon.com/images/I/81qJh9W9NcL._AC_SL1500_.jpg",
    price: 799,
    originalPrice: 899,
    weight: "720g"
  },
  {
    id: 8,
    name: "Whiskas Junior Kitten Wet Food",
    brand: "Whiskas",
    image: "https://m.media-amazon.com/images/I/71VT5ZqP9aL._AC_SL1500_.jpg",
    price: 320,
    originalPrice: 380,
    weight: "12 × 85g"
  },
  {
    id: 9,
    name: "Royal Canin Kitten Dry Cat Food",
    brand: "Royal Canin",
    image: "https://m.media-amazon.com/images/I/71K5T8XcTNL._AC_SL1500_.jpg",
    price: 1450,
    originalPrice: 1650,
    weight: "4 kg"
  },
  {
    id: 10,
    name: "Purina Pro Plan Adult Dog Food",
    brand: "Purina",
    image: "https://m.media-amazon.com/images/I/81RCvGnMEpL._AC_SL1500_.jpg",
    price: 3250,
    originalPrice: 3600,
    weight: "14 kg"
  }
];

export function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const itemsPerView = 3;

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

  return (
    <div
      className="py-16 bg-gray-50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-3 text-gray-900">
          Top Selling Products 🔥
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          Discover What Best Sellers Your Pet Would Adore 😍😍
        </p>

        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {topProducts.map((product) => {
                const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

                return (
                  <div
                    key={product.id}
                    className="flex-shrink-0 w-96 px-4"
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                      {discount > 0 && (
                        <span className="inline-block bg-purple-500 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                          Now
                        </span>
                      )}

                      <div className="relative w-full h-80 mb-6 rounded-xl overflow-hidden bg-white">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain p-4"
                          crossOrigin="anonymous"
                          loading="eager"
                          style={{
                            display: 'block',
                            visibility: 'visible',
                            backgroundColor: 'white',
                            mixBlendMode: 'normal'
                          }}
                          onLoad={(e) => {
                            console.log(`✅ Product image loaded: ${product.name}`);
                            const target = e.target as HTMLImageElement;
                            target.style.opacity = '1';
                          }}
                          onError={(e) => {
                            console.error(`❌ Product image failed: ${product.name}`, product.image);
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div
                          className="hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50"
                          style={{ display: 'none' }}
                        >
                          <div className="text-center px-6">
                            <div className="text-6xl mb-3">📦</div>
                            <span className="text-gray-700 font-bold text-lg block">
                              {product.name}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-semibold">
                        {product.brand}
                      </p>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg h-14 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">{product.weight}</p>

                      <div className="flex items-baseline gap-3 mb-6">
                        <span className="text-3xl font-bold text-purple-600">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-gray-400 line-through text-lg">
                          ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                      </div>

                      <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 rounded-xl transition-colors shadow-md">
                        Order Now
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-xl hover:bg-gray-50 transition-colors z-10 border border-gray-200"
            aria-label="Previous products"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-xl hover:bg-gray-50 transition-colors z-10 border border-gray-200"
            aria-label="Next products"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {topProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 bg-purple-500'
                  : 'w-2 bg-gray-300'
              }`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
