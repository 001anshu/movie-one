import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import { addUpcoming} from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcoming=()=>{
  const dispatch=useDispatch();
  const getTopRated=async()=>{
    const api_data=await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",API_options
    )
    const json=await api_data.json();
    // console.log(json.results);
    dispatch(addUpcoming(json.results));
  }
  useEffect(()=>{
    getTopRated();
    
  },[])
}
export default useUpcoming;