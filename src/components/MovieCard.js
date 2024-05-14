import React from "react";
import { TMDM_IMG } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ poster_path,id }) => {
  // console.log(poster_path)
  return (
    //<Link to={"/moviedetails/" +id } key={id}>
      <img className="rounded-lg m-2  transform hover:scale-90 transition duration-25" src={TMDM_IMG + poster_path} alt="logo" />
      //</Link> 
    
  );
};

export default MovieCard;
