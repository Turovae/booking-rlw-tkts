import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Routes } from "../models/Routes";
import { GetRoutes } from "../models/GetRoutes";
import { City } from "../models/City";
import CoachSummary from "../models/CoachSummary";
import { GetSeats } from "../models/GetSeats";

export const routesAPI = createApi({
  reducerPath: 'routesAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://students.netoservices.ru/fe-diplom/routes' }),
  endpoints: (build) => ({
    fetchAllRoutes: build.query<Routes, GetRoutes>({
      query: (data) => ({
        url: '/',
        params: {
          ...data,
        }
      })
    }),
    fetchAllCities: build.query<City[], string | null>({
      query: (name) => ({
        url: '/cities',
        params: {
          name
        }
      })
    }),
    fetchSeats: build.query<CoachSummary[], GetSeats>({
      query: (data) => ({
        url: `/${data.id}/seats`,
        params: {
          ...data,
        },
      }),
    }),
  }),
});
