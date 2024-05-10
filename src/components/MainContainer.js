import React from 'react'
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const movies=useSelector((store)=>store?.movie?.nowPlayingMovie);
 
    if (!movies)return;
    const moviedata=movies[1];
    // console.log(moviedata);
    const {title,overview,id}=moviedata;

  
  
  return (
    <div>
      <VideoBackground movieId={id}/>
      <VideoTitle title={title} overview={overview} />
    </div>
  )
}

export default MainContainer