import React, { useState } from 'react'
import { InitializeUser } from '../reducers/userReducer'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { socket } from '../services/socketService'
import { StyledInput, Text, StyledButton } from './StyledComponents'


const LoginCointainer = styled.div`
padding:100px;

`

const Login= () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const loginHandler = async (event) => {
    event.preventDefault()

    const credentials = {
      username : username,
      password : password
    }
    console.log(credentials)
    const loggedInUser = await dispatch(InitializeUser(credentials))
    console.log('loggedinuser = ', loggedInUser)
    history.push('/yatzyroom')

    socket.emit('joined-yatzyroom', credentials.username)

  }

  return (
    <LoginCointainer>
      <Text>Stop wondering, log in and roll it! </Text>

      <form onSubmit = {loginHandler}>
        <div>
          <Text>Username</Text>
          <StyledInput
            id = 'username'
            type= "text"
            value = {username}
            name = "Username"
            onChange = {(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <Text>Password</Text>
          <StyledInput
            id = 'password'
            type= "text"
            value = {password}
            name = "Password"
            onChange = {
              ({ target }) => setPassword(target.value)}

          />
        </div>

        <StyledButton id = "login-button" type = "submit" > <Text>Log in</Text></StyledButton>

      </form>
    </LoginCointainer>
  )
}

export default Login