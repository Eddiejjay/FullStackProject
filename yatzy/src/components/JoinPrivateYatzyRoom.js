import React, { useState } from 'react'
import { socket } from '../services/socketService'
import { useHistory } from 'react-router-dom'
import { addUserInPrivateYatzyRoom  } from '../services/socketService'

import { StyledInput, StyledButton } from './StyledComponents'
import { useSelector } from 'react-redux'



const JoinPrivateYatzyRoom = () => {
  const [inputValue, setInputValue] = useState('')
  const history = useHistory()

  const user = useSelector (state => state.user.username)

  const createPrivateYatzyRoom = () => {
    socket.emit('joinPrivateYatzyRoom' ,inputValue)
    addUserInPrivateYatzyRoom(user)
    history.push('/yatzy')


  }

  return (
    <div>
      <h2>Create private YatzyRoom</h2>
      <StyledInput  onChange = {(event) => setInputValue(event.target.value)}
        id = 'inputValue'
        type= "text"
        value = {inputValue}
        name = "RoomInput"></StyledInput><StyledButton onClick = {createPrivateYatzyRoom}>Send</StyledButton>

    </div>
  )}


export default JoinPrivateYatzyRoom
