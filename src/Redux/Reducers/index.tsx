import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducers";
import { ToastReducer } from "./ToastReducer";


const rootReducer = combineReducers({
    Auth: AuthReducer,
    Tost: ToastReducer,
});

export default rootReducer;
