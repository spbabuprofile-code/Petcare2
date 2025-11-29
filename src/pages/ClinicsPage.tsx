import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';

export function ClinicsPage() {
  const navigate = useNavigate();
  const [clinics, setClinics] = useState<any[]>([]);
  const [selectedCity, setSelectedCity] = useState('all');
  const [filteredClinics, setFilteredClinics] = useState<any[]>([]);

  useEffect(() => {
    loadClinics();
  }, []);

  useEffect(() => {
    if (selectedCity === 'all') {
      setFilteredClinics(clinics);
    } else {
      setFilteredClinics(clinics.filter(c => c.city === selectedCity));
    }
  }, [selectedCity, clinics]);

  const loadClinics = async () => {
    const { data } = await supabase.from('clinics').select('*').order('city');
    if (data) {
      setClinics(data);
      setFilteredClinics(data);
    }
  };

  const cities = ['all', ...Array.from(new Set(clinics.map(c => c.city)))];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary text-white py-12">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Clinics</h1>
          <p className="text-xl">45+ clinics across 11 cities providing world-class pet care</p>
        </div>
      </div>

      <div className="section-container">
        <div className="mb-8">
          <h3 className="font-semibold mb-4">Filter by City</h3>
          <div className="flex flex-wrap gap-3">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedCity === city
                    ? 'bg-primary text-white'
                    : 'bg-white text-text-primary border border-gray-300 hover:border-primary'
                }`}
              >
                {city === 'all' ? 'All Cities' : city}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClinics.map((clinic) => (
            <Card key={clinic.clinic_id}>
              <div className="mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-blue-100 rounded-lg mb-4 flex items-center justify-center text-6xl">
                  🏥
                </div>
                <h3 className="text-xl font-bold mb-2">{clinic.name}</h3>
                <p className="text-sm text-text-secondary mb-1">📍 {clinic.address}</p>
                <p className="text-sm text-text-secondary mb-1">🏙️ {clinic.city} - {clinic.pincode}</p>
                <p className="text-sm text-text-secondary mb-2">🕒 {clinic.operating_hours}</p>
                {clinic.is_24x7 && (
                  <span className="inline-block bg-accent-green text-white text-xs px-2 py-1 rounded-full">
                    24/7 Available
                  </span>
                )}
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium mb-2">Services Available:</p>
                <div className="flex flex-wrap gap-2">
                  {clinic.services_available.slice(0, 3).map((service: string, i: number) => (
                    <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {service}
                    </span>
                  ))}
                  {clinic.services_available.length > 3 && (
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      +{clinic.services_available.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              <Button fullWidth onClick={() => navigate('/book-appointment')}>
                Book Appointment
              </Button>
            </Card>
          ))}
        </div>

        {filteredClinics.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-text-secondary">No clinics found in this city</p>
          </div>
        )}
      </div>
    </div>
  );
}
