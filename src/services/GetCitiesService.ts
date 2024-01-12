import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { City } from "../models/City";

export const citiesAPI = createApi({
  reducerPath: 'citiesAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://students.netoservices.ru/fe-diplom/routes/' }),
  endpoints: (build) => ({
    fetchAllCities: build.query<City[], string | null>({
      query: (name = "") => ({
        url: '/cities',
        params: {
          name
        },
        headers: {
          'content-type': 'application/json',
        },
      })
    })
  })
})
