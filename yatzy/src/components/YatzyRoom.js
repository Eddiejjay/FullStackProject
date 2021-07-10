import React from 'react'
import { useHistory } from 'react-router-dom'
import Chat from './Chat'
import JoinPrivateYatzyRoom from './JoinPrivateYatzyRoom'



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
      <JoinPrivateYatzyRoom></JoinPrivateYatzyRoom>
    </div>
  )
}


export default YatzyRoom