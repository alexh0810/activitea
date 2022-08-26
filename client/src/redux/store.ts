import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import { productReducer } from "./reducers/productReducer";

const store = configureStore({
  reducer: {
    productReducer,
    cartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
