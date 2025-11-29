/*
  # Update Products with Reliable Pet Food Images
  
  1. Updates
    - Replace all product images with reliable placeholder images showing pet food
    - Use placeholder.com with appropriate color schemes for each brand
    - Ensure all images will load consistently across devices
  
  2. Changes
    - Update all product images with working URLs
    - Use brand-appropriate colors in placeholders
    - Maintain proper product naming and pricing
*/

-- Clear existing products
DELETE FROM products;

-- Add dog food products with reliable placeholder images
INSERT INTO products (product_id, name, brand, category, description, price, stock, images, pet_type, weight, is_top_selling, discount_percentage) VALUES
  (gen_random_uuid(), 'Royal Canin Medium Adult Dog Food', 'Royal Canin', 'food', 'Complete and balanced nutrition for medium-sized adult dogs aged 1-7 years', 2720, 50, ARRAY['https://via.placeholder.com/400x400/E30613/FFFFFF?text=Royal+Canin+Medium+Adult'], 'Dog', '10 kg', true, 15),
  (gen_random_uuid(), 'Pedigree Adult Dry Dog Food', 'Pedigree', 'food', 'Nutritious and delicious dog food with chicken and vegetables', 1620, 75, ARRAY['https://via.placeholder.com/400x400/FDB714/000000?text=Pedigree+Adult+Chicken'], 'Dog', '10 kg', true, 10),
  (gen_random_uuid(), 'Drools Adult Dog Chicken & Egg', 'Drools', 'food', 'High protein chicken and egg formula for adult dogs', 572, 60, ARRAY['https://via.placeholder.com/400x400/0066B2/FFFFFF?text=Drools+Chicken+Egg'], 'Dog', '3 kg', true, 12),
  (gen_random_uuid(), 'Farmina N&D Grain Free Dog Food', 'Farmina', 'food', 'Grain-free natural dog food with chicken and pomegranate', 4500, 40, ARRAY['https://via.placeholder.com/400x400/00539F/FFFFFF?text=Farmina+Grain+Free'], 'Dog', '12 kg', true, 8),
  (gen_random_uuid(), 'Choostix Dog Treats Chicken', 'Choostix', 'treats', 'Delicious chicken-flavored treats for training and rewards', 180, 100, ARRAY['https://via.placeholder.com/400x400/FF6B35/FFFFFF?text=Choostix+Chicken+Treats'], 'Dog', '450g', true, 15),
  (gen_random_uuid(), 'Kennel Kitchen Adult Dog Food', 'Kennel Kitchen', 'food', 'Premium adult dog food with real chicken', 2200, 45, ARRAY['https://via.placeholder.com/400x400/4A90E2/FFFFFF?text=Kennel+Kitchen+Chicken'], 'Dog', '8 kg', true, 10),
  (gen_random_uuid(), 'Purina Pro Plan Adult Dog Food', 'Purina', 'food', 'Advanced nutrition with real chicken for adult dogs', 3800, 35, ARRAY['https://via.placeholder.com/400x400/D41F3C/FFFFFF?text=Purina+Pro+Plan'], 'Dog', '12 kg', true, 10),
  (gen_random_uuid(), 'IAMS Adult Dog Food Chicken', 'IAMS', 'food', 'Complete nutrition with high-quality chicken protein', 2900, 50, ARRAY['https://via.placeholder.com/400x400/00A550/FFFFFF?text=IAMS+Adult+Chicken'], 'Dog', '10 kg', true, 12);

-- Add cat food products with reliable placeholder images
INSERT INTO products (product_id, name, brand, category, description, price, stock, images, pet_type, weight, is_top_selling, discount_percentage) VALUES
  (gen_random_uuid(), 'Whiskas Adult Cat Food Ocean Fish', 'Whiskas', 'food', 'Complete and balanced nutrition for adult cats with ocean fish', 850, 80, ARRAY['https://via.placeholder.com/400x400/6B2C91/FFFFFF?text=Whiskas+Ocean+Fish'], 'Cat', '3 kg', true, 10),
  (gen_random_uuid(), 'Sheba Premium Cat Treats', 'Sheba', 'treats', 'Gourmet cat treats with real chicken and tuna', 238, 120, ARRAY['https://via.placeholder.com/400x400/000000/FFFFFF?text=Sheba+Premium+Treats'], 'Cat', '300g', true, 15),
  (gen_random_uuid(), 'Royal Canin Persian Adult Cat Food', 'Royal Canin', 'food', 'Specially formulated for Persian cats', 2720, 40, ARRAY['https://via.placeholder.com/400x400/E30613/FFFFFF?text=Royal+Canin+Persian'], 'Cat', '4 kg', true, 15),
  (gen_random_uuid(), 'Farmina N&D Grain Free Cat Food', 'Farmina', 'food', 'Grain-free natural cat food with chicken', 3200, 35, ARRAY['https://via.placeholder.com/400x400/00539F/FFFFFF?text=Farmina+Cat+Grain+Free'], 'Cat', '5 kg', true, 10),
  (gen_random_uuid(), 'Drools Adult Cat Tuna & Salmon', 'Drools', 'food', 'High-quality protein from tuna and salmon', 720, 65, ARRAY['https://via.placeholder.com/400x400/0066B2/FFFFFF?text=Drools+Tuna+Salmon'], 'Cat', '3 kg', true, 12),
  (gen_random_uuid(), 'Purina Cat Chow Complete', 'Purina', 'food', 'Complete and balanced nutrition for adult cats', 1800, 55, ARRAY['https://via.placeholder.com/400x400/D41F3C/FFFFFF?text=Purina+Cat+Chow'], 'Cat', '6 kg', true, 10),
  (gen_random_uuid(), 'IAMS Proactive Health Cat Food', 'IAMS', 'food', 'Optimal nutrition with chicken for healthy cats', 2400, 45, ARRAY['https://via.placeholder.com/400x400/00A550/FFFFFF?text=IAMS+Cat+Chicken'], 'Cat', '7 kg', true, 8);

-- Add additional variety products
INSERT INTO products (product_id, name, brand, category, description, price, stock, images, pet_type, weight, is_top_selling, discount_percentage) VALUES
  (gen_random_uuid(), 'Meat Up Chicken Dog Treats', 'Meat Up', 'treats', 'Real chicken treats for dogs of all ages', 160, 90, ARRAY['https://via.placeholder.com/400x400/E31E24/FFFFFF?text=Meat+Up+Treats'], 'Dog', '500g', false, 10),
  (gen_random_uuid(), 'Royal Canin Maxi Puppy', 'Royal Canin', 'food', 'Complete nutrition for large breed puppies', 3500, 30, ARRAY['https://via.placeholder.com/400x400/E30613/FFFFFF?text=Royal+Canin+Maxi+Puppy'], 'Dog', '10 kg', false, 5),
  (gen_random_uuid(), 'Pedigree Puppy Dry Food', 'Pedigree', 'food', 'Nutritious food for growing puppies', 1600, 50, ARRAY['https://via.placeholder.com/400x400/FDB714/000000?text=Pedigree+Puppy'], 'Dog', '10 kg', false, 8),
  (gen_random_uuid(), 'Whiskas Kitten Ocean Fish', 'Whiskas', 'food', 'Complete nutrition for growing kittens', 750, 60, ARRAY['https://via.placeholder.com/400x400/6B2C91/FFFFFF?text=Whiskas+Kitten'], 'Cat', '3 kg', false, 10),
  (gen_random_uuid(), 'Hill''s Science Diet Adult Dog', 'Hill''s Science Diet', 'food', 'Veterinary recommended nutrition', 4200, 25, ARRAY['https://via.placeholder.com/400x400/003DA5/FFFFFF?text=Hills+Science+Diet'], 'Dog', '12 kg', false, 5),
  (gen_random_uuid(), 'Hill''s Science Diet Adult Cat', 'Hill''s Science Diet', 'food', 'Veterinary recommended for cats', 3800, 30, ARRAY['https://via.placeholder.com/400x400/003DA5/FFFFFF?text=Hills+Cat+Food'], 'Cat', '7 kg', false, 5),
  (gen_random_uuid(), 'Kennel Kitchen Cat Food Tuna', 'Kennel Kitchen', 'food', 'Premium cat food with real tuna', 1900, 40, ARRAY['https://via.placeholder.com/400x400/4A90E2/FFFFFF?text=Kennel+Kitchen+Tuna'], 'Cat', '6 kg', false, 8);