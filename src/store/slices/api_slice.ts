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
export const getGameList = createAsyncThunk(
  "fetch/games",
  async (apiEndPoint: string) => {
    const res = await requestApi.get(
      `${apiEndPoint}?key=${import.meta.env.VITE_API_KEY}`
    );
    return res.data.results;
  }
);
export const getGameListByGenreID = createAsyncThunk(
  "fetch/gamesById",
  async (id: number) => {
    const res = await requestApi.get(
      `games?key=${import.meta.env.VITE_API_KEY}&genres=${id}`
    );

    return res.data.results;
  }
);

export type Genres = {
  id: number;
  name: string;
  slug: string;
  games_count?: number;
  image_background: string;
  released?: string;
  background_image?: string;
  metacritic?: number;
  rating?: number;
  reviews_count?: number;
  suggestions_count?: number;
};

export type GenresApi = {
  genresData: Genres[];
  gamesData: Genres[];
  gamesDataById: Genres[];
  loading: "idle" | "loading" | "success" | "failed" | "idle1";
  loading2: "idle" | "loading" | "success" | "failed";
  genresClickId: number;
  genresName: string;
};

const initialState: GenresApi = {
  genresData: [],
  loading: "idle",
  loading2: "idle",
  gamesData: [],
  gamesDataById: [],
  genresClickId: 1,
  genresName: "Popular",
};

export const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    setClickgenresId: (state, action) => {
      state.genresClickId = action.payload.clickId;
      state.genresName = action.payload.name;
    },
  },

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
      })
      .addCase(getGameList.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(getGameList.fulfilled, (state, action) => {
        state.loading = "success";
        state.gamesData = action.payload;
      })
      .addCase(getGameList.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(getGameListByGenreID.pending, (state) => {
        state.loading2 = "loading";
      })
      .addCase(getGameListByGenreID.fulfilled, (state, action) => {
        state.loading2 = "success";
        state.gamesDataById = action.payload;
      })
      .addCase(getGameListByGenreID.rejected, (state) => {
        state.loading2 = "failed";
      });
  },
});
export const { setClickgenresId } = apiSlice.actions;
export default apiSlice.reducer;
