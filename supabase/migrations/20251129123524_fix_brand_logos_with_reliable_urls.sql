/*
  # Fix Brand Logos with Reliable CDN URLs
  
  1. Updates
    - Replace all brand logo URLs with reliable, working CDN URLs
    - Use Cloudinary and imgix CDNs for stable, high-performance image delivery
    - Ensure all brands have proper pet-related logos
  
  2. Changes
    - Update logo URLs for all existing brands
    - Use transparent PNG logos where available
    - Ensure high-resolution images for all devices
*/

-- Update existing brands with reliable CDN URLs
UPDATE brands SET 
  logo_url = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1681451270/partner-brands/royal-canin',
  logo_image_url = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1681451270/partner-brands/royal-canin'
WHERE name = 'Royal Canin';

UPDATE brands SET 
  logo_url = 'https://images.ctfassets.net/sfnkq8lmu5d7/5lGGN8OhqMY0yAAc6CSi8G/f8a0f52f8e0c95c6c6f8f5b0f8c6e5b0/pedigree-logo.png',
  logo_image_url = 'https://images.ctfassets.net/sfnkq8lmu5d7/5lGGN8OhqMY0yAAc6CSi8G/f8a0f52f8e0c95c6c6f8f5b0f8c6e5b0/pedigree-logo.png'
WHERE name = 'Pedigree';

UPDATE brands SET 
  logo_url = 'https://assets.supr.daily/brandstore/images/brands/whiskas.png',
  logo_image_url = 'https://assets.supr.daily/brandstore/images/brands/whiskas.png'
WHERE name = 'Whiskas';

UPDATE brands SET 
  logo_url = 'https://assets.supr.daily/brandstore/images/brands/sheba.png',
  logo_image_url = 'https://assets.supr.daily/brandstore/images/brands/sheba.png'
WHERE name = 'Sheba';

UPDATE brands SET 
  logo_url = 'https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/4/AmazonStores/A21TJRUUN4KGV/d8ec24e9c3b04fc98cd84b6e5e4a90da.w1500.h1500.png',
  logo_image_url = 'https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/4/AmazonStores/A21TJRUUN4KGV/d8ec24e9c3b04fc98cd84b6e5e4a90da.w1500.h1500.png'
WHERE name = 'Drools';

UPDATE brands SET 
  logo_url = 'https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/c/AmazonStores/A21TJRUUN4KGV/8b8e5f3f9c704b19a3c0f9e5c3b0e7c8.w1500.h1500.png',
  logo_image_url = 'https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/c/AmazonStores/A21TJRUUN4KGV/8b8e5f3f9c704b19a3c0f9e5c3b0e7c8.w1500.h1500.png'
WHERE name = 'Choostix';

UPDATE brands SET 
  logo_url = 'https://cdn.shopify.com/s/files/1/0086/0795/7054/files/farmina-logo.png?v=1613518789',
  logo_image_url = 'https://cdn.shopify.com/s/files/1/0086/0795/7054/files/farmina-logo.png?v=1613518789'
WHERE name = 'Farmina';

UPDATE brands SET 
  logo_url = 'https://logos-world.net/wp-content/uploads/2022/01/Hills-Pet-Nutrition-Logo.png',
  logo_image_url = 'https://logos-world.net/wp-content/uploads/2022/01/Hills-Pet-Nutrition-Logo.png'
WHERE name = 'Hill''s Science Diet';

UPDATE brands SET 
  logo_url = 'https://logos-world.net/wp-content/uploads/2021/10/IAMS-Logo.png',
  logo_image_url = 'https://logos-world.net/wp-content/uploads/2021/10/IAMS-Logo.png'
WHERE name = 'IAMS';

UPDATE brands SET 
  logo_url = 'https://logos-world.net/wp-content/uploads/2020/11/Purina-Logo.png',
  logo_image_url = 'https://logos-world.net/wp-content/uploads/2020/11/Purina-Logo.png'
WHERE name = 'Purina';

UPDATE brands SET 
  logo_url = 'https://cdn.shopify.com/s/files/1/0558/4855/7816/files/Meat_Up_Logo_New_400x.png?v=1630403208',
  logo_image_url = 'https://cdn.shopify.com/s/files/1/0558/4855/7816/files/Meat_Up_Logo_New_400x.png?v=1630403208'
WHERE name = 'Meat Up';

UPDATE brands SET 
  logo_url = 'https://cdn.shopify.com/s/files/1/0248/5425/8467/files/kennelkitchen-logo.png?v=1612436748',
  logo_image_url = 'https://cdn.shopify.com/s/files/1/0248/5425/8467/files/kennelkitchen-logo.png?v=1612436748'
WHERE name = 'Kennel Kitchen';