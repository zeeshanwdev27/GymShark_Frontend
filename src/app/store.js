import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/features/Cart/CartSlice";
import productReducer from "@/features/product/productSlice";

export const store = configureStore({
  reducer: {
    carts: cartReducer,
    product: productReducer,
  },
});