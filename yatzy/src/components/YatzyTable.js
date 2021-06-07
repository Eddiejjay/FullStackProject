import React, { useState }from 'react'
import styled from 'styled-components'

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

  const [pointsToRegister, setPointsToRegister] = useState([])

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

  const players = ['Jorma', 'Kalle', 'Kyösti']

  const inputChange = (event) => {
    event.preventDefault()
    const arr = event.target.name.split(',')
    setPointsToRegister(arr)
    console.log('statesta',pointsToRegister, typeof pointsToRegister)
    return (
      console.log(pointsToRegister)
    )

  }

  return (
    <div>
      <StyledTable>
        <tbody><tr><td></td>{players.map(player => <td key={player}>{player}</td>)}</tr></tbody>
        {properties.map(property =>
          <tbody key={property}>
            <StyledRow key={property}>
              <Combination>{property}</Combination>
              {players.map(player =>
                <StyledCell key ={player}><StyledInput name={[property, player]}onChange={inputChange}/></StyledCell>)}
            </StyledRow>
          </tbody>)}

      </StyledTable>

      <ReadyButton>Ready </ReadyButton>
    </div>

  )
}


export default YatzyTable

