import { call, put } from "redux-saga/effects";
import axios from "../../axiosConfig";
import {
    GET_USER_FOUND,
    GET_USER_NOT_FOUND,
} from "../Actions/AuthActions";
import { TOAST_SHOW } from "../Actions/ToastAction";

interface ILogin {
    payload: {
        email: string;
        password: string;
    };
}

export function* LoginSaga(action: ILogin): unknown {
    try {
        const response = yield call(axios.post, `user/login`, action.payload);
        const { success, data, message, errors } = response?.data;
        console.log('response data', data);

        // const token = response.data.data.token;
        // localStorage.setItem("token", token);
        yield put({ type: GET_USER_FOUND, payload: data });
        yield put({
            type: TOAST_SHOW,
            payload: { message: message, severity: "success" },
        });
    } catch (e: any) {
        yield put({ type: GET_USER_NOT_FOUND });
        console.log('response data', e?.response);
        yield put({
            type: TOAST_SHOW,
            payload: { message: e?.response?.data?.errors?.Error?.message, severity: "error" },
        });
    }
}