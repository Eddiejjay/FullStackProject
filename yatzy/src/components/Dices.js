import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'


import Dice from 'react-dice-roll'
import styled from 'styled-components'
// import { setDice } from '../reducers/diceReducer'


const Dices = () => {
  const socket = useSelector(state => state.socket)

  // const dispatch = useDispatch()
  // const [trueFalse,setTrueFalse] = useState(true)
  // const diceRef = useRef()
  const diceRef1 = useRef()
  const diceRef2 = useRef()
  const diceRef3 = useRef()
  const diceRef4 = useRef()
  const diceRef5 = useRef()

  const diceRefMap = {
    // dice: diceRef,
    dice1: diceRef1,
    dice2: diceRef2,
    dice3: diceRef3,
    dice4: diceRef4,
    dice5: diceRef5,
  }


  const turn = useSelector(state => state.turn.player)
  const user = useSelector(state => state.user.username)


  const StyledDices = styled.div`
  height:200px;
  display:flex;
  padding: 10px;
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
  const jorma = ''

  useEffect(() => {
    socket.on('dice-value-back-form-server',(value, diceNro) => {
      console.log('dice value back from server  CLIENT', value)
      // dispatch(setDice(value))
      // diceRef.current.addEventListener('click', diceClick)
      diceRefMap[diceNro].current.rollDice(value)
      console.log('dicerefmapista',diceRefMap[diceNro])
    })
  },[jorma])


  // let dice = useSelector(state => state.dice)



  const diceValueToServer = (value, diceNro) => {
    if (turn === user) {
      socket.emit('dice-value', value, diceNro)
      console.log('diceval to server ', value, diceNro)
    }}

  // socket.on('dice-value-back-form-server',(value, diceNro) => {
  //   console.log('dice value back from server  CLIENT', value)
  //   // dispatch(setDice(value))
  //   // diceRef.current.addEventListener('click', diceClick)
  //   diceRefMap[diceNro].current.rollDice(value)
  //   console.log('dicerefmapista',diceRefMap[diceNro])
  // })

  // const diceClick = (event) => {
  //   console.log('eventtiä ja targettia', event.target)



  // }


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

      {/* <Dice  ref ={diceRef} size={100} onRoll={(value ) => diceValueToServer(value, 'dice')}></Dice> */}

      <Dice ref ={diceRef1} size={100} onRoll={(value) => diceValueToServer(value, 'dice1')}></Dice>
      <Dice ref ={diceRef2} size={100} onRoll={(value) => diceValueToServer(value, 'dice2')}></Dice>
      <Dice ref ={diceRef3} size={100} onRoll={(value) => diceValueToServer(value, 'dice3')}></Dice>
      <Dice ref ={diceRef4} size={100} onRoll={(value) => diceValueToServer(value, 'dice4')}></Dice>
      <Dice ref ={diceRef5} size={100} onRoll={(value) => diceValueToServer(value, 'dice5')}></Dice>
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
