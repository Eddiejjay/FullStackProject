import axios from 'axios'


const baseUrl = 'http://localhost:3003/PlayersAndPoints'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const deleteAll = async () => {
  const response = await axios.delete(baseUrl/1)
  console.log('deleteAll ', response.data)
  return response.data
}




const postPoints = async (player) => {

  const pointObject = {
    'points' : {
      'ykkoset': 1,
      'kakkoset': 2,
      'kolmoset': 0,
      'neloset': 0,
      'vitoset': 0,
      'kutoset': 0,
      'valisumma': 0,
      'bonus':0,
      'pari': 0,
      'kaksiparia': 0,
      'kolmesamaa': 0,
      'neljasamaa': 0,
      'pikkusuora' : 0,
      'isosuora': 0,
      'tayskasi': 0,
      'sattuma': 0,
      'yatzy' : 0,
      'pisteet': 0
    } ,
    'player': player

  }

  const response = await axios.post(baseUrl , pointObject)
  console.log('response dataaa', response.data)

}


export default { getAll, postPoints, deleteAll }