import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchCircuitsThunk = createAsyncThunk("fetchCircuitsThunk", async () => {
  const response = await fetch("https://f1api.dev/api/circuits");
  if (!response.ok) {
    throw new Error("Failed to fetch drivers");
  }

  return response.json();
});

export default fetchCircuitsThunk;
