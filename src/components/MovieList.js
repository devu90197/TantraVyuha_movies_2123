import React from "react";

function MovieList({ movieList }) {
  return (
    <div>
      <h2>Popular Movies</h2>
      {movieList.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>Rating: {movie.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
