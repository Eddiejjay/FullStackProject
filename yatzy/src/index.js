import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import { createStore,  applyMiddleware, combineReducers } from 'redux'
import pointsReducer from './reducers/pointsReducer'
import playerReducer from './reducers/playerReducer'
import userReducer from './reducers/userReducer'
import turnReducer from './reducers/turnReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logo from './images/yazyhazymazylogo.png'


const Container = styled.div`
text-align: center;
align-items: center;
background:#cbf5ec;
background-image: url(${logo});
width: 2000px;
height: 2000px;
`
const reducer = combineReducers({
  points: pointsReducer,
  players: playerReducer,
  turn : turnReducer,
  user : userReducer
})

const store = createStore(reducer,
  composeWithDevTools( applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <Container>
      <App   />
    </Container>
  </Provider>,
  document.getElementById('root')
)

