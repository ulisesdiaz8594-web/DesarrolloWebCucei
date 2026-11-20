import { useEffect, useState } from "react";
import { get } from "../services/httpClient";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
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

  if (error) return <p className="status status-error">{error}</p>;

  if (loading) {
    return (
      <ul className="container" aria-busy="true" aria-label="Cargando películas">
        {Array.from({ length: 20 }).map((_, i) => (
          <MovieCardSkeleton key={i} />
        ))}
      </ul>
    );
  }

  return (
    <ul className="container">
      {movies.map((movie, i) => (
        <MovieCard
          key={movie.id}
          index={i}
          movieId={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
        />
      ))}
    </ul>
  );
}

export default MovieGrid;
