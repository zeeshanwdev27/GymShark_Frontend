import { createSlice } from "@reduxjs/toolkit";

const storedCarts = JSON.parse(localStorage.getItem("carts")) || [];

const initialState = {
  items: storedCarts,
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    incQuantity: (state, action) => {
      const item = state.items.find((cart) => cart.id === action.payload);

      if (item) {
        item.quantity += 1;
        item.price = item.unitPrice * item.quantity;
        localStorage.setItem("carts", JSON.stringify(state.items));
      }
    },

    decQuantity: (state, action) => {
      const item = state.items.find((cart) => cart.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.price = item.unitPrice * item.quantity;
        localStorage.setItem("carts", JSON.stringify(state.items));
      }
    },

    addToCart: (state, action) => {
      const product = action.payload;

      if (product) {
        state.items.push(product);
        localStorage.setItem("carts", JSON.stringify(state.items));
      }
    },

    removeToCart: (state, action) => {
      state.items = state.items.filter(
        (cart) => cart.id !== action.payload
      );

      localStorage.setItem("carts", JSON.stringify(state.items));
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
  },
});

export const { incQuantity, decQuantity, addToCart, removeToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
