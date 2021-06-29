import React, { useState } from 'react'
import { InitializeUser } from '../reducers/userReducer'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

// import { InitializeUser } from '../reducers/userReducer'


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
    <div>
      <h2>log in to application</h2>

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

export default Login