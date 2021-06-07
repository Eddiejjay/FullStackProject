import React from 'react'
import Cell from './Cell'
import styled from 'styled-components'
import Row from './Row'

const YatzyTable = () => {

  const properties =
    ['Ykköset', 'Kakkoset', 'Kolmoset', 'Neloset', 'Vitoet',
      'Kutoset', 'Välisumma', 'Pari', 'Kaksi paria', 'Kolme samaa', 'Neljä samaa', 'Pikku suora',
      'Iso suora', 'Täyskäsi', 'Sattuma', 'Yatzy', 'Pisteet']

  const ykkoset = () => 'Ykköset'

  const StyledTable = styled.table `
    border-style: solid;

    `
  const Wanted = styled.td `
    border: dotted;`


  return (
    <StyledTable>
      <tr>Yatzy  <td>Player 1</td> <td>Player 2</td> <td>Player 3</td> <td>Player 4</td> <td>Player 5</td>
      </tr>
      {properties.map(property =>  <Row key = {property} ykkoset ={property}></Row>)}
      <tr><Wanted>Ykköset</Wanted> <Cell></Cell> <Cell></Cell><Cell></Cell> <Cell></Cell> <Cell></Cell></tr>
      <Row ykkoset = {ykkoset}></Row>
      <Row ykkoset = {properties}></Row>
      <Row ykkoset = {ykkoset}></Row>
      <tr><Wanted>Kolmoset</Wanted></tr>
      <tr><Wanted>Neloset</Wanted></tr>
      <tr><Wanted>Vitoset</Wanted></tr>
      <tr><Wanted>Kutoset</Wanted></tr>
      <tr><Wanted>Välisumma</Wanted></tr>
      <tr><Wanted>Pari</Wanted></tr>
      <tr><Wanted>Kaksi paria</Wanted></tr>
      <tr><Wanted>Kolme samaa</Wanted></tr>
      <tr><Wanted>Neljä samaa</Wanted></tr>
      <tr><Wanted>Pikku suora</Wanted></tr>
      <tr><Wanted>Iso suora</Wanted></tr>
      <tr><Wanted>Täyskäsi</Wanted></tr>
      <tr><Wanted>Sattuma</Wanted></tr>
      <tr><Wanted>Yatzy</Wanted></tr>
      <tr><Wanted>Pisteet</Wanted></tr>





    </StyledTable>


  )
}


export default YatzyTable