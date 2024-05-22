import React from "react";
import useTrailer from "../hook/useTrailer";
import { IconName } from "react-icons/sl";
import { TiArrowBack } from "react-icons/ti";
import { backLogo } from "../utils/constants";

const Trailer = ({ movieId, removeTrailer }) => {
  const trailer = useTrailer(movieId);
  return (
    <div>
      <div className="">
        <button className=" h-10 w-11" onClick={removeTrailer}>
          <img className="bg-white rounded-lg" src={backLogo} alt="back" />
        </button>

        <iframe
          width="760"
          height="415"
          src={
            "https://www.youtube.com/embed/" +
            trailer?.trailerKey +
            "?controls=1&autoplay=1"
          }
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Trailer;
