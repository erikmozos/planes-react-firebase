## Descripción General

Web diseñada para gestionar tipos de aviones. Se usa REACT y FIREBASE. Las principales funcionalidades incluyen listar, buscar, añadir, editar y eliminar registros de aviones.

## Tecnologías Utilizadas

- **Frontend**: React 19, React Router 7
- **Estilos**: Tailwind CSS 4
- **Backend**: Firebase (Firestore)

## Estructura del Proyecto

La estructura principal del proyecto es la siguiente:

├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── planes-manager-logo.png
│   ├── components/
│   │   ├── List.jsx
│   │   ├── Navbar.jsx
│   │   └── Searchbar.jsx
│   ├── data/
│   │   └── firebase.js
│   ├── pages/
│   │   ├── Form.jsx
│   │   ├── Home.jsx
│   │   ├── Search.jsx
│   │   └── Topic.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js

## Funcionalidades Principales

- **Listado de aviones**: Muestra todos los aviones registrados.
- **Búsqueda de aviones**: Permite filtrar aviones por modelo.
- **Añadir aviones**: Formulario para agregar nuevos registros.
- **Detalles de aviones**: Visualización detallada de cada avión.
- **Editar aviones**: Modificación de información existente.
- **Eliminar aviones**: Eliminación de registros.

## Componentes Clave

- **List.jsx**: Lista de aviones en formato card.
- **Navbar.jsx**: Barra de navegación principal.
- **Searchbar.jsx**: Campo de búsqueda para filtrar aviones.
- **Form.jsx**: Formulario para añadir o editar aviones.
- **Topic.jsx**: Modal con información detallada del avión.

## Configuración de Firebase

El archivo `firebase.js` maneja la configuración y las funciones para interactuar con Firestore:

- **addPlanes**: Añade un nuevo avión.
- **getLastPlaneId**: Obtiene el último ID utilizado.
- **getPlanes**: Recupera todos los aviones y se suscribe a actualizaciones en tiempo real.
- **getPlaneByCustomId**: Obtiene un avión por su ID personalizado.
- **updatePlane**: Actualiza la información de un avión existente.
- **deletePlane**: Elimina un avión de la base de datos.

## Mejoras Futuras

- **Autenticación de usuarios**: Implementar sistema de login y registro.
- **Seguridad**: Establecer reglas más estrictas en Firestore y validar datos en el servidor.
- **Código repetido**: Mejorar zonas con código duplicado creando funciones.
