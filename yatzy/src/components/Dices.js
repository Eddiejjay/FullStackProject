import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import Dice from 'react-dice-roll'
import styled from 'styled-components'
import { socket } from '../services/socketService'
import { setDice } from '../reducers/diceReducer'


const Dices = () => {

  const dispatch = useDispatch()
  // const [trueFalse,setTrueFalse] = useState(true)




  const StyledDices = styled.div`
  height:200px;
  display:flex;
  align-content: stretch;
  justify-content: center;
  gap: 3%;
`
  const rollDice = () => {
    const press =  new KeyboardEvent('keypress',{ 'key':'Enter' })
    dispatchEvent(press)
    console.log('press',press)
  }
  // const toggle = () => {
  //   setTrueFalse(!trueFalse)
  // }

  useEffect(() => {
    // toggle()
  },[])


  let dice = useSelector(state => state.dice)


  const diceValueToServer = (value) => {
    if(dice === null) {
      console.log('dice on ennen ehdollista renderöointiä', dice )
      socket.emit('dice-value', value)
      console.log('diceval to server ', value)
    }

  }

  socket.on('dice-value-back-form-server',(value) => {
    console.log('dice value back from server  CLIENT', value)
    dispatch(setDice(value))
  })

  // const diceElement = (dice) => {

  //   return (
  //     <div> <Dice triggers= {['Enter','click', rollDice()]} onRoll={(value) =>  diceValueToServer(value)}/>
  //       <h1>diceValue = {dice}</h1>

  //     </div>)

  // }

  //   return (
  //     <div> <Dice key="noppa" triggers= {['Enter','click', rollDice()]} onRoll={(value) =>  diceValueToServer(value)} cheatValue={dice}/>
  //       <h1>diceValue = {dice}</h1>

  //     </div>)

  // }


  return (
    <StyledDices>
      <Dice triggers= {['Enter','click', rollDice()]} onRoll={(value) => diceValueToServer(value)} cheatValue={dice}/>

      <h1>{dice} </h1>
      <Dice size={100}></Dice>
      <Dice cheatValue = {0} size={100}></Dice>
      <Dice size={100}></Dice>
      <Dice size={100}></Dice>
      <Dice size={100}></Dice>
      <button onClick = {rollDice}>Roll dice</button>
    </StyledDices>
  )
}


export default Dices

//1. renderöointi, renderöi
// state on  ''eli -> OnRoll(value) => DicevalueTOserver(value)
//dicevaluetoserver Toimii seuraavasti,
//a. client: socket.emit('dice-value', value)
//b. server: socket.on('dice-value', (value) => { socket.broadcast.emit('dice-value-back-form-server', value) // eli servu lähettää valuen takaisin kaikille muille paitsi lähettäjälle.
//c. client:  setDice(value) -
// d. client: jos vastaan ottaa setdicen, renderöi dice komponentin sen mukaan
