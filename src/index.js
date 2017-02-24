import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {browserHistory, IndexRoute, Route, Router} from "react-router"
import {syncHistoryWithStore} from "react-router-redux"
import {configureStore} from "./redux/store/configureStore"
import App from "./containers/App"
import ProductsContainer from "./containers/ProductsContainer"
import ProductContainer from "./containers/ProductContainer"
import CartContainer from "./containers/CartContainer"
import "semantic-ui-css/semantic.css"

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={ProductsContainer}/>
        <Route path="products/:id" component={ProductContainer}/>
        <Route path="cart" component={CartContainer}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
