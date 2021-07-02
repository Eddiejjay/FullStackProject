import React, { useEffect } from 'react'
import { io } from 'socket.io-client'
import styled from 'styled-components'
import YatzyTable from './components/YatzyTable'
import Login from './components/Login'
import Home from './components/Home'
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
// import logo from './images/yazyhazymazylogo.png'
// import pointService from './services/pointService'
// import playerService from './services/playerService'





const App = () => {

  const socket = io('http://localhost:3003')
  const dispatch = useDispatch()
  console.log(socket)

  const user = useSelector(state => state.user)
  // const players = useSelector(state => state.players)

  useEffect(() => {
    dispatch(initializePlayers())
    dispatch(initializeTurn())
    dispatch(initializePoints())
    console.log('initplayers 1')
  }, [dispatch])




  const deletePointsFromDb = () => {
    console.log('deleeteall clicked')
    pointService.deleteAll()
  }

  const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background : #d8c690;
  height : 45px;
 
  `
  const StyledLink = styled.div `
    font-family: "Lucida Console", Monaco, monospace;
  font-size: 27px;
  letter-spacing: 0px;
  word-spacing: 0px;
  color: #000000;
  font-weight: 700;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  padding: 10px;

    `
  // const StyledImg = styled.img`
  // width: 200px;
  // height:200px
  // `

  return (

    <Router>

      <NavBar>

        <StyledLink>  <Link to="/">Home</Link></StyledLink>
        {user && <p>{user.username} logged in</p>}
        {/* <Link  to="/">home</Link>, */}
        {/* <Link  to="/yatzy">yatzy</Link>, */}
        {user && <StyledLink><Link  to="/yatzyroom">YatzyRoom</Link></StyledLink>}
        {user === null && <StyledLink><Link to="/login">Login</Link></StyledLink>}
        {user === null && <StyledLink><Link to="/create">Create user</Link></StyledLink>}
        {/* <StyledImg src={logo} alt="Logo" /> */}

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
        <Route path="/login">
          <div>
            <Login></Login>
          </div>
        </Route>
        <Route path="/">
          <div>
            <Home></Home>
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
