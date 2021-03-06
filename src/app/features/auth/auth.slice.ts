import { RootState } from "app/store";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthState = { token: string };

const initialState: AuthState = { token: "" };
const persistOptions = { storage, key: "gitapp:auth", whitelist: ["token"] };

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
