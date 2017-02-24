import React from "react"
import {Route, IndexRoute} from "react-router"
import App from "./containers/App"
import ProductsContainer from "./containers/ProductsContainer"
import ProductContainer from "./containers/ProductContainer"
import CartContainer from "./containers/CartContainer"

const routes =
  <Route path="/" component={App}>
    <IndexRoute component={ProductsContainer}/>
    <Route path="products/:id" component={ProductContainer}/>
    <Route path="cart" component={CartContainer}/>
  </Route>;

export default routes;
