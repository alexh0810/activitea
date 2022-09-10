import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosInstance } from "../../config/config";

const initialState = "";

export const login = createAsyncThunk(
  "login",
  async ({ username, password }: any) => {
    try {
      const result = await axiosInstance.post("/admin/login", {
        username,
        password,
      });
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }
);

const adminSlice = createSlice({
  name: "adminReducer",
  initialState: initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(login.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const adminReducer = adminSlice.reducer;
