import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { StyledButton, Text, StyledInput, ChatBox, StyledMessage, MessageContainer  } from './StyledComponents'
import { useSelector, useDispatch } from 'react-redux'
import { setPrivateRoom } from '../reducers/privateRoomReducer'
// import { setPrivateChat } from '../reducers/privateChatReducer'


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
  const dispatch = useDispatch()
  const username = useSelector(state => state.user.username )
  // const allPoints = useSelector(state => state.points)
  const [chatList1, setChatList] = useState([])
  const [message, setMessage] = useState('')
  // const [privateRoom, setPrivateRoom] = useState('')
  const privateRoom = useSelector(state => state.privateRoom)
  const socket = useSelector(state => state.socket)
  // const chatLog = useSelector (state => state.chatLog)
  // const [readyMessage, setReadyMessage] = useState('')

  const jorma = ''

  useEffect(() => {
    // socket.on('chat-message-back-to-privatechat', message => {
    //   console.log('chat-message-back-to-all-sockets', message)
    //   setChatList([...chatList1, message])
    //   // dispatch(setPrivateChat(`${username}: ${message}`))
    //   socket.off('chat-message-back-to-privatechat')
    // })
    // socket.once('joined-username-back-from-server', username => {
    //   setChatList([...chatList1, `${username} joind YatzyRooms`])
    //   setUsersInLobby([...usersInLobby, username])


    // })
    socket.on('private-room', privateRoom => {
      dispatch(setPrivateRoom(privateRoom))


    })
  },[jorma])

  useEffect(() => {
    socket.on('chat-message-back-to-privatechat', message => {
      console.log('chat-message-back-to-all-sockets', message)
      setChatList([...chatList1, message])
    // dispatch(setPrivateChat(`${username}: ${message}`))
    // socket.off('chat-message-back-to-privatechat')
    })
    return () => {socket.off('chat-message-back-to-privatechat')}
  },[chatList1])

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
    // dispatch(setPrivateChat(`${username}: ${message}`))
    console.log('privateroom', privateRoom)
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