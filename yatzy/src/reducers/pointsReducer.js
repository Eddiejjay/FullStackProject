import pointService from '../services/pointService'
import playerService from '../services/playerService'

export const initializePoints = () => {
  return async dispatch => {
    const players = await playerService.getAll()
    console.log('players reducerista ', players)
    await players.map(player => pointService.postPoints(player))
    const points = await pointService.getAll()
    console.log('pointsist reducerista', points)
    dispatch ( {
      type: 'INITPOINTS',
      points : points

    })}}



// export const initializePoints = () => {
//   return async dispatch => {
//     const points = await pointService.getAll()
//     dispatch ( {
//       type: 'INITPOINTS',
//       points : points

//     })}}


export const addTurnsPoints = ( player, combination,points) => {
  return {
    type: 'ADDTURNSPOINTS',
    player: player,
    combination : combination,
    points: points
  }
}


const pointsReducer = (state  = [], action) => {
  switch (action.type)
  {case 'INITPOINTS':
    return state = action.points
  case  'ADDTURNSPOINTS':
    // eslint-disable-next-line no-case-declarations
    const serverObject = state.find(points => points.player === action.player)
    // eslint-disable-next-line no-case-declarations
    const pointsOfOnePlayer = serverObject.points
    // eslint-disable-next-line no-case-declarations
    const combination = action.combination
    // eslint-disable-next-line no-case-declarations
    //alla objektissa muokataan action.combination mukaista kenttää
    pointsOfOnePlayer[combination]=action.points
    // eslint-disable-next-line no-case-declarations
    const updatedServerObject = { ...serverObject, points:{ ...pointsOfOnePlayer } }
    //muuttaa vaan ykkoset TÄHÄN KEKSITTÄVÄ VIELÄ miten saa z
    return state = state.map(object => object.player !== serverObject.player ?object :updatedServerObject)
  default:
    return state
  }
}
export default pointsReducer

// const blogi = state.find(b => b.id === action.id)
// const updatedBlogi = { ...blogi, likes:blogi.likes +1 }
// return state = state.map(b => b.id !== updatedBlogi.id ? b :updatedBlogi)