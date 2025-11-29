/*
  # Add Brand Logo URLs

  1. Modifications
    - Add `logo_image_url` column to brands table for brand logos
    - Update existing brands with high-resolution logo images
    
  2. Notes
    - This allows the carousel to display brand logos for better brand recognition
    - Logos will be displayed with hover effects and smooth animations
*/

-- Add logo_image_url column to brands table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'brands' AND column_name = 'logo_image_url'
  ) THEN
    ALTER TABLE brands ADD COLUMN logo_image_url text;
  END IF;
END $$;

-- Update existing brands with logo images (using placeholder logo URLs)
UPDATE brands SET logo_image_url = 'https://images.pexels.com/photos/8434678/pexels-photo-8434678.jpeg?auto=compress&cs=tinysrgb&w=300&h=200' WHERE name = 'Royal Canin';
UPDATE brands SET logo_image_url = 'https://images.pexels.com/photos/5731882/pexels-photo-5731882.jpeg?auto=compress&cs=tinysrgb&w=300&h=200' WHERE name = 'Pedigree';
UPDATE brands SET logo_image_url = 'https://images.pexels.com/photos/3879070/pexels-photo-3879070.jpeg?auto=compress&cs=tinysrgb&w=300&h=200' WHERE name = 'Whiskas';
UPDATE brands SET logo_image_url = 'https://images.pexels.com/photos/1909802/pexels-photo-1909802.jpeg?auto=compress&cs=tinysrgb&w=300&h=200' WHERE name = 'Sheba';
UPDATE brands SET logo_image_url = 'https://images.pexels.com/photos/5256142/pexels-photo-5256142.jpeg?auto=compress&cs=tinysrgb&w=300&h=200' WHERE name = 'Drools';
UPDATE brands SET logo_image_url = 'https://images.pexels.com/photos/3623284/pexels-photo-3623284.jpeg?auto=compress&cs=tinysrgb&w=300&h=200' WHERE name = 'Choostix';
UPDATE brands SET logo_image_url = 'https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg?auto=compress&cs=tinysrgb&w=300&h=200' WHERE name = 'Farmina';
UPDATE brands SET logo_image_url = 'https://images.pexels.com/photos/5256143/pexels-photo-5256143.jpeg?auto=compress&cs=tinysrgb&w=300&h=200' WHERE name = 'Wellness';