import { REPO } from "app/types/repo";
import { RootState } from "app/store";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type RepoState = { repos: REPO[] | [] };

const initialState: RepoState = { repos: [] };
const persistOptions = { storage, key: "rtk:repos", whitelist: ["repos"] };

export const RepoSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {
    setRepos: (state, action: PayloadAction<REPO[]>) => {
      state.repos = action.payload;
    },
    updateRepoLanguage: (state, action: PayloadAction<{ id: number; value: string }>) => {
      const repoIndex = state.repos.findIndex((r) => r.id === action.payload.id);
      if (repoIndex !== -1) state.repos[repoIndex].language = action.payload.value;
    },
  },
});

export const getRepos = (state: RootState) => state.repo.repos;
export default persistReducer(persistOptions, RepoSlice.reducer);
export const { setRepos, updateRepoLanguage } = RepoSlice.actions;
