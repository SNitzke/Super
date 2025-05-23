export interface Customer {
  id: string;
  email: string;
  name: string;
  phone?: string;
  created_at: string;
  loyalty_points: number;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  image_url?: string;
  category: string;
  subcategory?: string;
  unit_type: UnitType;
  unit_size: number;
  stock: number;
  created_at?: string;
  updated_at?: string;
}

export interface Order {
  id: string;
  customer_id: string;
  total_amount: number;
  status: OrderStatus;
  created_at: string;
  items?: OrderItem[];
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  product?: Product;
}

export type UnitType = 'kg' | 'g' | 'l' | 'ml' | 'unidad' | 'paquete';

export type OrderStatus = 'pending' | 'processing' | 'completed' | 'cancelled';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CategoryInfo {
  id: string;
  name: string;
  icon: string;
  subcategories: string[];
}