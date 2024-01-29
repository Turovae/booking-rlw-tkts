import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DateRangeState {
  date_start: number | null;
  date_end: number | null;
  date_start_arrival: number | null;
  date_end_arrival: number | null;
}

const initialState: DateRangeState = {
  date_start: null,
  date_end: null,
  date_start_arrival: null,
  date_end_arrival: null,
}

export const dateRangeSlice = createSlice({
  name: 'dateRange',
  initialState,
  reducers: {
    changeStart: (state, action: PayloadAction<number>) => {
      state.date_start = action.payload;
    },
    changeEnd: (state, action: PayloadAction<number>) => {
      state.date_end = action.payload;
    },
    changeStartArrival: (state, action: PayloadAction<number>) => {
      state.date_start_arrival = action.payload;
    },
    changeEndArrival: (state, action: PayloadAction<number>) => {
      state.date_end_arrival = action.payload;
    },
  }
});

export const { actions } = dateRangeSlice;

export default dateRangeSlice.reducer;
