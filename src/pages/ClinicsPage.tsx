import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Card } from '../components/common/Card';

export function ClinicsPage() {
  const [clinics, setClinics] = useState<any[]>([]);

  useEffect(() => {
    loadClinics();
  }, []);

  const loadClinics = async () => {
    const { data } = await supabase.from('clinics').select('*').order('name');
    if (data) {
      setClinics(data);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary text-white py-12">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Bangalore Pet Clinics</h1>
          <p className="text-xl">Three state-of-the-art veterinary hospitals across Bangalore providing expert care for dogs and cats</p>
        </div>
      </div>

      <div className="section-container">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Premium Pet Healthcare Across Bangalore</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Each V-Care Pet Polyclinic location features advanced diagnostic equipment (digital X-ray, ultrasound, in-house laboratory),
            modern surgical suites, dental care facilities, pet pharmacy, grooming services, and experienced veterinarians
            specializing in canine and feline medicine. Two locations offer 24/7 emergency pet care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinics.map((clinic) => (
            <Card key={clinic.clinic_id}>
              <div className="mb-4">
                <img
                  src="https://images.pexels.com/photos/6234623/pexels-photo-6234623.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt={`${clinic.name} - V-Care Pet Polyclinic`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-3">{clinic.name.replace('V-Care Pet Polyclinic - ', '')} Pet Hospital</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-text-secondary flex items-start">
                    <span className="mr-2 mt-0.5">📍</span>
                    <span>
                      {clinic.name.includes('Kaikondrahalli') && '65/1C, Sarjapur – Marathahalli Rd, Next to Jain Heights, Kaikondrahalli, Bengaluru 560035'}
                      {clinic.name.includes('Koramangala') && '1st Main Cross, Jakkasandra, 1st Block, Koramangala, Bengaluru 560034'}
                      {clinic.name.includes('Whitefield') && 'Ground Floor, 1, Whitefield Main Rd, Opp. CSI Church, Sathya Sai Layout, Bengaluru 560066'}
                    </span>
                  </p>
                  <p className="text-sm font-semibold text-primary flex items-center">
                    <span className="mr-2">📞</span>
                    {clinic.name.includes('Kaikondrahalli') ? '08147 006345' : clinic.name.includes('Koramangala') ? '080 2552 5834' : '08147 006341'}
                  </p>
                  <p className="text-sm text-text-secondary flex items-center">
                    <span className="mr-2">🕒</span>
                    {clinic.is_24x7 ? '24/7 Open - Round-the-clock Emergency Care' : 'Mon-Sun: 9:00 AM - 9:00 PM'}
                  </p>
                  {clinic.is_24x7 && (
                    <span className="inline-block bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      🚑 24/7 Emergency Pet Hospital
                    </span>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2 text-primary">Pet Healthcare Services:</p>
                <div className="flex flex-wrap gap-2">
                  {['Vet Consultation', 'Pet Surgery', 'Diagnostics', 'Dental Care', 'Vaccination', 'Pet Grooming', 'Emergency Care', 'Pet ICU'].map((service: string, i: number) => (
                    <span key={i} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded font-medium">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {clinics.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-text-secondary">Loading clinics...</p>
          </div>
        )}
      </div>
    </div>
  );
}
