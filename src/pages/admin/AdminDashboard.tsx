import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, BarChart, Package } from 'lucide-react';
import { useProducts } from '../../contexts/ProductContext';

const AdminDashboard: React.FC = () => {
  const { products } = useProducts();
  
  useEffect(() => {
    document.title = 'Dashboard de Administración | FreshMarket';
  }, []);

  // Calculate some stats
  const totalProducts = products.length;
  const featuredProducts = products.filter(product => product.featured).length;
  const lowStockProducts = products.filter(product => (product.stock || 0) < 10).length;
  
  // Get random categories count for demo purposes
  const categoryCounts = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="container-custom py-8 animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Panel de Administración</h1>
        <p className="text-gray-600 mt-2">
          Bienvenido al panel de administración de FreshMarket
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary-500">
          <div className="flex items-center">
            <div className="p-3 bg-primary-100 rounded-full mr-4">
              <Package size={24} className="text-primary-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Productos</p>
              <p className="text-2xl font-semibold">{totalProducts}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary-500">
          <div className="flex items-center">
            <div className="p-3 bg-secondary-100 rounded-full mr-4">
              <ShoppingBag size={24} className="text-secondary-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Productos Destacados</p>
              <p className="text-2xl font-semibold">{featuredProducts}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-full mr-4">
              <BarChart size={24} className="text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Stock Bajo</p>
              <p className="text-2xl font-semibold">{lowStockProducts}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-full mr-4">
              <User size={24} className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Categorías</p>
              <p className="text-2xl font-semibold">{Object.keys(categoryCounts).length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Acciones Rápidas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/admin/products"
            className="bg-gray-100 hover:bg-gray-200 p-4 rounded-md flex items-center transition-colors"
          >
            <Package size={20} className="mr-3 text-primary-600" />
            <span>Gestionar Productos</span>
          </Link>
          
          <Link
            to="/admin/products/new"
            className="bg-gray-100 hover:bg-gray-200 p-4 rounded-md flex items-center transition-colors"
          >
            <ShoppingBag size={20} className="mr-3 text-secondary-600" />
            <span>Añadir Nuevo Producto</span>
          </Link>
          
          <Link
            to="/"
            className="bg-gray-100 hover:bg-gray-200 p-4 rounded-md flex items-center transition-colors"
          >
            <User size={20} className="mr-3 text-blue-600" />
            <span>Ver Tienda</span>
          </Link>
        </div>
      </div>

      {/* Categories Summary */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Resumen de Categorías</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Categoría
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Productos
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Porcentaje
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Object.entries(categoryCounts).map(([category, count]) => (
                <tr key={category}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {count}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {Math.round((count / totalProducts) * 100)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;