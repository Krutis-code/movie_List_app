import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllMovies } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'
import './MovieListing.scss';
const MovieListing = () => {
  const dispatch = useDispatch();

  const movies = useSelector(getAllMovies)
  console.log("movies list in listing component", movies);

  let renderMovies = "";
  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie}></MovieCard>
    ))
  ) : (<div>{movies.Error}</div>)

  useEffect(() => {
  }, [])

  return (
    <div className='movie-wrapper'>
      <div className='movie-listing'>
        <h2>Movies</h2>
        <div className='movie-container'>
          {renderMovies}
        </div>
      </div>
    </div>
  )
}

export default MovieListing