import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";

const reducer = (state = {}, { type, payload }) => {
  if (type === "add") {
    return { ...state, ...payload };
  }
};
const reducers = combineReducers({ Q: reducer });
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
