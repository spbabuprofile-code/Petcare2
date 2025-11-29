import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Card } from '../components/common/Card';

export function ShopPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [petTypeFilter, setPetTypeFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

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


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary text-white py-12">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Pet Food & Accessories</h1>
          <p className="text-xl">Veterinary-recommended dog and cat food, treats, supplements & supplies for Bangalore pet parents</p>
        </div>
      </div>

      <div className="section-container">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <h3 className="text-xl font-semibold mb-4">Filter Products</h3>

              <div className="mb-6">
                <h4 className="font-medium mb-2">Pet Type</h4>
                <div className="space-y-2">
                  {['all', 'dog', 'cat'].map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="radio"
                        name="petType"
                        checked={petTypeFilter === type}
                        onChange={() => setPetTypeFilter(type)}
                        className="mr-2"
                      />
                      <span className="capitalize">{type === 'all' ? 'All Pets' : type === 'dog' ? 'Dogs' : 'Cats'}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium mb-2">Product Category</h4>
                <div className="space-y-2">
                  {['all', 'food', 'treats', 'supplements', 'accessories'].map((cat) => (
                    <label key={cat} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        checked={categoryFilter === cat}
                        onChange={() => setCategoryFilter(cat)}
                        className="mr-2"
                      />
                      <span className="capitalize">{cat === 'all' ? 'All Categories' : cat === 'food' ? 'Pet Food' : cat === 'treats' ? 'Pet Treats' : cat === 'supplements' ? 'Pet Supplements' : 'Pet Accessories'}</span>
                    </label>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-text-secondary">{filteredProducts.length} pet products available</p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-text-secondary mb-4">No pet products found</p>
                <p className="text-text-light">Try adjusting your filters or browse all categories</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.product_id}>
                    <img
                      src={product.images[0] || 'https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=400'}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <p className="text-sm text-text-secondary">{product.brand}</p>
                    <h3 className="font-semibold mb-1">{product.name}</h3>
                    <p className="text-xs text-text-light mb-2">{product.weight}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl font-bold text-primary">₹{product.price}</span>
                      {product.stock > 0 ? (
                        <span className="text-sm text-accent-green">In Stock</span>
                      ) : (
                        <span className="text-sm text-red-500">Out of Stock</span>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
