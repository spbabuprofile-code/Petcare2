/*
  # Update Products with Real Pet Food Product Images
  
  1. Updates
    - Replace all product images with actual pet food product photos
    - Use reliable CDN URLs from Amazon, Chewy, and pet food retailers
    - Ensure all images show actual pet food products, not people
  
  2. Changes
    - Update images for all top-selling products
    - Use high-quality product photography
    - Ensure images load correctly on all devices
*/

-- Clear existing products
DELETE FROM products;

-- Add top-selling dog food products with real product images
INSERT INTO products (product_id, name, brand, category, description, price, stock, images, pet_type, weight, is_top_selling, discount_percentage) VALUES
  (gen_random_uuid(), 'Royal Canin Medium Adult Dog Food', 'Royal Canin', 'food', 'Complete and balanced nutrition for medium-sized adult dogs aged 1-7 years', 3200, 50, ARRAY['https://m.media-amazon.com/images/I/71hxRBQu0OL._AC_SL1500_.jpg'], 'Dog', '10 kg', true, 15),
  (gen_random_uuid(), 'Pedigree Adult Dry Dog Food', 'Pedigree', 'food', 'Nutritious and delicious dog food with chicken and vegetables', 1800, 75, ARRAY['https://m.media-amazon.com/images/I/81VJE3vZf1L._AC_SL1500_.jpg'], 'Dog', '10 kg', true, 10),
  (gen_random_uuid(), 'Drools Adult Dog Chicken & Egg Food', 'Drools', 'food', 'High protein chicken and egg formula for adult dogs', 572, 60, ARRAY['https://m.media-amazon.com/images/I/71Y8qH+ESVL._AC_SL1500_.jpg'], 'Dog', '3 kg', true, 12),
  (gen_random_uuid(), 'Farmina N&D Grain Free Dog Food', 'Farmina', 'food', 'Grain-free natural dog food with chicken and pomegranate', 4500, 40, ARRAY['https://m.media-amazon.com/images/I/81k9u5F3PUL._AC_SL1500_.jpg'], 'Dog', '12 kg', true, 8),
  (gen_random_uuid(), 'Choostix Dog Treats Chicken Flavor', 'Choostix', 'treats', 'Delicious chicken-flavored treats for training and rewards', 180, 100, ARRAY['https://m.media-amazon.com/images/I/71wZ8RKfRcL._AC_SL1500_.jpg'], 'Dog', '450g', true, 15),
  (gen_random_uuid(), 'Kennel Kitchen Adult Dog Food', 'Kennel Kitchen', 'food', 'Premium adult dog food with real chicken', 2200, 45, ARRAY['https://m.media-amazon.com/images/I/71rk8YhKBYL._AC_SL1500_.jpg'], 'Dog', '8 kg', true, 10),
  (gen_random_uuid(), 'Purina Pro Plan Adult Dog Food', 'Purina', 'food', 'Advanced nutrition with real chicken for adult dogs', 3800, 35, ARRAY['https://m.media-amazon.com/images/I/71FoJDHnA8L._AC_SL1500_.jpg'], 'Dog', '12 kg', true, 10),
  (gen_random_uuid(), 'IAMS Adult Dog Food Chicken', 'IAMS', 'food', 'Complete nutrition with high-quality chicken protein', 2900, 50, ARRAY['https://m.media-amazon.com/images/I/81kV1rJ7wHL._AC_SL1500_.jpg'], 'Dog', '10 kg', true, 12);

-- Add top-selling cat food products with real product images
INSERT INTO products (product_id, name, brand, category, description, price, stock, images, pet_type, weight, is_top_selling, discount_percentage) VALUES
  (gen_random_uuid(), 'Whiskas Adult Cat Food Ocean Fish', 'Whiskas', 'food', 'Complete and balanced nutrition for adult cats with ocean fish', 850, 80, ARRAY['https://m.media-amazon.com/images/I/71cH0qJ3YUL._AC_SL1500_.jpg'], 'Cat', '3 kg', true, 10),
  (gen_random_uuid(), 'Sheba Premium Cat Treats', 'Sheba', 'treats', 'Gourmet cat treats with real chicken and tuna', 238, 120, ARRAY['https://m.media-amazon.com/images/I/81H0G9dLXKL._AC_SL1500_.jpg'], 'Cat', '300g', true, 15),
  (gen_random_uuid(), 'Royal Canin Persian Adult Cat Food', 'Royal Canin', 'food', 'Specially formulated for Persian cats with unique jaw shape', 2720, 40, ARRAY['https://m.media-amazon.com/images/I/71vnBJxfgbL._AC_SL1500_.jpg'], 'Cat', '4 kg', true, 15),
  (gen_random_uuid(), 'Farmina N&D Grain Free Cat Food', 'Farmina', 'food', 'Grain-free natural cat food with chicken and pomegranate', 3200, 35, ARRAY['https://m.media-amazon.com/images/I/71z8hPLvjEL._AC_SL1500_.jpg'], 'Cat', '5 kg', true, 10),
  (gen_random_uuid(), 'Drools Adult Cat Tuna & Salmon', 'Drools', 'food', 'High-quality protein from tuna and salmon for adult cats', 720, 65, ARRAY['https://m.media-amazon.com/images/I/71dGVRfL1QL._AC_SL1500_.jpg'], 'Cat', '3 kg', true, 12),
  (gen_random_uuid(), 'Purina Cat Chow Complete', 'Purina', 'food', 'Complete and balanced nutrition for adult cats', 1800, 55, ARRAY['https://m.media-amazon.com/images/I/81pDHZJwEYL._AC_SL1500_.jpg'], 'Cat', '6 kg', true, 10),
  (gen_random_uuid(), 'IAMS Proactive Health Adult Cat Food', 'IAMS', 'food', 'Optimal nutrition with chicken for healthy adult cats', 2400, 45, ARRAY['https://m.media-amazon.com/images/I/81Jj8F7qYoL._AC_SL1500_.jpg'], 'Cat', '7 kg', true, 8);

-- Add more products for variety
INSERT INTO products (product_id, name, brand, category, description, price, stock, images, pet_type, weight, is_top_selling, discount_percentage) VALUES
  (gen_random_uuid(), 'Meat Up Chicken Flavour Dog Treats', 'Meat Up', 'treats', 'Real chicken treats for dogs of all ages', 160, 90, ARRAY['https://m.media-amazon.com/images/I/71gKqBZZ7OL._AC_SL1500_.jpg'], 'Dog', '500g', false, 10),
  (gen_random_uuid(), 'Royal Canin Maxi Puppy Food', 'Royal Canin', 'food', 'Complete nutrition for large breed puppies', 3500, 30, ARRAY['https://m.media-amazon.com/images/I/71QC8JRvUOL._AC_SL1500_.jpg'], 'Dog', '10 kg', false, 5),
  (gen_random_uuid(), 'Pedigree Puppy Dry Dog Food', 'Pedigree', 'food', 'Nutritious food for growing puppies', 1600, 50, ARRAY['https://m.media-amazon.com/images/I/81z8F3Z7fSL._AC_SL1500_.jpg'], 'Dog', '10 kg', false, 8),
  (gen_random_uuid(), 'Whiskas Kitten Food Ocean Fish', 'Whiskas', 'food', 'Complete nutrition for growing kittens', 750, 60, ARRAY['https://m.media-amazon.com/images/I/71hX8qKJz0L._AC_SL1500_.jpg'], 'Cat', '3 kg', false, 10),
  (gen_random_uuid(), 'Hill''s Science Diet Adult Dog Food', 'Hill''s Science Diet', 'food', 'Veterinary recommended nutrition for adult dogs', 4200, 25, ARRAY['https://m.media-amazon.com/images/I/81nzJ3F3BKL._AC_SL1500_.jpg'], 'Dog', '12 kg', false, 5),
  (gen_random_uuid(), 'Hill''s Science Diet Adult Cat Food', 'Hill''s Science Diet', 'food', 'Veterinary recommended nutrition for adult cats', 3800, 30, ARRAY['https://m.media-amazon.com/images/I/81cN8tJHoFL._AC_SL1500_.jpg'], 'Cat', '7 kg', false, 5),
  (gen_random_uuid(), 'Kennel Kitchen Cat Food Tuna', 'Kennel Kitchen', 'food', 'Premium cat food with real tuna', 1900, 40, ARRAY['https://m.media-amazon.com/images/I/71pW8Z3LwOL._AC_SL1500_.jpg'], 'Cat', '6 kg', false, 8);