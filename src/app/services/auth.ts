import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://github.com/login/oauth";

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
      query: (code: string) =>
        `access_token?client_id=${process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_OAUTH_CLIENT_SECRET}&code=${code}`,
    }),
  }),
});

export const { useGetAccessTokenQuery } = authApi;
