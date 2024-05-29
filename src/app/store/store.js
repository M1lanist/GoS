import { authApiSlice } from "@/entities/auth/api/authApi";
import { authSlice } from "@/entities/auth/model/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/instance";

export const store = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [authSlice.name]: authSlice.reducer,
  },
  middleware: (gdm) => gdm().concat(apiSlice.middleware),
  devTools: true,
});
