import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchDrivers = createAsyncThunk("fetchDrivers", async () => {
  const response = await fetch("https://f1api.dev/api/drivers");
  if (!response.ok) {
    throw new Error("Failed to fetch drivers");
  }

  return response.json();
});

export default fetchDrivers;
