import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StartDepartureHoursState {
  start_departure_hour_from: number;
  start_departure_hour_to: number;
}

interface StartArrivalHoursState {
  start_arrival_hour_from: number;
  start_arrival_hour_to: number;
}

interface StartHoursState extends StartDepartureHoursState, StartArrivalHoursState {}

const initialState: StartHoursState = {
  start_departure_hour_from: 0,
  start_departure_hour_to: 24,
  start_arrival_hour_from: 0,
  start_arrival_hour_to: 24,
}

export const startHoursRangesSlice = createSlice({
  name: 'startHoursRanges',
  initialState,
  reducers: {
    changeDepartureHoursRange: (state, action: PayloadAction<StartDepartureHoursState>) => {
      const { start_departure_hour_from, start_departure_hour_to} = action.payload
      state.start_departure_hour_from = start_departure_hour_from;
      state.start_departure_hour_to = start_departure_hour_to;
    },
    changeArrivalHoursRange: (state, action: PayloadAction<StartArrivalHoursState>) => {
      const { start_arrival_hour_from, start_arrival_hour_to } = action.payload;
      state.start_arrival_hour_from = start_arrival_hour_from;
      state.start_arrival_hour_to = start_arrival_hour_to;
    }
  }
})

export const { actions } = startHoursRangesSlice;

export default startHoursRangesSlice.reducer;
