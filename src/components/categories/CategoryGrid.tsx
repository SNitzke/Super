import React from 'react';
import { Link } from 'react-router-dom';
import { useCategoryStore, getCategoryIcon } from '../../stores/categoryStore';

const CategoryGrid: React.FC = () => {
  const { categories } = useCategoryStore();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map((category) => {
        const Icon = getCategoryIcon(category.icon);
        
        return (
          <Link
            key={category.id}
            to={`/categoria/${category.id}`}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 group-hover:bg-primary-200 transition-colors mb-4">
              <Icon size={32} className="text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {category.name}
            </h3>
            <p className="text-sm text-gray-500">
              {category.subcategories.slice(0, 3).join(', ')}
              {category.subcategories.length > 3 && '...'}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

export default CategoryGrid;