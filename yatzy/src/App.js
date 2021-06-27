import React, { useEffect } from 'react'
import YatzyTable from './components/YatzyTable'
import { useDispatch } from 'react-redux'
// import { initializePoints }  from './reducers/pointsReducer'
import { initializePlayers }  from './reducers/playerReducer'
import Dices from './components/Dices'
// import pointService from './services/pointService'
// import playerService from './services/playerService'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'
import Home from './components/Home'
import { initializePoints } from './reducers/pointsReducer'
import pointService from './services/pointService'
import { initializeTurn } from './reducers/turnReducer'
// import pointService from './services/pointService'
// import playerService from './services/playerService'




const App = () => {

  const dispatch = useDispatch()
  // const players = useSelector(state => state.players)

  useEffect(() => {
    dispatch(initializePlayers())
    dispatch(initializePoints())
    dispatch(initializeTurn())
    console.log('initplayers 1')
  }, [dispatch])

  const deletePointsFromDb = () => {
    pointService.deleteAll()
  }

  return (
    <Router>
      <div>
        <Link  to="/">home</Link>
        <Link  to="/yatzy">yatzy</Link>
      </div>
      <Switch>
        <Route path="/yatzy">
          <div>
            <h1>Yatzy</h1>
            <Dices></Dices>
            <YatzyTable></YatzyTable>
            <button onClick = {deletePointsFromDb}>delete points from database</button>
          </div>
        </Route>
        <Route path="/">
          <div>
            <h1>Hello travelle, will you play game of yatzyHatsiMatsi with me´h ?</h1>
            <Home></Home>
          </div>
        </Route>
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
