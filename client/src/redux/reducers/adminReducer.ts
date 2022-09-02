import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = "";

export const login = createAsyncThunk(
  "login",
  async ({ username, password }: any) => {
    try {
      const result = await axios.post(
        "https://activitea-be.herokuapp.com/api/v1/admin/login",
        {
          username,
          password,
        }
      );
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
