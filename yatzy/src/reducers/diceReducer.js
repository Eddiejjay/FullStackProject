export const setDice = (val) => {
  return async dispatch => {
    console.log('value reducer', val)
    dispatch ( {
      type: 'DICESET',
      val : val

    })}}

const diceReducer = (state  = null, action) => {
  switch (action.type)
  {case 'DICESET':
    return state = action.val
  default:
    return state
  }
}
export default diceReducer