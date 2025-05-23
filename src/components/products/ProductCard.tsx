import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../contexts/CartContext';
import { formatCurrency } from '../../utils/storage';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, cartItems, updateQuantity, removeFromCart } = useCart();
  
  const cartItem = cartItems.find(item => item.product.id === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  const handleIncreaseQuantity = () => {
    if (cartItem) {
      updateQuantity(product.id, cartItem.quantity + 1);
    } else {
      addToCart(product, 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (cartItem && cartItem.quantity > 1) {
      updateQuantity(product.id, cartItem.quantity - 1);
    } else if (cartItem) {
      removeFromCart(product.id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image_url} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-lg font-bold text-primary-600">
              {formatCurrency(product.price)}
            </span>
            <span className="text-sm text-gray-500 ml-1">
              / {product.unit_type}
            </span>
          </div>
          {product.stock > 0 ? (
            <span className="text-sm text-green-600">Disponible</span>
          ) : (
            <span className="text-sm text-red-600">Agotado</span>
          )}
        </div>

        {product.stock > 0 && (
          <div className="mt-4">
            {quantityInCart > 0 ? (
              <div className="flex items-center justify-between">
                <button
                  onClick={handleDecreaseQuantity}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-l-md"
                >
                  <Minus size={20} />
                </button>
                <span className="px-4 py-2 bg-gray-50 font-medium">
                  {quantityInCart} {product.unit_type}
                </span>
                <button
                  onClick={handleIncreaseQuantity}
                  className="p-2 text-white bg-primary-500 hover:bg-primary-600 rounded-r-md"
                >
                  <Plus size={20} />
                </button>
              </div>
            ) : (
              <button
                onClick={handleAddToCart}
                className="w-full py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors flex items-center justify-center"
              >
                <Plus size={20} className="mr-2" />
                Agregar al carrito
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;