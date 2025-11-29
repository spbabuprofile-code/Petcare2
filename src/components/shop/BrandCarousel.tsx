import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

export function BrandCarousel() {
  const [brands, setBrands] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    loadBrands();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.max(1, brands.length - 5));
    }, 3000);
    return () => clearInterval(interval);
  }, [brands.length]);

  const loadBrands = async () => {
    const { data } = await supabase
      .from('brands')
      .select('*')
      .eq('is_featured', true)
      .order('display_order');
    if (data) {
      setBrands(data);
    }
  };

  return (
    <div className="bg-white py-12">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
          Most Loved Brands Delivered in 2 Hours
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Royal Canin, Pedigree, Whiskas, Sheba, Drools, Choostix and 100+ other brands
        </p>

        <div className="overflow-hidden">
          <div
            className="flex items-center justify-center gap-8 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 150}px)` }}
          >
            {brands.map((brand) => (
              <div
                key={brand.brand_id}
                className="flex-shrink-0 w-32 h-24 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-center p-4">
                  <p className="font-semibold text-gray-800 text-sm">{brand.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: Math.max(1, brands.length - 5) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
