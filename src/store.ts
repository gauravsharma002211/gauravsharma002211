import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./Redux/Reducers";
import rootSagas from "./Redux/Sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const browserWindow: any = window;

const rootConfig = {
    key: "root",
    storage,
    whitelist: ['Auth', 'Toast'],
};

const persistedReducer = persistReducer(rootConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [sagaMiddleware],
    devTools:
        browserWindow.__REDUX_DEVTOOLS_EXTENSION__ &&
        browserWindow.__REDUX_DEVTOOLS_EXTENSION__(),
});

sagaMiddleware.run(rootSagas);

let persistor = persistStore(store);

export { store, persistor };
export default {};
