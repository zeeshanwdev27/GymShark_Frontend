import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    incQuantity: (state, action) => {
      const item = state.carts.find((cart) => cart.id === action.payload);
      if (item) {
        item.quantity += 1;
        item.price = item.unitPrice * item.quantity;
      }
    },
    decQuantity: (state, action) => {
      const item = state.carts.find((cart) => cart.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.price = item.unitPrice * item.quantity;
      }
    },
    addToCart: (state, action) => {
      const product = action.payload;
      if (product) {
        state.carts.push(product);
      }
    },
    removeToCart: (state, action) => {
      state.carts = state.carts.filter((cart)=> cart.id !== action.payload)
    }
  },
});

export const { incQuantity, decQuantity, addToCart, removeToCart } = cartSlice.actions;

export default cartSlice.reducer;
