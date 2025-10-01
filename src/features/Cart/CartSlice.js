import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  carts: [
    {
      id: nanoid(),
      image:
        "https://cdn.shopify.com/s/files/1/1367/5207/files/images-TrainingStraightLegLeggingGSBlackB4B7Y_BB2J_3792_V1b_640x.jpg?v=1756280501",
      product: "Training Straight Leg Leggings",
      price: 29,
      quantity: 1,
      size: "M",
    },
        {
      id: nanoid(),
      image:
        "https://cdn.shopify.com/s/files/1/1367/5207/files/images-TrainingStraightLegLeggingGSBlackB4B7Y_BB2J_3792_V1b_640x.jpg?v=1756280501",
      product: "Training Straight Leg Leggings",
      price: 29,
      quantity: 1,
      size: "M",
    },
  ],
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    incQuantity: (state, action) => {
      const item = state.carts.find((cart) => cart.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decQuantity: (state, action) => {
      const item = state.carts.find((cart) => cart.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { incQuantity, decQuantity } = cartSlice.actions;

export default cartSlice.reducer;
