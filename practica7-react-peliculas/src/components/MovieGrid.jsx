import { useEffect, useState } from "react";
import { get } from "../services/httpClient";
import MovieCard from "./MovieCard";
import "./MovieGrid.css";

function MovieGrid() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    get("/discover/movie")
      .then((data) => setMovies(data.results))
      .catch((err) => {
        console.error(err);
        setError("No se pudieron cargar las películas. Revisa tu API key en el archivo .env.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="status">Cargando películas...</p>;
  if (error) return <p className="status status-error">{error}</p>;

  return (
    <ul className="container">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movieId={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
        />
      ))}
    </ul>
  );
}

export default MovieGrid;
