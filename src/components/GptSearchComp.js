import React, { useRef, useState } from "react";
import Header from "./Header";
import { API_options, login_bg_IMG } from "../utils/constants";
import openai from "./openai";
import { Link } from "react-router-dom";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";

const GptSearchComp = () => {
  const [movieData, setMovieData] = useState(null);
  const search = useRef(null);
  const handleForm = async () => {
    const api_data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        search?.current?.value +
        "&include_adult=false&page=1",
      API_options
    );
    const json = await api_data.json();
    setMovieData(json.results);
    console.log(json.results);
  };
  return (
    <div>
      <div className="absolute -z-10 bg-gradient-to-b from-black">
        <img className="" src={login_bg_IMG} alt="logo" />
      </div>
      <div className="pt-[20%] ">
        <form
          className=" bg-black flex justify-center items-center w-1/2 rounded-lg ml-auto mr-auto "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={search}
            type="text "
            className=" p-4 m-2  w-3/4 rounded-lg "
            placeholder="What do you want to see today"
          />
          <button
            onClick={handleForm}
            className="bg-red-500 text-white p-4 m-2 rounded-lg"
          >
            Search
          </button>
        </form>
        <h1 className="text-white text-2xl font-bold p-4">
          Movies related to '{search?.current?.value}'
        </h1>
        <div className="flex  overflow-x-scroll no-scrollbar">
          {movieData != null && (
            <div className="flex  ">
              {movieData.map((movie) => (
                <Link
                  to={"/moviedetails/" + movie.id}
                  className="w-40 m-2"
                  key={movie.id}
                >
                  <MovieCard
                    key={movie.id}
                    poster_path={movie.poster_path}
                    id={movie?.id}
                  />
                </Link>
                // <MovieCard key={movie.id} poster_path={movie.poster_path}  />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GptSearchComp;
