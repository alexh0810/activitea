import { createSlice } from "@reduxjs/toolkit";

import { CartItem } from "../../types/cartItem";


const products: CartItem[] = [];

const initialState = {
  products,
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cartReducer",
  initialState: initialState,
  reducers: {
    addProductToCart: (state, action) => {
      console.log(action.payload)
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    resetCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProductToCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
