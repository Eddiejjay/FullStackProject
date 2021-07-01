import React, { useState } from 'react'
import { InitializeUser } from '../reducers/userReducer'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

// import { InitializeUser } from '../reducers/userReducer'

const UserInput = styled.input `

padding:6px;
font-size: 25px;
border-width: 0px;
box-shadow: 0px 0px 5px rgba(66,66,66,.75);
text-shadow: 0px 0px 5px rgba(66,66,66,.75);
   background: transparent;
   border: 5px groove rgba(20,20,20,0.17);
   
`
const LoginCointainer = styled.div`
padding:100px;

`
const Text = styled.div `
  padding: 12px;
  color:white;
  font-family: "Comic Sans MS", cursive, sans-serif;
 font-size: 25px;
 letter-spacing: 2px;
 word-spacing: 2px;
 
 font-weight: 700;
 text-decoration: none solid rgb(68, 68, 68);
 font-style: italic;
 font-variant: small-caps;
 text-transform: capitalize;`

const StyledButton = styled.button `
margin: 10px;
padding:0x;
background: transparent;
border: 5px groove rgba(20,20,20,0.17);

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
    await dispatch(InitializeUser(credentials))
    history.push('/yatzyroom')
  }

  return (
    <LoginCointainer>
      <h2><Text>Stop wondering, log in and roll it! </Text></h2>

      <form onSubmit = {loginHandler}>
        <div>
          <Text>Username</Text>
          <UserInput
            id = 'username'
            type= "text"
            valupdateue = {username}
            name = "Username"
            onChange = {(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <Text>Password</Text>
          <UserInput
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