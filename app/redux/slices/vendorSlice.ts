import { createSlice } from "@reduxjs/toolkit";

type Vendor = {
  id: string;
  name: string;
  description: string;
  url: string;
};

type VendorSliceType = {
  isLoading: boolean;
  isError: boolean;
  data: Vendor[];
  error: unknown;
};

const initialState: VendorSliceType = {
  isLoading: false,
  isError: false,
  data: [],
  error: {},
};

// export const fetchVendors = createAsyncThunk(
//   "vendors/fetchVendors",
//   async () => {
//     const vendors = await getVendors();
//     console.log("🚀 ~ vendors:", vendors);
//     return vendors;
//   },
// );

// export const addVendor = createAsyncThunk(
//   "vendors/AddVendors",
//   async (data: {
//     name: string;
//     url: string;
//     description: string | undefined;
//   }) => {
//     const vendor = await createVendor(data);
//     return vendor;
//   },
// );

const vendorsSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {},
});

export default vendorsSlice.reducer;
