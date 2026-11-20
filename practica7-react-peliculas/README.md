# Práctica 7 - App de Películas con React

## Integrantes
- Nombre Completo 1
- Nombre Completo 2
- Nombre Completo 3
- Nombre Completo 4

## Objetivo
Desarrollar una aplicación web en React con Vite que consuma la API de TMDB, muestre un listado de películas y el detalle de cada una, trabajada colaborativamente en GitHub y publicada en Netlify.

## Tecnologías utilizadas
- React 18
- Vite
- React Router DOM
- CSS
- TMDB API
- Git y GitHub
- Netlify

## Estructura general del proyecto
```
src/
  components/   MovieCard, MovieGrid, Footer
  pages/        LandingPage, MovieDetails
  routers/      AppRouter
  services/     httpClient (consumo de API)
  utils/        getMovieImg
  data/         equipo.js (datos del pie de página)
  img/          placeholder.svg
public/
  _redirects    (rutas de React Router en Netlify)
  escudo-cucei.png
```

## Instalación y ejecución local
```bash
git clone URL_DEL_REPOSITORIO
cd practica7-react-peliculas
npm install
cp .env.example .env     # coloca tu API key de TMDB
npm run dev
```
Para producción: `npm run build`.

## Rutas utilizadas
- `/` — listado de películas
- `/movies/:movieId` — detalle de una película

## API utilizada
[TMDB (The Movie Database)](https://www.themoviedb.org/documentation/api):
- `GET /discover/movie` para el listado
- `GET /movie/{id}` para el detalle

La API key se guarda en la variable de entorno `VITE_TMDB_API_KEY`.

## Capturas o descripción de funcionamiento
La página principal muestra una cuadrícula de tarjetas con póster y título. Al dar clic en una tarjeta se abre el detalle con póster, título, géneros y descripción. Un enlace permite volver al listado. (Agregar capturas aquí.)

## Enlaces
- GitHub: ...
- Netlify: ...

## Conclusiones
(Redactar la conclusión del equipo.)
