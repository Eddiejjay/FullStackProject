import React from 'react'
import styled from 'styled-components'
import Cell from './Cell'


const Row = ({ ykkoset }) => {
  //Tänne Row ottamaan propsina käyttäjän valitsema pelaajien määrä, jolloin rivin leveys voidaan säätää pelaajien mukaan
  const cells = [<Cell key ={1}></Cell>,<Cell key ={2}></Cell>,<Cell key ={3}></Cell>,<Cell key ={4}></Cell>,<Cell key ={5}></Cell>]

  const Wanted = styled.td `
  border: dotted;`
  const StyledRow = styled.tr`
    border-bottom: solid;

    `


  return (
    <StyledRow> <Wanted>{ykkoset}</Wanted>{cells.map(cell => cell)}</StyledRow>


  )
}

export default Row