import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import 'semantic-ui-css/semantic.css'
import App from './containers/App'
import {configureStore} from './redux/store/configureStore'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
