import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';

const CartPage: React.FC = () => {
  const { cartItems } = useCart();
  
  useEffect(() => {
    document.title = 'Carrito de Compra | FreshMarket';
  }, []);

  return (
    <div className="container-custom py-8 md:py-12 animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Carrito de Compra</h1>
        <Link to="/" className="text-primary-600 flex items-center mt-2 hover:text-primary-700">
          <ArrowLeft size={16} className="mr-1" />
          Continuar comprando
        </Link>
      </div>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="flex justify-center mb-4 text-gray-400">
            <ShoppingBag size={80} />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Tu carrito está vacío</h2>
          <p className="text-gray-600 mb-6">
            Parece que aún no has añadido ningún producto a tu carrito.
          </p>
          <Link to="/" className="btn-primary">
            Explorar productos
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b">
                Productos ({cartItems.length})
              </h2>
              <div className="divide-y">
                {cartItems.map(item => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
            </div>
          </div>

          <div>
            <CartSummary />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;