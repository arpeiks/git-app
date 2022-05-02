import { authApi } from "./services/auth";
import { userApi } from "./services/user";
import { repoApi } from "./services/repo";
import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "app/features/auth/auth.slice";
import RepoReducer from "app/features/repo/repo.slice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { PERSIST, persistStore, REGISTER } from "redux-persist";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    repo: RepoReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [repoApi.reducerPath]: repoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: { ignoredActions: [PERSIST, REGISTER] },
    }).concat([authApi.middleware, userApi.middleware, repoApi.middleware]),
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
