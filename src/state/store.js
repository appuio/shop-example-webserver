import { applyMiddleware, combineReducers, createStore } from "redux";
import { routerReducer } from "react-router-redux";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./actions";

const epicMiddleware = createEpicMiddleware(rootEpic);

export const setupStore = (rootReducer) => {
  return createStore(
    combineReducers({
      ...rootReducer,
      routing: routerReducer
    }),
    applyMiddleware(epicMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};
