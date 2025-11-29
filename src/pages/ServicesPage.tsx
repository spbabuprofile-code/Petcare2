import { Link } from 'react-router-dom';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';

const services = [
  {
    id: 1,
    title: 'General Care & Veterinary Consultation',
    description: 'Our experienced vets provide routine health check-ups, treatment for illnesses, and personalized care to ensure your pet stays in the best health.',
    image: '/1.jpg',
    link: '/services/consultation',
    features: [
      'Comprehensive Health Check-ups',
      'Body, Weight and Thyroid Care',
      'Dental',
      'Dermatology',
      'Tick & Flea Control'
    ]
  },
  {
    id: 2,
    title: 'Vaccination',
    description: 'Timely reminder and internationally recognised vaccines for your pet\'s protection. Book from the app for consultation within 18 seconds.',
    image: '/3.jpg',
    link: '/services/vaccination',
    features: [
      'Puppy & Kitten Vaccination',
      'Dog',
      'Cat',
      'Rabies'
    ]
  },
  {
    id: 3,
    title: 'In-House Diagnostics',
    description: 'Accurate blood, biochemistry and imaging tests provide insights into your pet\'s health, helping diagnose issues with a range of conditions.',
    image: '/4.jpg',
    link: '/services/diagnostics',
    features: [
      'Blood Tests',
      'Biochemistry Test',
      'X-ray & Imaging',
      'Ultrasound Testing',
      'Urinalysis',
      'Endoscopy'
    ]
  },
  {
    id: 4,
    title: 'Surgery',
    description: 'We have cutting-edge and sterile surgical capacity and technology. Our team of vets has the leading veterinary surgeons and veterinary support staff.',
    image: '/5.jpg',
    link: '/services/surgery',
    features: [
      'Elective Surgery',
      'Emergency Surgery',
      'Orthopedic Surgery',
      'Neutering & Spaying',
      'Soft Tissue Surgery',
      'Laparoscopy'
    ]
  },
  {
    id: 5,
    title: 'Pet Physiotherapy',
    description: 'Our physiotherapy services help your pet with mobility issues, helping them recover from surgery, injury or illness.',
    image: '/6.jpg',
    link: '/services/physiotherapy',
    features: [
      'Post-surgery recovery',
      'Hip dysplasia',
      'Arthritis Management',
      'Paralysis & IVDD',
      'PTRP'
    ]
  },
  {
    id: 6,
    title: 'Pet Grooming',
    description: 'From a routine trim to regular bathing - pampers healthcare for all pets. Trusted professional groomers and affordable spa therapy.',
    image: '/8.jpg',
    link: '/services/grooming',
    features: [
      'Full Grooming',
      'Cat-Box Bath',
      'Cat Haircut',
      'Dog Haircut',
      'Nail Trimming',
      'Dog Bathing'
    ]
  },
  {
    id: 7,
    title: 'Intensive Care',
    description: 'In critical care our ICU is monitoring for pets who need close observation. All the equipment required is available: trauma, fracture and vital diseases.',
    image: '/9.jpg',
    link: '/services/emergency',
    features: [
      'Emergency Care',
      'Post-Surgery Care',
      'Advanced Trauma Care',
      'Oxygen Therapy',
      'Acute Care & Management'
    ]
  },
  {
    id: 8,
    title: 'Pet Supplies',
    description: 'International brands of pet food, pet cafe, toys, collars, dog bamboo and essential care items all in one place.',
    image: '/10.jpg',
    link: '/shop',
    features: [
      'Dog Food & Treats',
      'Cat Food',
      'Puppy Food Treats',
      'Kitten Food',
      'Toys & Cat Toys'
    ]
  }
];

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-r from-blue-50 to-blue-100 py-16 overflow-hidden">
        <div className="section-container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Holistic Pet Care Solutions</span>
              <span className="text-gray-900"> — From Check-Ups to Grooming</span>
            </h1>
            <Button
              variant="primary"
              onClick={() => window.location.href = '/book-appointment'}
              className="mt-4"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </div>

      <div className="section-container py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Caring for your Pets with Love and Expertise: Comprehensive Pet Services at V-Care Pet Polyclinic
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            At V-Care, we offer holistic pet healthcare, from expert vet consultations to professional grooming and in-house diagnostics.
            Our compassionate team ensures your pet's health and happiness with convenient, stress-free care.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            V-Care Pet Polyclinic's Full Range of Pet Healthcare Services
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.link}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 mb-8">Everything you need to know about our pet healthcare services</p>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              'How can I book an appointment for my pet?',
              'Do I need an appointment for emergency care?',
              'What does a routine health check-up include?',
              'How often should my pet get vaccinated?',
              'What services are included in pet grooming?',
              'How long does post-surgery recovery take?',
              'Can you diagnose health issues onsite?',
              'What should I bring to my vet consultation?',
              'Are there any membership plans or discounts available?'
            ].map((question, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-900">{question}</p>
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
