import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Routes } from "../models/Routes";
import { GetRoutes } from "../models/GetRoutes";
import { City } from "../models/City";

export const routesAPI = createApi({
  reducerPath: 'routesAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://students.netoservices.ru/fe-diplom/routes' }),
  endpoints: (build) => ({
    fetchAllRoutes: build.query<Routes, GetRoutes>({
      query: (data) => ({
        url: '/',
        params: {
          data,
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
    })
  })
});
