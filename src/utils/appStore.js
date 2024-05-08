import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import GptReducer from "./GptSearchSlice"
const appStore=configureStore({
  reducer:{
    user:userReducer,
    movie:movieReducer,
    gpt:GptReducer,
  }
})
export default appStore