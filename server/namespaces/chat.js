function Svc(socket, io) {
  const chatSvc = Object.freeze({
    joinRoom({ room, user }) {
      return new Promise((resolve, reject) => {
        socket.join(room, () => {
          let type = { type: 'join' }
          const resp = { room, user, type }
          socket.to(room).broadcast.emit('joinedRoom', resp)
          resolve(resp)
        })
      })
    },
    leaveRoom({ room, user }) {
      return new Promise((resolve, reject) => {
        socket.leave(room, () => {
          let type = { type: 'left' }
          const resp = { room, user, type }
          socket.to(room).broadcast.emit('leavedRoom', resp)
          resolve(resp)
        })
      })
    },

    sendMsg({ room, message, user }) {
      return new Promise((resolve, reject) => {
        const resp = {
          room: room,
          message: message,
          user: user
        }
        socket.to(room).broadcast.emit('chatMessage', resp)
        resolve(resp)
      })
    }
  })
  return chatSvc
}

module.exports = {
  Svc
}
