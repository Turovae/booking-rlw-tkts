import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface EndDepartureHoursState {
  end_departure_hour_from: number;
  end_departure_hour_to: number;
}

interface EndArrivalHoursState {
  end_arrival_hour_from: number;
  end_arrival_hour_to: number;
}

interface EndHoursState extends EndDepartureHoursState, EndArrivalHoursState {}

const initialState: EndHoursState = {
  end_departure_hour_from: 0,
  end_departure_hour_to: 24,
  end_arrival_hour_from: 0,
  end_arrival_hour_to: 24,
}

export const endHoursRangesSlice = createSlice({
  name: 'endHoursRanges',
  initialState,
  reducers: {
    changeDepartureHoursRange: (state, action: PayloadAction<EndDepartureHoursState>) => {
      const { end_departure_hour_from, end_departure_hour_to} = action.payload
      state.end_departure_hour_from = end_departure_hour_from;
      state.end_departure_hour_to = end_departure_hour_to;
    },
    changeArrivalHoursRange: (state, action: PayloadAction<EndArrivalHoursState>) => {
      const { end_arrival_hour_from, end_arrival_hour_to } = action.payload;
      state.end_arrival_hour_from = end_arrival_hour_from;
      state.end_arrival_hour_to = end_arrival_hour_to;
    }
  }
})

export const { actions } = endHoursRangesSlice;

export default endHoursRangesSlice.reducer;
