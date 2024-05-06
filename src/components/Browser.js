import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hook/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import MoviesContainer from "./MoviesContainer";




const Browser = () => {
  useNowPlayingMovies();



  return (
    <div>
      <Header />
      <MainContainer/>
      <MoviesContainer/>
  
     
    </div>
  );
};

export default Browser;
