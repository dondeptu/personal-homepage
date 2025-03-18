import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";
import repositoriesReducer from "../features/personalHomepage/repositoriesSlice";
import themeReducer from "../common/themeSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        repositories: repositoriesReducer,
        theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga);