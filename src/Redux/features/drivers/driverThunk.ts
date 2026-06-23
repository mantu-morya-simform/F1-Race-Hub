import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchDriversThunk = createAsyncThunk("fetchDriversThunk", async () => {
  const response = await fetch("https://f1api.dev/api/drivers");
  if (!response.ok) {
    throw new Error("Failed to fetch drivers");
  }

  return response.json();
});

export default fetchDriversThunk;
