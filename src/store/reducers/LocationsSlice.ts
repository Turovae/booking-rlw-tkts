import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { City } from "../../models/City";

interface LocationsState {
  departure: City;
  destination: City;
}

const initialCity: City = {
  _id: '',
  name: '',
}

const initialState: LocationsState = {
  departure: initialCity,
  destination: initialCity,
}

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    changeDeparture: (state, action: PayloadAction<City>) => {
      state.departure._id = action.payload._id;
      state.departure.name = action.payload.name
    },
    changeDestination: (state, action: PayloadAction<City>) => {
      state.destination._id = action.payload._id;
      state.destination.name = action.payload.name
    },
    reverseLocations: (state) => {
      const tmp = {...state.departure};
      state.departure = {...state.destination};
      state.destination = tmp;
    },
  }
});

export const { actions } = locationsSlice;

export default locationsSlice.reducer;
