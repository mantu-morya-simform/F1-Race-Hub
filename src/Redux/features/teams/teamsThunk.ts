import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchTeamsThunk = createAsyncThunk("fetchTeamsThunk", async () => {
  const response = await fetch("https://f1api.dev/api/teams");
  if (!response.ok) {
    throw new Error("Failed to fetch drivers");
  }

  return response.json();
});

export default fetchTeamsThunk;
