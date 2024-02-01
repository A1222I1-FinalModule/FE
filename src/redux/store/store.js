import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { rootReducer } from "../reducer/RootReducer";

const middleware = [thunk];
const init = {};
const store = createStore(rootReducer, init, applyMiddleware(...middleware))

export default store;
