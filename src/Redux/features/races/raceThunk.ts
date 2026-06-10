import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchRaces = createAsyncThunk("fetchRaces", async () => {
  const response = await fetch("https://f1api.dev/api/current");
  if (!response.ok) {
    throw new Error("Failed to fetch drivers");
  }

  return response.json();
});

export default fetchRaces;
