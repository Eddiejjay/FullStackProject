import axios from 'axios'


const baseUrl = 'http://localhost:3001/PlayersAndPoints'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log('perseee', response)
  return response.data
}



const postPoints = async (player) => {

  const pointObject = {
    'points' : {
      'ykkoset': 0,
      'kakkoset': 0,
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


export default { getAll, postPoints }