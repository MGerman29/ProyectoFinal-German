# SNEAKRS – E-commerce (Proyecto Final Coderhouse)

SPA de e-commerce construida con **React + Vite**, **React Router**, **Context API** para carrito y **Firebase Firestore** para catálogo y órdenes.

## Stack
- React + Vite
- React Router DOM
- Context API
- Firebase (Firestore)
- SweetAlert2
- CSS

## Funcionalidad
- Listado dinámico desde Firestore (`products`)
- Filtro por categorías: `/category/:categoryId`
- Detalle de producto: `/item/:id`
- Carrito global (add, remove, clear, totales)
- **Persistencia en `localStorage`**
- Checkout con creación de orden en Firestore (`orders`) + ID mostrado con SweetAlert2
- Mensajes condicionales (cargando, carrito vacío, sin stock)

## Estructura
