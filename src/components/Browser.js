import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hook/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import MoviesContainer from "./MoviesContainer";
import useTopRated from "../hook/useTopRated";
import usePopular from "../hook/usePopular";
import useUpcoming from "../hook/useUpcoming";
import { useSelector } from "react-redux";
import GptSearchComp from "./GptSearchComp";

const Browser = () => {
  const gpt = useSelector((store) => store?.gpt?.checkGpt);

  useNowPlayingMovies();
  useTopRated();
  usePopular();
  useUpcoming();

  return (
    <div>
      <Header />
      {gpt?
        <><GptSearchComp/> </>:<><MainContainer />
        <MoviesContainer /></>
      }
     
    </div>
  );
};

export default Browser;
