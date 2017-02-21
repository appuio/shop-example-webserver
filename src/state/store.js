import { applyMiddleware, combineReducers, createStore } from "redux";
import { routerReducer } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import * as reducers from "./index";

const logger = createLogger();

export const configureStore = () => {
  return createStore(
    combineReducers({
      ...reducers,
      routing: routerReducer
    }),
    composeWithDevTools(
      applyMiddleware(thunk, logger)
      // applyMiddleware(thunk, epicMiddleware)
    )
  );
};

// import { createEpicMiddleware } from "redux-observable";
// import { rootEpic } from "./actions";
// const epicMiddleware = createEpicMiddleware(rootEpic);
