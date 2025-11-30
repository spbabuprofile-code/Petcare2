import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const petBrands = [
  {
    id: 1,
    name: "Royal Canin",
    logo: "/Royal.png"
  },
  {
    id: 2,
    name: "Pedigree",
    logo: "/Pedigree.png"
  },
  {
    id: 3,
    name: "Whiskas",
    logo: "/whisk.png"
  },
  {
    id: 4,
    name: "Drools",
    logo: "/drool.png"
  },
  {
    id: 5,
    name: "Purina",
    logo: "/purina.png"
  },
  {
    id: 6,
    name: "Sheba",
    logo: "/sheb_use.png"
  },
  {
    id: 7,
    name: "IAMS",
    logo: "/IAMS.png"
  },
  {
    id: 8,
    name: "Hill's Science Diet",
    logo: "/hills.png"
  },
  {
    id: 9,
    name: "MeatUp",
    logo: "/meatup.png"
  },
  {
    id: 10,
    name: "Kennel Kitchen",
    logo: "/Kennel.png"
  },
  {
    id: 11,
    name: "Royal Canin",
    logo: "/Royal.png"
  },
  {
    id: 12,
    name: "Pedigree",
    logo: "/Pedigree.png"
  },
  {
    id: 13,
    name: "Whiskas",
    logo: "/whisk.png"
  },
  {
    id: 14,
    name: "Drools",
    logo: "/drool.png"
  }
];

export function BrandCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => {
          const nextIndex = prev + 1;
          return nextIndex >= petBrands.length ? 0 : nextIndex;
        });
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;
      return nextIndex >= petBrands.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - 1;
      return prevIndex < 0 ? petBrands.length - 1 : prevIndex;
    });
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
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Brand carousel"
      ref={carouselRef}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-3 text-gray-900">
          Most Loved Brands Delivered in 2 Hours
        </h2>
        <p className="text-gray-600 text-center mb-12 text-lg">
          Royal Canin, Pedigree, Whiskas, Sheba, Drools, Choostix and 100+ other brands
        </p>

        <div className="relative max-w-7xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 via-gray-50/50 to-transparent z-10 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/50 to-transparent z-10 pointer-events-none"
              aria-hidden="true"
            />

            <div className="overflow-hidden px-4">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 25}%)`
                }}
              >
                {petBrands.map((brand, index) => {
                  const distance = Math.abs(index - currentIndex);
                  const isCenterOrNear = distance <= 2;
                  const opacity = isCenterOrNear ? 1 : 0.4;
                  const scale = distance === 0 ? 1.05 : distance === 1 ? 1 : 0.95;

                  return (
                    <div
                      key={`${brand.id}-${index}`}
                      className="flex-shrink-0 px-3 transition-all duration-700"
                      style={{
                        width: '25%',
                        minWidth: '280px',
                        opacity,
                        transform: `scale(${scale})`
                      }}
                    >
                      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 h-56 flex flex-col items-center justify-center border border-gray-100 transition-all duration-300 hover:border-blue-200">
                        <div className="h-32 w-full flex items-center justify-center mb-4">
                          <img
                            src={brand.logo}
                            alt={`${brand.name} logo`}
                            className="max-h-28 max-w-full w-auto h-auto object-contain transition-transform duration-300 hover:scale-110"
                            loading="lazy"
                          />
                        </div>
                        <p className="text-base font-semibold text-gray-800 text-center">
                          {brand.name}
                        </p>
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
            aria-label="Previous brands"
            tabIndex={0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 z-20 border border-gray-200 hover:scale-110"
            aria-label="Next brands"
            tabIndex={0}
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-10" role="tablist" aria-label="Carousel navigation">
          {petBrands.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-10 bg-blue-600 shadow-md'
                  : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to brand ${index + 1}`}
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
