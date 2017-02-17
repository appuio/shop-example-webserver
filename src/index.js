import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { browserHistory, Route, Router } from "react-router";
import { rootReducer } from "./state/reducers";
import { setupStore } from "./state/store";
import App from "./App";
import "semantic-ui-css/semantic.css";

ReactDOM.render(
  <Provider store={setupStore(rootReducer)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
