import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { githubReducer } from "../reducers/githubReducer";

export const store = createStore(githubReducer, applyMiddleware(thunk));

