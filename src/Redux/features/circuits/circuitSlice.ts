import { createSlice } from "@reduxjs/toolkit";
import fetchCircuitsThunk from "./circuitThunk";
import type { CircuitSliceInitialState } from "./circuitTypes";

const initialState: CircuitSliceInitialState = {
  isError: "",
  isLoading: false,
  data: null,
};

const circuitSlice = createSlice({
  name: "circuitReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCircuitsThunk.pending, (state) => {
      state.isLoading = true;
      state.isError = "";
    });

    builder.addCase(fetchCircuitsThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = "";
      state.data = action.payload.circuits;
    });

    builder.addCase(fetchCircuitsThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message || "Something went wrong";
    });
  },
});

export default circuitSlice.reducer;
