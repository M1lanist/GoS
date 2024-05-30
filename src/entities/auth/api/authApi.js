import { apiSlice } from "@/app/api/instance";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/Auth/Access",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    Data: builder.query({
      query: () => ({
        url: "/Students",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useLazyDataQuery } = authApiSlice;
