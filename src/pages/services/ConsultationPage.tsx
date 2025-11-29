import { Card } from '../../components/common/Card';

export function ConsultationPage() {

  return (
    <div className="min-h-screen">
      <div className="bg-primary text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Veterinary Consultation</h1>
          <p className="text-xl">Expert care from qualified veterinarians for your pet's health</p>
        </div>
      </div>

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
            <p className="text-lg text-text-secondary mb-6">
              Our veterinary consultation services provide comprehensive health assessments,
              diagnosis, and treatment plans for your pets. With experienced veterinarians
              and modern diagnostic facilities, we ensure your pet receives the best care possible.
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/6234525/pexels-photo-6234525.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Veterinary consultation"
            className="rounded-xl shadow-lg"
          />
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center">Types of Consultations</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card>
            <h3 className="text-xl font-bold mb-3">General Consultation</h3>
            <p className="text-text-secondary mb-4">
              Routine check-ups, preventive care, and general health assessments
            </p>
            <p className="text-2xl font-bold text-primary mb-4">From ₹500</p>
            <ul className="space-y-2 text-sm text-text-secondary mb-6">
              <li>✓ Physical examination</li>
              <li>✓ Health assessment</li>
              <li>✓ Preventive care advice</li>
              <li>✓ Vaccination guidance</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-bold mb-3">Specialist Consultation</h3>
            <p className="text-text-secondary mb-4">
              Expert care from specialized veterinarians for specific conditions
            </p>
            <p className="text-2xl font-bold text-primary mb-4">From ₹1,200</p>
            <ul className="space-y-2 text-sm text-text-secondary mb-6">
              <li>✓ Specialized diagnosis</li>
              <li>✓ Advanced treatment plans</li>
              <li>✓ Follow-up consultations</li>
              <li>✓ Expert recommendations</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-bold mb-3">Emergency Consultation</h3>
            <p className="text-text-secondary mb-4">
              Immediate care for urgent health issues and emergencies
            </p>
            <p className="text-2xl font-bold text-primary mb-4">From ₹2,000</p>
            <ul className="space-y-2 text-sm text-text-secondary mb-6">
              <li>✓ 24/7 availability</li>
              <li>✓ Immediate assessment</li>
              <li>✓ Critical care</li>
              <li>✓ Emergency treatment</li>
            </ul>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Before Your Visit</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Book your appointment online</li>
                <li>• Prepare your pet's medical history</li>
                <li>• Note down any symptoms or concerns</li>
                <li>• Arrive 10 minutes early</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">During Consultation</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Comprehensive physical examination</li>
                <li>• Discussion of symptoms and concerns</li>
                <li>• Diagnostic tests if needed</li>
                <li>• Treatment plan and recommendations</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
