import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import Wrapper from './Wrapper'

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <Route component={Wrapper} />
    </Router>
  </Provider>,
  document.getElementById('root')
)