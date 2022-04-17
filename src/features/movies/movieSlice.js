import { createSlice } from '@reduxjs/toolkit';

const initialstate = {
    movies: [],
};

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movie = payload;
        },
    },
});

export const {addMovies} = movieSlice.addMovies;
export const getAllMovies = (state) => state.movies.movies.search