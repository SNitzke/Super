import { Product } from '../types';

export const initialProducts: Product[] = [
  // Frutas
  {
    id: '1',
    name: 'Fresas Frescas',
    description: 'Fresas dulces y jugosas recién recolectadas. Perfectas para postres o consumir directamente.',
    price: 79.99,
    image: 'https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg',
    category: 'frutas',
    featured: true,
    stock: 30
  },
  {
    id: '2',
    name: 'Aguacate Hass',
    description: 'Aguacates cremosos y nutritivos. Ideales para guacamole, ensaladas o tostadas.',
    price: 49.99,
    image: 'https://images.pexels.com/photos/2228553/pexels-photo-2228553.jpeg',
    category: 'frutas',
    featured: true,
    stock: 25
  },
  {
    id: '3',
    name: 'Plátanos Frescos',
    description: 'Plátanos maduros y dulces, perfectos para consumo directo o postres.',
    price: 29.99,
    image: 'https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg',
    category: 'frutas',
    stock: 40
  },
  {
    id: '4',
    name: 'Manzanas Rojas',
    description: 'Manzanas frescas y crujientes, ideales para snacks saludables.',
    price: 45.99,
    image: 'https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg',
    category: 'frutas',
    stock: 35
  },
  
  // Verduras
  {
    id: '5',
    name: 'Tomates Orgánicos',
    description: 'Tomates jugosos y sabrosos cultivados sin pesticidas. Ideales para ensaladas y salsas.',
    price: 65.99,
    image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg',
    category: 'verduras',
    stock: 40
  },
  {
    id: '6',
    name: 'Lechuga Fresca',
    description: 'Lechuga crujiente y fresca, perfecta para ensaladas.',
    price: 19.99,
    image: 'https://images.pexels.com/photos/1199562/pexels-photo-1199562.jpeg',
    category: 'verduras',
    stock: 25
  },
  {
    id: '7',
    name: 'Zanahorias Orgánicas',
    description: 'Zanahorias frescas y dulces, excelentes para ensaladas o cocinar.',
    price: 29.99,
    image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg',
    category: 'verduras',
    stock: 30
  },
  
  // Carnes
  {
    id: '8',
    name: 'Bistec de Res',
    description: 'Corte premium de res, perfecto para asar o preparar a la plancha.',
    price: 189.99,
    image: 'https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg',
    category: 'carnes',
    stock: 15
  },
  {
    id: '9',
    name: 'Chuletas de Cerdo',
    description: 'Chuletas frescas de cerdo, ideales para asar o freír.',
    price: 149.99,
    image: 'https://images.pexels.com/photos/1927377/pexels-photo-1927377.jpeg',
    category: 'carnes',
    stock: 20
  },
  {
    id: '10',
    name: 'Carne Molida Mixta',
    description: 'Mezcla de carne molida de res y cerdo, perfecta para hamburguesas o albóndigas.',
    price: 129.99,
    image: 'https://images.pexels.com/photos/1927383/pexels-photo-1927383.jpeg',
    category: 'carnes',
    stock: 25
  },
  
  // Enlatados
  {
    id: '11',
    name: 'Rajas en Lata',
    description: 'Rajas de chile poblano en escabeche, perfectas para tacos y guisos.',
    price: 22.99,
    image: 'https://images.pexels.com/photos/5949885/pexels-photo-5949885.jpeg',
    category: 'enlatados',
    stock: 50
  },
  {
    id: '12',
    name: 'Elote Dorado',
    description: 'Granos de elote dulce en conserva, ideales para ensaladas y guarniciones.',
    price: 19.99,
    image: 'https://images.pexels.com/photos/603030/pexels-photo-603030.jpeg',
    category: 'enlatados',
    stock: 45
  },
  
  // Huevos
  {
    id: '13',
    name: 'Huevos San Juan',
    description: 'Huevos frescos San Juan, calidad premium.',
    price: 89.99,
    image: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg',
    category: 'huevos',
    stock: 30
  },
  {
    id: '14',
    name: 'Huevos Blancos',
    description: 'Huevos blancos frescos, perfectos para todo uso.',
    price: 75.99,
    image: 'https://images.pexels.com/photos/7129145/pexels-photo-7129145.jpeg',
    category: 'huevos',
    stock: 35
  },
  
  // Condimentos
  {
    id: '15',
    name: 'Pimienta Negra Molida',
    description: 'Pimienta negra molida de alta calidad.',
    price: 45.99,
    image: 'https://images.pexels.com/photos/4198843/pexels-photo-4198843.jpeg',
    category: 'condimentos',
    stock: 40
  },
  {
    id: '16',
    name: 'Ajo en Polvo',
    description: 'Ajo deshidratado y molido, perfecto para sazonar.',
    price: 39.99,
    image: 'https://images.pexels.com/photos/4198835/pexels-photo-4198835.jpeg',
    category: 'condimentos',
    stock: 35
  },
  
  // Lácteos
  {
    id: '17',
    name: 'Queso Oaxaca',
    description: 'Queso Oaxaca fresco, perfecto para quesadillas y platillos gratinados.',
    price: 119.99,
    image: 'https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg',
    category: 'lacteos',
    featured: true,
    stock: 20
  },
  {
    id: '18',
    name: 'Queso Manchego',
    description: 'Queso manchego rebanado, ideal para sandwiches y botanas.',
    price: 129.99,
    image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg',
    category: 'lacteos',
    stock: 15
  },
  {
    id: '19',
    name: 'Leche Entera',
    description: 'Leche entera fresca pasteurizada.',
    price: 29.99,
    image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg',
    category: 'lacteos',
    stock: 40
  },
  {
    id: '20',
    name: 'Yogurt Natural',
    description: 'Yogurt natural sin azúcar, perfecto para desayunos y snacks.',
    price: 25.99,
    image: 'https://images.pexels.com/photos/128865/pexels-photo-128865.jpeg',
    category: 'lacteos',
    stock: 30
  },
  
  // Aceites
  {
    id: '21',
    name: 'Aceite de Oliva Extra Virgen',
    description: 'Aceite de oliva premium, ideal para ensaladas y cocina gourmet.',
    price: 159.99,
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg',
    category: 'aceites',
    stock: 25
  },
  {
    id: '22',
    name: 'Aceite Vegetal',
    description: 'Aceite vegetal multiusos para cocina general.',
    price: 49.99,
    image: 'https://images.pexels.com/photos/725998/pexels-photo-725998.jpeg',
    category: 'aceites',
    stock: 35
  },
  
  // Limpieza Personal
  {
    id: '23',
    name: 'Shampoo Hidratante',
    description: 'Shampoo con fórmula hidratante para todo tipo de cabello.',
    price: 89.99,
    image: 'https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg',
    category: 'limpieza',
    stock: 30
  },
  {
    id: '24',
    name: 'Jabón Corporal',
    description: 'Jabón corporal suave con ingredientes naturales.',
    price: 45.99,
    image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg',
    category: 'limpieza',
    stock: 40
  }
];