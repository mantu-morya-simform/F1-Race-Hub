import { createSlice } from "@reduxjs/toolkit";
import fetchStandingsThunk from "./standingThunk";
import type { StandingsSliceInitialState } from "./standingTypes";

const initialState: StandingsSliceInitialState = {
  isLoading: false,
  data: null,
  isError: "",
};

const standingSlice = createSlice({
  name: "standingReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStandingsThunk.pending, (state) => {
      state.isLoading = true;
      state.isError = "";
    });

    builder.addCase(fetchStandingsThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = "";
      state.data = action.payload.drivers_championship;
    });

    builder.addCase(fetchStandingsThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message || "Something went wrong";
    });
  },
});

export default standingSlice.reducer;
