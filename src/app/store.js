import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/Cart/CartSlice.js'


export const store = configureStore({
    reducer: cartReducer
})