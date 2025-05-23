import React from 'react';
import { useProducts } from '../../contexts/ProductContext';
import ProductCard from './ProductCard';

interface ProductListProps {
  categoryId: string;
}

const ProductList: React.FC<ProductListProps> = ({ categoryId }) => {
  const { products } = useProducts();
  const categoryProducts = products.filter(product => product.category === categoryId);

  if (categoryProducts.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No hay productos disponibles en esta categoría
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {categoryProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;