import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { supabase } from '../lib/supabase';

export function HomePage() {
  const navigate = useNavigate();
  const [selectedPetType, setSelectedPetType] = useState('dog');
  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    await supabase
      .from('reviews')
      .select('*')
      .limit(6)
      .order('created_at', { ascending: false });
  };

  const services = [
    { name: 'Veterinary Consultation', icon: '🩺', description: 'Expert care from qualified veterinarians', link: '/services/consultation' },
    { name: 'Grooming Services', icon: '✂️', description: 'Professional grooming for your pet', link: '/services/grooming' },
    { name: 'Pet Food Delivery', icon: '🍖', description: 'Premium pet food delivered in 3 hours', link: '/services/pet-food' },
    { name: 'Diagnostics & Lab Tests', icon: '🔬', description: 'Advanced diagnostic facilities', link: '/services/diagnostics' },
    { name: 'Surgery Services', icon: '⚕️', description: 'State-of-the-art surgical facilities', link: '/services/surgery' },
    { name: 'Emergency Care', icon: '🚑', description: '24/7 emergency care available', link: '/services/emergency' },
  ];

  const petServices = {
    dog: [
      { name: 'Regular Health Check-Up', price: 'From ₹500' },
      { name: 'Vaccination', price: 'From ₹800' },
      { name: 'Dental Care', price: 'From ₹1,200' },
      { name: 'Tick & Flea Control', price: 'From ₹600' },
      { name: 'Deworming', price: 'From ₹400' },
      { name: 'Neutering/Spaying', price: 'From ₹4,500' },
    ],
    cat: [
      { name: 'Regular Health Check-Up', price: 'From ₹500' },
      { name: 'Vaccination', price: 'From ₹800' },
      { name: 'Dental Care', price: 'From ₹1,200' },
      { name: 'Tick & Flea Control', price: 'From ₹600' },
      { name: 'Deworming', price: 'From ₹400' },
      { name: 'Neutering/Spaying', price: 'From ₹3,500' },
    ],
  };

  const blogPosts = [
    {
      title: 'Preventive Care: From Grooming to Vaccines',
      category: 'Health',
      image: 'https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: 5,
    },
    {
      title: 'Feeding Your Pet: Complete Nutrition Guide',
      category: 'Nutrition',
      image: 'https://images.pexels.com/photos/5731801/pexels-photo-5731801.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: 7,
    },
    {
      title: 'Understanding Pet Behavior and Training',
      category: 'Training',
      image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: 6,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-r from-orange-50 to-blue-50 py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-text-primary">
                Your Love, Our Care
              </h1>
              <p className="text-xl text-text-secondary mb-8">
                Human-grade healthcare for your beloved pets. Expert veterinary care, grooming,
                and premium pet food delivery across 45+ clinics in 11 cities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => navigate('/book-appointment')}>
                  Book Appointment
                </Button>
                <Button variant="secondary" onClick={() => navigate('/shop')}>
                  Order Pet Food
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-primary">5.0</span>
                  <div className="ml-2 text-yellow-400">★★★★★</div>
                </div>
                <div className="text-text-secondary">
                  72,000+ ratings
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Happy pets"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-text-secondary">Comprehensive pet healthcare under one roof</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.name} onClick={() => navigate(service.link)}>
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-text-secondary mb-4">{service.description}</p>
              <Button variant="text">Learn More →</Button>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-text-secondary">Simple, fast, and convenient</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Online</h3>
              <p className="text-text-secondary">Choose your preferred clinic, doctor, and time slot</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Clinic</h3>
              <p className="text-text-secondary">Get expert care from our qualified veterinarians</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Track & Reorder</h3>
              <p className="text-text-secondary">Access medical records and reorder medications easily</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Services by Pet Type</h2>
          <div className="flex justify-center gap-4 mt-6">
            {['dog', 'cat'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedPetType(type)}
                className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                  selectedPetType === type
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-text-primary hover:bg-gray-300'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {petServices[selectedPetType as keyof typeof petServices].map((service) => (
            <Card key={service.name}>
              <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
              <p className="text-primary font-bold text-lg">{service.price}</p>
              <Button className="mt-4" fullWidth onClick={() => navigate('/book-appointment')}>
                Book Now
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Pet Parents Say</h2>
            <p className="text-xl text-text-secondary">Trusted by thousands of happy customers</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold">Pet Parent {i}</p>
                    <div className="text-yellow-400">★★★★★</div>
                  </div>
                </div>
                <p className="text-text-secondary">
                  "Excellent service and caring staff. My pet received the best treatment possible.
                  Highly recommended for all pet parents!"
                </p>
                <p className="text-sm text-text-light mt-2">2 weeks ago</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Pet Care Tips & Guides</h2>
          <p className="text-xl text-text-secondary">Expert advice for your pet's wellbeing</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.title} onClick={() => navigate('/blog')}>
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm mb-2">
                {post.category}
              </span>
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-text-secondary text-sm">{post.readTime} min read</p>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button onClick={() => navigate('/blog')}>View All Articles</Button>
        </div>
      </section>

      <section className="bg-primary text-white py-16">
        <div className="section-container text-center">
          <h2 className="text-4xl font-bold mb-4">Download Our App</h2>
          <p className="text-xl mb-8">Book appointments, order food, and track your pet's health on the go</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="bg-black px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors">
              <div className="flex items-center">
                <span className="text-2xl mr-2">📱</span>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </div>
            </a>
            <a href="#" className="bg-black px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors">
              <div className="flex items-center">
                <span className="text-2xl mr-2">📱</span>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
