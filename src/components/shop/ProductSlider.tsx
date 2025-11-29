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
    name: "Sheba Premium Wet Cat Food Variety Pack",
    brand: "Sheba",
    image: "https://m.media-amazon.com/images/I/71hNxLT4pxL._AC_SL1500_.jpg",
    price: 202,
    originalPrice: 238,
    weight: "12 x 85g"
  },
  {
    id: 6,
    name: "Royal Canin Kitten Dry Cat Food",
    brand: "Royal Canin",
    image: "https://m.media-amazon.com/images/I/71K5T8XcTNL._AC_SL1500_.jpg",
    price: 1450,
    originalPrice: 1650,
    weight: "4 kg"
  },
  {
    id: 7,
    name: "Choostix Dog Treats Chicken Flavor",
    brand: "Choostix",
    image: "https://m.media-amazon.com/images/I/71j8KLcqRYL._AC_SL1500_.jpg",
    price: 425,
    originalPrice: 499,
    weight: "450g"
  },
  {
    id: 8,
    name: "Pedigree Dentastix Daily Oral Care",
    brand: "Pedigree",
    image: "https://m.media-amazon.com/images/I/81qJh9W9NcL._AC_SL1500_.jpg",
    price: 799,
    originalPrice: 899,
    weight: "720g"
  },
  {
    id: 9,
    name: "Whiskas Junior Kitten Wet Food",
    brand: "Whiskas",
    image: "https://m.media-amazon.com/images/I/71VT5ZqP9aL._AC_SL1500_.jpg",
    price: 320,
    originalPrice: 380,
    weight: "12 x 85g"
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

  const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;
  const calculateDiscount = (price: number, original: number) =>
    Math.round(((original - price) / original) * 100);

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
                const discount = calculateDiscount(product.price, product.originalPrice);
                return (
                  <div
                    key={product.id}
                    className="flex-shrink-0 px-4"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow border border-gray-100">
                      {discount > 0 && (
                        <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                          Now
                        </span>
                      )}

                      <div className="relative h-72 mb-6 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center p-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain"
                          loading="lazy"
                          onError={(e) => {
                            console.error(`Failed to load image for ${product.name}`);
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const nextSibling = target.nextElementSibling as HTMLElement;
                            if (nextSibling) {
                              nextSibling.style.display = 'flex';
                            }
                          }}
                        />
                        <div
                          className="hidden absolute inset-0 items-center justify-center bg-gray-200"
                        >
                          <span className="text-gray-600 font-bold text-center px-4">
                            {product.name}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-500 mb-1 uppercase tracking-wide">
                        {product.brand}
                      </p>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg min-h-[3.5rem] line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">{product.weight}</p>

                      <div className="flex items-baseline gap-3 mb-6">
                        <span className="text-3xl font-bold text-orange-600">
                          {formatPrice(product.price)}
                        </span>
                        <span className="text-gray-400 line-through text-lg">
                          {formatPrice(product.originalPrice)}
                        </span>
                      </div>

                      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors shadow-md hover:shadow-lg">
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
                  ? 'w-8 bg-orange-500'
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
