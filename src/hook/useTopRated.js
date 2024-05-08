import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import { addTopRated} from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRated=()=>{
  const dispatch=useDispatch();
  const getTopRated=async()=>{
    const api_data=await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",API_options
    )
    const json=await api_data.json();
    // console.log(json.results);
    dispatch(addTopRated(json.results));
  }
  useEffect(()=>{
    getTopRated();
    
  },[])
}
export default useTopRated;