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
    { name: 'Veterinary Consultation', icon: '🩺', description: 'Comprehensive health examinations by experienced veterinarians', link: '/services/consultation' },
    { name: 'Advanced Surgery', icon: '⚕️', description: 'Expert surgical procedures with modern anesthesia monitoring', link: '/services/surgery' },
    { name: 'Diagnostics & Radiology', icon: '🔬', description: 'Digital X-ray, ultrasound, and complete laboratory services', link: '/services/diagnostics' },
    { name: 'Vaccination Programs', icon: '💉', description: 'Core and non-core vaccines with personalized schedules', link: '/services/consultation' },
    { name: 'Dental Care', icon: '🦷', description: 'Professional dental scaling, polishing, and oral surgery', link: '/services/consultation' },
    { name: '24/7 Emergency Care', icon: '🚑', description: 'Round-the-clock critical care at select locations', link: '/services/emergency' },
  ];

  const petServices = {
    dog: [
      { name: 'Complete Wellness Examination', price: 'From ₹800' },
      { name: 'Core Vaccination (DHPP + Rabies)', price: 'From ₹1,200' },
      { name: 'Professional Dental Scaling', price: 'From ₹2,500' },
      { name: 'Parasite Control & Deworming', price: 'From ₹600' },
      { name: 'Surgical Sterilization (Spay/Neuter)', price: 'From ₹5,500' },
      { name: 'Diagnostic Blood Panel', price: 'From ₹2,000' },
    ],
    cat: [
      { name: 'Complete Wellness Examination', price: 'From ₹800' },
      { name: 'Core Vaccination (FVRCP + Rabies)', price: 'From ₹1,200' },
      { name: 'Professional Dental Scaling', price: 'From ₹2,500' },
      { name: 'Parasite Control & Deworming', price: 'From ₹600' },
      { name: 'Surgical Sterilization (Spay/Neuter)', price: 'From ₹4,500' },
      { name: 'Diagnostic Blood Panel', price: 'From ₹2,000' },
    ],
  };

  const blogPosts = [
    {
      title: 'Complete Guide to Canine Vaccination: What Every Dog Owner Must Know',
      category: 'Health',
      image: 'https://images.pexels.com/photos/6235231/pexels-photo-6235231.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: 8,
    },
    {
      title: 'Feline Dental Disease: Prevention, Detection, and Treatment',
      category: 'Health',
      image: 'https://images.pexels.com/photos/6853522/pexels-photo-6853522.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: 10,
    },
    {
      title: 'Emergency Situations in Pets: When to Rush to the Vet',
      category: 'Health',
      image: 'https://images.pexels.com/photos/6235241/pexels-photo-6235241.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: 12,
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
                Advanced veterinary medicine meets compassionate care. Providing comprehensive healthcare services for dogs and cats across Bangalore with state-of-the-art facilities and experienced veterinary specialists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => navigate('/book-appointment')}>
                  Book Veterinary Appointment
                </Button>
                <Button variant="secondary" onClick={() => navigate('/shop')}>
                  Shop Premium Pet Food
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-primary">4.9</span>
                  <div className="ml-2 text-yellow-400">★★★★★</div>
                </div>
                <div className="text-text-secondary">
                  Trusted by thousands of pet parents in Bangalore
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6235231/pexels-photo-6235231.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Veterinary care for pets at V-Care Pet Polyclinic Bangalore"
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
            <p className="text-xl text-text-secondary">Testimonials from our Bangalore pet community</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Priya R.", location: "Koramangala", text: "Dr. Sharma's expertise saved my Labrador's life during an emergency. The diagnostic facilities are excellent, and the staff is genuinely caring. Best pet clinic in Bangalore!" },
              { name: "Arun K.", location: "Whitefield", text: "After trying multiple clinics for my cat's skin allergy, V-Care finally provided the right treatment. Dr. Mehta's dermatology specialization made all the difference." },
              { name: "Sneha M.", location: "Sarjapur Road", text: "The surgical team performed a complex orthopedic surgery on my German Shepherd with outstanding results. Post-operative care was exceptional." },
              { name: "Rahul P.", location: "HSR Layout", text: "Regular wellness check-ups here have kept my pets healthy for years. The vaccination programs are thorough and the doctors take time to explain everything." },
              { name: "Divya S.", location: "Indiranagar", text: "Emergency care at 2 AM when my dog ate something toxic - they responded immediately and saved his life. Forever grateful to the V-Care team." },
              { name: "Karthik B.", location: "Marathahalli", text: "Professional dental cleaning for both my cats. The before-after difference is amazing. Highly recommend their dental care services." }
            ].map((review, i) => (
              <Card key={i}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full mr-4 flex items-center justify-center font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-xs text-text-light">{review.location}</p>
                    <div className="text-yellow-400 text-sm">★★★★★</div>
                  </div>
                </div>
                <p className="text-text-secondary text-sm">
                  "{review.text}"
                </p>
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
          <h2 className="text-4xl font-bold mb-4">Visit Our Bangalore Clinics</h2>
          <p className="text-xl mb-8">Three convenient locations across Bangalore to serve you better</p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Kaikondrahalli</h3>
              <p className="text-sm mb-2">65/1C, Sarjapur – Marathahalli Rd<br/>Next to Jain Heights</p>
              <p className="text-sm font-semibold">📞 08147 006345</p>
              <p className="text-xs mt-2">24/7 Emergency Available</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Koramangala</h3>
              <p className="text-sm mb-2">1st Main Cross, Jakkasandra<br/>1st Block, Koramangala</p>
              <p className="text-sm font-semibold">📞 080 2552 5834</p>
              <p className="text-xs mt-2">Mon-Sun: 9 AM - 9 PM</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Whitefield</h3>
              <p className="text-sm mb-2">Ground Floor, Whitefield Main Rd<br/>Opp. CSI Church, Sathya Sai Layout</p>
              <p className="text-sm font-semibold">📞 08147 006341</p>
              <p className="text-xs mt-2">24/7 Emergency Available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
