import { all } from "redux-saga/effects";
import { repositoriesSaga } from "../features/personalHomepage/repositoriesSaga";

export default function* saga() {
    yield all([
        repositoriesSaga(),
    ]);
}