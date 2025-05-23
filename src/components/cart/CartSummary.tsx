import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { formatCurrency } from '../../utils/storage';

interface CartSummaryProps {
  isCheckout?: boolean;
}

const CartSummary: React.FC<CartSummaryProps> = ({ isCheckout = false }) => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleClearCart = () => {
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <div className="flex justify-center mb-4 text-gray-400">
          <ShoppingBag size={60} />
        </div>
        <h3 className="text-xl font-semibold mb-2">Tu carrito está vacío</h3>
        <p className="text-gray-600 mb-4">Añade algunos productos para empezar</p>
        <button
          onClick={() => navigate('/')}
          className="btn-primary w-full"
        >
          Explorar productos
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 border-b pb-2">Resumen del Pedido</h3>
      
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal:</span>
          <span>{formatCurrency(cartTotal)}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg pt-2 border-t">
          <span>Total:</span>
          <span className="text-primary-600">{formatCurrency(cartTotal)}</span>
        </div>
      </div>

      <div className="space-y-3 mt-6">
        {isCheckout ? (
          <p className="text-sm text-gray-600 mb-2">
            Complete el formulario para finalizar su pedido
          </p>
        ) : (
          <>
            <button
              onClick={handleCheckout}
              className="btn-primary w-full"
            >
              Realizar Pedido
            </button>
            <button
              onClick={handleClearCart}
              className="btn-ghost w-full"
            >
              Vaciar Carrito
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSummary;