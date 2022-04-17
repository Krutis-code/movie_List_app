import React, {useEffect} from 'react'
import MovieListing from '../MovieListing/MovieListing';
import MovieApi from '../../common/apis/MovieApi'
import {APIKEY} from '../../common/apis/MovieApiKey'

const Home = () => {
  useEffect(() => {
    const movieText = "Harry"
    const fetchMovies  =  async () =>{
      const res = await MovieApi.get(`/?apiKey=${APIKEY}&s=${movieText}&type=movie`).catch((err)=>
        {console.log("error", err)})
        console.log("res moviesss",res);
      }
    fetchMovies()
  }, [])
  return (
    <div>

    <div className='banner-image'>
      <MovieListing>

      </MovieListing>

    </div>
    </div>
  )
}

export default Home