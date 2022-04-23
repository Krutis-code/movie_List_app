import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsyncMovieOrShowDetail } from '../../features/movies/movieSlice';
import { getSelectedMovieOrShow, removeSelectedMovieOrrShow } from '../../features/movies/movieSlice';
import './MovieDetail.scss';
import Loader from '../../common/Loader/Loader';
const MovieDetail = () => {
    const { imdbID } = useParams();
    console.log('use params', imdbID);
    const dispatch = useDispatch();

    const data = useSelector(getSelectedMovieOrShow);

    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(imdbID));
        return () => {
            dispatch(removeSelectedMovieOrrShow());
        };
    }, [dispatch, imdbID]);

    return (
        <div className="movie-section">
            {Object.keys(data).length === 0 ? (
                <Loader></Loader>
            ) : (
                <>
                    <div className="section-left">
                        <div className="movie-title">{data.Title}</div>
                        <div className="movie-rating">
                            <span>
                                IMDB Rating<i className="fa fa-star"></i>
                                {data.imdbRating}
                            </span>
                            <span>
                                IMDB Votes<i className="fa fa-thumbs-up"></i>
                                {data.imdbVotes}
                            </span>
                            <span>
                                Runtime<i className="fa fa-film"></i>
                                {data.Runtime}
                            </span>
                            <span>
                                Year<i className="fa fa-calander"></i>
                                {data.Year}
                            </span>
                        </div>

                        <div className="movie-plot">{data.Plot}</div>
                        <div className="movie-info">
                            <div>
                                <span>Director</span>
                                <span>{data.Director}</span>
                            </div>
                            <div>
                                <span>Stars</span>
                                <span>{data.Actors}</span>
                            </div>
                            <div>
                                <span>Geners</span>
                                <span>{data.Gener}</span>
                            </div>
                            <div>
                                <span>Languages</span>
                                <span>{data.Language}</span>
                            </div>
                            <div>
                                <span>Awards</span>
                                <span>{data.Award}</span>
                            </div>
                        </div>
                    </div>
                    <div className="section-right">
                        <img src={data.Poster} alt=""></img>
                    </div>
                </>
            )}
        </div>
    );
};

export default MovieDetail;
