import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "./slices/statisticSlice";

export const store = configureStore({
  reducer: covidReducer,
});
