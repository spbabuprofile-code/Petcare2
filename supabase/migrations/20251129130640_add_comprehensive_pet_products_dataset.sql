/*
  # Add Comprehensive Pet Products Dataset
  
  1. Updates
    - Clear existing products data
    - Add 15 authentic pet food products with realistic pricing
    - Use reliable placeholder images with brand colors
    - All products include proper discounts and pricing in INR
  
  2. Changes
    - Delete all existing products
    - Insert 15 top-selling pet food products
    - Each product has proper brand, pricing, weight, and images
    - Mix of dog and cat food products
*/

-- Clear existing products
DELETE FROM products;

-- Insert comprehensive pet products dataset
-- Top Dog Food Products
INSERT INTO products (product_id, name, brand, category, description, price, stock, images, pet_type, weight, is_top_selling, discount_percentage) VALUES
  (gen_random_uuid(), 'Royal Canin Medium Adult Dog Food', 'Royal Canin', 'food', 'Complete and balanced nutrition for medium-sized adult dogs aged 1-7 years with optimal digestibility', 3200, 50, ARRAY['https://dummyimage.com/600x600/E30613/ffffff&text=Royal+Canin+Medium+Adult'], 'Dog', '10 kg', true, 15),
  
  (gen_random_uuid(), 'Pedigree Adult Dry Dog Food', 'Pedigree', 'food', 'Nutritious and delicious dry dog food with chicken and vegetables for complete nutrition', 1800, 75, ARRAY['https://dummyimage.com/600x600/FDB714/000000&text=Pedigree+Adult+Chicken'], 'Dog', '10 kg', true, 10),
  
  (gen_random_uuid(), 'Drools Adult Dog Chicken & Egg Food', 'Drools', 'food', 'High protein chicken and egg formula for adult dogs with essential nutrients', 650, 60, ARRAY['https://dummyimage.com/600x600/0066B2/ffffff&text=Drools+Chicken+%26+Egg'], 'Dog', '3 kg', true, 12),
  
  (gen_random_uuid(), 'Farmina N&D Grain Free Chicken', 'Farmina', 'food', 'Grain-free natural dog food with 70% animal ingredients including chicken and pomegranate', 4500, 40, ARRAY['https://dummyimage.com/600x600/00539F/ffffff&text=Farmina+Grain+Free'], 'Dog', '12 kg', true, 8),
  
  (gen_random_uuid(), 'IAMS Adult Dog Food Chicken', 'IAMS', 'food', 'Complete nutrition with high-quality chicken protein for healthy adult dogs', 2900, 55, ARRAY['https://dummyimage.com/600x600/00A550/ffffff&text=IAMS+Adult+Chicken'], 'Dog', '10 kg', true, 12),
  
  (gen_random_uuid(), 'Purina Pro Plan Adult Dog Food', 'Purina', 'food', 'Advanced nutrition with real chicken as first ingredient for optimal health', 3800, 35, ARRAY['https://dummyimage.com/600x600/D41F3C/ffffff&text=Purina+Pro+Plan'], 'Dog', '12 kg', true, 10);

-- Top Cat Food Products
INSERT INTO products (product_id, name, brand, category, description, price, stock, images, pet_type, weight, is_top_selling, discount_percentage) VALUES
  (gen_random_uuid(), 'Whiskas Adult Cat Food Ocean Fish', 'Whiskas', 'food', 'Complete and balanced nutrition for adult cats with delicious ocean fish flavor', 850, 80, ARRAY['https://dummyimage.com/600x600/6B2C91/ffffff&text=Whiskas+Ocean+Fish'], 'Cat', '3 kg', true, 10),
  
  (gen_random_uuid(), 'Sheba Premium Cat Treats', 'Sheba', 'treats', 'Gourmet cat treats made with real chicken and tuna for the ultimate indulgence', 238, 120, ARRAY['https://dummyimage.com/600x600/000000/ffffff&text=Sheba+Premium+Treats'], 'Cat', '300g', true, 15),
  
  (gen_random_uuid(), 'Royal Canin Persian Adult Cat Food', 'Royal Canin', 'food', 'Specially formulated for Persian cats with unique jaw shape and digestive needs', 2720, 40, ARRAY['https://dummyimage.com/600x600/E30613/ffffff&text=Royal+Canin+Persian'], 'Cat', '4 kg', true, 15),
  
  (gen_random_uuid(), 'Farmina N&D Grain Free Cat Food', 'Farmina', 'food', 'Grain-free natural cat food with 70% animal ingredients for optimal feline health', 3200, 35, ARRAY['https://dummyimage.com/600x600/00539F/ffffff&text=Farmina+Cat+Grain+Free'], 'Cat', '5 kg', true, 10),
  
  (gen_random_uuid(), 'Purina Cat Chow Complete', 'Purina', 'food', 'Complete and balanced nutrition for adult cats with 25 essential vitamins', 1800, 55, ARRAY['https://dummyimage.com/600x600/D41F3C/ffffff&text=Purina+Cat+Chow'], 'Cat', '6 kg', true, 10);

-- Dog Treats
INSERT INTO products (product_id, name, brand, category, description, price, stock, images, pet_type, weight, is_top_selling, discount_percentage) VALUES
  (gen_random_uuid(), 'Choostix Dog Treats Chicken Flavor', 'Choostix', 'treats', 'Delicious chicken-flavored treats perfect for training and rewards', 180, 100, ARRAY['https://dummyimage.com/600x600/FF6B35/ffffff&text=Choostix+Chicken+Treats'], 'Dog', '450g', true, 15),
  
  (gen_random_uuid(), 'Meat Up Chicken Flavour Dog Treats', 'Meat Up', 'treats', 'Real chicken treats made with high-quality ingredients for dogs of all ages', 160, 90, ARRAY['https://dummyimage.com/600x600/E31E24/ffffff&text=Meat+Up+Chicken+Treats'], 'Dog', '500g', true, 10);

-- Premium Products
INSERT INTO products (product_id, name, brand, category, description, price, stock, images, pet_type, weight, is_top_selling, discount_percentage) VALUES
  (gen_random_uuid(), 'Hill''s Science Diet Adult Dog Food', 'Hill''s Pet Nutrition', 'food', 'Veterinary recommended nutrition with clinically proven antioxidants', 4200, 25, ARRAY['https://dummyimage.com/600x600/003DA5/ffffff&text=Hills+Science+Diet'], 'Dog', '12 kg', true, 5),
  
  (gen_random_uuid(), 'Blue Buffalo Life Protection Formula', 'Blue Buffalo', 'food', 'Natural dog food with real meat, fruits and vegetables with LifeSource Bits', 4500, 30, ARRAY['https://dummyimage.com/600x600/003DA5/ffffff&text=Blue+Buffalo+Adult'], 'Dog', '13 kg', true, 8);