import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Input } from '../components/common/Input';

export function BookAppointmentPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [clinics, setClinics] = useState<any[]>([]);
  const [doctors, setDoctors] = useState<any[]>([]);
  const [pets, setPets] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    serviceType: '',
    clinicId: '',
    doctorId: '',
    petId: '',
    appointmentDate: '',
    appointmentTime: '',
    notes: '',
  });

  useEffect(() => {
    if (!user) {
      navigate('/login?redirect=/book-appointment');
      return;
    }
    loadClinics();
    loadPets();
  }, [user]);

  useEffect(() => {
    if (formData.clinicId) {
      loadDoctors(formData.clinicId);
    }
  }, [formData.clinicId]);

  const loadClinics = async () => {
    const { data } = await supabase.from('clinics').select('*');
    if (data) setClinics(data);
  };

  const loadDoctors = async (clinicId: string) => {
    const { data } = await supabase
      .from('doctors')
      .select('*')
      .eq('clinic_id', clinicId);
    if (data) setDoctors(data);
  };

  const loadPets = async () => {
    if (!user?.id) return;
    const { data } = await supabase
      .from('pets')
      .select('*')
      .eq('user_id', user.id);
    if (data) setPets(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    if (!user?.id) return;

    const { error } = await supabase.from('appointments').insert({
      user_id: user.id,
      pet_id: formData.petId,
      clinic_id: formData.clinicId,
      doctor_id: formData.doctorId,
      service_type: formData.serviceType,
      appointment_date: formData.appointmentDate,
      appointment_time: formData.appointmentTime,
      status: 'pending',
      notes: formData.notes,
    });

    if (!error) {
      navigate('/account/appointments?success=true');
    }
  };

  const serviceTypes = [
    'Pet Vaccination (DHPP, FVRCP, Rabies)',
    'General Pet Wellness Consultation',
    'Pet Diagnostics (Blood Test, X-ray, Ultrasound)',
    'Pet Emergency Care',
    'Pet Surgery (Spay/Neuter, Orthopedic)',
    'Pet Dental Care (Scaling, Polishing)',
    'Pet Grooming & Spa Services',
    'Deworming & Parasite Control',
    'Pet Microchipping',
    'Pet Nutrition Consultation',
    'Senior Pet Care & Wellness',
    'Puppy/Kitten First Visit',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary text-white py-12">
        <div className="section-container">
          <h1 className="text-4xl font-bold mb-4">Book Pet Appointment</h1>
          <p className="text-xl">Schedule a veterinary visit for your dog or cat at our Bangalore clinics in 3 easy steps</p>
        </div>
      </div>

      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 flex justify-between items-center">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= s ? 'bg-primary text-white' : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      step > s ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <Card>
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Select Pet Service & Clinic Location</h2>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Pet Healthcare Service *</label>
                    <select
                      className="input-field"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      required
                    >
                      <option value="">Choose a pet service</option>
                      {serviceTypes.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Select Bangalore Clinic Location *</label>
                    <div className="grid gap-4">
                      {clinics.map((clinic) => (
                        <label
                          key={clinic.clinic_id}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                            formData.clinicId === clinic.clinic_id
                              ? 'border-primary bg-purple-50'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          <input
                            type="radio"
                            name="clinic"
                            value={clinic.clinic_id}
                            checked={formData.clinicId === clinic.clinic_id}
                            onChange={(e) => setFormData({ ...formData, clinicId: e.target.value })}
                            className="mr-3"
                            required
                          />
                          <div className="inline-block">
                            <p className="font-semibold">{clinic.name}</p>
                            <p className="text-sm text-text-secondary">{clinic.city} - {clinic.address}</p>
                            <p className="text-sm text-text-light">{clinic.operating_hours}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Choose Veterinarian & Your Pet</h2>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Select Veterinarian *</label>
                    <div className="grid gap-4">
                      {doctors.map((doctor) => (
                        <label
                          key={doctor.doctor_id}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                            formData.doctorId === doctor.doctor_id
                              ? 'border-primary bg-purple-50'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          <input
                            type="radio"
                            name="doctor"
                            value={doctor.doctor_id}
                            checked={formData.doctorId === doctor.doctor_id}
                            onChange={(e) => setFormData({ ...formData, doctorId: e.target.value })}
                            className="mr-3"
                            required
                          />
                          <div className="inline-block">
                            <p className="font-semibold">Dr. {doctor.name}</p>
                            <p className="text-sm text-text-secondary">{doctor.specialization}</p>
                            <p className="text-sm text-text-light">{doctor.qualification}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Select Your Pet (Dog/Cat) *</label>
                    {pets.length === 0 ? (
                      <div className="text-center p-6 bg-gray-50 rounded-lg">
                        <p className="text-text-secondary mb-4">No pets registered in your account</p>
                        <Button onClick={() => navigate('/account/pets')}>Add Your Pet</Button>
                      </div>
                    ) : (
                      <div className="grid gap-4">
                        {pets.map((pet) => (
                          <label
                            key={pet.pet_id}
                            className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                              formData.petId === pet.pet_id
                                ? 'border-primary bg-purple-50'
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            <input
                              type="radio"
                              name="pet"
                              value={pet.pet_id}
                              checked={formData.petId === pet.pet_id}
                              onChange={(e) => setFormData({ ...formData, petId: e.target.value })}
                              className="mr-3"
                              required
                            />
                            <div className="inline-block">
                              <p className="font-semibold">{pet.name}</p>
                              <p className="text-sm text-text-secondary">
                                {pet.type} - {pet.breed} - {pet.age} years
                              </p>
                            </div>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Select Appointment Date & Time</h2>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <Input
                      type="date"
                      label="Appointment Date *"
                      value={formData.appointmentDate}
                      onChange={(e) => setFormData({ ...formData, appointmentDate: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                    <Input
                      type="time"
                      label="Appointment Time *"
                      value={formData.appointmentTime}
                      onChange={(e) => setFormData({ ...formData, appointmentTime: e.target.value })}
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Additional Notes for Veterinarian</label>
                    <textarea
                      className="input-field"
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Any specific pet health concerns, symptoms, behavioral changes, or information for the veterinarian..."
                    />
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                {step > 1 && (
                  <Button type="button" variant="secondary" onClick={() => setStep(step - 1)}>
                    Back
                  </Button>
                )}
                <Button type="submit" className="flex-1">
                  {step === 3 ? 'Confirm Pet Appointment' : 'Next Step'}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
