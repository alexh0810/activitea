import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { isTemplateExpression } from "typescript";

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
        state.total += action.payload.price;
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
          state.total += item.price;
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
            item.quantity = 0;
            state.total -= item.price * item.quantity;
          }
          item.quantity -= 1;
          state.total -= item.price;
          return state;
        }
      });
    },
    resetCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
      storage.removeItem("persist: root");
    },
    deleteItemFromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id != action.payload
      );
      if (state.products.length > 0) {
        state.products.map((item) => {
          if (item._id === action.payload)
            return (state.total -= item.price * item.quantity);
          state.quantity -= 1;
        });
      } else {
        state.products = [];
        state.quantity = 0;
        state.total = 0;
        storage.removeItem("persist: root");
      }
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
