import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://v6.exchangerate-api.com/v6/b0158ad25b55e58950e01f17/',
  }),
  endpoints: (build) => ({
    getCurrency: build.query({
      query: (currency: string) => `latest/${currency}`,
    }),
  }),
});

export const { useGetCurrencyQuery } = currencyApi;
