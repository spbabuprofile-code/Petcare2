import { Link } from 'react-router-dom';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';

export function ConsultationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-r from-purple-50 to-purple-100 overflow-hidden">
        <div className="section-container py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-red-500">Trusted Vet Consultation Near You</span>{' '}
                <span className="text-gray-900">Compassionate Care by Expert Vets</span>
              </h1>
              <Link to="/book-appointment">
                <Button variant="primary" className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  Book Appointment
                </Button>
              </Link>

              <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl">
                <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <div className="text-3xl mb-2">📋</div>
                  <div className="text-sm font-bold text-gray-900">125K+ Pets Served</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <div className="text-3xl mb-2">👤</div>
                  <div className="text-sm font-bold text-gray-900">150+ Caring Vets</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <div className="text-3xl mb-2">🏥</div>
                  <div className="text-sm font-bold text-gray-900">24/7 Care Available</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/8.jpg"
                alt="Veterinarian with dog"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section-container py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Why Choose V-Care Pet Polyclinic for Vet Consultation Near You?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="overflow-hidden">
            <img
              src="/9.jpg"
              alt="Experienced, Multi-Speciality Vets"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Experienced, Multi-Speciality Vets</h3>
              <p className="text-gray-600">
                Whether it's a regular pet check-up or urgent pet care, consult our vets for holistic pet healthcare.
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/10.jpg"
              alt="Advanced Medical Facilities"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Medical Facilities</h3>
              <p className="text-gray-600">
                Our modern operation theatres, in-house diagnostics including X-ray and ultrasound, and in-house pharmacy testify our excellence in pet healthcare.
              </p>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="overflow-hidden">
            <img
              src="/11.jpg"
              alt="24/7 Veterinarian Availability"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Veterinarian Availability</h3>
              <p className="text-gray-600">
                Our experienced, senior vets near you available 24/7 to help you with your pet healthcare needs.
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/12.jpg"
              alt="Specialised Care"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Specialised Care</h3>
              <p className="text-gray-600">
                Experienced vet consultation available for senior pets, young pets (puppies & kittens), special needs, and holistic cancer treatments.
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/13.jpg"
              alt="Modern Clinics"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Clinics</h3>
              <p className="text-gray-600">
                Step into clean, spacious clinics near you for vet consultation. Complete full health checkup in a stress-free environment.
              </p>
            </div>
          </Card>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Comprehensive Pet Health Assessments
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our veterinary consultations include thorough physical examinations, behavioral assessments, nutritional counseling, and preventive care planning. Our veterinarians are experienced in treating dogs and cats of all breeds and ages, from puppies and kittens to senior pets requiring specialized geriatric care.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              'Complete nose-to-tail physical examination',
              'Vaccination assessment and administration',
              'Parasite screening and deworming',
              'Nutritional and dietary recommendations',
              'Behavioral counseling for dogs and cats',
              'Microchipping services',
              'Senior pet wellness programs',
              'Puppy and kitten care packages'
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="text-primary text-xl mr-3">✓</div>
                  <p className="text-sm text-gray-700 font-medium">{service}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/book-appointment">
              <Button variant="primary" className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Veterinary Consultation Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">General Pet Wellness</h3>
              <p className="text-gray-600 mb-4">
                Routine health check-ups for dogs and cats, preventive care, and vaccination programs
              </p>
              <p className="text-3xl font-bold text-primary mb-4">From ₹800</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>✓ Complete physical examination</li>
                <li>✓ Weight and body condition scoring</li>
                <li>✓ Core & non-core vaccinations</li>
                <li>✓ Parasite prevention & deworming</li>
                <li>✓ Pet nutrition counseling</li>
                <li>✓ Health record maintenance</li>
              </ul>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 border-primary">
              <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Specialist Pet Care</h3>
              <p className="text-gray-600 mb-4">
                Advanced veterinary medicine for complex pet health conditions and chronic diseases
              </p>
              <p className="text-3xl font-bold text-primary mb-4">From ₹1,500</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>✓ Dermatology (skin & allergy issues)</li>
                <li>✓ Cardiology consultations</li>
                <li>✓ Orthopedic assessments</li>
                <li>✓ Oncology (cancer care)</li>
                <li>✓ Endocrine disorders (diabetes, thyroid)</li>
                <li>✓ Nephrology (kidney disease)</li>
              </ul>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">24/7 Emergency Pet Care</h3>
              <p className="text-gray-600 mb-4">
                Immediate veterinary attention for pet emergencies at Kaikondrahalli & Whitefield clinics
              </p>
              <p className="text-3xl font-bold text-primary mb-4">From ₹2,500</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>✓ 24/7 emergency availability</li>
                <li>✓ Trauma and accident care</li>
                <li>✓ Poisoning and toxicity treatment</li>
                <li>✓ Critical care monitoring</li>
                <li>✓ Emergency surgery facilities</li>
                <li>✓ ICU for critical pets</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What to Expect During Your Pet's Visit
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="bg-purple-50">
              <h3 className="text-xl font-bold mb-4 text-primary">Before Your Pet's Appointment</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Bring previous vaccination records & medical history</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>List all current medications and supplements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Note behavioral changes, appetite issues, or symptoms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Keep your pet fasted if surgery/anesthesia planned</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Bring fresh stool sample for parasite screening</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Use leash for dogs, secure carrier for cats</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-blue-50">
              <h3 className="text-xl font-bold mb-4 text-primary">During Your Pet's Consultation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Thorough physical exam from nose to tail</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Temperature, heart rate, and respiration check</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Dental and oral cavity examination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Diagnostic tests (blood work, X-rays) if needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Treatment plan with medication prescriptions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Pet care instructions and follow-up schedule</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Visit Our Clinics in Bangalore
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Professional veterinary consultation services available at all three V-Care Pet Polyclinic locations across Bangalore.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">Kaikondrahalli</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">
                65/1C, Sarjapur – Marathahalli Rd, Next to Jain Heights, Kaikondrahalli, Bengaluru 560035
              </p>
              <p className="text-sm font-semibold text-primary mb-2">📞 08147 006345</p>
              <p className="text-xs text-green-600 font-semibold">✓ 24/7 Emergency Available</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">Koramangala</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">
                1st Main Cross, Jakkasandra, 1st Block, Koramangala, Bengaluru 560034
              </p>
              <p className="text-sm font-semibold text-primary mb-2">📞 080 2552 5834</p>
              <p className="text-xs text-gray-500">Mon-Sun: 9 AM - 9 PM</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">Whitefield</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">
                Ground Floor, 1, Whitefield Main Rd, Opp. CSI Church, Sathya Sai Layout, Whitefield, Bengaluru 560066
              </p>
              <p className="text-sm font-semibold text-primary mb-2">📞 08147 006341</p>
              <p className="text-xs text-green-600 font-semibold">✓ 24/7 Emergency Available</p>
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
