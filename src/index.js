import React from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import Reducers from './Reducers'

const store = createStore(Reducers)

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,

   document.getElementById('root'))
