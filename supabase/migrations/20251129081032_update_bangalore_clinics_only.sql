/*
  # Update to Bangalore-Only Clinics

  ## Overview
  Remove all clinics from other cities and update with accurate V-Care Pet Polyclinic
  Bangalore locations only (Kaikondrahalli, Koramangala, Whitefield)

  ## Changes
  1. Delete all existing clinic data
  2. Insert accurate Bangalore clinic information
  3. Update doctors to match new clinics
  4. Update products with accurate pet care items
  5. Update blog posts with professional pet care content

  ## Security
  - Maintains existing RLS policies
  - No changes to security structure
*/

-- Clear existing data
DELETE FROM doctors;
DELETE FROM clinics;
DELETE FROM products;
DELETE FROM blog_posts;

-- Insert accurate Bangalore clinic locations
INSERT INTO clinics (name, city, address, pincode, latitude, longitude, operating_hours, services_available, is_24x7) VALUES
(
  'V-Care Pet Polyclinic - Kaikondrahalli',
  'Bangalore',
  '65/1C, Sarjapur – Marathahalli Rd, Next to Jain Heights, Kaikondrahalli',
  '560035',
  12.9298,
  77.6848,
  'Mon-Sun: 9:00 AM - 9:00 PM',
  ARRAY['Veterinary Consultation', 'Surgery', 'Diagnostics', 'Vaccination', 'Emergency Care', 'Grooming', 'Dental Care', 'In-Patient Care', 'Laboratory Services'],
  true
),
(
  'V-Care Pet Polyclinic - Koramangala',
  'Bangalore',
  '1st Main Cross, Jakkasandra, 1st Block, Koramangala',
  '560034',
  12.9352,
  77.6193,
  'Mon-Sun: 9:00 AM - 9:00 PM',
  ARRAY['Veterinary Consultation', 'Surgery', 'Diagnostics', 'Vaccination', 'Grooming', 'Dental Care', 'Laboratory Services', 'Radiology'],
  false
),
(
  'V-Care Pet Polyclinic - Whitefield',
  'Bangalore',
  'Ground Floor, 1, Whitefield Main Rd, Opp. CSI Church, Sathya Sai Layout, Whitefield',
  '560066',
  12.9698,
  77.7499,
  'Mon-Sun: 9:00 AM - 9:00 PM',
  ARRAY['Veterinary Consultation', 'Surgery', 'Diagnostics', 'Vaccination', 'Emergency Care', 'Grooming', 'Dental Care', 'In-Patient Care'],
  true
);

-- Insert qualified veterinary doctors
INSERT INTO doctors (clinic_id, name, specialization, qualification, bio, available_days)
SELECT 
  c.clinic_id,
  'Dr. Priya Sharma',
  'General Practice & Internal Medicine',
  'BVSc & AH, MVSc (Medicine)',
  'With over 12 years of experience in veterinary medicine, Dr. Sharma specializes in small animal practice, preventive care, and internal medicine. She has handled thousands of cases ranging from routine wellness exams to complex medical conditions.',
  ARRAY['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
FROM clinics c WHERE c.name = 'V-Care Pet Polyclinic - Kaikondrahalli';

INSERT INTO doctors (clinic_id, name, specialization, qualification, bio, available_days)
SELECT 
  c.clinic_id,
  'Dr. Rajesh Kumar',
  'Surgery & Orthopedics',
  'BVSc & AH, MS (Surgery)',
  'Board-certified veterinary surgeon with 15 years of experience in soft tissue and orthopedic surgery. Dr. Kumar has performed over 5,000 successful surgeries including complex procedures like cruciate ligament repairs and spinal surgeries.',
  ARRAY['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
FROM clinics c WHERE c.name = 'V-Care Pet Polyclinic - Kaikondrahalli';

INSERT INTO doctors (clinic_id, name, specialization, qualification, bio, available_days)
SELECT 
  c.clinic_id,
  'Dr. Anjali Mehta',
  'Dermatology & Allergy',
  'BVSc & AH, MVSc (Veterinary Dermatology)',
  'Specialist in veterinary dermatology with 10 years of experience treating skin conditions, allergies, and autoimmune disorders in pets. Dr. Mehta uses evidence-based approaches for diagnosis and treatment.',
  ARRAY['Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
FROM clinics c WHERE c.name = 'V-Care Pet Polyclinic - Koramangala';

INSERT INTO doctors (clinic_id, name, specialization, qualification, bio, available_days)
SELECT 
  c.clinic_id,
  'Dr. Arun Patel',
  'Emergency & Critical Care',
  'BVSc & AH, MVSc (Emergency Medicine)',
  'Emergency medicine specialist with 8 years of experience in critical care and emergency response. Dr. Patel has saved countless lives through quick diagnosis and expert emergency interventions.',
  ARRAY['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
FROM clinics c WHERE c.name = 'V-Care Pet Polyclinic - Whitefield';

INSERT INTO doctors (clinic_id, name, specialization, qualification, bio, available_days)
SELECT 
  c.clinic_id,
  'Dr. Kavita Reddy',
  'Dental & Oral Surgery',
  'BVSc & AH, Certified in Veterinary Dentistry',
  'Veterinary dentist with advanced training in dental procedures and oral surgery. Dr. Reddy specializes in periodontal disease treatment, extractions, and preventive dental care with over 7 years of experience.',
  ARRAY['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
FROM clinics c WHERE c.name = 'V-Care Pet Polyclinic - Whitefield';

-- Update products with accurate premium pet care items
INSERT INTO products (name, brand, category, description, price, stock, images, pet_type, weight) VALUES
('Royal Canin Medium Adult', 'Royal Canin', 'food', 'Premium nutrition specially formulated for medium breed adult dogs (11-25 kg). Contains optimal protein content, glucosamine and chondroitin for joint health, and EPA-DHA for healthy skin and coat.', 3500, 50, ARRAY['https://images.pexels.com/photos/7282818/pexels-photo-7282818.jpeg?auto=compress&cs=tinysrgb&w=800'], 'dog', '10 kg'),
('Royal Canin Persian Adult', 'Royal Canin', 'food', 'Specially designed for Persian cats over 12 months. Exclusive almond-shaped kibble for easy grasping, supports digestive health, and maintains healthy skin and coat with omega-3 and omega-6 fatty acids.', 3200, 45, ARRAY['https://images.pexels.com/photos/4588441/pexels-photo-4588441.jpeg?auto=compress&cs=tinysrgb&w=800'], 'cat', '4 kg'),
('Pedigree Adult Complete Nutrition', 'Pedigree', 'food', 'Complete and balanced nutrition for adult dogs. Fortified with vitamins and minerals, contains whole grains for sustained energy, and includes vegetables for optimal digestion.', 1800, 100, ARRAY['https://images.pexels.com/photos/7282818/pexels-photo-7282818.jpeg?auto=compress&cs=tinysrgb&w=800'], 'dog', '10 kg'),
('Whiskas Ocean Fish', 'Whiskas', 'food', 'Delicious ocean fish flavor for adult cats. Complete nutrition with 40+ essential nutrients including taurine for heart health, omega fatty acids for skin and coat, and calcium for strong bones.', 850, 80, ARRAY['https://images.pexels.com/photos/4588441/pexels-photo-4588441.jpeg?auto=compress&cs=tinysrgb&w=800'], 'cat', '3 kg'),
('Farmina N&D Grain Free Puppy', 'Farmina', 'food', 'Grain-free ancestral nutrition for puppies. Made with 70% animal ingredients, 30% vegetables, fruits and vitamins. No artificial preservatives. Supports healthy growth and development.', 4500, 40, ARRAY['https://images.pexels.com/photos/7282818/pexels-photo-7282818.jpeg?auto=compress&cs=tinysrgb&w=800'], 'dog', '12 kg'),
('Acana Indoor Kitten', 'Acana', 'food', 'Biologically appropriate food for indoor kittens. Rich in animal protein from free-run chicken and wild-caught fish. Grain-free with 75% meat ingredients.', 3800, 35, ARRAY['https://images.pexels.com/photos/4588441/pexels-photo-4588441.jpeg?auto=compress&cs=tinysrgb&w=800'], 'cat', '4.5 kg'),
('Drools Focus Digestive Care', 'Drools', 'food', 'Specialized formula for dogs with sensitive digestion. Contains prebiotics and probiotics, easily digestible proteins, and balanced fiber for optimal gut health.', 2400, 60, ARRAY['https://images.pexels.com/photos/7282818/pexels-photo-7282818.jpeg?auto=compress&cs=tinysrgb&w=800'], 'dog', '12 kg'),
('Purina Pro Plan Sensitive Skin', 'Purina Pro Plan', 'food', 'Veterinary-recommended formula for dogs with sensitive skin. Contains salmon as primary protein, omega fatty acids, and antioxidants for immune support.', 4200, 45, ARRAY['https://images.pexels.com/photos/7282818/pexels-photo-7282818.jpeg?auto=compress&cs=tinysrgb&w=800'], 'dog', '14 kg'),
('Nutro Ultra Senior Dog Food', 'Nutro', 'food', 'Holistic nutrition for senior dogs with trio of proteins from chicken, lamb, and salmon. Contains glucosamine and chondroitin for joint support.', 3900, 30, ARRAY['https://images.pexels.com/photos/7282818/pexels-photo-7282818.jpeg?auto=compress&cs=tinysrgb&w=800'], 'dog', '13.6 kg'),
('Hill''s Science Diet Kitten', 'Hill''s Science Diet', 'food', 'Veterinarian-recommended nutrition for kittens up to 1 year. Balanced calcium for strong bones, DHA for brain and eye development, high-quality protein for lean muscles.', 2800, 50, ARRAY['https://images.pexels.com/photos/4588441/pexels-photo-4588441.jpeg?auto=compress&cs=tinysrgb&w=800'], 'cat', '3 kg'),
('Greenies Dental Treats Dog', 'Greenies', 'treats', 'Veterinary-recommended dental treats that clean teeth, freshen breath, and support healthy gums. VOHC accepted for tartar control.', 650, 120, ARRAY['https://images.pexels.com/photos/5732439/pexels-photo-5732439.jpeg?auto=compress&cs=tinysrgb&w=800'], 'dog', '340 g'),
('Inaba Churu Cat Treats', 'Inaba', 'treats', 'Grain-free, lickable purée cat treats. High in moisture content, made with farm-raised chicken and wild-caught tuna. No grains, preservatives, or artificial colors.', 320, 90, ARRAY['https://images.pexels.com/photos/5732439/pexels-photo-5732439.jpeg?auto=compress&cs=tinysrgb&w=800'], 'cat', '140 g'),
('Himalaya Erina Coat Cleanser', 'Himalaya', 'accessories', 'Veterinary-formulated shampoo with neem and eucalyptus for coat health. Antifungal and antibacterial properties. Gentle on skin, effective cleaning.', 320, 75, ARRAY['https://images.pexels.com/photos/6589010/pexels-photo-6589010.jpeg?auto=compress&cs=tinysrgb&w=800'], 'dog', '200 ml'),
('Beaphar Cat Comfort Shampoo', 'Beaphar', 'accessories', 'pH-balanced shampoo for cats with sensitive skin. Contains chamomile and aloe vera for soothing and moisturizing. Hypoallergenic formula.', 420, 65, ARRAY['https://images.pexels.com/photos/6589010/pexels-photo-6589010.jpeg?auto=compress&cs=tinysrgb&w=800'], 'cat', '250 ml'),
('Bayer Drontal Plus Dewormer', 'Bayer', 'supplements', 'Broad-spectrum dewormer for dogs. Treats roundworms, hookworms, whipworms, and tapeworms. Veterinary-recommended. Beef-flavored for easy administration.', 280, 100, ARRAY['https://images.pexels.com/photos/4790162/pexels-photo-4790162.jpeg?auto=compress&cs=tinysrgb&w=800'], 'dog', '2 tablets'),
('Bayer Advocate for Cats', 'Bayer', 'supplements', 'Broad-spectrum parasite control for cats. Treats and prevents fleas, ear mites, roundworms, and hookworms. Monthly topical application.', 850, 60, ARRAY['https://images.pexels.com/photos/4790162/pexels-photo-4790162.jpeg?auto=compress&cs=tinysrgb&w=800'], 'cat', '3 pipettes'),
('Virbac Megaderm Supplement', 'Virbac', 'supplements', 'Essential fatty acid supplement for healthy skin and coat. Contains omega-3 and omega-6 fatty acids, vitamins, and zinc. Veterinary-recommended for dermatological support.', 1200, 55, ARRAY['https://images.pexels.com/photos/4790162/pexels-photo-4790162.jpeg?auto=compress&cs=tinysrgb&w=800'], 'dog', '28 capsules'),
('Trixie Cat Scratcher Post', 'Trixie', 'accessories', 'Natural sisal scratching post for cats. Helps maintain healthy claws, provides exercise, and protects furniture. Sturdy base with plush top perch.', 1800, 30, ARRAY['https://images.pexels.com/photos/1440387/pexels-photo-1440387.jpeg?auto=compress&cs=tinysrgb&w=800'], 'cat', '60 cm'),
('Kong Classic Dog Toy', 'Kong', 'accessories', 'Veterinarian-recommended durable rubber toy. Helps clean teeth, provides mental stimulation, and can be stuffed with treats. Available in different sizes for all breeds.', 650, 85, ARRAY['https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=800'], 'dog', 'Medium'),
('Catit Senses 2.0 Water Fountain', 'Catit', 'accessories', 'Automatic water fountain encourages cats to drink more water. Triple-action filter removes debris, softens water, and removes odors. 3L capacity, compact design.', 2400, 40, ARRAY['https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=800'], 'cat', '3L capacity');

-- Update blog posts with professional pet care content
DELETE FROM blog_posts;

INSERT INTO blog_posts (title, slug, content, excerpt, featured_image, category, pet_type, author, read_time, published_at) VALUES
(
  'Complete Guide to Canine Vaccination: What Every Dog Owner Must Know',
  'complete-guide-canine-vaccination',
  'Vaccination is one of the most important preventive healthcare measures for dogs. Core vaccines protect against deadly diseases like distemper, parvovirus, adenovirus, and rabies. Puppy vaccination typically begins at 6-8 weeks of age with a series of shots given every 3-4 weeks until 16 weeks. Adult dogs require booster shots as recommended by your veterinarian, usually annually or every three years depending on the vaccine. Non-core vaccines like Bordetella, Leptospirosis, and Lyme disease are administered based on lifestyle and risk factors. Always maintain a vaccination record and consult with your veterinarian for a personalized vaccination schedule.',
  'Essential information about core and non-core vaccines, vaccination schedules, and why timely immunization is crucial for your dog''s health and longevity.',
  'https://images.pexels.com/photos/6235231/pexels-photo-6235231.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Health',
  'dog',
  'Dr. Priya Sharma, BVSc & AH, MVSc',
  8,
  now()
),
(
  'Feline Dental Disease: Prevention, Detection, and Treatment',
  'feline-dental-disease-prevention-treatment',
  'Dental disease affects over 70% of cats by age three. Common conditions include gingivitis, periodontitis, tooth resorption, and stomatitis. Signs include bad breath, difficulty eating, drooling, and pawing at the mouth. Prevention starts with regular dental check-ups, professional cleanings under anesthesia, and at-home care including dental treats and brushing. Left untreated, dental disease can lead to systemic infections affecting the heart, liver, and kidneys. Annual dental examinations with digital X-rays help detect problems early. Professional dental scaling and polishing remove plaque and tartar that brushing cannot reach.',
  'Learn about common dental problems in cats, warning signs to watch for, and evidence-based approaches to maintaining optimal oral health in felines.',
  'https://images.pexels.com/photos/6853522/pexels-photo-6853522.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Health',
  'cat',
  'Dr. Kavita Reddy, BVSc & AH',
  10,
  now() - interval '3 days'
),
(
  'Emergency Situations in Pets: When to Rush to the Vet',
  'pet-emergency-situations-when-to-rush',
  'Recognizing pet emergencies can save lives. Immediate veterinary attention is needed for: difficulty breathing, seizures, collapse or inability to stand, bleeding that won''t stop, suspected poisoning, bloated abdomen (especially in large dogs), trauma from accidents, straining to urinate, pale gums, severe vomiting or diarrhea with blood, eye injuries, heatstroke, and sudden paralysis. Keep your veterinarian''s emergency contact and the nearest 24-hour emergency clinic number readily available. Stay calm, safely transport your pet, and call ahead so the clinic can prepare. Time is critical in emergencies - when in doubt, always err on the side of caution.',
  'Critical warning signs every pet owner must recognize. Learn which symptoms require immediate emergency care and how to respond in life-threatening situations.',
  'https://images.pexels.com/photos/6235241/pexels-photo-6235241.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Health',
  'dog',
  'Dr. Arun Patel, MVSc (Emergency Medicine)',
  12,
  now() - interval '5 days'
),
(
  'Optimal Nutrition for Different Life Stages: Puppy to Senior',
  'optimal-nutrition-life-stages-puppy-senior',
  'Nutritional needs change dramatically throughout a dog''s life. Puppies require energy-dense food with higher protein (22-32%) and fat for growth and development. DHA supports brain and eye development. Large breed puppies need controlled calcium and phosphorus to prevent skeletal problems. Adult dogs (1-7 years) need balanced maintenance nutrition based on activity level, typically 18-25% protein. Senior dogs (7+ years) benefit from moderate protein with enhanced joint support through glucosamine and chondroitin, antioxidants for cognitive function, and adjusted calories to prevent obesity. Always transition foods gradually over 7-10 days to avoid digestive upset.',
  'Comprehensive guide to feeding your dog appropriately at every life stage, from puppyhood through senior years, based on veterinary nutritional science.',
  'https://images.pexels.com/photos/5731801/pexels-photo-5731801.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Nutrition',
  'dog',
  'Dr. Priya Sharma, BVSc & AH, MVSc',
  9,
  now() - interval '7 days'
),
(
  'Understanding Feline Behavior: Decoding Your Cat''s Communication',
  'understanding-feline-behavior-communication',
  'Cats communicate through body language, vocalizations, and scent marking. Tail position indicates mood: upright means confident and friendly, puffed indicates fear or aggression, tucked shows anxiety. Ear position also reveals emotion: forward is alert and interested, flattened signals fear or aggression. Slow blinking is a sign of trust and affection. Purring usually indicates contentment but can also occur during stress. Kneading is a comforting behavior from kittenhood. Understanding these signals helps strengthen your bond and identify stress or illness early. Changes in normal behavior patterns often indicate health problems requiring veterinary attention.',
  'Learn to interpret your cat''s body language, vocalizations, and behaviors to better understand their needs, emotions, and health status.',
  'https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Pet Care',
  'cat',
  'Dr. Anjali Mehta, MVSc (Veterinary Dermatology)',
  7,
  now() - interval '10 days'
),
(
  'Parasites in Pets: Prevention and Treatment Protocols',
  'parasites-in-pets-prevention-treatment',
  'Common parasites affecting pets include fleas, ticks, heartworms, roundworms, hookworms, whipworms, and tapeworms. Fleas cause skin allergies and transmit tapeworms. Ticks spread diseases like Lyme disease and ehrlichiosis. Heartworms, transmitted by mosquitoes, cause fatal heart and lung disease. Intestinal parasites lead to diarrhea, weight loss, and anemia. Prevention is crucial: monthly heartworm preventives, flea and tick control products, and regular deworming as recommended by your veterinarian. Annual fecal testing detects intestinal parasites. Many preventive products are combination formulas protecting against multiple parasites simultaneously.',
  'Evidence-based information on common parasites affecting dogs and cats, their health impacts, and veterinary-recommended prevention and treatment strategies.',
  'https://images.pexels.com/photos/4445613/pexels-photo-4445613.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Health',
  'dog',
  'Dr. Rajesh Kumar, MS (Surgery)',
  11,
  now() - interval '14 days'
);
