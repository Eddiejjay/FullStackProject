import React, { useEffect } from 'react'
import YatzyTable from './components/YatzyTable'
import { useDispatch } from 'react-redux'
import { initializePoints }  from './reducers/pointsReducer'
import Dices from './components/Dices'




const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializePoints())

  }, [dispatch])



  return (
    <div>
      <h1>Yatzy</h1>
      <Dices></Dices>
      <YatzyTable></YatzyTable>
    </div>
  )

}

export default App