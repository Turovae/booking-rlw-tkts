import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Routes } from "../models/Routes";
import { GetRoutes } from "../models/GetRoutes";

export const routesAPI = createApi({
  reducerPath: 'routesAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://students.netoservices.ru/fe-diplom/' }),
  endpoints: (build) => ({
    fetchAllRoutes: build.query<Routes, GetRoutes>({
      query: (data) => ({
        url: '/routes',
        params: {
          data,
        }
      })
    })
  })
});
