import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import { addPopular} from "../utils/movieSlice";
import { useEffect } from "react";

const usePopular=()=>{
  const dispatch=useDispatch();
  const getPopular=async()=>{
    const api_data=await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=hindi&region=ISO-9001",API_options
    )
    const json=await api_data.json();
    // console.log(json.results);
    dispatch(addPopular(json.results));
  }
  useEffect(()=>{
    getPopular();
    
  },[])
}
export default usePopular;