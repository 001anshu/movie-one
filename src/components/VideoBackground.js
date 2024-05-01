import React, { useEffect } from 'react'
import { API_options } from '../utils/constants'

const VideoBackground = ({movieId}) => {

  const fetchMovie=async()=>{
    const data= await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos", API_options);
    const json=await data.json()

    const trailer=json.results.filter((s)=>
      s.type=="Trailer"
    );
    console.log(trailer[0]);

  }
  useEffect(()=>{
    fetchMovie();
  },[])

  return (
    <div ></div>
  )
}

export default VideoBackground