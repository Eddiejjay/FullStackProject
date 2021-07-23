// import { io } from 'socket.io-client'
// import  { useEffect } from 'react'

export const addOnlineUserSocket = (socket, username) => {
  socket.emit('add-online-user', username)
  console.log('socketsrvicestaä added ', username)
}

export const addUserInPrivateYatzyRoom = (socket, username) => {
  socket.emit('add-private-room-user', username)
  console.log('private-user added ', username)
}


// export  let socket
// export const SocketService = () => {
//   const endPoint = 'http://localhost:3003'

//   useEffect(() => {
//     socket = io(endPoint)
//   }, [endPoint])

// }

// export const socket = io('http://localhost:3003')
