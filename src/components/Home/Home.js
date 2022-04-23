import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('useEffect home page');
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());
    }, [dispatch]);
    return (
        <div>
            <div className="banner-image">
                <MovieListing></MovieListing>
            </div>
        </div>
    );
};

export default Home;
