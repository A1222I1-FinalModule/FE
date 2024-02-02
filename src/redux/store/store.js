import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { rootReducer } from "../reducer/RootReducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'
import persistStore from "redux-persist/es/persistStore";
import { encryptTransform } from 'redux-persist-transform-encrypt';
const persistConfig = {
    key: 'root',
    storage,
    transforms: [
        encryptTransform({
            secretKey: 'Ync1UaBeAhozqzH1',
            onError: function (error) {
                // Handle the error.
            },
        }),
    ],
    whiteList: ["users"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [thunk];
const init = {};
const store = createStore(persistedReducer, init, applyMiddleware(...middleware))

export default store;
export const persistor = persistStore(store)
