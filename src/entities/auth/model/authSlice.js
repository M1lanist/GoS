import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    accessTokenExpireDate: "",
    refreshToken: null,
    roleNames: ["Guest"],
    userName: null,
    refreshTokenExpireDate: "",
  },
  reducers: {
    setCredentials: (state, action) => {
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      state.accessToken = action.payload.accessToken;
      state.accessTokenExpireDate = action.payload.accessTokenExpireDate;
      state.refreshTokenExpireDate = action.payload.refreshTokenExpireDate;
      state.refreshToken = action.payload.refreshToken;
      state.roleNames = action.payload.roleNames;
      state.userName = action.payload.userName;
    },
    logOut: (state) => {
      state.accessToken = null;
      state.accessTokenExpireDate = "";
      state.refreshToken = null;
      state.roleNames = ["guest"];
      state.userName = null;
      state.refreshTokenExpireDate = "";
    },
  },
});

export const { logOut, setCredentials } = authSlice.actions;
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
