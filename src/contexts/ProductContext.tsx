import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../types';
import { supabase } from '../lib/supabase';
import { toast } from 'react-hot-toast';

interface ProductContextType {
  products: Product[];
  featuredProducts: Product[];
  addProduct: (product: Omit<Product, 'id'>) => Promise<void>;
  updateProduct: (product: Product) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  getProductById: (id: string) => Product | undefined;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*');

      if (error) {
        throw error;
      }

      if (data) {
        setProducts(data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Error al cargar los productos');
    }
  };

  const featuredProducts = products.filter(product => product.featured);

  const addProduct = async (product: Omit<Product, 'id'>) => {
    try {
      const { data, error } = await supabase
        .from('products')
        .insert([product])
        .select()
        .single();

      if (error) {
        throw error;
      }

      if (data) {
        setProducts(prev => [...prev, data]);
        toast.success('Producto añadido correctamente');
      }
    } catch (error) {
      console.error('Error adding product:', error);
      toast.error('Error al añadir el producto');
    }
  };

  const updateProduct = async (updatedProduct: Product) => {
    try {
      const { error } = await supabase
        .from('products')
        .update(updatedProduct)
        .eq('id', updatedProduct.id);

      if (error) {
        throw error;
      }

      setProducts(prev =>
        prev.map(product =>
          product.id === updatedProduct.id ? updatedProduct : product
        )
      );
      toast.success('Producto actualizado correctamente');
    } catch (error) {
      console.error('Error updating product:', error);
      toast.error('Error al actualizar el producto');
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (error) {
        throw error;
      }

      setProducts(prev => prev.filter(product => product.id !== id));
      toast.success('Producto eliminado correctamente');
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Error al eliminar el producto');
    }
  };

  const getProductById = (id: string) => {
    return products.find(product => product.id === id);
  };

  return (
    <ProductContext.Provider value={{
      products,
      featuredProducts,
      addProduct,
      updateProduct,
      deleteProduct,
      getProductById
    }}>
      {children}
    </ProductContext.Provider>
  );
};