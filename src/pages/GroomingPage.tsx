import { Link } from 'react-router-dom';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';

export function GroomingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-50 to-purple-100">
        <div className="section-container py-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Pet Grooming Near You</h1>
            <p className="text-xl text-gray-700 mb-6">
              At V-Care Pet Polyclinic, it's where <span className="text-red-500 font-semibold">pampering</span> meets <span className="text-red-500 font-semibold">healthcare</span>
            </p>
            <Link to="/book-appointment">
              <Button variant="primary" className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Book Appointment
              </Button>
            </Link>

            <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl">
              <div className="text-center">
                <div className="text-4xl mb-2">📋</div>
                <div className="text-2xl font-bold text-gray-900">2,00,000+</div>
                <div className="text-sm text-gray-600">Groomings Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">👤</div>
                <div className="text-sm font-semibold text-gray-900">Personalized</div>
                <div className="text-sm text-gray-600">Services for Each Pet</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">✂️</div>
                <div className="text-sm font-semibold text-gray-900">45+ Grooming</div>
                <div className="text-sm text-gray-600">Centres Near You</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Why Choose V-Care Pet Polyclinic for Pet Grooming Near You?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="overflow-hidden">
            <img
              src="/3.jpg"
              alt="Trained and Certified Groomers"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trained & Certified Groomers</h3>
              <p className="text-gray-600">
                Our professional groomers are specially trained to handle pets with care, providing safe and stress-free grooming services.
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/4.jpg"
              alt="Separate Grooming Areas for Cats"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Separate Grooming Areas for Cats</h3>
              <p className="text-gray-600">
                Cats are groomed in dedicated, quiet spaces to ensure they remain calm and comfortable throughout the session.
              </p>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="overflow-hidden">
            <img
              src="/5.jpg"
              alt="Premium International Grooming Products"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium International Grooming Products</h3>
              <p className="text-gray-600">
                We use vet-approved, high-quality Chris Christensen products for safe and effective grooming.
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/6.jpg"
              alt="Relaxing Environment for All Pets"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Relaxing Environment for All Pets</h3>
              <p className="text-gray-600">
                Pets are groomed in separate, calming spaces to create a stress-free experience for every pet.
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="https://images.pexels.com/photos/6235663/pexels-photo-6235663.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="FREE Health Checkup"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">FREE Health Checkup</h3>
              <p className="text-gray-600">
                After grooming, your pet receives a complimentary health check for added peace of mind.
              </p>
            </div>
          </Card>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Comprehensive Pet Grooming Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            From basic baths to full spa treatments, V-Care Pet Polyclinic offers a complete range of grooming services tailored to your pet's needs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Basic Bath & Brush',
                description: 'Includes shampoo, conditioning, blow-dry, nail trimming, and ear cleaning',
                icon: '🛁'
              },
              {
                title: 'Full Grooming Package',
                description: 'Complete grooming with haircut, styling, bath, nails, ears, and teeth cleaning',
                icon: '✂️'
              },
              {
                title: 'Deshedding Treatment',
                description: 'Special treatment to reduce shedding and remove loose undercoat',
                icon: '🐕'
              },
              {
                title: 'Spa & Conditioning',
                description: 'Premium spa treatment with deep conditioning and moisturizing',
                icon: '💆'
              },
              {
                title: 'Breed-Specific Styling',
                description: 'Expert cuts and styling according to breed standards',
                icon: '🎨'
              },
              {
                title: 'Flea & Tick Treatment',
                description: 'Medicated bath to eliminate and prevent parasites',
                icon: '🦟'
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/book-appointment">
              <Button variant="primary" className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                Book Your Pet's Grooming Session
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Visit Our Grooming Centers in Bangalore
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Professional pet grooming services available at all three V-Care Pet Polyclinic locations across Bangalore.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">Kaikondrahalli</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">
                65/1C, Sarjapur – Marathahalli Rd, Next to Jain Heights, Kaikondrahalli, Bengaluru 560035
              </p>
              <p className="text-sm font-semibold text-primary">📞 08147 006345</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">Koramangala</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">
                1st Main Cross, Jakkasandra, 1st Block, Koramangala, Bengaluru 560034
              </p>
              <p className="text-sm font-semibold text-primary">📞 080 2552 5834</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">Whitefield</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">
                Ground Floor, 1, Whitefield Main Rd, Opp. CSI Church, Sathya Sai Layout, Whitefield, Bengaluru 560066
              </p>
              <p className="text-sm font-semibold text-primary">📞 08147 006341</p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/clinics">
              <Button variant="secondary" className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors">
                View All Locations
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
