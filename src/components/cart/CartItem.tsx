import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../contexts/CartContext';
import { formatCurrency } from '../../utils/storage';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { product, quantity } = item;
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncreaseQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="flex items-center py-4 border-b border-gray-200 animate-fadeIn">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex-1">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <button
            onClick={handleRemove}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 size={18} />
          </button>
        </div>
        
        <p className="mt-1 text-sm text-gray-600 line-clamp-1">{product.description}</p>
        
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center border rounded">
            <button
              onClick={handleDecreaseQuantity}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
            >
              <Minus size={16} />
            </button>
            <span className="px-4 py-1 font-medium">{quantity}</span>
            <button
              onClick={handleIncreaseQuantity}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
            >
              <Plus size={16} />
            </button>
          </div>
          
          <div>
            <span className="text-lg font-semibold text-primary-600">
              {formatCurrency(product.price * quantity)}
            </span>
            <span className="text-sm text-gray-500 ml-1">
              ({formatCurrency(product.price)} c/u)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;