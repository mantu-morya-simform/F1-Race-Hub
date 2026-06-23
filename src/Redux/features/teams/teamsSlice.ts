import { createSlice } from "@reduxjs/toolkit";
import fetchTeamsThunk from "./teamsThunk";
import type { TeamSliceInitialState } from "./teamsTypes";

const initialState: TeamSliceInitialState = {
  isLoading: false,
  data: null,
  isError: "",
};

const teamsSlice = createSlice({
  name: "teamReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTeamsThunk.pending, (state) => {
      state.isLoading = true;
      state.isError = "";
    });

    builder.addCase(fetchTeamsThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = "";
      state.data = action.payload.teams;
    });

    builder.addCase(fetchTeamsThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message || "Something went wrong";
    });
  },
});

export default teamsSlice.reducer;
