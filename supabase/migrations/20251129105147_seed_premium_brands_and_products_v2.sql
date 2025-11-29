/*
  # Seed Premium Pet Food Brands and Top-Selling Products (v2)

  1. Data Seeding
    - Insert premium, vet-recommended pet food brands
    - Insert top-selling products for dogs and cats with descriptions
    - Mark featured products as top-selling items

  2. Brands Included
    - Royal Canin, Pedigree, Whiskas, Sheba, Drools, Choostix, 
      Farmina, Wellness, and more premium brands
*/

-- Insert premium pet food brands
INSERT INTO brands (name, logo_url, is_featured, display_order) VALUES
('Royal Canin', 'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=200', true, 1),
('Pedigree', 'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=200', true, 2),
('Whiskas', 'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=200', true, 3),
('Sheba', 'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=200', true, 4),
('Drools', 'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=200', true, 5),
('Choostix', 'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=200', true, 6),
('Farmina', 'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=200', true, 7),
('Wellness', 'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=200', true, 8)
ON CONFLICT DO NOTHING;

-- Insert top-selling products
INSERT INTO products (name, brand, price, pet_type, category, weight, stock, images, description, is_top_selling, discount_percentage) VALUES
('Pedigree Professional Adult Dog Food', 'Pedigree', 460, 'dog', 'food', '1.2 kg', 50, ARRAY['https://images.pexels.com/photos/5732444/pexels-photo-5732444.jpeg?auto=compress&cs=tinysrgb&w=400'], 'Complete nutrition for adult dogs with high-quality protein and essential nutrients', true, 0),
('Drools Dog High Sodium Soft Toy', 'Drools', 450, 'dog', 'treats', '0.5 kg', 30, ARRAY['https://images.pexels.com/photos/4601196/pexels-photo-4601196.jpeg?auto=compress&cs=tinysrgb&w=400'], 'Premium quality dog treats with real chicken and essential minerals', true, 10),
('Whiskas Adult Chicken Flavour Cat Food', 'Whiskas', 360, 'cat', 'food', '1.2 kg', 45, ARRAY['https://images.pexels.com/photos/1440387/pexels-photo-1440387.jpeg?auto=compress&cs=tinysrgb&w=400'], 'Delicious chicken flavored food with complete nutrition for adult cats', true, 0),
('Royal Canin Mini Adult Dog Food', 'Royal Canin', 850, 'dog', 'food', '2 kg', 25, ARRAY['https://images.pexels.com/photos/5731883/pexels-photo-5731883.jpeg?auto=compress&cs=tinysrgb&w=400'], 'Scientifically formulated nutrition for small breed adult dogs', true, 0),
('Sheba Premium Cat Treats', 'Sheba', 280, 'cat', 'treats', '0.3 kg', 40, ARRAY['https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=400'], 'Irresistible gourmet treats made with real fish and chicken', true, 15),
('Drools Adult Dog Chicken & Egg Food', 'Drools', 650, 'dog', 'food', '3 kg', 35, ARRAY['https://images.pexels.com/photos/5732444/pexels-photo-5732444.jpeg?auto=compress&cs=tinysrgb&w=400'], 'High protein food with real chicken and egg for adult dogs', true, 0),
('Choostix Dog Treats Chicken', 'Choostix', 180, 'dog', 'treats', '0.45 kg', 60, ARRAY['https://images.pexels.com/photos/4601196/pexels-photo-4601196.jpeg?auto=compress&cs=tinysrgb&w=400'], 'Healthy and tasty chicken treats for training and rewards', true, 0),
('Farmina N&D Cat Food Ocean Fish', 'Farmina', 920, 'cat', 'food', '1.5 kg', 20, ARRAY['https://images.pexels.com/photos/1440387/pexels-photo-1440387.jpeg?auto=compress&cs=tinysrgb&w=400'], 'Grain-free natural diet with ocean fish and ancestral ingredients', true, 0),
('Wellness Core Grain-Free Dog Food', 'Wellness', 1150, 'dog', 'food', '2 kg', 15, ARRAY['https://images.pexels.com/photos/5731883/pexels-photo-5731883.jpeg?auto=compress&cs=tinysrgb&w=400'], 'Premium grain-free formula with high protein for optimal nutrition', true, 0),
('Pedigree Dentastix Dog Treats', 'Pedigree', 220, 'dog', 'treats', '0.4 kg', 50, ARRAY['https://images.pexels.com/photos/4601196/pexels-photo-4601196.jpeg?auto=compress&cs=tinysrgb&w=400'], 'Daily dental treats that help reduce tartar buildup', true, 5)
ON CONFLICT DO NOTHING;