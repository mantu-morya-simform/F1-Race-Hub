import { createSlice } from "@reduxjs/toolkit";
import fetchStandingsThunk from "./standingThunk";

const standingSlice = createSlice({
  name: "standingReducer",
  initialState: {
    isError: false,
    isLoading: false,
    data: null,
    err: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStandingsThunk.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.err = null;
    });

    builder.addCase(fetchStandingsThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    });

    builder.addCase(fetchStandingsThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.err = action.error.message || "Something went wrong";
    });
  },
});

export default standingSlice.reducer;
