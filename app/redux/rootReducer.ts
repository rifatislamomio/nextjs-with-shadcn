import { combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import vendorsReducers from "./slices/vendorSlice";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  vendors: vendorsReducers
});

export default rootReducer;
