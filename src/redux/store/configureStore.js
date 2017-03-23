import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {reducer as formReducer} from 'redux-form'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import 'whatwg-fetch'
import * as reducers from '../modules/index'

const logger = createLogger()

export const configureStore = () => {
  return createStore(
    combineReducers({
      ...reducers,
      form: formReducer
    }),
    composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument({fetch}), logger)
    )
  )
}
