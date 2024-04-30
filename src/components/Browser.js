import React, { useEffect } from "react";
import Header from "./Header";

import useNowPlayingMovies from "../hook/useNowPlayingMovies";


const Browser = () => {
  
  useNowPlayingMovies();
  return (
    <div>
      <Header />
     
    </div>
  );
};

export default Browser;
