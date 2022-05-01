import { RootState } from "app/store";
import { persistReducer } from "redux-persist";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

export type AuthState = { token: string };

const initialState: AuthState = { token: "" };
const persistOptions = { storage, key: "rtk:auth", whitelist: ["token"] };

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { updateToken } = AuthSlice.actions;
export const getToken = (state: RootState) => state.auth.token;
export default persistReducer(persistOptions, AuthSlice.reducer);
