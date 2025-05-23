import { create } from 'zustand';
import { CategoryInfo } from '../types';
import {
  UtensilsCrossed, Coffee, Apple, Sandwich, 
  Beef, Milk, Box, Cookie, CakeSlice, 
  Candy, Wheat, Droplet, Snowflake, Baby, 
  Cat, Droplets, Bath, Leaf,
  type LucideIcon
} from 'lucide-react';

interface CategoryStore {
  categories: CategoryInfo[];
  expandedCategories: string[];
  toggleCategory: (id: string) => void;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  expandedCategories: [],
  toggleCategory: (id: string) => 
    set((state) => ({
      expandedCategories: state.expandedCategories.includes(id)
        ? state.expandedCategories.filter(catId => catId !== id)
        : [...state.expandedCategories, id]
    })),
  categories: [
    {
      id: 'carnes_pescados',
      name: 'Carne y Pescado',
      icon: 'Beef',
      subcategories: ['Res', 'Cerdo', 'Pollo', 'Pescado', 'Mariscos']
    },
    {
      id: 'frutas_verduras',
      name: 'Frutas y Verduras',
      icon: 'Apple',
      subcategories: ['Frutas', 'Verduras', 'Hierbas']
    },
    {
      id: 'lacteos_huevos',
      name: 'Lácteos y Huevos',
      icon: 'Milk',
      subcategories: ['Leche', 'Quesos', 'Yogurt', 'Huevos']
    },
    {
      id: 'abarrotes',
      name: 'Abarrotes',
      icon: 'Box',
      subcategories: ['Arroz', 'Frijoles', 'Pasta', 'Aceites']
    },
    {
      id: 'pan_tortillas',
      name: 'Pan y Tortillas',
      icon: 'CakeSlice',
      subcategories: ['Pan Dulce', 'Pan Blanco', 'Tortillas']
    },
    {
      id: 'bebidas',
      name: 'Bebidas',
      icon: 'Coffee',
      subcategories: ['Refrescos', 'Jugos', 'Agua', 'Café']
    },
    {
      id: 'limpieza',
      name: 'Limpieza',
      icon: 'Droplets',
      subcategories: ['Detergentes', 'Papel', 'Jabones']
    },
    {
      id: 'higiene_personal',
      name: 'Higiene Personal',
      icon: 'Bath',
      subcategories: ['Shampoo', 'Jabón', 'Pasta Dental']
    }
  ]
}));

export const getCategoryIcon = (iconName: string): LucideIcon => {
  const icons: { [key: string]: LucideIcon } = {
    UtensilsCrossed,
    Coffee,
    Apple,
    Sandwich,
    Beef,
    Milk,
    Box,
    Cookie,
    CakeSlice,
    Candy,
    Wheat,
    Droplet,
    Snowflake,
    Baby,
    Cat,
    Droplets,
    Bath,
    Leaf
  };
  return icons[iconName] || Box;
};