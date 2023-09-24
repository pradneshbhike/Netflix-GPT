import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import moviesReducer from "./movieSlice"; 
import gptReducer from "./gptSlice";
import langConfigReducer from "./langConfigSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        langConfig: langConfigReducer,
    }
})

export default appStore;