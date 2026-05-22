import { configureStore } from "@reduxjs/toolkit";
import tripReducer from "./tripSlice";
import planReducer from "./planSlice"

export const store = configureStore({
  reducer: {
    trip: tripReducer,
    plan: planReducer,
  },
});