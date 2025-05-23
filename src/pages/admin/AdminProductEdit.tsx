import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContext';
import ProductForm from '../../components/admin/ProductForm';

const AdminProductEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getProductById } = useProducts();
  const navigate = useNavigate();
  
  const product = id ? getProductById(id) : undefined;
  const isEditing = !!id;
  
  useEffect(() => {
    // Set page title based on whether we're editing or creating
    document.title = isEditing 
      ? 'Editar Producto | FreshMarket' 
      : 'Nuevo Producto | FreshMarket';
    
    // If editing and product not found, redirect
    if (isEditing && !product) {
      navigate('/admin/products');
    }
  }, [isEditing, product, navigate]);

  return (
    <div className="container-custom py-8 animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          {isEditing ? 'Editar Producto' : 'Añadir Nuevo Producto'}
        </h1>
        <p className="text-gray-600 mt-2">
          {isEditing 
            ? 'Actualiza la información del producto existente' 
            : 'Ingresa la información para el nuevo producto'}
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <ProductForm 
          initialProduct={product} 
          isEditing={isEditing} 
        />
      </div>
    </div>
  );
};

export default AdminProductEdit;