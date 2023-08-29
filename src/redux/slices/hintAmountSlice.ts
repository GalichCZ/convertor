import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface HintAmountState {
  amount: number;
}

const initialState: HintAmountState = {
  amount: 0,
};

export const hintAmountSlice = createSlice({
  name: 'hintAmount',
  initialState,
  reducers: {
    setHintAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
  },
});

export const { setHintAmount } = hintAmountSlice.actions;

export default hintAmountSlice.reducer;
