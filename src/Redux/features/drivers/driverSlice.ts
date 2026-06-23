import { createSlice } from "@reduxjs/toolkit";
import fetchDriversThunk from "./driverThunk";

const driverSlice = createSlice({
  name: "driverReducer",
  initialState: {
    isError: false,
    isLoading: false,
    data: null,
    err: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDriversThunk.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.err = null;
    });

    builder.addCase(fetchDriversThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    });

    builder.addCase(fetchDriversThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.err = action.error.message || "Something went wrong";
    });
  },
});

export default driverSlice.reducer;
