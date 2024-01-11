import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LocationsState {
  departure: string;
  destination: string;
}

const initialState: LocationsState = {
  departure: '',
  destination: '',
}

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    changeDeparture: (state, action: PayloadAction<string>) => {
      state.departure = action.payload;
    },
    changeDestination: (state, action: PayloadAction<string>) => {
      state.destination = action.payload;
    },
    reverseLocations: (state) => {
      const tmp = state.departure;
      state.departure = state.destination;
      state.destination = tmp;
    },
  }
});

export const { actions } = locationsSlice;

export default locationsSlice.reducer;
