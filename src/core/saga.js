import { all } from "redux-saga/effects";
import { repositoriesSaga } from "../features/personalHomepage/repositoriesSaga";
import { themeSaga } from "../common/themeSaga";

export default function* saga() {
    yield all([
        repositoriesSaga(),
        themeSaga(),
    ]);
}