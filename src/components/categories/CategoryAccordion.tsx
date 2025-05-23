import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useCategoryStore, getCategoryIcon } from '../../stores/categoryStore';
import ProductList from '../products/ProductList';

const CategoryAccordion: React.FC = () => {
  const { categories, expandedCategories, toggleCategory } = useCategoryStore();

  return (
    <div className="space-y-4">
      {categories.map((category) => {
        const Icon = getCategoryIcon(category.icon);
        const isExpanded = expandedCategories.includes(category.id);
        
        return (
          <div key={category.id} className="bg-white rounded-lg shadow-sm">
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-100">
                  <Icon size={24} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {category.subcategories.length} subcategorías
                  </p>
                </div>
              </div>
              {isExpanded ? (
                <ChevronDown className="text-gray-400" />
              ) : (
                <ChevronRight className="text-gray-400" />
              )}
            </button>
            
            {isExpanded && (
              <div className="px-6 pb-4">
                <div className="pt-4 border-t">
                  <ProductList categoryId={category.id} />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CategoryAccordion;