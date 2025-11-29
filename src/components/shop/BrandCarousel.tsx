import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const petBrands = [
  {
    id: 1,
    name: "Royal Canin",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Royal-Canin-Logo.svg/320px-Royal-Canin-Logo.svg.png"
  },
  {
    id: 2,
    name: "Pedigree",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Pedigree_logo.svg/320px-Pedigree_logo.svg.png"
  },
  {
    id: 3,
    name: "Whiskas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Whiskas_logo.svg/320px-Whiskas_logo.svg.png"
  },
  {
    id: 4,
    name: "Purina",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Purina_logo.svg/320px-Purina_logo.svg.png"
  },
  {
    id: 5,
    name: "Sheba",
    logo: "https://1000logos.net/wp-content/uploads/2023/02/Sheba-Logo-500x281.png"
  },
  {
    id: 6,
    name: "IAMS",
    logo: "https://www.freepnglogos.com/uploads/iams-logo-png-1.png"
  },
  {
    id: 7,
    name: "Drools",
    logo: "https://www.droolsindia.com/cdn/shop/files/drools_india_logo.png"
  },
  {
    id: 8,
    name: "Hill's Science Diet",
    logo: "https://1000logos.net/wp-content/uploads/2023/08/Hills-Science-Diet-Logo-500x281.png"
  },
  {
    id: 9,
    name: "Choostix",
    logo: "https://choostix.in/wp-content/uploads/2021/06/logo.png"
  },
  {
    id: 10,
    name: "Pedigree Dentastix",
    logo: "https://www.pedigree.com/sites/g/files/fnmzdf1736/files/2023-08/Dentastix-Logo.svg"
  },
  {
    id: 11,
    name: "Cesar",
    logo: "https://www.cesar.com/themes/custom/cesar_bootstrap/images/logo.svg"
  },
  {
    id: 12,
    name: "Nutro",
    logo: "https://www.nutro.com/themes/custom/nutro_bootstrap/images/logo.svg"
  }
];

export function BrandCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const itemsPerView = 4;

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % petBrands.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % petBrands.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + petBrands.length) % petBrands.length);
  };

  return (
    <div
      className="py-16 bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-3 text-gray-900">
          Most Loved Brands Delivered in 2 Hours
        </h2>
        <p className="text-gray-600 text-center mb-12 text-lg">
          Royal Canin, Pedigree, Whiskas, Sheba, Drools, Choostix and 100+ other brands
        </p>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {petBrands.map((brand) => (
                <div
                  key={brand.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow h-48 flex flex-col items-center justify-center border border-gray-100">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-24 w-auto max-w-full object-contain mb-3"
                      onError={(e) => {
                        console.error(`Failed to load logo for ${brand.name}`);
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const nextSibling = target.nextElementSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    <div
                      className="hidden h-24 w-full items-center justify-center bg-gray-100 rounded-lg mb-3"
                    >
                      <span className="text-xl font-bold text-gray-700 text-center px-2">
                        {brand.name}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-600 text-center">{brand.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous brands"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Next brands"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {petBrands.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 bg-orange-500'
                  : 'w-2 bg-gray-300'
              }`}
              aria-label={`Go to brand ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
