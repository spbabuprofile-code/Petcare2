import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

export function BrandCarousel() {
  const [brands, setBrands] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    loadBrands();
  }, []);

  useEffect(() => {
    if (brands.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const uniqueBrandCount = brands.length / 3;
          const next = prevIndex + 1;

          if (next >= uniqueBrandCount) {
            setIsAnimating(false);
            setTimeout(() => {
              setCurrentIndex(0);
              setTimeout(() => setIsAnimating(true), 50);
            }, 0);
            return prevIndex;
          }
          return next;
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [brands.length]);

  const loadBrands = async () => {
    const { data } = await supabase
      .from('brands')
      .select('*')
      .eq('is_featured', true)
      .order('display_order');
    if (data && data.length > 0) {
      const duplicatedBrands = [...data, ...data, ...data];
      setBrands(duplicatedBrands);
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-white py-16">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
          Most Loved Brands Delivered in 2 Hours
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Royal Canin, Pedigree, Whiskas, Sheba, Drools, Choostix and 100+ other brands
        </p>

        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center py-8">
            <div
              className={`flex gap-8 ${isAnimating ? 'transition-transform duration-700 ease-in-out' : ''}`}
              style={{
                transform: `translateX(-${currentIndex * 220}px)`,
              }}
            >
              {brands.map((brand, index) => (
                <div
                  key={`${brand.brand_id}-${index}`}
                  className="flex-shrink-0 w-52 h-40 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group cursor-pointer"
                >
                  {brand.logo_image_url ? (
                    <div className="relative w-full h-full p-6 flex items-center justify-center">
                      <img
                        src={brand.logo_image_url}
                        alt={`${brand.name} logo`}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-300">
                      <p className="font-bold text-gray-800 text-lg text-center">{brand.name}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10"></div>
        </div>

        <div className="flex justify-center mt-8 gap-3">
          {brands.slice(0, brands.length / 3).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex % (brands.length / 3)
                  ? 'bg-primary w-10 h-3'
                  : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
              }`}
              aria-label={`Go to brand slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
