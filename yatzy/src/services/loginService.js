import axios from 'axios'

const baseurl = 'http://localhost:3003/api/login'

const login = async (credentials) => {
  const response = await axios.post(baseurl, credentials)
  console.log('loginservice response',response)
  return response.data

}


export default { login }