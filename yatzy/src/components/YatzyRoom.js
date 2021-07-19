import React from 'react'
import { useHistory } from 'react-router-dom'
import Chat from './Chat'
import JoinPrivateYatzyRoom from './JoinPrivateYatzyRoom'
import styled from 'styled-components'
import { StyledButton } from './StyledComponents'
import { Text } from './StyledComponents'

const Container = styled.div `

display:flex;
flex-direction: column;
justify-content: flex-start;
padding:10px;

`
export const HeadingText = styled.div `
  padding: 12px;
  color:white;
  font-family: "Comic Sans MS", cursive, sans-serif;
 font-size: 40px;
 letter-spacing: 2px;
 word-spacing: 2px;
 
 font-weight: 700;
 text-decoration: none solid rgb(68, 68, 68);
 font-style: italic;
 font-variant: small-caps;
 text-transform: capitalize;`

const YatzyRoom = () => {
  const history = useHistory()
  const playYatzyClicked = () => {

    history.push('/yatzy')

  }

  return (
    <Container>
      <HeadingText> Welcome to YatzyRoom</HeadingText>
      <Chat></Chat>
      <JoinPrivateYatzyRoom></JoinPrivateYatzyRoom>
      <StyledButton onClick ={playYatzyClicked}><Text>Play YatzyHatsiMatsi</Text></StyledButton>
    </Container>
  )
}


export default YatzyRoom