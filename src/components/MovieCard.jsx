import { useState } from "react";
import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";
import "./MovieCard.css";

function MovieCard({ title, posterPath, movieId, index = 0 }) {
  const [loaded, setLoaded] = useState(false);
  const imageUrl = getMovieImg(posterPath, 500);

  return (
    <li
      className="movie-card"
      style={{ "--delay": `${Math.min(index, 10) * 45}ms` }}
    >
      <Link to={`/movies/${movieId}`} className="link-no-underline">
        <div className="movie-img-wrap skeleton">
          <img
            src={imageUrl}
            alt={title}
            className={`movie-img ${loaded ? "is-loaded" : ""}`}
            loading="lazy"
            onLoad={() => setLoaded(true)}
          />
        </div>
        <h2 className="movie-title">{title}</h2>
      </Link>
    </li>
  );
}

export default MovieCard;
