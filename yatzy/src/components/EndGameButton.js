import React from 'react'
import { StyledButton, Text  } from './StyledComponents'
import pointService from '../services/pointService'
import { useHistory } from 'react-router-dom'
import { socket } from '../services/socketService'
import { useDispatch } from 'react-redux'
import { initializePoints } from '../reducers/pointsReducer'
import { initializeTurn } from '../reducers/turnReducer'
import { initializePlayers }  from '../reducers/playerReducer'


const EndGameButton = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  socket.on('end-game-signal-from-server',() => {
    history.push('/yatzyroom')
    dispatch(initializePlayers([]))
    dispatch(initializeTurn([]))
    dispatch(initializePoints([]))

  })

  const deletePointsFromDb = () => {
    console.log('deleeteall clicked')
    pointService.deleteAll()
  }

  const endGameClicked = () => {

    console.log('EnGame Clicked')
    socket.emit('end-game')
    deletePointsFromDb()
    // history.push('/yatzyroom')

  }


  return (


    <StyledButton onClick = {endGameClicked}><Text>End Game</Text></StyledButton>


  )



}



export default EndGameButton