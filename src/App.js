import React, { useState } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState();

  return (
    <div>
      <Header />
      <MovieList movieList={movies} />
    </div>
  );
}

export default App;
