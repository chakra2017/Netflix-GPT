import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    TrailerVideo: null,
    PopularMovies: null,
    TopRatedMovies: null,
    UpComingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      //console.log(action.payload);
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      //console.log(action.payload);
      state.PopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      //console.log(action.payload);
      state.TopRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      //console.log(action.payload);
      state.UpComingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      //console.log(action.payload);
      state.TrailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
