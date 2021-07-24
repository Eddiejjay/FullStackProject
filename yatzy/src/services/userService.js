import axios from 'axios'

// const loginUrl = 'http://localhost:3003/api/login'
const loginUrl = '/api/login'
// const createUrl = 'http://localhost:3003/api/users'
const createUrl = '/api/users'

const login = async (credentials) => {
  const response = await axios.post(loginUrl, credentials)
  console.log('loginservice response',response)
  return response.data
}

const createUser = async (user) => {
  const response = await axios.post(createUrl, user)
  return response.data
}

export default { login, createUser }