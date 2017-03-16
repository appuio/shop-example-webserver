import {applyMiddleware, combineReducers, createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import createLogger from "redux-logger"
import "whatwg-fetch"
import * as reducers from "../modules/index"

const logger = createLogger()

export const configureStore = () => {
  return createStore(
    combineReducers({
      ...reducers
    }),
    composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument({fetch}), logger)
    )
  )
}
