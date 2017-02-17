import { combineReducers, createStore } from "redux";
import { routerReducer } from "react-router-redux";

export const setupStore = (rootReducer) => {
  return createStore(
    combineReducers({
      ...rootReducer,
      routing: routerReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};
