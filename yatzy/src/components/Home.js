import React from 'react'
import {
  useHistory
} from 'react-router-dom'
import styled from 'styled-components'
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
color:green;
   
`

  return (

    <HomeContainer>
      <button onClick = {clicked}>Login</button>
      <button onClick = {clicked2}>Create user</button>
    </HomeContainer>
  )
}


export default Home