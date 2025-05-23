import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag, User } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount } = useCart();
  const { isLoggedIn, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  
  const isAdminPage = location.pathname.startsWith('/admin');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <Link 
            to="/" 
            className="text-primary-600 font-bold text-xl md:text-2xl flex items-center"
          >
            <span className="text-primary-600 mr-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 9H9.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 9H15.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            FreshMarket
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {isAdminPage ? (
            <>
              <Link to="/admin/dashboard" className="font-medium text-gray-700 hover:text-primary-600 transition-colors">
                Dashboard
              </Link>
              <Link to="/admin/products" className="font-medium text-gray-700 hover:text-primary-600 transition-colors">
                Productos
              </Link>
              <button 
                onClick={handleLogout}
                className="font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/" className="font-medium text-gray-700 hover:text-primary-600 transition-colors">
                Inicio
              </Link>
              <Link to="/cart" className="relative font-medium text-gray-700 hover:text-primary-600 transition-colors">
                Carrito
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-secondary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              {isLoggedIn && (
                <Link to="/admin/dashboard" className="font-medium text-gray-700 hover:text-primary-600 transition-colors">
                  <User size={20} />
                </Link>
              )}
            </>
          )}
        </nav>

        {/* Mobile Navigation Icon */}
        <div className="flex items-center space-x-4 md:hidden">
          {!isAdminPage && (
            <Link to="/cart" className="relative text-gray-700">
              <ShoppingBag size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          )}
          <button 
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 z-50 slide-up">
          <nav className="flex flex-col space-y-4">
            {isAdminPage ? (
              <>
                <Link 
                  to="/admin/dashboard" 
                  className="font-medium text-gray-700 hover:text-primary-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/admin/products" 
                  className="font-medium text-gray-700 hover:text-primary-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Productos
                </Link>
                <button 
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="font-medium text-gray-700 hover:text-primary-600 transition-colors py-2 text-left"
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/" 
                  className="font-medium text-gray-700 hover:text-primary-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </Link>
                <Link 
                  to="/cart" 
                  className="font-medium text-gray-700 hover:text-primary-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Carrito
                </Link>
                {isLoggedIn && (
                  <Link 
                    to="/admin/dashboard" 
                    className="font-medium text-gray-700 hover:text-primary-600 transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Administración
                  </Link>
                )}
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;