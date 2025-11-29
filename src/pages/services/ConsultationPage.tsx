import { Card } from '../../components/common/Card';

export function ConsultationPage() {

  return (
    <div className="min-h-screen">
      <div className="bg-primary text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Veterinary Consultation Services</h1>
          <p className="text-xl">Comprehensive pet healthcare from board-certified veterinarians at our Bangalore clinics</p>
        </div>
      </div>

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Comprehensive Pet Health Assessments</h2>
            <p className="text-lg text-text-secondary mb-6">
              Our veterinary consultations include thorough physical examinations, behavioral assessments,
              nutritional counseling, and preventive care planning. Our veterinarians are experienced in treating
              dogs and cats of all breeds and ages, from puppies and kittens to senior pets requiring specialized geriatric care.
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2 mb-6">
              <li>Complete nose-to-tail physical examination</li>
              <li>Vaccination assessment and administration</li>
              <li>Parasite screening and deworming</li>
              <li>Nutritional and dietary recommendations</li>
              <li>Behavioral counseling for dogs and cats</li>
              <li>Microchipping services</li>
              <li>Senior pet wellness programs</li>
              <li>Puppy and kitten care packages</li>
            </ul>
          </div>
          <img
            src="https://images.pexels.com/photos/6234525/pexels-photo-6234525.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Veterinary consultation"
            className="rounded-xl shadow-lg"
          />
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center">Our Veterinary Consultation Services</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card>
            <h3 className="text-xl font-bold mb-3">General Pet Wellness</h3>
            <p className="text-text-secondary mb-4">
              Routine health check-ups for dogs and cats, preventive care, and vaccination programs
            </p>
            <p className="text-2xl font-bold text-primary mb-4">From ₹800</p>
            <ul className="space-y-2 text-sm text-text-secondary mb-6">
              <li>✓ Complete physical examination</li>
              <li>✓ Weight and body condition scoring</li>
              <li>✓ Core & non-core vaccinations</li>
              <li>✓ Parasite prevention & deworming</li>
              <li>✓ Pet nutrition counseling</li>
              <li>✓ Health record maintenance</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-bold mb-3">Specialist Pet Care</h3>
            <p className="text-text-secondary mb-4">
              Advanced veterinary medicine for complex pet health conditions and chronic diseases
            </p>
            <p className="text-2xl font-bold text-primary mb-4">From ₹1,500</p>
            <ul className="space-y-2 text-sm text-text-secondary mb-6">
              <li>✓ Dermatology (skin & allergy issues)</li>
              <li>✓ Cardiology consultations</li>
              <li>✓ Orthopedic assessments</li>
              <li>✓ Oncology (cancer care)</li>
              <li>✓ Endocrine disorders (diabetes, thyroid)</li>
              <li>✓ Nephrology (kidney disease)</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-bold mb-3">24/7 Emergency Pet Care</h3>
            <p className="text-text-secondary mb-4">
              Immediate veterinary attention for pet emergencies at Kaikondrahalli & Whitefield clinics
            </p>
            <p className="text-2xl font-bold text-primary mb-4">From ₹2,500</p>
            <ul className="space-y-2 text-sm text-text-secondary mb-6">
              <li>✓ 24/7 emergency availability</li>
              <li>✓ Trauma and accident care</li>
              <li>✓ Poisoning and toxicity treatment</li>
              <li>✓ Critical care monitoring</li>
              <li>✓ Emergency surgery facilities</li>
              <li>✓ ICU for critical pets</li>
            </ul>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">What to Expect During Your Pet's Visit</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Before Your Pet's Appointment</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Bring previous vaccination records & medical history</li>
                <li>• List all current medications and supplements</li>
                <li>• Note behavioral changes, appetite issues, or symptoms</li>
                <li>• Keep your pet fasted if surgery/anesthesia planned</li>
                <li>• Bring fresh stool sample for parasite screening</li>
                <li>• Use leash for dogs, secure carrier for cats</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">During Your Pet's Consultation</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Thorough physical exam from nose to tail</li>
                <li>• Temperature, heart rate, and respiration check</li>
                <li>• Dental and oral cavity examination</li>
                <li>• Diagnostic tests (blood work, X-rays) if needed</li>
                <li>• Treatment plan with medication prescriptions</li>
                <li>• Pet care instructions and follow-up schedule</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Available at All Bangalore Locations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-primary mb-2">Kaikondrahalli</h3>
              <p className="text-sm text-text-secondary">65/1C, Sarjapur - Marathahalli Rd, Bengaluru 560035</p>
              <p className="text-sm font-semibold mt-2">08147 006345</p>
              <p className="text-xs text-green-600 mt-1">✓ 24/7 Emergency Available</p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Koramangala</h3>
              <p className="text-sm text-text-secondary">1st Main Cross, Jakkasandra, Bengaluru 560034</p>
              <p className="text-sm font-semibold mt-2">080 2552 5834</p>
              <p className="text-xs text-text-light mt-1">Mon-Sun: 9 AM - 9 PM</p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Whitefield</h3>
              <p className="text-sm text-text-secondary">Ground Floor, Whitefield Main Rd, Bengaluru 560066</p>
              <p className="text-sm font-semibold mt-2">08147 006341</p>
              <p className="text-xs text-green-600 mt-1">✓ 24/7 Emergency Available</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
