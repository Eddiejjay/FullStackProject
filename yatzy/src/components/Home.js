import React from 'react'
// import backgroundLogo from '../images/yazyhazymazylogo.png'
import {
  useHistory
} from 'react-router-dom'
import styled from 'styled-components'
import { StyledButton, Text } from './StyledComponents'
// import backgroundHome from '../images/background-home.jpg'
// import { useDispatch } from 'react-redux'
// import { initializePoints } from '../reducers/pointsReducer'
// import pointService from '../services/pointService'

// const StyledHome = styled.div `
//  background: url(${backgroundHome});
// background-size: cover;


// `


const Home = () => {
//   const dispatch = useDispatch()
  const history = useHistory()
  //   const players = useSelector(state => state.players)

  const clicked = () => {
    // dispatch(initializePoints())
    history.push('/login')
  }
  const clicked2 = () => {
    // dispatch(initializePoints())
    history.push('/create')
  }
  const HomeContainer = styled.div`
  height:1400px;
  margin: 300px;
  flex-direction: column;
  align-items: center;
  text-align: center;
   background-size: cover;
  
  `
  return (
    <HomeContainer>
      <Text> Hello friend, welcome to this multiplayer yatzyhazymazy</Text>
      <Text> Please log in or create a new user</Text>
      <StyledButton onClick = {clicked}><Text>Login</Text></StyledButton>
      <StyledButton onClick = {clicked2}><Text>Create user</Text></StyledButton>
    </HomeContainer>
  )
}


export default Home