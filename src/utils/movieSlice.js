import {  createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name:"movies",
  initialState: {
    nowPlayingMovie:null,
    Popular:null,
    TopRated:null,
    Upcoming:null,
  },
  reducers: {
    addnowPlayingMovie: (state, action) => {
      state.nowPlayingMovie=action.payload;
    },
    addPopular:(state,action)=>{
      state.Popular=action.payload;
    },
    addTopRated:(state,action)=>{
      state.TopRated=action.payload;
    },
    addUpcoming:(state,action)=>{
      state.Upcoming=action.payload;
    },
    
  },
});
export const { addnowPlayingMovie,addPopular,addTopRated,addUpcoming } = movieSlice.actions;

export default movieSlice.reducer;