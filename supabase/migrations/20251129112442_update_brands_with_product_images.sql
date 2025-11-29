/*
  # Update Brands Table with Product Images

  1. Modifications
    - Add `product_image_url` column to brands table for showcasing brand products
    - Update existing brands with high-quality product images
    
  2. Notes
    - This allows the carousel to display actual product images instead of just logos
    - Enhances visual appeal and brand recognition
*/

-- Add product_image_url column to brands table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'brands' AND column_name = 'product_image_url'
  ) THEN
    ALTER TABLE brands ADD COLUMN product_image_url text;
  END IF;
END $$;

-- Update existing brands with product images
UPDATE brands SET product_image_url = 'https://images.pexels.com/photos/5731883/pexels-photo-5731883.jpeg?auto=compress&cs=tinysrgb&w=400' WHERE name = 'Royal Canin';
UPDATE brands SET product_image_url = 'https://images.pexels.com/photos/5732444/pexels-photo-5732444.jpeg?auto=compress&cs=tinysrgb&w=400' WHERE name = 'Pedigree';
UPDATE brands SET product_image_url = 'https://images.pexels.com/photos/1440387/pexels-photo-1440387.jpeg?auto=compress&cs=tinysrgb&w=400' WHERE name = 'Whiskas';
UPDATE brands SET product_image_url = 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=400' WHERE name = 'Sheba';
UPDATE brands SET product_image_url = 'https://images.pexels.com/photos/4601196/pexels-photo-4601196.jpeg?auto=compress&cs=tinysrgb&w=400' WHERE name = 'Drools';
UPDATE brands SET product_image_url = 'https://images.pexels.com/photos/5731768/pexels-photo-5731768.jpeg?auto=compress&cs=tinysrgb&w=400' WHERE name = 'Choostix';
UPDATE brands SET product_image_url = 'https://images.pexels.com/photos/5731769/pexels-photo-5731769.jpeg?auto=compress&cs=tinysrgb&w=400' WHERE name = 'Farmina';
UPDATE brands SET product_image_url = 'https://images.pexels.com/photos/8434791/pexels-photo-8434791.jpeg?auto=compress&cs=tinysrgb&w=400' WHERE name = 'Wellness';