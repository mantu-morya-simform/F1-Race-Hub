import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchRaceThunk = createAsyncThunk("fetchRaceThunk", async () => {
  const response = await fetch("https://f1api.dev/api/current");
  if (!response.ok) {
    throw new Error("Failed to fetch drivers");
  }

  return response.json();
});

export default fetchRaceThunk;
