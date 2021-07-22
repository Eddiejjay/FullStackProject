import React from 'react'
import { StyledLink, NavBarText } from './StyledComponents'
import { useHistory, Link } from 'react-router-dom'
import { storeUser } from '../reducers/userReducer'
import { useDispatch } from 'react-redux'
import { socket } from '../services/socketService'
import { useSelector } from 'react-redux'


const LogOutLink = () => {

  const history = useHistory()
  const dispatch = useDispatch()
  const player = useSelector(state => state.user.username)

  const logOutClicked = async  () => {
    await dispatch(storeUser(null))
    history.push('/')
    console.log('perse logged out')
    socket.emit('player-log-out', player )

  }





  return (


    <StyledLink><Link onClick = {logOutClicked} style={{ textDecoration: 'none' }}  to="/"><NavBarText>Log out</NavBarText></Link></StyledLink>


  )



}



export default LogOutLink