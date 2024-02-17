import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Style } from '../../util/Styles';
import { myStyles } from '../../util/Styles';

export interface PlansState {
    index: number;
    showInformation: boolean;
    style: Style;
}

const initialState: PlansState = {
    index: 0,
    showInformation: false,
    style: myStyles['Aquapark'],
};

export const plansSlice = createSlice({
    name: 'plans',
    initialState,
    reducers: {
        changePlanIndex: (state, action: PayloadAction<number>) => {
            state.index = action.payload;
        },
        handleShowInformation: (state) => {
            state.showInformation = !state.showInformation;
        },
        changeStyle: (state, action: PayloadAction<Style>) => {
            state.style = action.payload;
        },
    },
});

export const { changePlanIndex, handleShowInformation, changeStyle } =
    plansSlice.actions;

export default plansSlice.reducer;
