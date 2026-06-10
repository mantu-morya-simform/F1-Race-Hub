import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchStandings = createAsyncThunk("fetchStandings", async () => {
  const response = await fetch(
    "https://f1api.dev/api/2021/drivers-championship",
  );
  if (!response.ok) {
    throw new Error("Failed to fetch drivers");
  }

  return response.json();
});

export default fetchStandings;
