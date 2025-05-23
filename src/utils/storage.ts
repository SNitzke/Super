import { CartItem, Product } from '../types';

// Products
export const saveProducts = (products: Product[]): void => {
  localStorage.setItem('products', JSON.stringify(products));
};

export const getProducts = (): Product[] => {
  const productsJson = localStorage.getItem('products');
  return productsJson ? JSON.parse(productsJson) : [];
};

// Cart
export const saveCartItems = (items: CartItem[]): void => {
  localStorage.setItem('cart', JSON.stringify(items));
};

export const getCartItems = (): CartItem[] => {
  const cartJson = localStorage.getItem('cart');
  return cartJson ? JSON.parse(cartJson) : [];
};

// Admin auth
export const saveAuthState = (isLoggedIn: boolean): void => {
  localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
};

export const getAuthState = (): boolean => {
  const authJson = localStorage.getItem('isLoggedIn');
  return authJson ? JSON.parse(authJson) : false;
};

// Format currency
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2
  }).format(amount);
};

// WhatsApp integration
export const generateWhatsAppLink = (
  phone: string,
  customerName: string,
  customerPhone: string,
  cartItems: CartItem[]
): string => {
  const items = cartItems.map(
    item => `• ${item.quantity}x ${item.product.name} (${formatCurrency(item.product.price)}) - Subtotal: ${formatCurrency(item.product.price * item.quantity)}`
  ).join('\n');
  
  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  
  const message = encodeURIComponent(
    `*Nuevo Pedido*\n\n` +
    `*Cliente:* ${customerName}\n` +
    `*Teléfono:* ${customerPhone}\n\n` +
    `*Productos:*\n${items}\n\n` +
    `*Total:* ${formatCurrency(total)}`
  );
  
  return `https://wa.me/${phone}?text=${message}`;
};