/*
  # V-Care Pet Polyclinic Initial Database Schema

  ## Overview
  Complete database schema for the V-Care Pet Polyclinic application, including
  all tables for users, pets, clinics, appointments, e-commerce, and medical records.

  ## Tables Created
  
  ### 1. users
  - Stores user account information
  - Fields: user_id, email, phone, name, timestamps
  
  ### 2. pets
  - Pet profiles linked to users
  - Fields: pet info, medical history, vaccination records
  
  ### 3. clinics
  - Clinic locations across 11 cities
  - Fields: location data, operating hours, services, 24/7 availability
  
  ### 4. doctors
  - Veterinarian profiles
  - Fields: qualifications, specializations, clinic assignments
  
  ### 5. appointments
  - Booking system
  - Fields: appointment details, status tracking
  
  ### 6. products
  - Pet food and supplies catalog
  - Fields: product details, pricing, inventory
  
  ### 7. orders
  - E-commerce orders
  - Fields: order details, delivery info, payment status
  
  ### 8. order_items
  - Line items for each order
  
  ### 9. reviews
  - Ratings and reviews for clinics, doctors, products
  
  ### 10. medical_records
  - Pet medical history, prescriptions, lab reports
  
  ### 11. wellness_plans
  - Subscription/membership plans
  
  ### 12. blog_posts
  - Content management for blog articles

  ## Security
  - Row Level Security (RLS) enabled on all tables
  - Policies created for authenticated users
  - Users can only access their own data
  - Public read access for clinics, doctors, products, and blog posts
*/

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE IF NOT EXISTS users (
  user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  email text UNIQUE NOT NULL,
  phone text UNIQUE NOT NULL,
  name text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON users FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own data"
  ON users FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Pets table
CREATE TABLE IF NOT EXISTS pets (
  pet_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES users(user_id) ON DELETE CASCADE,
  name text NOT NULL,
  type text NOT NULL,
  breed text NOT NULL,
  age integer NOT NULL DEFAULT 0,
  gender text NOT NULL,
  photo_url text,
  medical_history text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE pets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own pets"
  ON pets FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own pets"
  ON pets FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own pets"
  ON pets FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own pets"
  ON pets FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Clinics table
CREATE TABLE IF NOT EXISTS clinics (
  clinic_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name text NOT NULL,
  city text NOT NULL,
  address text NOT NULL,
  pincode text NOT NULL,
  latitude numeric NOT NULL,
  longitude numeric NOT NULL,
  operating_hours text NOT NULL,
  services_available text[] NOT NULL DEFAULT '{}',
  is_24x7 boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE clinics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view clinics"
  ON clinics FOR SELECT
  TO public
  USING (true);

-- Doctors table
CREATE TABLE IF NOT EXISTS doctors (
  doctor_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  clinic_id uuid REFERENCES clinics(clinic_id) ON DELETE CASCADE,
  name text NOT NULL,
  specialization text NOT NULL,
  qualification text NOT NULL,
  photo_url text,
  bio text NOT NULL DEFAULT '',
  available_days text[] NOT NULL DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE doctors ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view doctors"
  ON doctors FOR SELECT
  TO public
  USING (true);

-- Appointments table
CREATE TABLE IF NOT EXISTS appointments (
  appointment_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES users(user_id) ON DELETE CASCADE,
  pet_id uuid REFERENCES pets(pet_id) ON DELETE CASCADE,
  clinic_id uuid REFERENCES clinics(clinic_id) ON DELETE CASCADE,
  doctor_id uuid REFERENCES doctors(doctor_id) ON DELETE CASCADE,
  service_type text NOT NULL,
  appointment_date date NOT NULL,
  appointment_time time NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  notes text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own appointments"
  ON appointments FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own appointments"
  ON appointments FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own appointments"
  ON appointments FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Products table
CREATE TABLE IF NOT EXISTS products (
  product_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name text NOT NULL,
  brand text NOT NULL,
  category text NOT NULL,
  description text NOT NULL,
  price numeric NOT NULL,
  stock integer NOT NULL DEFAULT 0,
  images text[] NOT NULL DEFAULT '{}',
  pet_type text NOT NULL,
  weight text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  TO public
  USING (true);

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
  order_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES users(user_id) ON DELETE CASCADE,
  total_amount numeric NOT NULL,
  delivery_address text NOT NULL,
  delivery_slot text NOT NULL,
  payment_status text NOT NULL DEFAULT 'pending',
  order_status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own orders"
  ON orders FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own orders"
  ON orders FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Order items table
CREATE TABLE IF NOT EXISTS order_items (
  item_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id uuid REFERENCES orders(order_id) ON DELETE CASCADE,
  product_id uuid REFERENCES products(product_id) ON DELETE CASCADE,
  quantity integer NOT NULL,
  price numeric NOT NULL
);

ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own order items"
  ON order_items FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.order_id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create own order items"
  ON order_items FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.order_id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );

-- Reviews table
CREATE TABLE IF NOT EXISTS reviews (
  review_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES users(user_id) ON DELETE CASCADE,
  entity_type text NOT NULL,
  entity_id uuid NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view reviews"
  ON reviews FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Users can create reviews"
  ON reviews FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own reviews"
  ON reviews FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Medical records table
CREATE TABLE IF NOT EXISTS medical_records (
  record_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  pet_id uuid REFERENCES pets(pet_id) ON DELETE CASCADE,
  appointment_id uuid REFERENCES appointments(appointment_id) ON DELETE SET NULL,
  record_type text NOT NULL,
  document_url text NOT NULL,
  notes text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE medical_records ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own pet medical records"
  ON medical_records FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM pets
      WHERE pets.pet_id = medical_records.pet_id
      AND pets.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create own pet medical records"
  ON medical_records FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM pets
      WHERE pets.pet_id = medical_records.pet_id
      AND pets.user_id = auth.uid()
    )
  );

-- Wellness plans table
CREATE TABLE IF NOT EXISTS wellness_plans (
  plan_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES users(user_id) ON DELETE CASCADE,
  pet_id uuid REFERENCES pets(pet_id) ON DELETE CASCADE,
  plan_type text NOT NULL,
  start_date date NOT NULL,
  end_date date NOT NULL,
  status text NOT NULL DEFAULT 'active',
  benefits_used integer DEFAULT 0
);

ALTER TABLE wellness_plans ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own wellness plans"
  ON wellness_plans FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own wellness plans"
  ON wellness_plans FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own wellness plans"
  ON wellness_plans FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  post_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text NOT NULL,
  featured_image text NOT NULL,
  category text NOT NULL,
  pet_type text NOT NULL,
  author text NOT NULL,
  read_time integer NOT NULL,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  TO public
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_pets_user_id ON pets(user_id);
CREATE INDEX IF NOT EXISTS idx_appointments_user_id ON appointments(user_id);
CREATE INDEX IF NOT EXISTS idx_appointments_date ON appointments(appointment_date);
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_clinics_city ON clinics(city);
CREATE INDEX IF NOT EXISTS idx_products_pet_type ON products(pet_type);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_reviews_entity ON reviews(entity_type, entity_id);
