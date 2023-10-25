import { createSlice } from "@reduxjs/toolkit";

export type ApiSliceType = {
  name: string;
  int: number;
};

const initialState: ApiSliceType = {
  name: "",
  int: 0,
};

export const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default apiSlice.reducer;
