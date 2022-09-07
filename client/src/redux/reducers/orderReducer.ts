import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import { Order, updatedOrder } from "../../types/order";

const initialState: Order[] = [];

export const fetchOrders = createAsyncThunk("fetchOrders", async () => {
  try {
    const response = await axios.get(
      "https://activitea-be.herokuapp.com/api/v1/orders",
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const updateStatus = createAsyncThunk(
  "updateStatus",
  async (updatedOrder: updatedOrder) => {
    const { orderId, address, updatedStatus } = updatedOrder;
    console.log(updatedStatus);
    try {
      const response = await axios.put(
        `https://activitea-be.herokuapp.com/api/v1/orders/${orderId}`,
        {
          address: address,
          status: updatedStatus,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const orderSlice = createSlice({
  name: "orderReducer",
  initialState: initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchOrders.fulfilled, (state, action) => {
      return action.payload;
    });
    build.addCase(updateStatus.fulfilled, (state, action) => {
      console.log(action.payload);
      const newState = [
        action.payload,
        ...state.filter((order) => order._id != action.payload._id),
      ];
      return newState;
    });
  },
});

export const orderReducer = orderSlice.reducer;
