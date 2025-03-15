import { createSlice } from "@reduxjs/toolkit";

const repositoriesSlice = createSlice({
    name: "repositories",
    initialState: {
        status: "initial",
        content: null,
    },
    reducers: {
        startFetch: () => ({
            status: "loading",
            content: null,
        }),
        fetchRepositoriesSuccess: (_, { payload: content }) => ({
            status: "success",
            content,
        }),
        fetchRepositoriesError: () => ({
            status: "error",
            content: null,
        }),
    },
});

export const { startFetch, fetchRepositoriesSuccess, fetchRepositoriesError } = repositoriesSlice.actions;

const selectRepositoriesState = state => state.repositories;

export const selectRepositoriesStatus = state => selectRepositoriesState(state).status;
export const selectRepositoriesContent = state => selectRepositoriesState(state).content;

export default repositoriesSlice.reducer;