import playerService from '../services/playerService'

export const initializePlayers = () => {
  return async dispatch => {
    const players = await playerService.getAll()
    dispatch ( {
      type: 'INITPLAYERS',
      players : players

    })}}
const pointsReducer = (state  = [], action) => {
  switch (action.type)
  {case 'INITPLAYERS':
    return state = action.players
  default:
    return state
  }
}
export default pointsReducer