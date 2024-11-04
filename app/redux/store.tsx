import { configureStore } from "@reduxjs/toolkit";
import vendorsReducers from "../(screens)/purchase/slice/vendorSlice";

const store = configureStore({
  reducer: {
    vendors: vendorsReducers
  }
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
