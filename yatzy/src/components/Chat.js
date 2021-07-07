import React, { useState } from 'react'
import styled from 'styled-components'
import { StyledButton } from './StyledComponents'
import { socket } from '../services/socketService'
import { useSelector } from 'react-redux'

const ChatBox = styled.div `
border: 5px groove rgba(20,20,20,0.17);
border-radius: 40px 40px 40px 40px;
box-sizing: content-box;
width: 900px;
height: 400px;
padding: 5px;
display:flex;
flex-direction: column;
justify-content: flex-end;
`

const Container = styled.div `

display:flex;
flex-direction: row;
justify-content: flex-start;
padding:10px;

`

const UsersInLobby = styled.div `
border: 5px groove rgba(20,20,20,0.17);
border-radius: 40px 40px 40px 40px;
box-sizing: content-box;
width: 150px;
height: 120px;
padding: 5px;
display:flex;
flex-direction: column;
justify-content: flex-start;
`

const StyledInput = styled.input`
width : 900x;   
        border-style: double;
        background: transparent;
        border: 3px groove rgba(164,164,164,0.17);
        &:hover {
          background: #fff0db;
          
        }

        `
const StyledMessage = styled.div`
width: 900px;
color: #fff0db;
justify-content: left;
text-align: left;

`
// const StyledButton = styled.button `

// `

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
        {chatList.map(item => <StyledMessage key = {item}>{item}</StyledMessage>)}
        <StyledInput  onChange = {(event) => setMessage(event.target.value)}
          id = 'message'
          type= "text"
          value = {message}
          name = "MessageInput"></StyledInput><StyledButton onClick = {sendButtonClicked}>Send</StyledButton>

      </ChatBox>
      <UsersInLobby>
        <p>Players In YatzyRoom</p>
        {usersInLobby.map(item => <StyledMessage key = {item}>{item}</StyledMessage>)}
      </UsersInLobby>
    </Container>
  )
}


export default Chat