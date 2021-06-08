import axios from 'axios'


const baseUrl = 'http://localhost:3001/PlayersAndPoints'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log('perseee', response)
  return response.data
}

export default { getAll }