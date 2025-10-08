import { createSlice } from "@reduxjs/toolkit";

const storedCarts = JSON.parse(localStorage.getItem("carts")) || [];

const initialState = {
  carts: storedCarts,
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
        localStorage.setItem("carts", JSON.stringify(state.carts));
      }
    },
    decQuantity: (state, action) => {
      const item = state.carts.find((cart) => cart.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.price = item.unitPrice * item.quantity;
        localStorage.setItem("carts", JSON.stringify(state.carts));
      }
    },
    addToCart: (state, action) => {
      const product = action.payload;
      if (product) {
        state.carts.push(product);
        localStorage.setItem("carts", JSON.stringify(state.carts));
      }
    },
    removeToCart: (state, action) => {
      state.carts = state.carts.filter((cart) => cart.id !== action.payload);
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    clearCart: (state) => {
      state.carts = [];
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
  },
});

export const { incQuantity, decQuantity, addToCart, removeToCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
