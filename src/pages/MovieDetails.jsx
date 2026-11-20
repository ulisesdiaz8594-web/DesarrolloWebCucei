import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { get } from "../services/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
import "./MovieDetails.css";

function DetailsSkeleton() {
  return (
    <div className="details-wrapper" aria-busy="true" aria-label="Cargando información">
      <div className="back-link skeleton-pill skeleton" />
      <div className="detailsContainer">
        <div className="movieImage skeleton details-poster-skeleton" />
        <div className="movieDetails details-text-skeleton">
          <div className="skeleton skeleton-line title" />
          <div className="skeleton skeleton-line" />
          <div className="skeleton skeleton-line" />
          <div className="skeleton skeleton-line" />
          <div className="skeleton skeleton-line short" />
        </div>
      </div>
    </div>
  );
}

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setMovie(null);
    setError(null);
    window.scrollTo({ top: 0 });
    get(`/movie/${movieId}`)
      .then((data) => setMovie(data))
      .catch((err) => {
        console.error(err);
        setError("No se pudo cargar la película.");
      });
  }, [movieId]);

  if (error) return <p className="status status-error">{error}</p>;
  if (!movie) return <DetailsSkeleton />;

  const imageUrl = getMovieImg(movie.poster_path, 500);

  return (
    <div className="details-wrapper page-enter">
      <Link to="/" className="back-link">← Volver al listado</Link>
      <div className="detailsContainer">
        <img src={imageUrl} alt={movie.title} className="movieImage" />
        <div className="movieDetails">
          <h2>{movie.title}</h2>
          <p><strong>Géneros:</strong> {movie.genres?.map((g) => g.name).join(", ")}</p>
          <p><strong>Descripción:</strong> {movie.overview || "Sin descripción disponible."}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
