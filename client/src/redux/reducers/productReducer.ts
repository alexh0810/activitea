import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../../types/product";

const initialState: Product[] = [];

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  try {
    const response = await axios.get(
      "https://activitea-be.herokuapp.com/api/v1/products"
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const deleteSingleProduct = createAsyncThunk(
  "deleteSingleProduct",
  async (productId: String) => {
    try {
      const response = await axios.delete(
        `https://activitea-be.herokuapp.com/api/v1/products/${productId}`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const editSingleProduct = createAsyncThunk(
  "editSingleProduct",
  async (productId: String) => {
    try {
      const response = await axios.put(
        `https://activitea-be.herokuapp.com/api/v1/products/${productId}`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const productSlice = createSlice({
  name: "productReducer",
  initialState: initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    build.addCase(editSingleProduct.fulfilled, (state, action) => {
      return action.payload;
    });
    build.addCase(deleteSingleProduct.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const productReducer = productSlice.reducer;
