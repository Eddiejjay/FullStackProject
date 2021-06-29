import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import userService from '../services/userService'

// import { InitializeUser } from '../reducers/userReducer'


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
          <input
            id = 'username'
            type= "text"
            valupdateue = {username}
            name = "Username"
            onChange = {(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
    password
          <input
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