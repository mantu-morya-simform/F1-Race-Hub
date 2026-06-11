import { createSlice } from "@reduxjs/toolkit";
import fetchCircuitsThunk from "./circuitThunk";

const circuitSlice = createSlice({
  name: "circuitReducer",
  initialState: {
    isError: false,
    isLoading: false,
    data: null,
    err: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCircuitsThunk.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.err = null;
    });

    builder.addCase(fetchCircuitsThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    });

    builder.addCase(fetchCircuitsThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.err = action.error.message || "Something went wrong";
    });
  },
});

export default circuitSlice.reducer;
