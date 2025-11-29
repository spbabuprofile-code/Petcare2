import { Card } from '../components/common/Card';

export function AboutPage() {

  return (
    <div className="min-h-screen">
      <section className="bg-primary text-white py-16">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About V-Care Pet Polyclinic</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Bangalore's premier pet healthcare destination specializing in comprehensive veterinary medicine for dogs and cats with state-of-the-art diagnostic facilities and experienced veterinary specialists
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission: Exceptional Pet Healthcare</h2>
            <p className="text-lg text-text-secondary mb-4">
              V-Care Pet Polyclinic is dedicated to providing world-class veterinary care for dogs and cats across Bangalore.
              Our mission is to enhance the health, happiness, and longevity of pets through evidence-based medicine,
              compassionate care, and client education. We treat every pet as a valued family member deserving of the finest medical attention.
            </p>
            <p className="text-lg text-text-secondary mb-4">
              Operating from three advanced veterinary facilities in Kaikondrahalli, Koramangala, and Whitefield,
              we serve pet parents throughout Bangalore with comprehensive services including preventive care,
              advanced diagnostics (digital X-ray, ultrasound, in-house laboratory), surgical procedures,
              dental care, emergency medicine, and specialized treatments for complex pet health conditions.
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
          <h2 className="text-3xl font-bold text-center mb-12">Why Pet Parents Choose V-Care</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold mb-2">Advanced Pet Diagnostic Center</h3>
              <p className="text-text-secondary">
                Digital X-ray, ultrasound, ECG, complete blood count (CBC), biochemistry profiles, urinalysis, fecal testing, and cytology for accurate pet diagnosis
              </p>
            </Card>
            <Card>
              <div className="text-5xl mb-4">🐶</div>
              <h3 className="text-xl font-semibold mb-2">Experienced Veterinary Team</h3>
              <p className="text-text-secondary">
                Board-certified veterinarians specializing in small animal medicine, surgery, dermatology, cardiology, and emergency care for dogs and cats
              </p>
            </Card>
            <Card>
              <div className="text-5xl mb-4">🚑</div>
              <h3 className="text-xl font-semibold mb-2">24/7 Emergency Pet Hospital</h3>
              <p className="text-text-secondary">
                Round-the-clock critical care at Kaikondrahalli & Whitefield for pet emergencies, trauma, poisoning, and life-threatening conditions
              </p>
            </Card>
            <Card>
              <div className="text-5xl mb-4">⚕️</div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Pet Surgery</h3>
              <p className="text-text-secondary">
                Advanced surgical suite with modern anesthesia monitoring, sterile environment, and post-operative ICU for spay/neuter, orthopedic, and soft tissue surgeries
              </p>
            </Card>
            <Card>
              <div className="text-5xl mb-4">🦷</div>
              <h3 className="text-xl font-semibold mb-2">Pet Dental Care Center</h3>
              <p className="text-text-secondary">
                Professional dental scaling, polishing, extractions, and oral surgery with safe anesthesia protocols for maintaining your pet's oral health
              </p>
            </Card>
            <Card>
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Pet Vaccination Programs</h3>
              <p className="text-text-secondary">
                Core vaccinations (DHPP, FVRCP, Rabies) and non-core vaccines (Bordetella, Leptospirosis, FeLV) with customized immunization schedules
              </p>
            </Card>
          </div>
        </div>
      </section>


      <section className="section-container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Bangalore Pet Clinic Locations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Kaikondrahalli Pet Clinic',
              address: '65/1C, Sarjapur – Marathahalli Rd, Next to Jain Heights, Kaikondrahalli, Bengaluru 560035',
              phone: '08147 006345',
              emergency: true,
              services: 'Full-service veterinary hospital with 24/7 emergency care, surgery, diagnostics, and pet ICU'
            },
            {
              name: 'Koramangala Pet Clinic',
              address: '1st Main Cross, Jakkasandra, 1st Block, Koramangala, Bengaluru 560034',
              phone: '080 2552 5834',
              emergency: false,
              services: 'Comprehensive pet healthcare, vaccination, grooming, diagnostics, and dental care'
            },
            {
              name: 'Whitefield Pet Clinic',
              address: 'Ground Floor, 1, Whitefield Main Rd, Opp. CSI Church, Sathya Sai Layout, Bengaluru 560066',
              phone: '08147 006341',
              emergency: true,
              services: 'Advanced veterinary facility with 24/7 emergency services, surgery, and specialized pet care'
            },
          ].map((location) => (
            <Card key={location.name}>
              <h3 className="text-xl font-bold mb-3 text-primary">{location.name}</h3>
              <p className="text-sm text-text-secondary mb-3">{location.address}</p>
              <p className="text-sm font-semibold mb-2">📞 {location.phone}</p>
              <p className="text-xs text-text-light mb-3">{location.services}</p>
              {location.emergency && (
                <span className="inline-block bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  🚑 24/7 Emergency Pet Care
                </span>
              )}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
