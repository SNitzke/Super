import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { formatCurrency } from '../../utils/storage';

const FloatingCart: React.FC = () => {
  const { cartCount, cartTotal } = useCart();
  const navigate = useNavigate();

  if (cartCount === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => navigate('/cart')}
        className="flex items-center bg-primary-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-primary-600 transition-colors animate-fadeIn"
      >
        <ShoppingBag size={20} className="mr-2" />
        <span className="font-semibold mr-1">{cartCount}</span>
        <span className="hidden sm:inline mr-2">items</span>
        <span className="font-semibold">{formatCurrency(cartTotal)}</span>
      </button>
    </div>
  );
};

export default FloatingCart;