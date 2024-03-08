import { all } from "redux-saga/effects";
import watchAsyncData from "./parentSaga";

export function* rootSaga() {
    yield all([watchAsyncData()])
}