import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hook/useNowPlayingMovies";
import MainContainer from "./MainContainer";


const Browser = () => {
  useNowPlayingMovies();



  return (
    <div>
      <Header />
      <MainContainer/>
     
    </div>
  );
};

export default Browser;
