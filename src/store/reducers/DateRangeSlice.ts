import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DateRangeState {
  from: number | null;
  to: number | null;
}

const initialState: DateRangeState = {
  from: null,
  to: null,
}

export const dateRangeSlice = createSlice({
  name: 'dateRange',
  initialState,
  reducers: {
    changeFrom: (state, action: PayloadAction<number>) => {
      state.from = action.payload;
    },
    changeTo: (state, action: PayloadAction<number>) => {
      state.to = action.payload;
    }
  }
});

export default dateRangeSlice.reducer;
