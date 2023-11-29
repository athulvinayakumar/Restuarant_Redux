import { configureStore } from "@reduxjs/toolkit";
import resturantSlice from "./resturantSlice";


const store = configureStore({
    reducer:{
        resturantSlice
    }
})

export default store