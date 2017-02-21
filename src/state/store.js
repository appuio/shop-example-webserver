import { applyMiddleware, combineReducers, createStore } from "redux";
import { routerReducer } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const setupStore = (rootReducer) => {
  return createStore(
    combineReducers({
      ...rootReducer,
      routing: routerReducer
    }),
    composeWithDevTools(
      applyMiddleware(thunk)
      // applyMiddleware(thunk, epicMiddleware)
    )
  );
};

// import { createEpicMiddleware } from "redux-observable";
// import { rootEpic } from "./actions";
// const epicMiddleware = createEpicMiddleware(rootEpic);
