import React, { useEffect, useState } from "react";
import { API_options, TMDM_IMG } from "../utils/constants";
import Header from "./Header";
import { useParams } from "react-router-dom";
import GeneresBtn from "./GeneresBtn";

const DetailsMovie = () => {
  const movieId = useParams();
  const [data, setdata] = useState();
  useEffect(() => {
    const details = async () => {
      const api = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId.movieId +
          "?language=en-US",
        API_options
      );
      const json = await api.json();
      console.log(json);
      setdata(json);
    };
    details();
  }, []);

  return (
    <div className="bg-black relative">
      <Header />
      <div className="bg-black relative h-screen  overflow-hidden">
        {/* Background image */}
        {data && (
          <img
            className="absolute inset-0 w-full h-full object-cover filter blur-md"
            src={TMDM_IMG + data?.backdrop_path}
            alt="background"
          />
        )}

        {/* Content */}
        <div className="absolute inset-0  flex justify-center items-center pt-44 text-white">
          {data && (
            <>
              {/* Movie poster */}
              <img
                className="rounded-lg w-1/5 md:ml-52 md:mr-24  transform hover:scale-105 transition duration-50 mb-5"
                src={TMDM_IMG + data?.poster_path}
                alt="movie poster"
              />
              {/* Movie name */}
              <div>
                <h1 className="p-3 text-xl md:text-5xl lg:text-5xl  font-bold ">
                  {data.original_title}
                </h1>
                <div className="flex gap-4 p-4">
                  {data?.genres?.map((mp) => (
                    <GeneresBtn name={mp?.name} />
                  ))}
                </div>
                <div className=" w-1/2">
                  <span>{data?.overview}</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsMovie;
