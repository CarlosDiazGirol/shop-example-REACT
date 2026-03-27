# Shop Visual Sprints

Aplicación React + Vite que muestra una tienda visual dividida por sprints para enseñar la evolución del proyecto en clase.

## Qué incluye

- Home principal con acceso a los 4 sprints.
- Rutas separadas para cada sprint.
- Pantallas visuales de home, catálogo, detalle, login, registro y vistas extra.
- Demo preparada para desplegar en Netlify.

## Sprints disponibles

- `Sprint 1`: base visual de la tienda con home, catálogo, detalle y 404.
- `Sprint 2`: misma base visual pensada para conectar con backend.
- `Sprint 3`: añade login y registro a la navegación.
- `Sprint 4`: recorrido visual completo con wishlist, carrito, perfil y checkout.

## Tecnologías

- React
- React Router
- Vite

## Scripts

```bash
npm install
npm run dev
```

Otros scripts disponibles:

- `npm run build`: genera la versión de producción.
- `npm run preview`: sirve la build en local.

## Estructura

```text
src/
  data/       Datos mock de productos
  ui/         Estructura compartida de la app
  views/      Pantallas y páginas
  router.jsx  Definición de rutas
```

## Despliegue

El proyecto incluye configuración para Netlify mediante `netlify.toml` y `public/_redirects`.
