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
      const existedItem = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (existedItem) {
        existedItem.quantity += 1;
      } else {
        state.products.push(action.payload);
        state.quantity += 1;
        state.total += action.payload.price * action.payload.quantity;
      }
    },
    increaseItem: (state, action) => {
      state.products.map((item) => {
        if (item._id === action.payload) {
          item.quantity += 1;
          return state;
        }
      });
    },
    decreaseItem: (state, action) => {
      state.products.map((item) => {
        if (item._id === action.payload) {
          if (item.quantity === 1) {
            state.products = state.products.filter(
              (item) => item._id != action.payload
            );
            state.quantity -= 1;
          }
          item.quantity -= 1;
          return state;
        }
      });
    },
    resetCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    deleteItemFromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id === action.payload._id
      );
      state.quantity -= 1;
    },
  },
});

export const {
  addProductToCart,
  resetCart,
  deleteItemFromCart,
  increaseItem,
  decreaseItem,
} = cartSlice.actions;
export default cartSlice.reducer;
