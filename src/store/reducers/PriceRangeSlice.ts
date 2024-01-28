import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PriceRangeState {
  price_from: number;
  price_to: number;
}

const initialState: PriceRangeState = {
  price_from: 0,
  price_to: 10000,
}

export const priceRangeSlice = createSlice({
  name: 'priceRange',
  initialState,
  reducers: {
    changeFrom: (state, action: PayloadAction<number>) => {
      state.price_from = action.payload;
    },
    changeTo: (state, action: PayloadAction<number>) => {
      state.price_to = action.payload;
    },
    changeAll: (state, action: PayloadAction<PriceRangeState>) => {
      const { price_from, price_to } = action.payload;
      state.price_from = price_from;
      state.price_to = price_to;
    }
  }
});

export const { actions } = priceRangeSlice;

export default priceRangeSlice.reducer;
