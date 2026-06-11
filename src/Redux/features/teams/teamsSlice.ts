import { createSlice } from "@reduxjs/toolkit";
import fetchTeamsThunk from "./teamsThunk";

const teamsSlice = createSlice({
  name: "teamReducer",
  initialState: {
    isError: false,
    isLoading: false,
    data: null,
    err: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTeamsThunk.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.err = null;
    });

    builder.addCase(fetchTeamsThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    });

    builder.addCase(fetchTeamsThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.err = action.error.message || "Something went wrong";
    });
  },
});

export default teamsSlice.reducer;
