import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

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
// useStaten tarkoitus löytää oikea cell jota muutettu ja sen perusteella määritellä kenelle laitetut pisteet menevät ja mihin kohtaan
// tarvitsemme Combination kohdasta id:n joka kertoo mihin kohtaan pisteet menevät esim "ykköset"
// Lisäksi tarvitsemme tiedon pelaajasta jolle pisteet laitetaan esim "id jorma"
// tämän tiedon perusteella pisteet dispatchataan storeen
// ensin etsitään player jolle pisteet tulee playerid === id Jonka jälkeen etsitään oikea kohta Combination === Combination.id

  //MITEN OIKEA KOHTA LÖYDETÄÄN?
  //SE INPUT JOKA SUBMITOIDAAN SISÄLTÄÄ TIEDOISSAAN COMBINATIONIN JA PLAYERIN? NÄIN PÄÄSEME KÄSISKI TIETOON MIHIN PISTEET TALLENNETAAN

  // const [pointsToRegister, setPointsToRegister] = useState([])

  // Tarvitaan Reduxiin pisteStore, jossa jokaisella pelaajalla on oma pisteenlasku.

  // const points = [
  //   {
  //     player:'Jorma',
  //     points: { Ykköset:2, Kakkoset: 8, Kolmoset: 6, Neloset: 12, Vitoet:10,
  //       Kutoset:18, Välisumma : 55 , Pari: 4, Kaksiparia :20, Kolmesamaa: 6, Neljäsamaa: 8, Pikkusuora: 15,
  //       Isosuora:20, Täyskäsi:25, Sattuma:3, Yatzy:30, Pisteet:250

  //     } },
  //   {
  //     player:'Kalle',
  //     points: { Ykköset:2, Kakkoset: 8, Kolmoset: 6, Neloset: 12, Vitoet:10,
  //       Kutoset:18, Välisumma:55 , Pari: 4, Kaksiparia :20, Kolmesamaa: 6, Neljäsamaa: 8, Pikkusuora: 15,
  //       Isosuora:20, Täyskäsi:25, Sattuma:3, Yatzy:30, Pisteet:250

  //     } },{
  //     player:'Kyösti',
  //     points: { Ykköset:2, Kakkoset: 8, Kolmoset: 6, Neloset: 12, Vitoet:10,
  //       Kutoset:18, Välisumma: 55 , Pari: 4, Kaksiparia :20, Kolmesamaa: 6, Neljäsamaa: 8, Pikkusuora: 15,
  //       Isosuora:20, Täyskäsi:25, Sattuma:3, Yatzy:30, Pisteet:250

  //     } }


  // ]

  const properties =
    ['Ykköset', 'Kakkoset', 'Kolmoset', 'Neloset', 'Vitoet',
      'Kutoset', 'Välisumma', 'Pari', 'Kaksi paria', 'Kolme samaa', 'Neljä samaa', 'Pikku suora',
      'Iso suora', 'Täyskäsi', 'Sattuma', 'Yatzy', 'Pisteet']

  const players = ['Keijo', 'Kalevi', 'Jorma']

  // const playersFromStore = useSelector(state => state)




  // const inputChange = (event) => {
  //   event.preventDefault()
  //   const arr = event.target.name.split(',')
  //   setPointsToRegister(arr)
  //   console.log('statesta',pointsToRegister, typeof pointsToRegister)
  //   return (
  //     console.log(pointsToRegister)
  //   )

  // }

  const allPoints = useSelector(state => state)
  console.log('allpoints in', allPoints)

  return (
    <div>
      <StyledTable>
        <tbody><tr><td></td>{players.map(player => <td key={player}>{player}</td>)}</tr></tbody>

        <StyledRow>
          <Combination>{properties[0]}</Combination>
          {allPoints.map(points => points.points.ykkoset === 0 ?<StyledInput/> :<StyledCell name = {points.player} key = {points.player}> {points.points.ykkoset} </StyledCell>)}
        </StyledRow>
        <StyledRow>
          <Combination>{properties[1]}</Combination>
          {allPoints.map(points => points.points.kakkoset === 0 ?<StyledInput/> :<StyledCell name = {points.player} key = {points.player}> {points.points.kakkoset} </StyledCell>)}
        </StyledRow>
        <StyledRow>
          <Combination>{properties[2]}</Combination>
          {allPoints.map(points => points.points.kolmoset === 0 ?<StyledInput/> :<StyledCell name = {points.player} key = {points.player}> {points.points.kolmoset} </StyledCell>)}
        </StyledRow>
        <StyledRow>
          <Combination>{properties[16]}</Combination>
          {allPoints.map(points => <StyledCell name = {points.player} key = {points.player}> {points.points.pisteet} </StyledCell>)}
        </StyledRow>

        {/*PISTEIDEN YHTEEN LASKUSSA VOIT HYÖDYNTÄÄ METODIA JOKA MUUTTAA OBJECTIN ARVOT LISAKSI
       Object.values() näin saat laskettua pisteet esiumn reducella ja siutten dispatchaat pisteisiin*/}


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



      </StyledTable>

      <ReadyButton>Ready </ReadyButton>
    </div>

  )
}


export default YatzyTable

