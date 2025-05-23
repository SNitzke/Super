import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContext';
import { Product } from '../../types';
import { useCategoryStore } from '../../stores/categoryStore';
import { toast } from 'react-hot-toast';

interface ProductFormProps {
  initialProduct?: Product;
  isEditing?: boolean;
}

const ProductForm: React.FC<ProductFormProps> = ({ 
  initialProduct,
  isEditing = false 
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [stock, setStock] = useState('');
  const [unitType, setUnitType] = useState('unidad');
  const [unitSize, setUnitSize] = useState('1');
  
  const { addProduct, updateProduct } = useProducts();
  const { categories } = useCategoryStore();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (initialProduct) {
      setName(initialProduct.name);
      setDescription(initialProduct.description || '');
      setPrice(initialProduct.price?.toString() || '');
      setImage(initialProduct.image_url || '');
      setCategory(initialProduct.category);
      setSubcategory(initialProduct.subcategory || '');
      setStock(initialProduct.stock?.toString() || '0');
      setUnitType(initialProduct.unit_type);
      setUnitSize(initialProduct.unit_size?.toString() || '1');
    }
  }, [initialProduct]);

  const selectedCategory = categories.find(cat => cat.id === category);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !price || !category) {
      toast.error('Por favor complete todos los campos requeridos');
      return;
    }
    
    const productData = {
      name,
      description,
      price: parseFloat(price),
      image_url: image,
      category,
      subcategory,
      unit_type: unitType,
      unit_size: parseFloat(unitSize),
      stock: stock ? parseInt(stock, 10) : 0
    };
    
    if (isEditing && initialProduct) {
      updateProduct({ ...productData, id: initialProduct.id });
      toast.success('Producto actualizado correctamente');
    } else {
      addProduct(productData);
      toast.success('Producto añadido correctamente');
    }
    
    navigate('/admin/products');
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre*
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
            Precio*
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            step="0.01"
            min="0"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Categoría*
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setSubcategory('');
            }}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            required
          >
            <option value="">Seleccionar categoría</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700 mb-1">
            Subcategoría
          </label>
          <select
            id="subcategory"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            disabled={!selectedCategory}
          >
            <option value="">Seleccionar subcategoría</option>
            {selectedCategory?.subcategories.map(sub => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-1">
            Stock
          </label>
          <input
            type="number"
            id="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            min="0"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        
        <div>
          <label htmlFor="unitType" className="block text-sm font-medium text-gray-700 mb-1">
            Unidad de medida
          </label>
          <select
            id="unitType"
            value={unitType}
            onChange={(e) => setUnitType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="kg">Kilogramo (kg)</option>
            <option value="g">Gramo (g)</option>
            <option value="l">Litro (l)</option>
            <option value="ml">Mililitro (ml)</option>
            <option value="unidad">Unidad</option>
            <option value="paquete">Paquete</option>
            <option value="manojo">Manojo</option>
          </select>
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
            URL de la imagen*
          </label>
          <input
            type="url"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            placeholder="https://ejemplo.com/imagen.jpg"
            required
          />
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Descripción
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>
      
      <div className="flex space-x-4 pt-4">
        <button
          type="submit"
          className="btn-primary"
        >
          {isEditing ? 'Actualizar Producto' : 'Añadir Producto'}
        </button>
        <button
          type="button"
          onClick={() => navigate('/admin/products')}
          className="btn-ghost"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default ProductForm;