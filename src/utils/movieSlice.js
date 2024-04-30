import {  createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name:"movies",
  initialState: {
    nowPlayingMovie:null,
  },
  reducers: {
    addnowPlayingMovie: (state, action) => {
      state.nowPlayingMovie=action.payload;
    },
    
  },
});
export const { addnowPlayingMovie } = movieSlice.actions;

export default movieSlice.reducer;