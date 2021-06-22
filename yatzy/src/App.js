import React, { useEffect } from 'react'
import YatzyTable from './components/YatzyTable'
import { useDispatch, useSelector } from 'react-redux'
import { initializePoints }  from './reducers/pointsReducer'
import { initializePlayers }  from './reducers/playerReducer'
import Dices from './components/Dices'
import pointService from './services/pointService'

// import pointService from './services/pointService'
// import playerService from './services/playerService'




const App = () => {


  const dispatch = useDispatch()
  const players = useSelector(state => state.players)


  useEffect(() => {
    dispatch(initializePlayers())
  }, [dispatch])

// Ongelmana että sivua uudelleen päivittäessä taulukon leveys tuplaantuu
  useEffect(() => {
    players.forEach(player => pointService.postPoints(player) )
    dispatch(initializePoints())


  }, [dispatch, players])



  return (
    <div>
      <h1>Yatzy</h1>
      <Dices></Dices>
      <YatzyTable></YatzyTable>
    </div>
  )

}

export default App