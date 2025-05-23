import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FreshMarket</h3>
            <p className="text-gray-300 mb-4">
              Ofrecemos alimentos frescos a precios justos, directo del productor a tu mesa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Frutas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Verduras</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Lácteos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Carnes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Panadería</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/cart" className="text-gray-300 hover:text-white transition-colors">Carrito</Link></li>
              <li><Link to="/admin/login" className="text-gray-300 hover:text-white transition-colors">Administración</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Calle Principal 123, Ciudad</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">+52 55 6425 9421</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">info@freshmarket.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} FreshMarket. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;