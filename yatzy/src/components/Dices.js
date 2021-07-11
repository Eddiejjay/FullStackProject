import React from 'react'
import Dice from 'react-dice-roll'
import styled from 'styled-components'

const Dices = () => {


  const StyledDices = styled.div`
  height:200px;
  display:flex;
  align-content: stretch;
  justify-content: center;
  gap: 3%;
`
  const rollDice = () => {
    const press =  new KeyboardEvent('keypress',{ 'key':'Enter' })
    console.log('press',press)
  }
  return (

    <StyledDices>

      <Dice size={100}></Dice>
      <Dice triggers= {['Enter','click', rollDice() ]} onRoll={(value) => console.log(value)} />
      <Dice size={100}></Dice>
      <Dice size={100}></Dice>
      <Dice size={100}></Dice>
      <Dice size={100}></Dice>
      <button onClick = {rollDice}>Roll dice</button>
    </StyledDices>
  )
}


export default Dices