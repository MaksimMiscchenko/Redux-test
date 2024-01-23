import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import postsReducer from "./redux/reducers/reducer";

const rootReducer = combineReducers({
  posts: postsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
