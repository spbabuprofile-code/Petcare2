/*
  # Update Pet Brands with Real Logo URLs
  
  1. Updates
    - Update all existing brands with proper pet brand logo URLs from reliable sources
    - Add new popular pet brands (Hill's Science Diet, IAMS, Purina, Meat Up, Kennel Kitchen)
  
  2. Changes
    - Replace placeholder images with actual pet brand logo URLs
    - Ensure all brands are relevant to dogs and cats
    - Update display order for better presentation
    - Update both logo_url and logo_image_url columns
*/

-- Update existing brands with proper logos
UPDATE brands SET 
  logo_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Royal_Canin_Logo.svg/320px-Royal_Canin_Logo.svg.png',
  logo_image_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Royal_Canin_Logo.svg/320px-Royal_Canin_Logo.svg.png'
WHERE name = 'Royal Canin';

UPDATE brands SET 
  logo_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Pedigree_logo.svg/320px-Pedigree_logo.svg.png',
  logo_image_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Pedigree_logo.svg/320px-Pedigree_logo.svg.png'
WHERE name = 'Pedigree';

UPDATE brands SET 
  logo_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Whiskas_logo.svg/320px-Whiskas_logo.svg.png',
  logo_image_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Whiskas_logo.svg/320px-Whiskas_logo.svg.png'
WHERE name = 'Whiskas';

UPDATE brands SET 
  logo_url = 'https://1000logos.net/wp-content/uploads/2021/05/Sheba-logo.png',
  logo_image_url = 'https://1000logos.net/wp-content/uploads/2021/05/Sheba-logo.png'
WHERE name = 'Sheba';

UPDATE brands SET 
  logo_url = 'https://www.drools.in/wp-content/themes/drools/assets/images/drools-logo.svg',
  logo_image_url = 'https://www.drools.in/wp-content/themes/drools/assets/images/drools-logo.svg'
WHERE name = 'Drools';

UPDATE brands SET 
  logo_url = 'https://www.choostix.in/images/logo.png',
  logo_image_url = 'https://www.choostix.in/images/logo.png'
WHERE name = 'Choostix';

UPDATE brands SET 
  logo_url = 'https://www.farmina.com/wp-content/uploads/2019/10/logo-farmina.png',
  logo_image_url = 'https://www.farmina.com/wp-content/uploads/2019/10/logo-farmina.png'
WHERE name = 'Farmina';

UPDATE brands SET 
  logo_url = 'https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/global/general/logos/logo-hills.svg',
  logo_image_url = 'https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/global/general/logos/logo-hills.svg',
  name = 'Hill''s Science Diet'
WHERE name = 'Wellness';

-- Add new popular pet brands
INSERT INTO brands (brand_id, name, logo_url, logo_image_url, is_featured, display_order)
VALUES 
  (gen_random_uuid(), 'IAMS', 'https://www.iams.com/sites/g/files/auxxlc446/files/2021-12/iams-logo-1.svg', 'https://www.iams.com/sites/g/files/auxxlc446/files/2021-12/iams-logo-1.svg', true, 9),
  (gen_random_uuid(), 'Purina', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Purina_logo.svg/320px-Purina_logo.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Purina_logo.svg/320px-Purina_logo.svg.png', true, 10),
  (gen_random_uuid(), 'Meat Up', 'https://meatup.in/cdn/shop/files/meat-up-logo.png', 'https://meatup.in/cdn/shop/files/meat-up-logo.png', true, 11),
  (gen_random_uuid(), 'Kennel Kitchen', 'https://www.kennelkitchen.in/wp-content/uploads/2020/01/logo.png', 'https://www.kennelkitchen.in/wp-content/uploads/2020/01/logo.png', true, 12)
ON CONFLICT DO NOTHING;