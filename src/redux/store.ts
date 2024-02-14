import { configureStore } from "@reduxjs/toolkit";
import plansReducer from "../features/plans/plansSlice";

export const store = configureStore({
  reducer: {
    plans: plansReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
