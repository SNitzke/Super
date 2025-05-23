/*
  # Add product management policies

  1. Changes
    - Add RLS policies for product management
      - Allow authenticated users to insert products
      - Allow authenticated users to update products
      - Allow authenticated users to delete products

  2. Security
    - Enable RLS on products table (already enabled)
    - Add policies for INSERT, UPDATE, and DELETE operations
    - Restrict operations to authenticated users only
*/

-- Policy to allow authenticated users to insert products
CREATE POLICY "Authenticated users can insert products"
ON products
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Policy to allow authenticated users to update products
CREATE POLICY "Authenticated users can update products"
ON products
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Policy to allow authenticated users to delete products
CREATE POLICY "Authenticated users can delete products"
ON products
FOR DELETE
TO authenticated
USING (true);