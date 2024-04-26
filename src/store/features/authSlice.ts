import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserData = {
  id: number | null,
  username: string,
  first_name: string,
  last_name: string,
  email: string,
};

type AuthStateType = {
  authState: boolean,
  authUserData: UserData;
  authUserToken?: string;
  authRefreshToken?: string;
};

const userDataFromLocalStorage: UserData | null = JSON.parse(localStorage.getItem('userData') || 'null');
const userTokenFromLocalStorage: string | null = localStorage.getItem('userToken') || 'null';
const userRefreshTokenFromLocalStorage: string | null = localStorage.getItem('refreshToken') || 'null';

const initialState: AuthStateType = {
  authState: userDataFromLocalStorage !== null,
  authUserData: userDataFromLocalStorage || {
    id: null,
    username: "",
    first_name: "",
    last_name: "",
    email: "",
  },
  authUserToken: userTokenFromLocalStorage || undefined,
  authRefreshToken: userRefreshTokenFromLocalStorage || undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    setAuthState: (state) => {
      state.authState = true;
      localStorage.setItem('userData', JSON.stringify(state.authUserData));
    },

    logOut: (state) => {
      state.authState = false;
      state.authUserData = {
        id: null,
        username: "",
        first_name: "",
        last_name: "",
        email: "",
      };
      localStorage.removeItem('userData');
    },

    setAuthUserData: (state, action: PayloadAction<UserData>) => {
      state.authUserData = action.payload;
      localStorage.setItem('userData', JSON.stringify(action.payload));
    },

    setAuthUserToken: (state, action: PayloadAction<string>) => {
      state.authUserToken = action.payload;
      localStorage.setItem('userToken', action.payload);
    },

    setAuthRefreshToken: (state, action: PayloadAction<string>) => {
      state.authRefreshToken = action.payload;
      localStorage.setItem('refreshToken', action.payload);
    },
  },
},
);

export const { setAuthState, logOut, setAuthUserData, setAuthUserToken, setAuthRefreshToken } = authSlice.actions;
export const authReducer = authSlice.reducer;