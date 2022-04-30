import { authApi } from "./services/auth";
import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "app/features/auth/auth.slice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { PERSIST, persistStore, REGISTER } from "redux-persist";

export const store = configureStore({
  reducer: { auth: AuthReducer, [authApi.reducerPath]: authApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: { ignoredActions: [PERSIST, REGISTER] },
    }).concat(authApi.middleware),
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
