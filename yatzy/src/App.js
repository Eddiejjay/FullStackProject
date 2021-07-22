import React from 'react'
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
// import Dices2 from './components/Dices2'

// import pointService from './services/pointService'
// import playerService from './services/playerService'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'

// import Home from './components/Home'
import { initializePoints } from './reducers/pointsReducer'
// import pointService from './services/pointService'
import EndGameButton from './components/EndGameButton'
import LogOutLink from './components/LogOutLink'
import { initializeTurn } from './reducers/turnReducer'
import { socket } from './services/socketService'
import { addOnlineUser } from './reducers/onlineUsersReducer'
import YatzyChat from './components/YatzyChat'
import { Text, NavBar, NavBarText, StyledLink, StyledButton } from './components/StyledComponents'
// import setDice from './reducers/diceReducer'
// import { addOnlineUserSocket } from  './services/socketService'
// import logo from './images/yazyhazymazylogo.png'
// import pointService from './services/pointService'
// import playerService from './services/playerService'



const App = () => {

  const dispatch = useDispatch()

  //socket.on kuuntelee servulta tulevaa vastausta
  socket.on('online-user-back-to-all', username => {
    // console.log('socet.data.usrname', socket.data.username)
    console.log('username clientside vastaan otto takaisin servulta')
    dispatch(addOnlineUser(username))
  })

  socket.on('delete-user-from-players-in-lobby',(socketId) => {
    console.log('userDELETED FROM lobbylist iwth id ', socketId)
  })

  socket.on('sockets-yatzy-room',(sockets) => {
    console.log('sockets in yatzyroom client ', sockets)
  })



  const user = useSelector(state => state.user)
  const points = useSelector(state => state.points)

  // const players = useSelector(state => state.players)

  // useEffect(() => {
  //   dispatch(initializePlayers())
  //   dispatch(initializeTurn())
  //   dispatch(initializePoints())elcome To YatzyRoom
  //   console.log('initplayers 1')
  // }, [dispatch])


  const Container = styled.div `
  
  display:flex;
  flex-direction: row;
  justify-content: center;
  padding:10px;
  align-items: flex-start;

  `

  // const StyledImg = styled.img`
  // width: 200px;
  // height:200px
  // `


  const startGameClicked = () => {
    socket.emit('give-private-players')

  }




  socket.on('players-in-private-yatzyroom', players => {
    console.log('players app.js clientista',players )
    dispatch(initializePlayers(players))
    dispatch(initializeTurn(players))
    dispatch(initializePoints(players))
  })


  return (

    <Router>

      <NavBar>

        <StyledLink>  <Link style={{ textDecoration: 'none' }} to="/"><NavBarText>Home</NavBarText></Link></StyledLink>
        {user && <Text>{user.username} logged in</Text>}
        {/* <Link  to="/">home</Link>, */}
        {/* <Link  to="/yatzy">yatzy</Link>, */}
        {/* <StyledLink><Link  to="/yatzyroom"><Text>Yatzyroom</Text></Link></StyledLink> */}
        {user && <StyledLink><Link style={{ textDecoration: 'none' }}  to="/yatzyroom"><NavBarText>Yatzyroom</NavBarText></Link></StyledLink>}
        {user && <LogOutLink></LogOutLink>}
        {user === null && <StyledLink><Link style={{ textDecoration: 'none' }}to="/login"><NavBarText>Login</NavBarText></Link></StyledLink>}
        {user === null && <StyledLink><Link style={{ textDecoration: 'none' }} to="/create"><NavBarText>Create user</NavBarText></Link></StyledLink>}
        {/* <StyledImg src={logo} alt="Logo" /> */}

      </NavBar>

      <Switch>
        <Route path="/yatzy">

          <h1>Yatzy</h1>
          <Dices></Dices>
          <Container>
            <YatzyTable></YatzyTable>
            <YatzyChat></YatzyChat>
          </Container>
          {/* <button onClick = {deletePointsFromDb}>delete points from database</button> */}
          {console.log('points', points)}
          {points.length === 0 && <StyledButton onClick = {startGameClicked}><Text>Start Game</Text></StyledButton>}
          {points.length !== 0 && <EndGameButton></EndGameButton>}
        </Route>
        <Route path="/yatzyroom">
          {/* <div>
            {user ? <YatzyRoom></YatzyRoom>: <Redirect to="/" />}
          </div> */}
          <YatzyRoom></YatzyRoom>
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
