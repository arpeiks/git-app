import { RootState } from "app/store";
import { USER } from "app/types/user";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.github.com";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      headers.set("accept", "application/vnd.github.v3+json");
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query<USER, null>({
      query: () => `user`,
    }),
  }),
});

export const { useGetUserQuery } = userApi;
