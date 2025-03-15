import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getRepositories } from "./repositoriesAPI";
import { fetchRepositoriesError, fetchRepositoriesSuccess, startFetch } from "./repositoriesSlice";

function* fetchRepositoriesHandler({ payload: username }) {
    try {
        yield delay(500);
        const repositories = yield call(getRepositories, username);
        yield put(fetchRepositoriesSuccess(repositories));
    } catch (error) {
        yield put(fetchRepositoriesError());
    }
}

export function* repositoriesSaga() {
    yield takeLatest(startFetch.type, fetchRepositoriesHandler);
}