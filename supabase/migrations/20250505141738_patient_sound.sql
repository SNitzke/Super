/*
  # Enhanced Database Schema

  1. New Tables
    - `customers`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `name` (text)
      - `phone` (text)
      - `created_at` (timestamp)
      - `loyalty_points` (integer)
    
    - `products`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `price` (decimal)
      - `image_url` (text)
      - `category` (text)
      - `subcategory` (text)
      - `unit_type` (text) - kg, g, l, ml, unit
      - `unit_size` (decimal)
      - `stock` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `orders`
      - `id` (uuid, primary key)
      - `customer_id` (uuid, foreign key)
      - `total_amount` (decimal)
      - `status` (text)
      - `created_at` (timestamp)
    
    - `order_items`
      - `id` (uuid, primary key)
      - `order_id` (uuid, foreign key)
      - `product_id` (uuid, foreign key)
      - `quantity` (integer)
      - `unit_price` (decimal)
      - `total_price` (decimal)

  2. Security
    - Enable RLS on all tables
    - Add policies for customer access
*/

-- Create customers table
CREATE TABLE customers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  phone text,
  created_at timestamptz DEFAULT now(),
  loyalty_points integer DEFAULT 0
);

-- Create products table
CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price decimal(10,2) NOT NULL,
  image_url text,
  category text NOT NULL,
  subcategory text,
  unit_type text NOT NULL,
  unit_size decimal(10,2) NOT NULL,
  stock integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create orders table
CREATE TABLE orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id uuid REFERENCES customers(id),
  total_amount decimal(10,2) NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Create order items table
CREATE TABLE order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id),
  product_id uuid REFERENCES products(id),
  quantity integer NOT NULL,
  unit_price decimal(10,2) NOT NULL,
  total_price decimal(10,2) NOT NULL
);

-- Enable RLS
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Customers can view their own data"
  ON customers
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Anyone can view products"
  ON products
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Customers can view their own orders"
  ON orders
  FOR SELECT
  USING (auth.uid() = customer_id);

CREATE POLICY "Customers can view their own order items"
  ON order_items
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND orders.customer_id = auth.uid()
    )
  );

-- Create product categories enum
CREATE TYPE product_category AS ENUM (
  'frutas_verduras',
  'lacteos_huevos',
  'carnes_pescados',
  'abarrotes',
  'limpieza',
  'bebidas',
  'congelados',
  'pan_tortillas',
  'higiene_personal'
);

-- Create product unit types enum
CREATE TYPE unit_type AS ENUM (
  'kg',
  'g',
  'l',
  'ml',
  'unidad',
  'paquete'
);

-- Add indexes for better performance
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_subcategory ON products(subcategory);
CREATE INDEX idx_orders_customer ON orders(customer_id);
CREATE INDEX idx_order_items_order ON order_items(order_id);