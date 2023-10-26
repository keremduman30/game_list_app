import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestApi } from "../../services/global_api";

export const getGenreList = createAsyncThunk(
  "fetch/genres",
  async (apiEndPoint: string) => {
    const res = await requestApi.get(
      `${apiEndPoint}?key=${import.meta.env.VITE_API_KEY}`
    );
    return res.data.results;
  }
);

export type Genres = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

export type GenresApi = {
  genresData: Genres[];
  loading: "idle" | "loading" | "success" | "failed";
};

const initialState: GenresApi = {
  genresData: [],
  loading: "idle",
};

export const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGenreList.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(getGenreList.fulfilled, (state, action) => {
        state.loading = "success";
        state.genresData = action.payload;
      })
      .addCase(getGenreList.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export default apiSlice.reducer;
