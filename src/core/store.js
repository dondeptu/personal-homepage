import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";
import repositoriesReducer from "../features/personalHomepage/repositoriesSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        repositories: repositoriesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga);