import React, { useState } from 'react'
import styled from 'styled-components'
import { StyledButton, Text } from './StyledComponents'
import { socket } from '../services/socketService'
import { useSelector } from 'react-redux'
import { StyledInput } from './StyledComponents'

const ChatBox = styled.div `
border: 10px groove rgba(20,20,20,0.17);

box-sizing: content-box;
margin: 75px;
width: 1200px;
height: 400px;
padding: 5px;
display:flex;
flex-direction: column;
justify-content: flex-end;
overflow: auto;
`

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
const StyledMessage = styled.div`
width: 900px;
color:black;
font-size: 25px;
justify-content: left;
text-align: left;


`
const MessageContainer = styled.div`
overflow-y: scroll
`


const Chat = () => {
  const username = useSelector(state => state.user.username )
  const [chatList, setChatList] = useState([])
  const [message, setMessage] = useState('')
  const [usersInLobby, setUsersInLobby] = useState([])
  // const [readyMessage, setReadyMessage] = useState('')

  socket.on('chat-message-back-to-all-sockets', message => {
    console.log('chat-message-back-to-all-sockets', message)
    setChatList([...chatList, message])

  })

  socket.on('joined-username-back-from-server', username => {
    setChatList([...chatList, `${username} joind YatzyRooms`])
    setUsersInLobby([...usersInLobby, username])
  })

  // const enterPressed = (event) => {

  //   if (event.keyCode !== 'Enter') {
  //     sendButtonClicked()
  //   }
  // }

  const sendButtonClicked = () => {
    socket.emit('chat-message', message ,username)
    setChatList([...chatList,`${username}: ${message}`])
    setMessage('')

  }

  //   const playYatzyClicked = () => {

  //     history.push('/yatzy')



  //   }#fff0db;

  return (
    <Container>
      <ChatBox>
        <MessageContainer>
          {chatList.map(item => <StyledMessage key = {item}>{item}</StyledMessage>)}
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