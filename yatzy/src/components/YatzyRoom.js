import React from 'react'
import { useHistory } from 'react-router-dom'
import Chat from './Chat'


const YatzyRoom = () => {
  const history = useHistory()
  const playYatzyClicked = () => {

    history.push('/yatzy')



  }

  return (
    <div>
      <h1> Welcome to YatzyRoom</h1>
      <button onClick ={playYatzyClicked}>Play YatzyHatsiMatsi</button>
      <Chat></Chat>
    </div>
  )
}


export default YatzyRoom