import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    movies && (
      <div className="">
         <h1 className=" text-white text-2xl font-bold p-4">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
         
          <div className=" flex gap-3   ">
            
            {movies.map((movie) => (
              //  
              <Link to={"/moviedetails/" +movie.id } className="w-40" key={movie.id}>
      
              <MovieCard key={movie.id} poster_path={movie.poster_path} id={movie?.id} />
              // 
              // </Link> 
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
