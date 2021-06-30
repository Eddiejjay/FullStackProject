import React, { useEffect } from 'react'
import styled from 'styled-components'
import YatzyTable from './components/YatzyTable'
import Login from './components/Login'
import YatzyRoom from './components/YatzyRoom'
import CreateUser from './components/CreateUser'
import { useDispatch, useSelector } from 'react-redux'
// import { initializePoints }  from './reducers/pointsReducer'
import { initializePlayers }  from './reducers/playerReducer'
import Dices from './components/Dices'
// import pointService from './services/pointService'
// import playerService from './services/playerService'
import {
  BrowserRouter as Router,
  Switch, Route, Link, Redirect
} from 'react-router-dom'
// import Home from './components/Home'
import { initializePoints } from './reducers/pointsReducer'
import pointService from './services/pointService'
import { initializeTurn } from './reducers/turnReducer'
// import pointService from './services/pointService'
// import playerService from './services/playerService'





const App = () => {

  const dispatch = useDispatch()

  const user = useSelector(state => state.user)
  // const players = useSelector(state => state.players)

  useEffect(() => {
    dispatch(initializePlayers())
    dispatch(initializeTurn())
    dispatch(initializePoints())
    console.log('initplayers 1')
  }, [dispatch])




  const deletePointsFromDb = () => {
    pointService.deleteAll()
  }

  const NavBar = styled.nav`
  background : #7fad8b;
  height : 80px;
  display: flex;
  justify-content: center;
  font-size: 1.7rem;
  position: sticky;
  top: 0;
  z-index: 999;

  }
  `
  const Container = styled.div`
  align-content:space-evenly;
  background-image: url('./images/yazyhazymazylogo.png');
  background:00000;
  `
  return (
    <Container>
      <Router>

        <NavBar>
          {user && <p>{user.username} logged in</p>}
          {/* <Link  to="/">home</Link>, */}
          {/* <Link  to="/yatzy">yatzy</Link>, */}
          {user && <Link  to="/yatzyroom">YatzyRoom</Link>}
          {user === null && <Link to="/">Login</Link>}
          {user === null && <Link to="/create">Create user</Link>}

        </NavBar>

        <Switch>
          <Route path="/yatzy">
            <div>
              <h1>Yatzy</h1>
              <Dices></Dices>
              <YatzyTable></YatzyTable>
              <button onClick = {deletePointsFromDb}>delete points from database</button>
            </div>
          </Route>
          <Route path="/yatzyroom">
            <div>
              {user ? <YatzyRoom></YatzyRoom>: <Redirect to="/" />}
            </div>
          </Route>

          <Route path="/create">
            <div>
              <CreateUser></CreateUser>
            </div>
          </Route>
          <Route path="/">
            <div>
              <Login></Login>
            </div>
          </Route>
          {/* <Route path="/">
          <div>
            <h1>Hello travelle, will you play game of yatzyHatsiMatsi with me´h ?</h1>
            <Home></Home>
            <Link  to="/yatzy">yatzy</Link>
          </div>
        </Route> */}
        </Switch>


      </Router>
    </Container>
  )

}





export default App


// const postPlayersPoints = async () => {
//   const players = await  playerService.getAll()
//   players.map(player => pointService.postPoints(player)
//   )}



// const initPoints = async () => {
//   await postPlayersPoints()
//   console.log('postPlayersPoints 2')
//   dispatch(initializePoints())

//   console.log('initializePoints 3')

// }

// initPoints()
// console.log('postplayerspoints 2')
// const points = pointService.getAll()
// console.log('points 3', points)


// console.log('Initialize points 4')
// console.log('Perseenreikä dispatch(initializeplayers 5')


// useEffect(() => {
//   dispatch(initializePoints())
// },[dispatch])


// Ongelmana että sivua uudelleen päivittäessä taulukon leveys tuplaantuu
// useEffect(() => {
// players.map(player => pointService.postPoints(player) )
//   console.log('players are ', players)
//   dispatch(initializePoints())

// }, [dispatch])
