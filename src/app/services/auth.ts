import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:8000";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("accept", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAccessToken: builder.query<any, string>({
      query: (code: string) => ({ url: "github/token", method: "post", body: { code } }),
    }),
  }),
});

export const { useGetAccessTokenQuery } = authApi;
