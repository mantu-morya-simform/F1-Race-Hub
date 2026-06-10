import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchCircuits = createAsyncThunk("fetchCircuits", async () => {
  const response = await fetch("https://f1api.dev/api/circuits");
  if (!response.ok) {
    throw new Error("Failed to fetch drivers");
  }

  return response.json();
});

export default fetchCircuits;
