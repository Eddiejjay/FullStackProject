import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import userService from '../services/userService'
import styled from 'styled-components'

// import { InitializeUser } from '../reducers/userReducer'
const UserInput = styled.input `
padding: 9px;
   font-size: 30px;
   border-width: 7px;
   border-color: #0087c7;
   background-color: #ffffff;
   color: #0c0b0b;
   border-style: double;
   border-radius: 50px;
   box-shadow: 0px 0px 5px rgba(66,66,66,.75);
   
`

const CreateUser = () => {

  const history = useHistory()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const loginHandler = async (event) => {
    event.preventDefault()

    const newUser = {
      username : username,
      password : password
    }
    console.log(newUser)
    await userService.createUser(newUser)
    history.push('/')




  }

  return (
    <div>
      <h2>Create new user</h2>

      <form onSubmit = {loginHandler}>
        <div>
    username
          <UserInput
            id = 'username'
            type= "text"
            valupdateue = {username}
            name = "Username"
            onChange = {(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
    password
          <UserInput
            id = 'password'
            type= "text"
            value = {password}
            name = "Password"
            onChange = {
              ({ target }) => setPassword(target.value)}

          />
        </div>

        <button id = "login-button" type = "submit" >login</button>

      </form>
    </div>
  )
}

export default CreateUser