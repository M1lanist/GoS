import { apiSlice } from "@/app/api/instance";
import { DTOAuthDtoLogin, DTOAuthDtoResponse } from "@/shared/api/generated";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<DTOAuthDtoResponse, DTOAuthDtoLogin>({
      query: (credentials) => ({
        url: "/Auth/Access",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    Data: builder.query({
      query: (creasd) => ({
        url: "/Students",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useLazyDataQuery } = authApiSlice;
