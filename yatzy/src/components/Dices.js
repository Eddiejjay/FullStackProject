import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'


import Dice from 'react-dice-roll'
import styled from 'styled-components'
import { socket } from '../services/socketService'
// import { setDice } from '../reducers/diceReducer'


const Dices = () => {

  // const dispatch = useDispatch()
  // const [trueFalse,setTrueFalse] = useState(true)
  const diceRef = useRef()
  const diceRef1 = useRef()
  const diceRef2 = useRef()
  const diceRef3 = useRef()
  const diceRef4 = useRef()
  const diceRef5 = useRef()

  const turn = useSelector(state => state.turn.player)
  const user = useSelector(state => state.user.username)


  const StyledDices = styled.div`
  height:200px;
  display:flex;
  align-content: stretch;
  justify-content: center;
  gap: 3%;
`
  // const rollDice = () => {
  //   const press =  new KeyboardEvent('keypress',{ 'key':'Enter' })
  //   dispatchEvent(press)
  //   console.log('press',press)
  // }
  // const toggle = () => {
  //   setTrueFalse(!trueFalse)
  // }

  useEffect(() => {
    // toggle()
  },[])


  // let dice = useSelector(state => state.dice)


  const diceValueToServer = (value) => {
    if (turn === user) {
      socket.emit('dice-value', value)
      console.log('diceval to server ', value)
    }}

  socket.on('dice-value-back-form-server',(value) => {
    console.log('dice value back from server  CLIENT', value)
    // dispatch(setDice(value))
    diceRef.current.rollDice(value)
    diceRef.current.value= 1
    console.log(diceRef)
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
      <Dice ref ={diceRef} onRoll={(value) => diceValueToServer(value)}/>

      <Dice ref ={diceRef1} size={100} onRoll={(value) => diceValueToServer(value)}></Dice>
      <Dice ref ={diceRef2} size={100} onRoll={(value) => diceValueToServer(value)}></Dice>
      <Dice ref ={diceRef3} size={100} onRoll={(value) => diceValueToServer(value)}></Dice>
      <Dice ref ={diceRef4} size={100} onRoll={(value) => diceValueToServer(value)}></Dice>
      <Dice ref ={diceRef5} size={100} onRoll={(value) => diceValueToServer(value)}></Dice>
      {/* <button onClick = {rollDice}>Roll dice</button> */}
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
