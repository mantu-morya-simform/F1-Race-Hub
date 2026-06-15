import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchStandingsThunk = createAsyncThunk(
  "fetchStandingsThunk",
  async () => {
    const response = await fetch(
      "https://f1api.dev/api/2026/drivers-championship",
    );
    if (!response.ok) {
      throw new Error("Failed to fetch drivers");
    }

    return response.json();
  },
);

export default fetchStandingsThunk;
