import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../../types/product";

const initialState: Product[] = [];

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/v1/products");
    return response.data; 
  } catch (err) {
    console.log(err);
  }
});

const productSlice = createSlice({
  name: "productReducer",
  initialState: initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const productReducer = productSlice.reducer;
