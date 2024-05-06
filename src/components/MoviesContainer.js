import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const MoviesContainer = () => {
  const movies=useSelector((store)=>store?.movie)
  console.log(movies)
  return (
    <div>
     
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovie}/>
    </div>
  )
}

export default MoviesContainer