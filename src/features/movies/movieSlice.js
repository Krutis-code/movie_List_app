import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: {},
};

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            console.log("payload add movies",payload)
            console.log("payload add movies",state)
            state.movies = payload
        },
    },
});

export const {addMovies } = movieSlice.actions;
export default movieSlice.reducer

//function to get a value from state
export const getAllMovies = (state) => state.movies.movies