import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dateRangeReducer from './reducers/DateRangeSlice';
import locationsReducer from './reducers/LocationsSlice';
import { routesAPI } from "../services/GetRoutesService";

const rootReducer = combineReducers({
  dateRangeReducer,
  locationsReducer,
  [routesAPI.reducerPath]: routesAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(routesAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
