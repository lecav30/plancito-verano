import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PlansState {
  index: number;
  showInformation: boolean;
}

const initialState: PlansState = {
  index: 0,
  showInformation: false,
};

export const plansSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    changePlanIndex: (state, action: PayloadAction<number>) => {
      state.index = action.payload;
    },
    handleShowInformation: (state) => {
      state.showInformation = !state.showInformation;
    },
  },
});

export const { changePlanIndex, handleShowInformation } = plansSlice.actions;

export default plansSlice.reducer;
