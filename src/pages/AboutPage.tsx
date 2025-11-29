import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { useNavigate } from 'react-router-dom';

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-16">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About V-Care Pet Polyclinic</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Revolutionizing pet healthcare with human-grade medical facilities and compassionate care
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-text-secondary mb-4">
              At V-Care Pet Polyclinic, we believe every pet deserves access to world-class healthcare.
              Our mission is to provide comprehensive, compassionate, and affordable veterinary services
              to pet parents across India.
            </p>
            <p className="text-lg text-text-secondary mb-4">
              With 45+ state-of-the-art clinics spanning 11 major cities, we've become India's most
              trusted pet healthcare provider, serving over 72,000 happy customers.
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/6234526/pexels-photo-6234526.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Veterinarian with pet"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose V-Care</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold mb-2">Advanced Facilities</h3>
              <p className="text-text-secondary">
                State-of-the-art diagnostic equipment, surgical facilities, and in-patient care units
              </p>
            </Card>
            <Card>
              <div className="text-5xl mb-4">👨‍⚕️</div>
              <h3 className="text-xl font-semibold mb-2">Expert Veterinarians</h3>
              <p className="text-text-secondary">
                Highly qualified doctors with specializations in various fields of veterinary medicine
              </p>
            </Card>
            <Card>
              <div className="text-5xl mb-4">🚑</div>
              <h3 className="text-xl font-semibold mb-2">24/7 Emergency Care</h3>
              <p className="text-text-secondary">
                Round-the-clock emergency services at select locations for critical pet care
              </p>
            </Card>
            <Card>
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Digital Health Records</h3>
              <p className="text-text-secondary">
                Access your pet's complete medical history, prescriptions, and reports anytime, anywhere
              </p>
            </Card>
            <Card>
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">3-Hour Pet Food Delivery</h3>
              <p className="text-text-secondary">
                Premium pet food and supplies delivered to your doorstep in just 3 hours
              </p>
            </Card>
            <Card>
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Trusted by Thousands</h3>
              <p className="text-text-secondary">
                5.0-star rating with 72,000+ reviews from satisfied pet parents across India
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Family</h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Experience the difference that compassionate, professional pet care can make.
            Book your first appointment today!
          </p>
          <Button onClick={() => navigate('/book-appointment')}>
            Book Appointment Now
          </Button>
        </div>
      </section>

      <section className="section-container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Presence</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { city: 'Gurgaon', clinics: 8 },
            { city: 'Delhi', clinics: 7 },
            { city: 'Noida', clinics: 6 },
            { city: 'Mumbai', clinics: 5 },
            { city: 'Bengaluru', clinics: 5 },
            { city: 'Pune', clinics: 4 },
            { city: 'Hyderabad', clinics: 4 },
            { city: 'Kolkata', clinics: 3 },
            { city: 'Thane', clinics: 2 },
            { city: 'Ghaziabad', clinics: 2 },
          ].map((location) => (
            <Card key={location.city}>
              <h3 className="text-xl font-bold mb-2">{location.city}</h3>
              <p className="text-text-secondary">{location.clinics} Clinics</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
