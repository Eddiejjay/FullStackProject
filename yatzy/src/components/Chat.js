import React, { useState } from 'react'
import styled from 'styled-components'
import { StyledButton, Text, StyledInput, ChatBox, StyledMessage, MessageContainer } from './StyledComponents'
import { socket } from '../services/socketService'
import { useSelector } from 'react-redux'



const Container = styled.div `

display:flex;
flex-direction: row;
justify-content: center;
padding:10px;

`

// const UsersInLobby = styled.div `
// border: 5px groove rgba(20,20,20,0.17);
// border-radius: 40px 40px 40px 40px;
// box-sizing: content-box;
// width: 150px;
// height: 120px;
// padding: 5px;
// display:flex;
// flex-direction: column;
// justify-content: flex-start;
// `


const Chat = () => {
  const username = useSelector(state => state.user.username )
  const [chatList, setChatList] = useState([])
  const [message, setMessage] = useState('')
  const [usersInLobby, setUsersInLobby] = useState([])
  // const [readyMessage, setReadyMessage] = useState('')

  socket.once('chat-message-back-to-all-sockets', message => {
    console.log('chat-message-back-to-all-sockets', message)
    setChatList([...chatList, message])

  })

  socket.once('joined-username-back-from-server', username => {
    setChatList([...chatList, `${username} joined YatzyRoom`])
    setUsersInLobby([...usersInLobby, username])
  })


  socket.once('new-private-room-created',(pRoom, user) => {
    setChatList([...chatList, `New Private Yatzyroom ${pRoom} created by ${user}`])
    console.log('Created ', pRoom,user)
    // setUsersInLobby([...usersInLobby, username])
  })
  // const enterPressed = (event) => {

  //   if (event.keyCode !== 'Enter') {
  //     sendButtonClicked()
  //   }
  // }

  const socketEmitChatMessage = (message, username) => {
    socket.emit('chat-message',message ,username)
  }

  const sendButtonClicked = () => {
    socketEmitChatMessage(message, username)
    setChatList([...chatList,`${username}: ${message}`])
    setMessage('')
    console.log('chatlist on seuraava', chatList)

  }

  //   const playYatzyClicked = () => {

  //     history.push('/yatzy')



  //   }#fff0db;

  return (
    <Container>
      <ChatBox>
        <MessageContainer>
          {chatList.map(item => <StyledMessage  key = {`${item}${Math.random()}`}>{item}</StyledMessage>)}
        </MessageContainer>
        <StyledInput  style={{ margin: '20px' }} onChange = {(event) => setMessage(event.target.value)}
          id = 'message'
          type= "text"
          value = {message}
          name = "MessageInput"></StyledInput><StyledButton onClick = {sendButtonClicked}><Text>Send</Text></StyledButton>
      </ChatBox>
      {/* <UsersInLobby>
        <p>Players In YatzyRoom</p>
        {usersInLobby.map(item => <StyledMessage key = {item}>{item}</StyledMessage>)}
      </UsersInLobby> */}
    </Container>
  )
}


export default Chat