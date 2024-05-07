import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MoviesContainer = () => {
  const movies = useSelector((store) => store?.movie);
  console.log(movies);
  return (
    <div className="bg-black">
      <div className="-mt-64 relative">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovie} />
        <MovieList title={"Top Rated"} movies={movies?.TopRated} />
        <MovieList title={"Popular"} movies={movies?.Popular} />
        <MovieList title={"Upcoming"} movies={movies?.Upcoming} />

      </div>
    </div>
  );
};

export default MoviesContainer;
