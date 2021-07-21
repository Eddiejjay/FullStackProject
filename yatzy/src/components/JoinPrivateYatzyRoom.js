import React, { useState } from 'react'
import { socket } from '../services/socketService'
import { useHistory } from 'react-router-dom'
import { addUserInPrivateYatzyRoom  } from '../services/socketService'


import { StyledInput, StyledButton, Text } from './StyledComponents'
import { useSelector } from 'react-redux'

const JoinPrivateYatzyRoom = () => {
  const [createInputValue, setCreateInputValue] = useState('')
  const [joinInputValue, setJoinInputValue] = useState('')
  const history = useHistory()

  const user = useSelector (state => state.user.username)

  const joinPrivateYatzyRoom = () => {
    socket.emit('joinPrivateYatzyRoom' ,joinInputValue)
    addUserInPrivateYatzyRoom(user)
    history.push('/yatzy')


  }

  const createPrivateYatzyRoom = () => {
    socket.emit('joinPrivateYatzyRoom' ,createInputValue)
    setCreateInputValue('')
    socket.emit('new-private-yatzyroom', user,createInputValue)

  }

  return (
    <div>
      <Text>Create private YatzyRoom</Text>
      <StyledInput  onChange = {(event) => setCreateInputValue(event.target.value)}
        id = 'createInputValue'
        type= "text"
        value = {createInputValue}
        name = "CreateRoomInput"></StyledInput>
      <StyledButton onClick = {createPrivateYatzyRoom}><Text>Create</Text></StyledButton>
      <StyledInput  onChange = {(event) => setJoinInputValue(event.target.value)}
        id = 'JoinInputValue'
        type= "text"
        value = {joinInputValue}
        name = "JoinRoomInput"></StyledInput>
      <StyledButton onClick = {joinPrivateYatzyRoom}><Text>Join</Text></StyledButton>

    </div>
  )}


export default JoinPrivateYatzyRoom
