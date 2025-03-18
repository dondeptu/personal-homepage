import { call, select, takeLatest } from "redux-saga/effects";
import { selectIsDarkTheme, toggleTheme } from "./themeSlice";
import { saveThemeInLocalStorage } from "./themeLocalStorage";

function* saveThemeInLocalStorageHandler() {
    const isDarkTheme = yield select(selectIsDarkTheme);
    yield call(saveThemeInLocalStorage, isDarkTheme);
}

export function* themeSaga() {
    yield takeLatest(toggleTheme.type, saveThemeInLocalStorageHandler);
}