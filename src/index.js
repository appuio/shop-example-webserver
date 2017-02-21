import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { browserHistory, IndexRoute, Route, Router } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { configureStore } from "./state/store";
import App from "./App";
import Home from "./Home/Home";
import Product from "./Product/Product";
import "semantic-ui-css/semantic.css";

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="products/:id" component={Product}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// import "rxjs";
