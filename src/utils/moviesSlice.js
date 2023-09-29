import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    TrailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      //console.log(action.payload);
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      //console.log(action.payload);
      state.TrailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer;
