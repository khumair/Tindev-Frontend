import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import axios from 'axios'

import App from './App'
import makeStore from './redux/store'

axios.defaults.baseURL = 'https://tindev-dev-deploy.herokuapp.com'
const store = makeStore()

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)
