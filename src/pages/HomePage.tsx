import React, { useEffect } from 'react';
import { ShoppingCart, Truck, ThumbsUp } from 'lucide-react';
import CategoryAccordion from '../components/categories/CategoryAccordion';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'FreshMarket - Alimentos frescos a precios justos';
  }, []);

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Alimentos frescos a precios justos
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Del productor a tu mesa, sin intermediarios
            </p>
            <a 
              href="#categories" 
              className="btn bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-md shadow-lg transition-all transform hover:-translate-y-1"
            >
              Ver categorías
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingCart size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Precios justos</h3>
              <p className="text-gray-600">
                Ofrecemos precios más bajos que los supermercados sin comprometer la calidad.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Truck size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega rápida</h3>
              <p className="text-gray-600">
                Reciba sus productos frescos directamente en su puerta en el menor tiempo posible.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <ThumbsUp size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Calidad garantizada</h3>
              <p className="text-gray-600">
                Todos nuestros productos son seleccionados cuidadosamente para garantizar la mejor calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestras Categorías</h2>
          <CategoryAccordion />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para ordenar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Realice su pedido ahora y reciba los productos más frescos directamente en su puerta
          </p>
          <a 
            href="#categories" 
            className="btn bg-white text-secondary-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-md shadow-lg transition-all transform hover:-translate-y-1"
          >
            Explorar categorías
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;