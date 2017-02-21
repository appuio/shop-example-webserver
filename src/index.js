import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { browserHistory, IndexRoute, Route, Router } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { rootReducer } from "./state/reducers";
import { setupStore } from "./state/store";
import App from "./App";
import Home from "./Home/Home";
import Product from "./Product/Product";
import "semantic-ui-css/semantic.css";
import "rxjs";

const store = setupStore(rootReducer);
const history = syncHistoryWithStore(browserHistory, store);

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="products/:id" component={Product}/>
      </Route>
    </Router>
  </Provider>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <NextApp />,
      rootEl
    );
  });
}
