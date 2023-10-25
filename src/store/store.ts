import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./slices/api_slice";

export const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
