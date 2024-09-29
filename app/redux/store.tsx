import { configureStore } from "@reduxjs/toolkit";
import vendorsReducers from "../purchase/slice/vendorSlice";

const store = configureStore({
  reducer: {
    vendors: vendorsReducers
  }
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
