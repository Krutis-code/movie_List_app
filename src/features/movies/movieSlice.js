import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import MovieApi from '../../common/apis/MovieApi';
import { APIKEY } from '../../common/apis/MovieApiKey';
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const res = await MovieApi.get(`/?apiKey=${APIKEY}&s=${'Harry'}&type=movie`).catch((err) => {
        console.log('error', err);
    });
    return res.data;
});
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async () => {
    const res = await MovieApi.get(`/?apiKey=${APIKEY}&s=${'friends'}&type=series`).catch((err) => {
        console.log('error', err);
    });
    return res.data;
});
export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (id) => {
    const res = await MovieApi.get(`/?apiKey=${APIKEY}&i=${id}&Plot=full`).catch((err) => {
        console.log('error', err);
    });
    return res.data;
});

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
};

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            console.log('payload add movies', payload);
            console.log('payload add movies', state);
            state.movies = payload;
        },
        removeSelectedMovieOrrShow: (state) => {
            state.selectedMovieOrShow = {};
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('Pendinggg!!');
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log('full filled', payload);
            return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('Rejected !');
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            return { ...state, shows: payload };
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            return { ...state, selectedMovieOrShow: payload };
        },
    },
});

export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;
export const { removeSelectedMovieOrrShow } = movieSlice.actions;
//function to get a value from state
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
