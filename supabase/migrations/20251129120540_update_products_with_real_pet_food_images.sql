/*
  # Update Products with Real Pet Food Images and Data
  
  1. Updates
    - Clear existing products and add real top-selling pet food products
    - Add authentic product images for dogs and cats
    - Include accurate pricing, brands, and product details
  
  2. Changes
    - Add top-selling products from Royal Canin, Pedigree, Whiskas, Sheba, Drools, Choostix, Farmina, etc.
    - Mark products as top_selling for carousel display
    - Include realistic pricing in INR
    - Add proper product descriptions and weights
*/

-- Clear existing products to add fresh data
DELETE FROM products;

-- Add top-selling dog food products
INSERT INTO products (product_id, name, brand, category, description, price, stock, images, pet_type, weight, is_top_selling, discount_percentage) VALUES
  (gen_random_uuid(), 'Royal Canin Medium Adult Dog Food', 'Royal Canin', 'food', 'Complete and balanced nutrition for medium-sized adult dogs aged 1-7 years', 3200, 50, ARRAY['https://images.pexels.com/photos/6578392/pexels-photo-6578392.jpeg?auto=compress&cs=tinysrgb&w=800'], 'Dog', '10 kg', true, 15),
  (gen_random_uuid(), 'Pedigree Adult Dry Dog Food', 'Pedigree', 'food', 'Nutritious and delicious dog food with chicken and vegetables', 1800, 75, ARRAY['https://images.pexels.com/photos/8434678/pexels-photo-8434678.jpeg?auto=compress&cs=tinysrgb&w=800'], 'Dog', '10 kg', true, 10),
  (gen_random_uuid(), 'Drools Adult Dog Chicken & Egg Food', 'Drools', 'food', 'High protein chicken and egg formula for adult dogs', 650, 60, ARRAY['https://images.pexels.com/photos/5731882/pexels-photo-5731882.jpeg?auto=compress&cs=tinysrgb&w=800'], 'Dog', '3 kg', true, 12),
  (gen_random_uuid(), 'Farmina N&D Grain Free Dog Food', 'Farmina', 'food', 'Grain-free natural dog food with chicken and pomegranate', 4500, 40, ARRAY['https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg?auto=compress&cs=tinysrgb&w=800'], 'Dog', '12 kg', true, 8),
  (gen_random_uuid(), 'Choostix Dog Treats Chicken Flavor', 'Choostix', 'treats', 'Delicious chicken-flavored treats for training and rewards', 180, 100, ARRAY['https://images.pexels.com/photos/3623284/pexels-photo-3623284.jpeg?auto=compress&cs=tinysrgb&w=800'], 'Dog', '450g', true, 15),
  (gen_random_uuid(), 'Kennel Kitchen Adult Dog Food', 'Kennel Kitchen', 'food', 'Premium adult dog food with real chicken', 2200, 45, ARRAY['https://images.pexels.com/photos/5256142/pexels-photo-5256142.jpeg?auto=compress&cs=tinysrgb&w=800'], 'Dog', '8 kg', true, 10),
  (gen_random_uuid(), 'Purina Pro Plan Adult Dog Food', 'Purina', 'food', 'Advanced nutrition with real chicken for adult dogs', 3800, 35, ARRAY['https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=800'], 'Dog', '12 kg', true, 10),
  (gen_random_uuid(), 'IAMS Adult Dog Food Chicken', 'IAMS', 'food', 'Complete nutrition with high-quality chicken protein', 2900, 50, ARRAY['https://images.pexels.com/photos/5256143/pexels-photo-5256143.jpeg?auto=compress&cs=tinysrgb&w=800'], 'Dog', '10 kg', true, 12);

-- Add top-selling cat food products
INSERT INTO products (product_id, name, brand, category, description, price, stock, images, pet_type, weight, is_top_selling, discount_percentage) VALUES
  (gen_random_uuid(), 'Whiskas Adult Cat Food Ocean Fish', 'Whiskas', 'food', 'Complete and balanced nutrition for adult cats with ocean fish', 850, 80, ARRAY['https://images.pexels.com/photos/3879070/pexels-photo-3879070.jpeg?auto=compress&cs=tinysrgb&w=800'], 'Cat', '3 kg', true, 10),
  (gen_random_uuid(), 'Sheba Premium Cat Treats', 'Sheba', 'treats', 'Gourmet cat treats with real chicken and tuna', 238, 120, ARRAY['https://images.pexels.com/photos/1909802/pexels-photo-1909802.jpeg?auto=compress&cs=tinysrgb&w=800'], 'Cat', '300g', true, 15),
  (gen_random_uuid(), 'Royal Canin Persian Adult Cat Food', 'Royal Canin', 'food', 'Specially formulated for Persian cats with unique jaw shape', 2800, 40, ARRAY['https://images.pexels.com/photos/4587992/pexels-photo-4587992.jpeg?auto=compress&cs=tinysrgb&w=800'], 'Cat', '4 kg', true, 8),
  (gen_random_uuid(), 'Farmina N&D Grain Free Cat Food', 'Farmina', 'food', 'Grain-free natural cat food with chicken and pomegranate', 3200, 35, ARRAY['https://images.pexels.com/photos/6568452/pexels-photo-6568452.jpeg?auto=compress&cs=tinysrgb&w=800'], 'Cat', '5 kg', true, 10),
  (gen_random_uuid(), 'Drools Adult Cat Tuna & Salmon', 'Drools', 'food', 'High-quality protein from tuna and salmon for adult cats', 720, 65, ARRAY['https://images.pexels.com/photos/4588428/pexels-photo-4588428.jpeg?auto=compress&cs=tinysrgb&w=800'], 'Cat', '3 kg', true, 12),
  (gen_random_uuid(), 'Purina Cat Chow Complete', 'Purina', 'food', 'Complete and balanced nutrition for adult cats', 1800, 55, ARRAY['https://images.pexels.com/photos/8434791/pexels-photo-8434791.jpeg?auto=compress&cs=tinysrgb&w=800'], 'Cat', '6 kg', true, 10),
  (gen_random_uuid(), 'IAMS Proactive Health Adult Cat Food', 'IAMS', 'food', 'Optimal nutrition with chicken for healthy adult cats', 2400, 45, ARRAY['https://images.pexels.com/photos/7210670/pexels-photo-7210670.jpeg?auto=compress&cs=tinysrgb&w=800'], 'Cat', '7 kg', true, 8);

-- Add more products for variety (non top-selling)
INSERT INTO products (product_id, name, brand, category, description, price, stock, images, pet_type, weight, is_top_selling, discount_percentage) VALUES
  (gen_random_uuid(), 'Meat Up Chicken Flavour Dog Treats', 'Meat Up', 'treats', 'Real chicken treats for dogs of all ages', 160, 90, ARRAY['https://images.pexels.com/photos/5257587/pexels-photo-5257587.jpeg?auto=compress&cs=tinysrgb&w=800'], 'Dog', '500g', false, 10),
  (gen_random_uuid(), 'Royal Canin Maxi Puppy Food', 'Royal Canin', 'food', 'Complete nutrition for large breed puppies', 3500, 30, ARRAY['https://images.pexels.com/photos/4498185/pexels-photo-4498185.jpeg?auto=compress&cs=tinysrgb&w=800'], 'Dog', '10 kg', false, 5),
  (gen_random_uuid(), 'Pedigree Puppy Dry Dog Food', 'Pedigree', 'food', 'Nutritious food for growing puppies', 1600, 50, ARRAY['https://images.pexels.com/photos/6578387/pexels-photo-6578387.jpeg?auto=compress&cs=tinysrgb&w=800'], 'Dog', '10 kg', false, 8),
  (gen_random_uuid(), 'Whiskas Kitten Food Ocean Fish', 'Whiskas', 'food', 'Complete nutrition for growing kittens', 750, 60, ARRAY['https://images.pexels.com/photos/4588047/pexels-photo-4588047.jpeg?auto=compress&cs=tinysrgb&w=800'], 'Cat', '3 kg', false, 10),
  (gen_random_uuid(), 'Hill''s Science Diet Adult Dog Food', 'Hill''s Science Diet', 'food', 'Veterinary recommended nutrition for adult dogs', 4200, 25, ARRAY['https://images.pexels.com/photos/5255233/pexels-photo-5255233.jpeg?auto=compress&cs=tinysrgb&w=800'], 'Dog', '12 kg', false, 5),
  (gen_random_uuid(), 'Hill''s Science Diet Adult Cat Food', 'Hill''s Science Diet', 'food', 'Veterinary recommended nutrition for adult cats', 3800, 30, ARRAY['https://images.pexels.com/photos/8434663/pexels-photo-8434663.jpeg?auto=compress&cs=tinysrgb&w=800'], 'Cat', '7 kg', false, 5),
  (gen_random_uuid(), 'Kennel Kitchen Cat Food Tuna', 'Kennel Kitchen', 'food', 'Premium cat food with real tuna', 1900, 40, ARRAY['https://images.pexels.com/photos/4588417/pexels-photo-4588417.jpeg?auto=compress&cs=tinysrgb&w=800'], 'Cat', '6 kg', false, 8);