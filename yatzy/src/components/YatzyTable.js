import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addTurnsPoints }  from '../reducers/pointsReducer'

const StyledTable = styled.table `
    border-style: solid;

    `
const Combination = styled.td `
    border: dotted;`

const StyledRow = styled.tr`
      border-bottom: solid;`

const StyledCell = styled.td `
        border-style: solid;
        padding : 5px;
        
        `

const StyledInput = styled.input`
        width:50px;

        `
const ReadyButton = styled.button`
      border-radius: 50%;
      font-size: 20px;
    
    `

const YatzyTable = () => {
  const dispatch = useDispatch()
  // useStaten tarkoitus löytää oikea cell jota muutettu ja sen perusteella määritellä kenelle laitetut pisteet menevät ja mihin kohtaan
  // tarvitsemme Combination kohdasta id:n joka kertoo mihin kohtaan pisteet menevät esim "ykköset"
  // Lisäksi tarvitsemme tiedon pelaajasta jolle pisteet laitetaan esim "id jorma"
  // tämän tiedon perusteella pisteet dispatchataan storeen
  // ensin etsitään player jolle pisteet tulee playerid === id Jonka jälkeen etsitään oikea kohta Combination === Combination.id

  //MITEN OIKEA KOHTA LÖYDETÄÄN?
  //SE INPUT JOKA SUBMITOIDAAN SISÄLTÄÄ TIEDOISSAAN COMBINATIONIN JA PLAYERIN? NÄIN PÄÄSEME KÄSISKI TIETOON MIHIN PISTEET TALLENNETAAN

  const [combinationPlayer, setCombinationPlayer] = useState([])

  const properties =
    [  'ykkoset','kakkoset','kolmoset','neloset','vitoset','kutoset','valisumma','bonus','pari','kaksiparia',
      'kolmesamaa','neljasamaa', 'pikkusuora','isosuora','tayskasi','sattuma','yatzy','pisteet']

  const players = ['Keijo', 'Kalevi', 'Jorma']

  // const playersFromStore = useSelector(state => state)


  const inputChange = (event) => {
    event.preventDefault()
    console.log( event.target.name)
    const arr = event.target.name.split(',')
    arr.push(event.target.value)
    console.log('event target value = ',event.target.value)
    setCombinationPlayer(arr)
  }

  const allPoints = useSelector(state => state)
  console.log('allpoints in', allPoints)

  const readyClicked = () => {
    const playerToAddPoints = combinationPlayer[1]
    const combinationToAddPoints = combinationPlayer[0]
    const pointsToAdd = combinationPlayer[2]
    console.log('omista konstatnteista ', 'playertoaddpoints ', playerToAddPoints, 'combination', combinationToAddPoints, 'pionts tpo add ', pointsToAdd)
    dispatch(addTurnsPoints(playerToAddPoints, combinationToAddPoints, Number(pointsToAdd)))

  }

  const valisummaOnClick = () => {
    allPoints.map(object => dispatch(addTurnsPoints(object.player, 'valisumma', calculateValisumma(object.points))))
    allPoints.map(object => dispatch(addTurnsPoints(object.player, 'bonus', calculateValisumma(object.points) < 63 ? 0: 50)))
  }

  const allPointsOnClick = () => {
    allPoints.map(object => dispatch(addTurnsPoints(object.player, 'pisteet', calculateAllpoints(object.points))))
  }

  const calculateAllpoints = (points) => {
    const pointsArray = Object.values(points)
    console.log('pointsArray', pointsArray)
    const slicedArray = pointsArray.slice(6,15)
    console.log('slicedArray', slicedArray)
    let sum = slicedArray.reduce((a,c) => a + c, 0)
    console.log('pisteet', sum)
    return sum
  }

  const calculateValisumma = (points) => {
    // tämän funktion tarkoitus on ottaa parametriksi yhden pelaajan serverobjektista points objekti
    //1. muuttaa objekti taulukoksi jossa ovat objecktin valuet.
    //2. laskea taulukosta 6 ensimmäistä arvoa ja niiden lopputulos on valisumma
    const pointsArray = Object.values(points)
    console.log('pointsArray', pointsArray)
    const slicedArray = pointsArray.slice(0,6)
    console.log('slicedArray', slicedArray)
    let sum = slicedArray.reduce((a,c) => a + c, 0)
    console.log('valisumma', sum)
    return sum
  }

  return (
    <div>
      <StyledTable>
        <tbody><tr><td></td>{players.map(player => <td key={player}>{player}</td>)}</tr>

          <StyledRow>
            <Combination>{properties[0]}</Combination>
            {allPoints.map(points => points.points.ykkoset === 0 ?<td><StyledInput name={[properties[0], points.player]} onChange={inputChange}/> </td> :<StyledCell name = {points.player} key = {points.player}> {points.points.ykkoset} </StyledCell>)}
          </StyledRow>

          <StyledRow>
            <Combination>{properties[1]}</Combination>
            {allPoints.map(points => points.points.kakkoset === 0 ?<td><StyledInput name={[properties[1], points.player]} onChange={inputChange}/> </td> :<StyledCell name = {points.player} key = {points.player}> {points.points.kakkoset} </StyledCell>)}
          </StyledRow>

          <StyledRow>
            <Combination>{properties[2]}</Combination>
            {allPoints.map(points => points.points.kolmoset === 0 ?<td><StyledInput name={[properties[2], points.player]} onChange={inputChange}/> </td>:<StyledCell name = {points.player} key = {points.player}> {points.points.kolmoset} </StyledCell>)}
          </StyledRow>

          <StyledRow>
            <Combination>{properties[3]}</Combination>
            {allPoints.map(points => points.points.neloset === 0 ?<td><StyledInput name={[properties[3], points.player]} onChange={inputChange}/> </td>:<StyledCell name = {points.player} key = {points.player}> {points.points.neloset} </StyledCell>)}
          </StyledRow>
          <StyledRow>
            <Combination>{properties[4]}</Combination>
            {allPoints.map(points => points.points.vitoset === 0 ?<td><StyledInput name={[properties[4], points.player]} onChange={inputChange}/> </td>:<StyledCell name = {points.player} key = {points.player}> {points.points.vitoset} </StyledCell>)}
          </StyledRow>
          <StyledRow>
            <Combination>{properties[5]}</Combination>
            {allPoints.map(points => points.points.kutoset === 0 ?<td><StyledInput name={[properties[5], points.player]} onChange={inputChange}/></td> :<StyledCell name = {points.player} key = {points.player}> {points.points.kutoset} </StyledCell>)}
          </StyledRow>
          <StyledRow>
            <Combination>{properties[6]}</Combination>
            {allPoints.map(points =>  <StyledCell name = {points.player} key = {points.player}> {points.points.valisumma} </StyledCell>)}
            <button onClick = {valisummaOnClick}>laske</button>
          </StyledRow>

          <StyledRow>
            <Combination>{properties[7]}</Combination>
            {allPoints.map(points => <StyledCell name = {points.player} key = {points.player}> {points.points.bonus} </StyledCell>)}
          </StyledRow>
          {//mietin miten saat dipatchattyä bonus pisteet serverille, siin' vaiheessa kun välisymma lasketaan Olisiko valisummaonclick() =?
          }

          <StyledRow>
            <Combination>{properties[8]}</Combination>
            {allPoints.map(points => points.points.pari === 0 ?<td><StyledInput name={[properties[8], points.player]} onChange={inputChange}/> </td>:<StyledCell name = {points.player} key = {points.player}> {points.points.pari} </StyledCell>)}
          </StyledRow>
          <StyledRow>
            <Combination>{properties[9]}</Combination>
            {allPoints.map(points => points.points.kaksiparia === 0 ?<td><StyledInput name={[properties[9], points.player]} onChange={inputChange}/> </td>:<StyledCell name = {points.player} key = {points.player}> {points.points.kaksiparia} </StyledCell>)}
          </StyledRow>
          <StyledRow>
            <Combination>{properties[10]}</Combination>
            {allPoints.map(points => points.points.kolmesamaa === 0 ?<td><StyledInput name={[properties[10], points.player]} onChange={inputChange}/> </td>:<StyledCell name = {points.player} key = {points.player}> {points.points.kolmesamaa} </StyledCell>)}
          </StyledRow>
          <StyledRow>
            <Combination>{properties[11]}</Combination>
            {allPoints.map(points => points.points.neljasamaa === 0 ?<td><StyledInput name={[properties[11], points.player]} onChange={inputChange}/> </td>:<StyledCell name = {points.player} key = {points.player}> {points.points.neljasamaa} </StyledCell>)}
          </StyledRow>
          <StyledRow>
            <Combination>{properties[12]}</Combination>
            {allPoints.map(points => points.points.pikkusuora === 0 ?<td><StyledInput name={[properties[12], points.player]} onChange={inputChange}/> </td>:<StyledCell name = {points.player} key = {points.player}> {points.points.pikkusuora} </StyledCell>)}
          </StyledRow>
          <StyledRow>
            <Combination>{properties[13]}</Combination>
            {allPoints.map(points => points.points.isosuora === 0 ?<td><StyledInput name={[properties[13], points.player]} onChange={inputChange}/> </td>:<StyledCell name = {points.player} key = {points.player}> {points.points.isosuora} </StyledCell>)}
          </StyledRow>
          <StyledRow>
            <Combination>{properties[14]}</Combination>
            {allPoints.map(points => points.points.tayskasi === 0 ?<td><StyledInput name={[properties[14], points.player]} onChange={inputChange}/> </td>:<StyledCell name = {points.player} key = {points.player}> {points.points.tayskasi} </StyledCell>)}
          </StyledRow>
          <StyledRow>
            <Combination>{properties[15]}</Combination>
            {allPoints.map(points => points.points.sattuma === 0 ?<td><StyledInput name={[properties[15], points.player]} onChange={inputChange}/> </td>:<StyledCell name = {points.player} key = {points.player}> {points.points.sattuma} </StyledCell>)}
          </StyledRow>
          <StyledRow>
            <Combination>{properties[16]}</Combination>
            {allPoints.map(points => points.points.yatzy === 0 ?<td><StyledInput name={[properties[16], points.player]} onChange={inputChange}/> </td>:<StyledCell name = {points.player} key = {points.player}> {points.points.yatzy} </StyledCell>)}
          </StyledRow>



          <StyledRow>
            <Combination>{properties[17]}</Combination>
            {allPoints.map(points => <StyledCell name = {points.player} key = {points.player}> {points.points.pisteet} </StyledCell>)}
            <button onClick = {allPointsOnClick}>laske</button>
          </StyledRow>

        </tbody>
      </StyledTable>

      <ReadyButton onClick = {readyClicked}>Ready </ReadyButton>
    </div>

  )
}


export default YatzyTable


{/* {properties.map(property =>
          <tbody key={property}>
            <StyledRow key={property}>
              <Combination>{property}</Combinatdion>
              {players.map(player =>
                allPoints.map(points =>
                  points.player === player && points.points.ykkoset === 0 ?
                    <StyledCell key ={player}><StyledInput name={[property, player]}onChange={inputChange}/></StyledCell> : <StyledCell/>
                )
              )}

            </StyledRow>
          </tbody>)} */}

{/*PISTEIDEN YHTEEN LASKUSSA VOIT HYÖDYNTÄÄ METODIA JOKA MUUTTAA OBJECTIN ARVOT LISAKSI
       Object.values() näin saat laskettua pisteet esiumn reducella ja siutten dispatchaat pisteisiin */}


//  const inputChange = (event) => {
//   event.preventDefault()
//   const arr = event.target.name.split(',')
//   setPointsToRegister(arr)
//   console.log('statesta',pointsToRegister, typeof pointsToRegister)
//   return (
//     console.log(pointsToRegister)
//   )

// }