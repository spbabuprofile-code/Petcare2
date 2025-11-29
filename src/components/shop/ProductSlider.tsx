import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { useCart } from '../../contexts/CartContext';

export function ProductSlider() {
  const [products, setProducts] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { addToCart } = useCart();

  useEffect(() => {
    loadTopSellingProducts();
  }, []);

  useEffect(() => {
    if (products.length > 3) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (products.length - 2));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [products.length]);

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

  const visibleProducts = products.slice(currentIndex, currentIndex + 3);

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
    <div className="bg-gray-50 py-12">
      <div className="section-container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Top Selling Products 🔥
            </h2>
            <p className="text-gray-600">
              Discover What Best Sellers Your Pet Would Adore 😍😍
            </p>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="grid md:grid-cols-3 gap-6">
            {visibleProducts.map((product) => {
              const discountedPrice = product.discount_percentage > 0
                ? product.price - (product.price * product.discount_percentage / 100)
                : product.price;

              return (
                <Card key={product.product_id} className="hover:shadow-lg transition-shadow">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{product.name}</h3>
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
                      className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
                    >
                      Order Now
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: Math.max(1, products.length - 2) }).map((_, index) => (
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
