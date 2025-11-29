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
            Bangalore's trusted partner in advanced veterinary medicine with state-of-the-art facilities and board-certified specialists
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-text-secondary mb-4">
              At V-Care Pet Polyclinic, we deliver advanced veterinary medicine to pets across Bangalore.
              Our mission is to provide comprehensive, evidence-based healthcare with compassion and expertise,
              ensuring every dog and cat receives the highest standard of medical care.
            </p>
            <p className="text-lg text-text-secondary mb-4">
              With three strategically located clinics in Kaikondrahalli, Koramangala, and Whitefield,
              we've earned the trust of Bangalore's pet-loving community through consistent excellence
              in veterinary medicine, diagnostics, surgery, and emergency care.
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
        <h2 className="text-3xl font-bold text-center mb-12">Our Bangalore Locations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Kaikondrahalli',
              address: '65/1C, Sarjapur – Marathahalli Rd, Next to Jain Heights',
              phone: '08147 006345',
              emergency: true
            },
            {
              name: 'Koramangala',
              address: '1st Main Cross, Jakkasandra, 1st Block',
              phone: '080 2552 5834',
              emergency: false
            },
            {
              name: 'Whitefield',
              address: 'Ground Floor, 1, Whitefield Main Rd, Opp. CSI Church',
              phone: '08147 006341',
              emergency: true
            },
          ].map((location) => (
            <Card key={location.name}>
              <h3 className="text-xl font-bold mb-3 text-primary">{location.name}</h3>
              <p className="text-sm text-text-secondary mb-3">{location.address}</p>
              <p className="text-sm font-semibold mb-2">📞 {location.phone}</p>
              {location.emergency && (
                <span className="inline-block bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                  24/7 Emergency
                </span>
              )}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
