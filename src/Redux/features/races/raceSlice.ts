import { createSlice } from "@reduxjs/toolkit";
import fetchRaceThunk from "./raceThunk";

const raceSlice = createSlice({
  name: "raceReducer",
  initialState: {
    isError: false,
    isLoading: false,
    data: null,
    err: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRaceThunk.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.err = null;
    });

    builder.addCase(fetchRaceThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    });

    builder.addCase(fetchRaceThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.err = action.error.message || "Something went wrong";
    });
  },
});

export default raceSlice.reducer;
