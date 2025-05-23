import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { generateWhatsAppLink } from '../../utils/storage';
import { toast } from 'react-hot-toast';

const CheckoutForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  
  const businessPhone = '525564259421';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim()) {
      toast.error('Por favor complete todos los campos');
      return;
    }
    
    setIsSubmitting(true);
    
    // Generate WhatsApp message with order details
    const whatsappLink = generateWhatsAppLink(
      businessPhone,
      name,
      phone,
      cartItems
    );
    
    // Open WhatsApp in a new tab
    window.open(whatsappLink, '_blank');
    
    // Clear cart and redirect back to home
    setTimeout(() => {
      clearCart();
      navigate('/');
      toast.success('¡Pedido enviado! Gracias por su compra');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre completo
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          placeholder="Ingrese su nombre completo"
          required
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Número de teléfono
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          placeholder="Ej. 5512345678"
          required
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className={`btn-primary w-full py-3 mt-6 ${
          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? 'Procesando...' : 'Finalizar y Enviar por WhatsApp'}
      </button>
      
      <p className="text-sm text-gray-600 mt-4">
        Al hacer clic en "Finalizar y Enviar por WhatsApp", será redirigido a WhatsApp para confirmar su pedido. 
        No se realiza ningún cargo automático; todos los detalles de entrega y pago se coordinarán a través de WhatsApp.
      </p>
    </form>
  );
};

export default CheckoutForm;