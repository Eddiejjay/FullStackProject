import React, { useState } from 'react'
import styled from 'styled-components'
import { StyledButton } from './StyledComponents'

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
  const [chatList, setChatList] = useState([])
  const [message, setMessage] = useState('')

  const sendButtonClicked = () => {
    setChatList([...chatList, message]) }


  //   const playYatzyClicked = () => {

  //     history.push('/yatzy')



  //   }#fff0db;

  return (

    <ChatBox>
      {chatList.map(item => <StyledMessage key = {item}>{item}</StyledMessage>)}
      <StyledInput  onChange = {(event) => setMessage(event.target.value)}
        id = 'message'
        type= "text"
        value = {message}
        name = "Message"></StyledInput><StyledButton onClick = {sendButtonClicked}>Send</StyledButton>

    </ChatBox>

  )
}


export default Chat