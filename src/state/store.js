import { applyMiddleware, combineReducers, createStore } from "redux";
import { routerReducer } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";
import thunk from "redux-thunk";
import { rootEpic } from "./actions";

const epicMiddleware = createEpicMiddleware(rootEpic);

export const setupStore = (rootReducer) => {
  return createStore(
    combineReducers({
      ...rootReducer,
      routing: routerReducer
    }),
    composeWithDevTools(
      applyMiddleware(thunk, epicMiddleware)
    )
  );
};
