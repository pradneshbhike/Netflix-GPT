import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptEnable: false,
        suggestedMovieNames: null,
        suggestedMovieDataList: null,
    },
    reducers: {
        toggleGPT: (state,action) => {
            state.gptEnable = !state.gptEnable;
        },
        suggestedMovies: (state,action) => {
            const {movieNames, movieDataList} = action.payload;
            state.suggestedMovieNames = movieNames;
            state.suggestedMovieDataList = movieDataList;
        }
    }
})

export const { toggleGPT, suggestedMovies } = gptSlice.actions;

export default gptSlice.reducer;