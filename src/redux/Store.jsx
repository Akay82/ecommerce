import { configureStore } from "@reduxjs/toolkit";
import CartSlide from "./CartSlice";

export const store = configureStore({
    reducer:{
       cart: CartSlide
    },
    devTools:true
})