import React from 'react'
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'


const Dices2 = () => {

  const rollAll1 = () => {

  }

  const rollDoneCallback = (num) => {
    console.log(`You rolled a ${num}`)
  }

  return (
    <div>
      <ReactDice
        numDice={1}
        rollDone={rollDoneCallback}
      />
      <button onClick = {rollAll1}> jee</button>
    </div>

  )

}
export default Dices2