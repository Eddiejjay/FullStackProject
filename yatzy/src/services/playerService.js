import axios from 'axios'


const baseUrl = 'http://localhost:3001/Players'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log('perseee', response.data)
  return response.data
}

export default { getAll }