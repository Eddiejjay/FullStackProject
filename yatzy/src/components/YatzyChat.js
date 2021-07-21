import React, { useState } from 'react'
import styled from 'styled-components'
import { StyledButton, Text, StyledInput, ChatBox, StyledMessage, MessageContainer  } from './StyledComponents'
import { socket } from '../services/socketService'
import { useSelector } from 'react-redux'


const Container = styled.div `

width: 1000px;
display:flex;
flex-direction: row;
justify-content: center;
padding:10px;

`


// const StyledButton = styled.button `

// `

const YatzyChat = () => {
  const username = useSelector(state => state.user.username )
  const [chatList1, setChatList] = useState([])
  const [message, setMessage] = useState('')
  const [usersInLobby, setUsersInLobby] = useState([])
  const [privateRoom, setPrivateRoom] = useState('')
  // const [readyMessage, setReadyMessage] = useState('')

  socket.on('chat-message-back-to-privatechat', message => {
    console.log('chat-message-back-to-all-sockets', message)
    setChatList([...chatList1, message])

  })
  socket.on('joined-username-back-from-server', username => {
    setChatList([...chatList1, `${username} joind YatzyRooms`])
    setUsersInLobby([...usersInLobby, username])


  })
  socket.on('private-room', privateRoom => {
    setPrivateRoom(privateRoom)


  })
  const updateScroll = () => {
    var element = document.getElementById('yatzychat123')
    console.log('elemetn ====' , element )
    element.scrollTop = element.scrollHeight
  }

  // const enterPressed = (event) => {

  //   if (event.keyCode !== 'Enter') {
  //     sendButtonClicked()
  //   }
  // }
  const sendButtonClicked = () => {
    socket.emit('private-chat-message',privateRoom, message ,username)
    console.log('privateroom sendclkicdeistä',privateRoom)
    setChatList([...chatList1,`${username}: ${message}`])
    updateScroll()
    setMessage('')

  }

  //   const playYatzyClicked = () => {

  //     history.push('/yatzy')



  //   }#fff0db;

  return (
    <Container>
      <ChatBox id = 'yatzychat123'>
        <MessageContainer>
          {chatList1.map(item => <StyledMessage key = {`${item}${Math.random()}`} >{item}</StyledMessage>)}
        </MessageContainer>
        <StyledInput  onChange = {(event) => setMessage(event.target.value)}
          id = 'message'
          type= "text"
          value = {message}
          name = "MessageInput"></StyledInput><StyledButton onClick = {sendButtonClicked}><Text>Send</Text></StyledButton>

      </ChatBox>
    </Container>
  )
}


export default YatzyChat