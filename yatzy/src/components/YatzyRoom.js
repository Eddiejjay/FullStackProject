import React from 'react'
import { useHistory } from 'react-router-dom'


const YatzyRoom = () => {
  const history = useHistory()
  const playYatzyClicked = () => {

    history.push('/yatzy')



  }

  return (
    <div>
      <h1> Welcome to YatzyRoom</h1>
      <button onClick ={playYatzyClicked}>Play YatzyHatsiMatsi</button>
    </div>
  )
}


export default YatzyRoom