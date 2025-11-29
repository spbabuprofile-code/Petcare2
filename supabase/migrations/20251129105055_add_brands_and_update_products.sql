/*
  # Add Brands Table and Update Products Schema

  1. New Tables
    - `brands`
      - `brand_id` (uuid, primary key)
      - `name` (text, brand name)
      - `logo_url` (text, brand logo image)
      - `is_featured` (boolean, for carousel display)
      - `display_order` (integer, for ordering in carousel)
      - `created_at` (timestamptz)

  2. Modifications to Existing Tables
    - Add `is_top_selling` column to `products` table for featured products
    - Add `discount_percentage` column to `products` table for promotions

  3. Security
    - Enable RLS on `brands` table
    - Add policies for public read access to brands
    - Brands can only be modified by authenticated users (admin)
*/

-- Create brands table
CREATE TABLE IF NOT EXISTS brands (
  brand_id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo_url text NOT NULL,
  is_featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on brands table
ALTER TABLE brands ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view brands
CREATE POLICY "Anyone can view brands"
  ON brands
  FOR SELECT
  TO public
  USING (true);

-- Policy: Only authenticated users can insert brands
CREATE POLICY "Authenticated users can insert brands"
  ON brands
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Only authenticated users can update brands
CREATE POLICY "Authenticated users can update brands"
  ON brands
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Add new columns to products table if they don't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'products' AND column_name = 'is_top_selling'
  ) THEN
    ALTER TABLE products ADD COLUMN is_top_selling boolean DEFAULT false;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'products' AND column_name = 'discount_percentage'
  ) THEN
    ALTER TABLE products ADD COLUMN discount_percentage integer DEFAULT 0;
  END IF;
END $$;