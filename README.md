# StreamMax 🎬

¡Clon de plataforma de streaming hecho con React!  
Permite explorar películas y series, ver detalles, buscar, y guardar tus favoritos en una lista personal.

## 🚀 Demo

[Ver demo en vivo](https://stream-max.netlify.app/)

![screenshot](./src/assets/screenshot.png)

## ✨ Características

- Explora películas y series populares (TMDB API)
- Página de detalles con sinopsis, géneros y reparto
- Búsqueda por nombre
- Añade/quita programas a tu Watchlist (contexto global)
- Navegación dinámica con React Router
- Carga y manejo de errores
- Diseño responsive

## 🛠️ Tecnologías

- React
- React Router
- Context API y hooks personalizados
- TMDB API
- CSS
- React Icons

## 🔑 Configuración de la API Key

Este proyecto requiere una API key de [TMDB](https://www.themoviedb.org/documentation/api) para funcionar.

1. Regístrate y obtén tu API key en TMDB.
2. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```
VITE_API_KEY=tu_api_key_aqui
```

3. Luego ejecuta los siguientes comandos:

```bash
git clone https://github.com/nicolefdz07/stream-max
cd stream-max
npm install
npm run dev
```

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.
