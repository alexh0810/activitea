import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Order } from "../../types/order";

const initialState: Order[] = []; 

export const fetchOrders = createAsyncThunk("fetchOrders", async () => {
    try {
      const response = await axios.get("https://activitea-be.herokuapp.com/api/v1/orders");
      return response.data; 
    } catch (err) {
      console.log(err);
    }
});

    
const orderSlice = createSlice({
    name: "orderReducer",
    initialState: initialState,
    reducers: {},
    extraReducers: (build) => {
      build.addCase(fetchOrders.fulfilled, (state, action) => {
        return action.payload;
      });
    },
  });
  
  export const orderReducer = orderSlice.reducer;
  