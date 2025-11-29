import { useState, useEffect, useRef } from 'react';
import { supabase } from '../../lib/supabase';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { useCart } from '../../contexts/CartContext';

export function ProductSlider() {
  const [products, setProducts] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { addToCart } = useCart();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadTopSellingProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const interval = setInterval(() => {
        handleNext();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [products.length, currentIndex]);

  const loadTopSellingProducts = async () => {
    const { data } = await supabase
      .from('products')
      .select('*')
      .eq('is_top_selling', true)
      .order('created_at', { ascending: false })
      .limit(10);
    if (data) {
      setProducts(data);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleAddToCart = (product: any) => {
    const discountedPrice = product.discount_percentage > 0
      ? product.price - (product.price * product.discount_percentage / 100)
      : product.price;

    addToCart({
      product_id: product.product_id,
      name: product.name,
      brand: product.brand,
      price: Math.round(discountedPrice),
      image: product.images[0],
      quantity: 1,
      weight: product.weight,
    });
  };

  return (
    <div className="bg-white py-16">
      <div className="section-container">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Top Selling Products 🔥
          </h2>
          <p className="text-gray-600 text-lg">
            Discover What Best Sellers Your Pet Would Adore 😍😍
          </p>
        </div>

        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
            aria-label="Previous products"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
            aria-label="Next products"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="overflow-hidden px-12">
            <div
              ref={scrollContainerRef}
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              }}
            >
              {products.map((product) => {
                const discountedPrice = product.discount_percentage > 0
                  ? product.price - (product.price * product.discount_percentage / 100)
                  : product.price;

                return (
                  <Card
                    key={product.product_id}
                    className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] hover:shadow-xl transition-shadow"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-64 object-contain rounded-lg mb-4 bg-white"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/400x400/CCCCCC/666666?text=${encodeURIComponent(product.brand)}`;
                      }}
                    />
                    <h3 className="font-bold text-xl mb-2 text-gray-900 line-clamp-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{product.brand}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-primary">₹{Math.round(discountedPrice)}</span>
                        {product.discount_percentage > 0 && (
                          <span className="text-sm text-gray-400 line-through ml-2">₹{product.price}</span>
                        )}
                      </div>
                      <Button
                        variant="primary"
                        onClick={() => handleAddToCart(product)}
                        className="bg-orange-500 text-white px-5 py-2.5 rounded-lg hover:bg-orange-600 transition-colors text-sm font-semibold"
                        style={{ backgroundColor: '#FF6B35' }}
                      >
                        Order Now
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
