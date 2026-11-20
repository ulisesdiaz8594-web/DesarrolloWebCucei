function MovieCardSkeleton() {
  return (
    <li className="movie-card movie-card-skeleton" aria-hidden="true">
      <div className="link-no-underline">
        <div className="movie-img-wrap skeleton" />
        <div className="skeleton skeleton-line" />
        <div className="skeleton skeleton-line short" />
      </div>
    </li>
  );
}

export default MovieCardSkeleton;
