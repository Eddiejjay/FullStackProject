import React, { useState } from 'react'
import styled from 'styled-components'
import { StyledButton } from './StyledComponents'
import { socket } from '../services/socketService'
import { useSelector } from 'react-redux'

const ChatBox = styled.div `
border: 5px groove rgba(20,20,20,0.17);
border-radius: 40px 40px 40px 40px;
box-sizing: content-box;
width: 500px;
height: 600px;
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
  // const enterPressed = (event) => {

  //   if (event.keyCode !== 'Enter') {
  //     sendButtonClicked()
  //   }
  // }

  const sendButtonClicked = () => {
    socket.emit('private-chat-message',privateRoom, message ,username)
    console.log('privateroom sendclkicdeistä',privateRoom)
    setChatList([...chatList1,`${username}: ${message}`])
    setMessage('')

  }

  //   const playYatzyClicked = () => {

  //     history.push('/yatzy')



  //   }#fff0db;

  return (
    <Container>
      <ChatBox>
        {chatList1.map(item => <StyledMessage key = {item}>{item}</StyledMessage>)}
        <StyledInput  onChange = {(event) => setMessage(event.target.value)}
          id = 'message'
          type= "text"
          value = {message}
          name = "MessageInput"></StyledInput><StyledButton onClick = {sendButtonClicked}>Send</StyledButton>

      </ChatBox>
    </Container>
  )
}


export default YatzyChat