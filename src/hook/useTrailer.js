import React, { useEffect, useState } from "react";
import { API_options } from "../utils/constants";

const useTrailer = ({movieId}) => {
  // console.log(movieId);

  const[trailerKey,settrailerKey]=useState(null);
  const fetchMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_options
    );
    const json = await data.json();
    // console.log(json)

    const trailer = json.results.filter((s) => s.type == "Trailer");
    // console.log(trailer);
    settrailerKey(trailer[0].key);
  };
  useEffect(() => {
    fetchMovie();
  }, []);
  // console.log(trailerKey)
  return (
    
    {trailerKey}
  )
}

export default useTrailer