import { configureStore } from "@reduxjs/toolkit";

import { adminReducer } from "./reducers/adminReducer";
import cartReducer from "./reducers/cartReducer";
import { orderReducer } from "./reducers/orderReducer";
import { productReducer } from "./reducers/productReducer";

const store = configureStore({
  reducer: {
    productReducer,
    orderReducer,
    adminReducer,
    cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
