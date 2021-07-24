import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { StyledButton, Text, StyledInput, ChatBox, StyledMessage, MessageContainer  } from './StyledComponents'
import { useSelector, useDispatch } from 'react-redux'
import { setPrivateRoom } from '../reducers/privateRoomReducer'

const Container = styled.div `

width: 1000px;
display:flex;
flex-direction: row;
justify-content: center;
padding:10px;

`

const YatzyChat = () => {
  const dispatch = useDispatch()
  const username = useSelector(state => state.user.username )
  const [chatList1, setChatList] = useState([])
  const [message, setMessage] = useState('')
  const privateRoom = useSelector(state => state.privateRoom)
  const socket = useSelector(state => state.socket)
  const jorma = ''

  useEffect(() => {
    socket.on('private-room', privateRoom => {
      dispatch(setPrivateRoom(privateRoom))
    })
  },[jorma])

  useEffect(() => {
    socket.on('chat-message-back-to-privatechat', message => {
      console.log('chat-message-back-to-all-sockets', message)
      setChatList([...chatList1, message])
    })
    return () => {socket.off('chat-message-back-to-privatechat')}
  },[chatList1])

  const updateScroll = () => {
    var element = document.getElementById('yatzychat123')
    console.log('elemetn ====' , element )
    element.scrollTop = element.scrollHeight
  }

  const sendButtonClicked = () => {
    socket.emit('private-chat-message',privateRoom, message ,username)
    console.log('privateroom sendclkicdeistä',privateRoom)
    setChatList([...chatList1,`${username}: ${message}`])
    console.log('privateroom', privateRoom)
    updateScroll()
    setMessage('')
  }

  const handleKeypress = e => {
    console.log('handlekeypres', e.key)
    if (e.key === 'Enter') {
      sendButtonClicked()
    }
  }

  return (
    <Container>
      <ChatBox id = 'yatzychat123'>
        <MessageContainer>
          {chatList1.map(item => <StyledMessage key = {`${item}${Math.random()}`} >{item}</StyledMessage>)}
        </MessageContainer>
        <StyledInput  onKeyPress={handleKeypress} onChange = {(event) => setMessage(event.target.value)}
          id = 'message'
          type= "text"
          value = {message}
          name = "MessageInput"></StyledInput><StyledButton onClick = {sendButtonClicked}><Text>Send</Text></StyledButton>
      </ChatBox>
    </Container>
  )
}


export default YatzyChat