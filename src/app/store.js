import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/features/Cart/CartSlice";
import productReducer from "@/features/product/productSlice";
import userReducer from "@/features/Auth/authSlice";

export const store = configureStore({
  reducer: {
    carts: cartReducer,
    product: productReducer,
    user: userReducer,
  },
});