import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { adminReducer } from "./reducers/adminReducer";
import cartReducer from "./reducers/cartReducer";
import { orderReducer } from "./reducers/orderReducer";
import { productReducer } from "./reducers/productReducer";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    productReducer,
    orderReducer,
    adminReducer,
    persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store)
export default store;
