import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore,  applyMiddleware  } from 'redux'
import pointsReducer from './reducers/pointsReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore(pointsReducer,
  composeWithDevTools( applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
