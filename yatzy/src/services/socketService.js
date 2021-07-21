import { io } from 'socket.io-client'


export const socket = io('/')

export const addOnlineUserSocket = (username) => {
  socket.emit('add-online-user', username)
  console.log('socketsrvicestaä added ', username)
}

export const addUserInPrivateYatzyRoom = (username) => {
  socket.emit('add-private-room-user', username)
  console.log('private-user added ', username)
}

export default { addOnlineUserSocket, addUserInPrivateYatzyRoom }