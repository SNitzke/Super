# MiSuper

Aplicación web de pedidos de alimentos con notificación por WhatsApp.

## Características

- Catálogo de productos con gestión administrativa
- Carrito de compras interactivo
- Proceso de pedido simplificado
- Notificación automática por WhatsApp
- Diseño responsivo y amigable
- Panel de administración seguro
- Gestión de inventario
- Productos destacados

## Tecnologías

- React + TypeScript
- Tailwind CSS para estilos
- Vite como bundler
- Supabase para base de datos
- React Router para navegación
- React Context para estado global
- Lucide React para iconos

## Estructura del Proyecto

```
src/
  ├── components/     # Componentes reutilizables
  ├── contexts/       # Contextos de React (Auth, Cart, Products)
  ├── pages/         # Páginas de la aplicación
  ├── types/         # Definiciones de TypeScript
  └── utils/         # Utilidades y helpers
```

## Configuración Local

1. Clona el repositorio
2. Instala las dependencias: `npm install`
3. Crea un archivo `.env` con las variables de entorno necesarias
4. Inicia el servidor de desarrollo: `npm run dev`

## Variables de Entorno

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Características de Administración

- Gestión completa de productos (CRUD)
- Control de inventario
- Productos destacados
- Panel de administración protegido

## Licencia

MIT