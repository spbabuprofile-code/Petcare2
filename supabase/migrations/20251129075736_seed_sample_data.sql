/*
  # Seed Sample Data for V-Care Pet Polyclinic

  ## Overview
  This migration adds sample data for demonstration purposes including:
  - Clinics across different cities
  - Doctors with various specializations
  - Products for pet food and supplies
  - Blog posts for content

  ## Data Added
  - 10 sample clinics across major cities
  - 15 sample doctors
  - 20 sample products
  - 6 sample blog posts

  ## Notes
  - This is sample data for testing and demonstration
  - In production, this data would be managed through admin interface
*/

-- Insert sample clinics
INSERT INTO clinics (name, city, address, pincode, latitude, longitude, operating_hours, services_available, is_24x7) VALUES
('V-Care Pet Polyclinic - DLF Phase 2', 'Gurgaon', 'DLF Phase 2, Sector 25', '122002', 28.4949, 77.0844, 'Mon-Sun: 9 AM - 9 PM', ARRAY['Consultation', 'Grooming', 'Surgery', 'Diagnostics', 'Emergency'], true),
('V-Care Pet Polyclinic - South Delhi', 'Delhi', 'Greater Kailash 1, M Block', '110048', 28.5494, 77.2462, 'Mon-Sun: 9 AM - 9 PM', ARRAY['Consultation', 'Grooming', 'Vaccination', 'Diagnostics'], false),
('V-Care Pet Polyclinic - Noida Sector 18', 'Noida', 'Sector 18, Atta Market', '201301', 28.5693, 77.3240, 'Mon-Sun: 9 AM - 9 PM', ARRAY['Consultation', 'Grooming', 'Surgery', 'Emergency'], true),
('V-Care Pet Polyclinic - Andheri', 'Mumbai', 'Andheri West, Veera Desai Road', '400053', 19.1368, 72.8340, 'Mon-Sun: 8 AM - 10 PM', ARRAY['Consultation', 'Grooming', 'Surgery', 'Diagnostics'], false),
('V-Care Pet Polyclinic - Koramangala', 'Bengaluru', 'Koramangala 5th Block', '560095', 12.9352, 77.6193, 'Mon-Sun: 9 AM - 9 PM', ARRAY['Consultation', 'Grooming', 'Vaccination', 'Diagnostics', 'Emergency'], true),
('V-Care Pet Polyclinic - Bandra', 'Mumbai', 'Bandra West, Linking Road', '400050', 19.0596, 72.8295, 'Mon-Sun: 9 AM - 9 PM', ARRAY['Consultation', 'Grooming', 'Surgery'], false),
('V-Care Pet Polyclinic - Indiranagar', 'Bengaluru', 'Indiranagar 100 Feet Road', '560038', 12.9716, 77.6412, 'Mon-Sun: 9 AM - 9 PM', ARRAY['Consultation', 'Grooming', 'Diagnostics'], false),
('V-Care Pet Polyclinic - Banjara Hills', 'Hyderabad', 'Banjara Hills Road No 12', '500034', 17.4156, 78.4409, 'Mon-Sun: 9 AM - 9 PM', ARRAY['Consultation', 'Grooming', 'Surgery', 'Emergency'], true),
('V-Care Pet Polyclinic - Salt Lake', 'Kolkata', 'Salt Lake Sector 5', '700091', 22.5744, 88.4295, 'Mon-Sun: 9 AM - 9 PM', ARRAY['Consultation', 'Grooming', 'Vaccination'], false),
('V-Care Pet Polyclinic - Kothrud', 'Pune', 'Kothrud, Karve Road', '411038', 18.5074, 73.8077, 'Mon-Sun: 9 AM - 9 PM', ARRAY['Consultation', 'Grooming', 'Diagnostics', 'Surgery'], false)
ON CONFLICT DO NOTHING;

-- Insert sample doctors
INSERT INTO doctors (clinic_id, name, specialization, qualification, bio, available_days) 
SELECT 
  clinic_id,
  doctor_name,
  specialization,
  qualification,
  bio,
  available_days
FROM (
  SELECT 
    c.clinic_id,
    unnest(ARRAY['Priya Sharma', 'Rajesh Kumar']) as doctor_name,
    unnest(ARRAY['General Practice', 'Surgery']) as specialization,
    unnest(ARRAY['BVSc & AH, MVSc', 'BVSc & AH, MS (Surgery)']) as qualification,
    unnest(ARRAY['10+ years of experience in veterinary medicine', 'Specialist in soft tissue and orthopedic surgery']) as bio,
    ARRAY['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as available_days
  FROM clinics c
  LIMIT 5
) AS doctor_data
ON CONFLICT DO NOTHING;

-- Insert sample products
INSERT INTO products (name, brand, category, description, price, stock, images, pet_type, weight) VALUES
('Royal Canin Medium Adult Dog Food', 'Royal Canin', 'food', 'Complete and balanced nutrition for medium breed adult dogs', 3500, 50, ARRAY['https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=400'], 'dog', '10 kg'),
('Pedigree Adult Dog Food', 'Pedigree', 'food', 'Nutritious and delicious food for adult dogs', 1800, 100, ARRAY['https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=400'], 'dog', '10 kg'),
('Whiskas Cat Food Ocean Fish', 'Whiskas', 'food', 'Delicious ocean fish flavor for adult cats', 280, 80, ARRAY['https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=400'], 'cat', '1.2 kg'),
('Drools Adult Dog Food', 'Drools', 'food', 'High protein dog food for active dogs', 2200, 60, ARRAY['https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=400'], 'dog', '12 kg'),
('Meo Persian Cat Food', 'Meo', 'food', 'Premium food specially formulated for Persian cats', 450, 70, ARRAY['https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=400'], 'cat', '3 kg'),
('Farmina N&D Puppy Food', 'Farmina', 'food', 'Grain-free nutrition for growing puppies', 4200, 40, ARRAY['https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=400'], 'dog', '12 kg'),
('Royal Canin Kitten Food', 'Royal Canin', 'food', 'Complete nutrition for kittens up to 12 months', 1500, 55, ARRAY['https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=400'], 'cat', '2 kg'),
('Pedigree Dentastix', 'Pedigree', 'treats', 'Daily dental treats for dogs', 450, 120, ARRAY['https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=400'], 'dog', '440 g'),
('Temptations Cat Treats', 'Temptations', 'treats', 'Crunchy and soft cat treats', 250, 90, ARRAY['https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=400'], 'cat', '180 g'),
('Himalaya Puppy Shampoo', 'Himalaya', 'accessories', 'Gentle shampoo for puppies', 320, 75, ARRAY['https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=400'], 'dog', '200 ml'),
('Beaphar Cat Shampoo', 'Beaphar', 'accessories', 'pH balanced shampoo for cats', 380, 65, ARRAY['https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=400'], 'cat', '250 ml'),
('Drools Calcium Bone', 'Drools', 'treats', 'Calcium enriched bone treats', 180, 110, ARRAY['https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=400'], 'dog', '5 pieces'),
('Trixie Cat Scratching Post', 'Trixie', 'accessories', 'Sisal scratching post for cats', 1200, 30, ARRAY['https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=400'], 'cat', '60 cm'),
('Kong Classic Dog Toy', 'Kong', 'accessories', 'Durable rubber toy for dogs', 650, 85, ARRAY['https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=400'], 'dog', 'Medium'),
('Petkin Dog Wipes', 'Petkin', 'accessories', 'Convenient grooming wipes', 420, 95, ARRAY['https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=400'], 'dog', '100 wipes'),
('Omega-3 Supplements for Dogs', 'PetHealth', 'supplements', 'Fish oil supplements for healthy skin', 850, 60, ARRAY['https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=400'], 'dog', '60 capsules'),
('Multivitamin for Cats', 'PetHealth', 'supplements', 'Complete multivitamin formula', 720, 55, ARRAY['https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=400'], 'cat', '60 tablets'),
('Probiotics for Dogs', 'PetHealth', 'supplements', 'Digestive health support', 980, 45, ARRAY['https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=400'], 'dog', '30 sachets'),
('Cat Litter Box', 'Savic', 'accessories', 'Large covered litter box', 1500, 40, ARRAY['https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=400'], 'cat', 'Large'),
('Reflective Dog Collar', 'PetSafe', 'accessories', 'Adjustable reflective collar', 380, 100, ARRAY['https://images.pexels.com/photos/1139793/pexels-photo-1139793.jpeg?auto=compress&cs=tinysrgb&w=400'], 'dog', 'Medium')
ON CONFLICT DO NOTHING;

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, content, excerpt, featured_image, category, pet_type, author, read_time, published_at) VALUES
(
  'Preventive Care: From Grooming to Vaccines',
  'preventive-care-grooming-vaccines',
  'Complete guide to preventive care for your pet including regular grooming, vaccination schedules, and health check-ups. Learn how preventive care can save you money and keep your pet healthy.',
  'Learn about essential preventive care measures to keep your pet healthy and happy throughout their life.',
  'https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Health',
  'dog',
  'Dr. Priya Sharma',
  5,
  now()
),
(
  'Complete Nutrition Guide for Your Pet',
  'complete-nutrition-guide',
  'Understanding your pet''s nutritional needs is crucial for their health. This comprehensive guide covers everything from choosing the right food to portion control and special dietary requirements.',
  'Everything you need to know about feeding your pet the right food at the right time.',
  'https://images.pexels.com/photos/5731801/pexels-photo-5731801.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Nutrition',
  'dog',
  'Dr. Rajesh Kumar',
  7,
  now() - interval '3 days'
),
(
  'Understanding Pet Behavior and Training',
  'understanding-pet-behavior-training',
  'Learn about common behavioral issues in pets and how to address them through positive reinforcement training. Tips for teaching basic commands and building a strong bond with your pet.',
  'Master the art of training your pet with these expert tips and techniques.',
  'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Training',
  'dog',
  'Dr. Priya Sharma',
  6,
  now() - interval '5 days'
),
(
  'Grooming Essentials: Keep Your Cat Looking Great',
  'grooming-essentials-cats',
  'A complete guide to grooming your cat at home. Learn about brushing techniques, nail trimming, ear cleaning, and when to seek professional grooming services.',
  'Essential grooming tips every cat owner should know for maintaining their pet''s hygiene.',
  'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Grooming',
  'cat',
  'Dr. Anjali Mehta',
  5,
  now() - interval '7 days'
),
(
  'Common Health Issues in Senior Pets',
  'common-health-issues-senior-pets',
  'As pets age, they face unique health challenges. This article covers common issues in senior pets including arthritis, dental problems, and organ function decline, with tips for managing their care.',
  'Learn how to care for your aging pet and manage common senior health issues.',
  'https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Health',
  'dog',
  'Dr. Rajesh Kumar',
  8,
  now() - interval '10 days'
),
(
  'Emergency First Aid for Pets',
  'emergency-first-aid-pets',
  'Every pet owner should know basic first aid. Learn how to handle common emergencies like choking, poisoning, wounds, and when to rush to the vet.',
  'Life-saving first aid techniques every pet parent must know.',
  'https://images.pexels.com/photos/6234526/pexels-photo-6234526.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Health',
  'dog',
  'Dr. Priya Sharma',
  10,
  now() - interval '12 days'
)
ON CONFLICT DO NOTHING;
