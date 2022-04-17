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
