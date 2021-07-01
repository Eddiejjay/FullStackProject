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

  return (

    <StyledDices>

      <Dice size={100}></Dice>
      <Dice size={100}></Dice>
      <Dice size={100}></Dice>
      <Dice size={100}></Dice>
      <Dice size={100}></Dice>
    </StyledDices>
  )
}


export default Dices