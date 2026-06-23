import { createSlice } from "@reduxjs/toolkit";
import fetchRaceThunk from "./raceThunk";
import type { RaceSliceInitialState } from "./raceTypes";

const initialState: RaceSliceInitialState = {
  isLoading: false,
  data: null,
  isError: "",
};

const raceSlice = createSlice({
  name: "raceReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRaceThunk.pending, (state) => {
      state.isLoading = true;
      state.isError = "";
    });

    builder.addCase(fetchRaceThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = "";
      state.data = action.payload.races;
    });

    builder.addCase(fetchRaceThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message || "Something went wrong";
    });
  },
});

export default raceSlice.reducer;
