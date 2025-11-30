import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';

const services = [
  {
    id: 1,
    title: 'General Care & Veterinary Consultation',
    description: 'Our experienced vets provide routine health check-ups, treatment for illnesses, and personalized care to ensure your pet stays in the best health.',
    image: '/14.jpg',
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
    image: '/15.jpg',
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
    image: '/16.jpg',
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
    image: '/17.jpg',
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
    image: '/18.jpg',
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
    image: '/20.jpg',
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
    image: '/19.jpg',
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
    image: '/21.jpg',
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

const faqs = [
  {
    question: 'How can I book an appointment for my pet?',
    answer: 'You can easily book an appointment through our website or mobile app. Simply select a service, choose a time, and confirm your booking.'
  },
  {
    question: 'Do I need an appointment for emergency care?',
    answer: 'No appointment is required for emergencies. You can bring your pet to our clinic immediately, and our team will provide urgent care.'
  },
  {
    question: 'What does a routine health check-up include?',
    answer: 'Our routine check-ups cover a physical examination, assessment of vital signs, and a discussion about your pet\'s diet, behaviour, and overall health.'
  },
  {
    question: 'How often should my pet get vaccinated?',
    answer: 'Puppies and kittens require a series of vaccinations, while adult pets need annual boosters. Our vets will create a tailored schedule for your pet.'
  },
  {
    question: 'What services are included in pet grooming?',
    answer: 'Our grooming services include spa baths, haircuts, trims, ear cleaning, and nail trimming, ensuring your pet looks and feels their best.'
  },
  {
    question: 'How long does post-surgery recovery take?',
    answer: 'Recovery time depends on the type of surgery. Our vets will provide a detailed recovery plan, including follow-up visits and at-home care instructions.'
  },
  {
    question: 'Can you diagnose health issues onsite?',
    answer: 'Yes, we offer in-house diagnostics, including blood tests, imaging, and urine analysis, for quick and accurate results during your visit.'
  },
  {
    question: 'What should I bring to my vet consultation?',
    answer: 'Bring your pet\'s medical history, vaccination records, and any medications they are currently taking to ensure comprehensive care.'
  },
  {
    question: 'Are there any membership plans or discounts available?',
    answer: 'Yes, we offer membership plans that include discounted services and priority appointments. Contact us for more details about ongoing promotions.'
  }
];

export function ServicesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

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
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-600">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 mb-12">Everything you need to know about our pet healthcare services</p>

          <div className="max-w-4xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-left">{faq.question}</span>
                  <div className="ml-4 flex-shrink-0">
                    {openFaqIndex === index ? (
                      <div className="w-6 h-6 rounded-full border-2 border-gray-900 flex items-center justify-center">
                        <ChevronUp className="w-4 h-4 text-gray-900" />
                      </div>
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>

                {openFaqIndex === index && (
                  <div className="px-6 pb-4 pt-0">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
