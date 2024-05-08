import React from "react";
import { TMDM_IMG } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  // console.log(poster_path)
  return (
   
      <img className="rounded-lg m-2 transform hover:scale-105 transition duration-200" src={TMDM_IMG + poster_path} alt="logo" />
    
  );
};

export default MovieCard;
