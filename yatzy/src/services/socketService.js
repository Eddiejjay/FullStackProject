import { io } from 'socket.io-client'


export const socket = io('http://localhost:3003')

export const addOnlineUserSocket = (username) => {
  socket.emit('add-online-user', username)
  console.log('socketsrvicestaä added ', username)
}


export default { addOnlineUserSocket }