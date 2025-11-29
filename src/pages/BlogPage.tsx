import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Card } from '../components/common/Card';

export function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [categoryFilter, setCategoryFilter] = useState('all');

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .order('published_at', { ascending: false });
    if (data) setPosts(data);
  };

  const categories = ['all', 'Pet Health', 'Dog Care', 'Cat Care', 'Pet Nutrition', 'Grooming', 'Behavior & Training', 'Preventive Care'];
  const filteredPosts = categoryFilter === 'all'
    ? posts
    : posts.filter(p => p.category === categoryFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary text-white py-12">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pet Care Blog & Resources</h1>
          <p className="text-xl">Expert veterinary advice, dog & cat health tips, and pet wellness guides from V-Care veterinarians</p>
        </div>
      </div>

      <div className="section-container">
        <div className="mb-8">
          <h3 className="font-semibold mb-4">Filter by Category</h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  categoryFilter === cat
                    ? 'bg-primary text-white'
                    : 'bg-white text-text-primary border border-gray-300 hover:border-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-text-secondary mb-4">No pet care articles available yet</p>
            <p className="text-text-light">Check back soon for expert veterinary advice on dog and cat health, nutrition, and wellness!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.post_id}>
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm mb-2">
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-text-secondary mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-text-light">
                  <span>By {post.author}</span>
                  <span>{post.read_time} min read</span>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
