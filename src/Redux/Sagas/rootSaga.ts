import { all, takeEvery } from "redux-saga/effects";
import { GET_USER_REQUEST } from "../Actions/AuthActions";
import { LoginSaga } from "./AuthSagas";

function* rootSagas() {
    yield all([
        takeEvery(GET_USER_REQUEST, LoginSaga),
    ]);
}

export default rootSagas;