import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

export function BrandCarousel() {
  const [brands, setBrands] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    loadBrands();
  }, []);

  useEffect(() => {
    if (brands.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
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
    if (data) {
      setBrands([...data, ...data]);
    }
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
          <div className="flex items-center justify-center gap-12 py-8">
            <div
              className="flex gap-12 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 180}px)`,
              }}
            >
              {brands.map((brand, index) => (
                <div
                  key={`${brand.brand_id}-${index}`}
                  className="flex-shrink-0 w-40 h-32 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="text-center p-4">
                    <p className="font-bold text-gray-800 text-base">{brand.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {brands.slice(0, brands.length / 2).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex % (brands.length / 2)
                  ? 'bg-primary w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to brand slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
