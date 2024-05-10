import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    movies && (
      <div className="">
         <h1 className=" text-white text-2xl font-bold p-4">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
         
          <div className="flex ">
            
            {movies.map((movie) => (
              <MovieCard key={movie.id} poster_path={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
