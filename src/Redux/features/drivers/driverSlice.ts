import { createSlice } from "@reduxjs/toolkit";
import fetchDriversThunk from "./driverThunk";
import type { DriverSliceInitialState } from "./driverTypes";

const initialState: DriverSliceInitialState = {
  isError: "",
  isLoading: false,
  data: null,
};

const driverSlice = createSlice({
  name: "driverReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDriversThunk.pending, (state) => {
      state.isLoading = true;
      state.isError = "";
    });

    builder.addCase(fetchDriversThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = "";
      state.data = action.payload.drivers;
    });

    builder.addCase(fetchDriversThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message || "Something went wrong";
    });
  },
});

export default driverSlice.reducer;
