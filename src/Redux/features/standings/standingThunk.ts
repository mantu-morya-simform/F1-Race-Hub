import { createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "./standingSlice";

const fetchStandingsThunk = createAsyncThunk(
  "fetchStandingsThunk",
  async (year: number | null) => {
    if (!year) {
      year = initialState.year;
    }
    const response = await fetch(
      `https://f1api.dev/api/${year}/drivers-championship`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch drivers");
    }

    return response.json();
  },
);

export default fetchStandingsThunk;
