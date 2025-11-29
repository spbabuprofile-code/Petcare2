import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Button } from '../components/common/Button';
import { BrandCarousel } from '../components/shop/BrandCarousel';
import { CategoryGrid } from '../components/shop/CategoryGrid';
import { SignatureServices } from '../components/shop/SignatureServices';
import { ProductSlider } from '../components/shop/ProductSlider';

export function ShopPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [petTypeFilter, setPetTypeFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [petTypeFilter, categoryFilter, products]);

  const loadProducts = async () => {
    const { data } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) {
      setProducts(data);
      setFilteredProducts(data);
    }
  };

  const filterProducts = () => {
    let filtered = products;
    if (petTypeFilter !== 'all') {
      filtered = filtered.filter(p => p.pet_type.toLowerCase() === petTypeFilter);
    }
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(p => p.category.toLowerCase() === categoryFilter);
    }
    setFilteredProducts(filtered);
  };

  const handleCategorySelect = (category: string) => {
    setCategoryFilter(category);
    setShowFilters(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 overflow-hidden">
        <div className="section-container py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Your Pet's Favourite Food</span>
            <br />
            <span className="text-gray-900">Delivered in Just 2 Hours!</span>
          </h1>
          <Link to="/book-appointment">
            <Button variant="primary" className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors mt-4">
              Order Now
            </Button>
          </Link>
        </div>
      </div>

      <BrandCarousel />

      <CategoryGrid onCategorySelect={handleCategorySelect} />

      <SignatureServices />

      <ProductSlider />

      {showFilters && (
        <div className="bg-white py-12">
          <div className="section-container">
            <div className="bg-primary text-white py-8 px-6 rounded-xl mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Premium Pet Food & Accessories</h2>
              <p className="text-lg">
                Veterinary-recommended dog and cat food, treats, supplements & supplies for Bangalore pet parents
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm p-6 sticky top-4">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Filter Products</h3>

                  <div className="mb-6">
                    <h4 className="font-medium mb-3 text-gray-900">Pet Type</h4>
                    <div className="space-y-2">
                      {[
                        { value: 'all', label: 'All Pets' },
                        { value: 'dog', label: 'Dogs' },
                        { value: 'cat', label: 'Cats' },
                      ].map((type) => (
                        <label key={type.value} className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name="petType"
                            checked={petTypeFilter === type.value}
                            onChange={() => setPetTypeFilter(type.value)}
                            className="mr-3 w-4 h-4 text-primary focus:ring-primary"
                          />
                          <span className="text-gray-700 group-hover:text-primary transition-colors">
                            {type.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium mb-3 text-gray-900">Product Category</h4>
                    <div className="space-y-2">
                      {[
                        { value: 'all', label: 'All Categories' },
                        { value: 'food', label: 'Pet Food' },
                        { value: 'treats', label: 'Pet Treats' },
                        { value: 'supplements', label: 'Pet Supplements' },
                        { value: 'accessories', label: 'Pet Accessories' },
                      ].map((cat) => (
                        <label key={cat.value} className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name="category"
                            checked={categoryFilter === cat.value}
                            onChange={() => setCategoryFilter(cat.value)}
                            className="mr-3 w-4 h-4 text-primary focus:ring-primary"
                          />
                          <span className="text-gray-700 group-hover:text-primary transition-colors">
                            {cat.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="mb-6">
                  <p className="text-gray-600 text-lg">
                    <span className="font-semibold text-gray-900">{filteredProducts.length}</span> pet products available
                  </p>
                </div>

                {filteredProducts.length === 0 ? (
                  <div className="text-center py-20 bg-white rounded-xl">
                    <div className="text-6xl mb-4">🐾</div>
                    <p className="text-2xl text-gray-900 font-semibold mb-2">No pet products found</p>
                    <p className="text-gray-600">Try adjusting your filters or browse all categories</p>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => {
                      const discountedPrice = product.discount_percentage > 0
                        ? product.price - (product.price * product.discount_percentage / 100)
                        : product.price;

                      return (
                        <div
                          key={product.product_id}
                          className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-4"
                        >
                          <img
                            src={product.images[0] || 'https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=400'}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                          />
                          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{product.brand}</p>
                          <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
                          <p className="text-xs text-gray-600 mb-3">{product.weight}</p>
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <span className="text-2xl font-bold text-primary">₹{Math.round(discountedPrice)}</span>
                              {product.discount_percentage > 0 && (
                                <>
                                  <span className="text-sm text-gray-400 line-through ml-2">₹{product.price}</span>
                                  <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                                    {product.discount_percentage}% OFF
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                          {product.stock > 0 ? (
                            <span className="inline-block text-xs text-green-600 font-semibold">✓ In Stock</span>
                          ) : (
                            <span className="inline-block text-xs text-red-500 font-semibold">Out of Stock</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-r from-primary to-purple-500 py-12">
        <div className="section-container text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unlocking V-Care Pet Polyclinic: A Visual Guide to Seamless Pet Care
          </h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Discover the simplicity of our app with this cheeky walkthrough for a hassle-free pet care experience 🐾
          </p>
          <Link to="/about">
            <Button variant="secondary" className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
