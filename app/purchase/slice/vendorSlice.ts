import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVendors, createVendor } from "../../api/vendors";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  error: null
};

export const fetchVendors = createAsyncThunk(
  "vendors/fetchVendors",
  async () => {
    const vendors = await getVendors();
    console.log("🚀 ~ vendors:", vendors);
    return vendors;
  }
);

export const addVendor = createAsyncThunk(
  "vendors/AddVendors",
  async (data: {
    name: string;
    url: string;
    description: string | undefined;
  }) => {
    const vendor = await createVendor(data);
    return vendor;
  }
);

const vendorsSlice = createSlice({
  name: "vendors",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVendors.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVendors.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchVendors.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      })
      .addCase(addVendor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addVendor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.data.push(action.payload);
      })
      .addCase(addVendor.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      });
  }
});

export default vendorsSlice.reducer;