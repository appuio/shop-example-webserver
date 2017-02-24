import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {browserHistory, Router} from "react-router"
import {syncHistoryWithStore} from "react-router-redux"
import {configureStore} from "./redux/store/configureStore"
import routes from "./routes"
import "semantic-ui-css/semantic.css"

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./routes', () => {
    const nextRoutes = require('./routes').default
    ReactDOM.render(
      <Provider store={store}>
        <Router history={history} routes={nextRoutes}/>
      </Provider>,
      rootEl
    )
  })
}
