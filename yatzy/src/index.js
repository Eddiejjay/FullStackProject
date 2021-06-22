import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore,  applyMiddleware, combineReducers } from 'redux'
import pointsReducer from './reducers/pointsReducer'
import playerReducer from './reducers/playerReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  points: pointsReducer,
  players: playerReducer
})

const store = createStore(reducer,
  composeWithDevTools( applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

