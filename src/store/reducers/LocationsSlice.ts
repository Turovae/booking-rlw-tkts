import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { City } from "../../models/City";

interface LocationsState {
  departure: City;
  destination: City;
}

// interface PayloadProps {
//   name: string,
//   cities: City[] | undefined
// }

const initialCity: City = {
  _id: '',
  name: '',
}

const initialState: LocationsState = {
  departure: initialCity,
  destination: initialCity,
}

// const changeLocation = (state: City, payload: PayloadProps) => {
//   console.log(payload);
//   state.name = payload.name;

//   if (!payload.cities) {
//     state._id = '';
//     return;
//   }

//   if (payload.cities.length === 1) {
//     state._id = payload.cities[0]._id;
//   } else {
//     state._id = '';
//   }
// }

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    changeDeparture: (state, action: PayloadAction<City>) => {
      console.log(action.payload);
      state.departure._id = action.payload._id;
      state.departure.name = action.payload.name
    },
    changeDestination: (state, action: PayloadAction<City>) => {
      console.log(action.payload);
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
