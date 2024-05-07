import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hook/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import MoviesContainer from "./MoviesContainer";
import useTopRated from "../hook/useTopRated";
import usePopular from "../hook/usePopular";
import useUpcoming from "../hook/useUpcoming";




const Browser = () => {
  useNowPlayingMovies();
  useTopRated();
  usePopular();
  useUpcoming();
  



  return (
    <div>
      <Header />
      <MainContainer/>
      <MoviesContainer/>
  
     
    </div>
  );
};

export default Browser;
