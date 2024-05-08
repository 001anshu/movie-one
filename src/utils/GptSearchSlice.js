import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice=createSlice({
  name:"GptSearch",
  initialState:{
    checkGpt:false,
  },
  reducers:{
    checkGptSearch:(state)=>{
      state.checkGpt=!state.checkGpt;
    }
  }
})
export const{checkGptSearch}=GptSearchSlice.actions;
export default GptSearchSlice.reducer;