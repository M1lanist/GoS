import { DTOAuthDtoResponse } from "@/shared/api/generated";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IauthSlice extends DTOAuthDtoResponse {}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    accessTokenExpireDate: "",
    refreshToken: null,
    roleNames: null,
    userName: null,
    refreshTokenExpireDate: "",
  } as IauthSlice,
  reducers: {
    setCredentials: (state, action: PayloadAction<DTOAuthDtoResponse>) => {
      localStorage.setItem('accessToken', action.payload.accessToken!)
      localStorage.setItem('refreshToken', action.payload.refreshToken!)
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
      state.roleNames = null;
      state.userName = null;
      state.refreshTokenExpireDate = "";
    },
  },
});

export const { logOut, setCredentials } = authSlice.actions;
export const selectCurrentUser = (state: any) => state.auth.user;
export const selectCurrentToken = (state: any) => state.auth.token;
