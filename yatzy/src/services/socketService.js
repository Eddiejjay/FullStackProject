
export const addOnlineUserSocket = (socket, username) => {
  socket.emit('add-online-user', username)
  console.log('socketsrvicestaä added ', username)
}

export const addUserInPrivateYatzyRoom = (socket, username) => {
  socket.emit('add-private-room-user', username)
  console.log('private-user added ', username)
}
