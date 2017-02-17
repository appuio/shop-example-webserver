import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { browserHistory, Route, Router } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { rootReducer } from "./state/reducers";
import { setupStore } from "./state/store";
import App from "./App";
import "semantic-ui-css/semantic.css";

const store = setupStore(rootReducer);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
