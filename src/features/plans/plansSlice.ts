import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PlansState {
  index: number;
}

const initialState: PlansState = {
  index: 0,
};

export const plansSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    change: (state, action: PayloadAction<number>) => {
      state.index = action.payload;
    },
  },
});

export const { change } = plansSlice.actions;

export default plansSlice.reducer;
