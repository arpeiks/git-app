import { RootState } from "app/store";
import { REPO } from "app/types/repo";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.github.com";

export const repoApi = createApi({
  reducerPath: "repoApi",
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
    getPublicRepos: builder.query<[REPO], any>({
      query: (url) => `${url}?per_page=20`,
    }),
  }),
});

export const { useGetPublicReposQuery } = repoApi;
