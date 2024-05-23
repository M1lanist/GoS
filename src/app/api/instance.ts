import { logOut, setCredentials } from "@/entities/auth/model/authSlice";
import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://go-school-api-dev.timelyskills.com/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, exrtraOptions) => {
  let result = await baseQuery(args, api, exrtraOptions);

  if (result.error?.status === 403) {
    console.log("refresh token");
    const refreshResult = await baseQuery("/refresh", api, exrtraOptions);
    if (refreshResult.data) {
      const user = api.getState().auth.user;
      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      result = await baseQuery(args, api, exrtraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
