import { Navigate } from "react-router-dom";
import {
    GET_USER_FOUND,
    GET_USER_NOT_FOUND,
    GET_USER_REQUEST,
} from "../Actions/AuthActions";

const LoginInitialState = {
    loading: false,
    user: {},
    token: '',
};

export const AuthReducer = (state = LoginInitialState, action: any) => {
    switch (action.type) {
        case GET_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case GET_USER_FOUND:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                user: action.payload,
                loading: false,
                token: action.payload.token,
            };
        case GET_USER_NOT_FOUND:
            return { ...state, user: {}, loading: false };

        default:
            return state;
    }
};
