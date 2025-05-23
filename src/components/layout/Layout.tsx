import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingCart from '../cart/FloatingCart';
import { useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');
  const isCheckoutPage = location.pathname === '/checkout';
  const isCartPage = location.pathname === '/cart';
  
  // Only show floating cart on non-admin, non-cart, non-checkout pages
  const showFloatingCart = !isAdminPage && !isCartPage && !isCheckoutPage;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      {showFloatingCart && <FloatingCart />}
      <Footer />
    </div>
  );
};

export default Layout;