import pointService from '../services/pointService'

export const initializePoints = () => {
  return async dispatch => {
    const points = await pointService.getAll()
    dispatch ( {
      type: 'INITPOINTS',
      points : points

    })}}


export const addTurnsPoints = ( id ) => {
  return {
    type: 'ADDTURNSPOINTS',
    id : id
  }
}


const pointsReducer = (state  = [], action) => {
  switch (action.type)
  {case 'INITPOINTS':
    return state = action.points
  case  'ADDTURNSPOINTS':
    // eslint-disable-next-line no-case-declarations
    return state
  default:
    return state
  }
}
export default pointsReducer