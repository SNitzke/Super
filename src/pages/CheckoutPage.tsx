import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import CartSummary from '../components/cart/CartSummary';
import CheckoutForm from '../components/checkout/CheckoutForm';

const CheckoutPage: React.FC = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = 'Finalizar Pedido | FreshMarket';
    
    // Redirect to cart if cart is empty
    if (cartItems.length === 0) {
      navigate('/cart');
    }
  }, [cartItems.length, navigate]);

  if (cartItems.length === 0) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="container-custom py-8 md:py-12 animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Finalizar Pedido</h1>
        <Link to="/cart" className="text-primary-600 flex items-center mt-2 hover:text-primary-700">
          <ArrowLeft size={16} className="mr-1" />
          Volver al carrito
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6 pb-2 border-b">
              Información del Cliente
            </h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6 flex items-start">
              <AlertCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5 mr-3" />
              <p className="text-sm text-blue-800">
                Su pedido se enviará por WhatsApp para coordinar la entrega y el pago. 
                Solo necesitamos su nombre y número de teléfono.
              </p>
            </div>
            
            <CheckoutForm />
          </div>
        </div>

        <div>
          <CartSummary isCheckout />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;