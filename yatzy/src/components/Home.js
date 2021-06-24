import React from 'react'
import {
  useHistory
} from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { initializePoints } from '../reducers/pointsReducer'
// import pointService from '../services/pointService'



const Home = () => {
//   const dispatch = useDispatch()
  const history = useHistory()
  //   const players = useSelector(state => state.players)

  const clicked = () => {
    // dispatch(initializePoints())
    history.push('/yatzy')
  }

  return (

    <div>
      <button onClick = {clicked}>to Yatzy</button>
    </div>
  )
}


export default Home