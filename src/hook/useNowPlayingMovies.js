import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import { addnowPlayingMovie } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies=()=>{
  const dispatch=useDispatch();
  const getNowPlaying=async()=>{
    const api_data=await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",API_options
    )
    const json=await api_data.json();
    console.log(json.results);
    dispatch(addnowPlayingMovie(json.results));
  }
  useEffect(()=>{
    getNowPlaying();
    
  },[])
}
export default useNowPlayingMovies;