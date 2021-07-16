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

const YatzyRoom = () => {
  const history = useHistory()
  const playYatzyClicked = () => {

    history.push('/yatzy')

  }

  return (
    <Container>
      <Text> Welcome to YatzyRoom</Text>
      <Chat></Chat>
      <JoinPrivateYatzyRoom></JoinPrivateYatzyRoom>
      <StyledButton onClick ={playYatzyClicked}><Text>Play YatzyHatsiMatsi</Text></StyledButton>
    </Container>
  )
}


export default YatzyRoom