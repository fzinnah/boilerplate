import React from 'react'
import { createRoot } from 'react-dom/client'
import store from './store/index'
import { Provider } from 'react-redux'
import Main from './components/Main'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <Main />
  </Provider>
)
