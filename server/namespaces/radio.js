const { Howl, Howler } = require('howler')

let roomPlaylist = {}
let currentPlay = {
  test: {
    audio: 'http',
    artist: 'John',
    title: 'My Song',
    album: 'My Album',
    duration: 360,
    display: 'http',
    cover: 'John',
    currentTime: 0,
    currentPlay: true,
  },
}

function playStart(room, index) {
  console.log('current', currentPlay[room])
  if (currentPlay[room].currentPlay) {
    if (currentPlay[room].currentTime < currentPlay[room].duration) {
      currentPlay[room].currentTime++
      setTimeout(playStart, 1000, room, index)
    } else {
      console.log('new', roomPlaylist[room].length)
      let newIndex = index + 1
      if (index == roomPlaylist[room].length - 1) {
        newIndex = 0
      }
      // playNow(room, newIndex)
      setTimeout(playNow, 5000, room, newIndex)
    }
  }
}

function playNow(room, index) {
  console.log('here in PlayNow', room)

  console.log('playnow', currentPlay[room])
  if (currentPlay[room]) {
    if (currentPlay[room].currentPlay) {
      currentPlay[room] = roomPlaylist[room][index]
      currentPlay[room].currentTime = 0
      currentPlay[room].currentPlay = true
      currentPlay[room].index = index
    } else {
      currentPlay[room].currentPlay = true
    }
  } else {
    currentPlay[room] = roomPlaylist[room][index]
    currentPlay[room].currentTime = 0
    currentPlay[room].currentPlay = true
    currentPlay[room].index = index
  }

  playStart(room, index)
}

function Svc(socket, io) {
  const chatSvc = Object.freeze({
    joinRoom({ room, user }) {
      return new Promise((resolve, reject) => {
        socket.join(room, () => {
          let type = { type: 'join' }
          const resp = { room, user, type }
          console.log('resp', resp)
          let playlist = roomPlaylist[room] ? roomPlaylist[room] : ''
          const respo = {
            playlist: playlist,
            currentPlay: currentPlay[room],
          }
          console.log('respo', respo)
          socket.to(room).broadcast.emit('joinedRoom', resp)
          resolve(respo)
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
    test(index) {
      console.log('test index', index)
    },
    sendPlaylist({ room, playlist }) {
      return new Promise((resolve, reject) => {
        roomPlaylist[room] = playlist
        let resp = roomPlaylist[room]
        console.log('resper', resp)
        let sendPlaylist = true
        socket.to(room).broadcast.emit('receivePlaylist', resp)
        resolve(sendPlaylist)
      })
    },

    playTrack({ room, index }) {
      return new Promise((resolve, reject) => {
        let resp = index
        playNow(room, index)
        socket.to(room).broadcast.emit('receivePlayTrack', resp)

        resolve(resp)
      })
    },
    pauseTrack({ room, set }) {
      return new Promise((resolve, reject) => {
        let resp = set
        console.log('respons', set, room)
        currentPlay[room].currentPlay = false
        socket.to(room).broadcast.emit('receivePauseTrack', resp)

        resolve(resp)
      })
    },
    stopTrack({ room, set }) {
      return new Promise((resolve, reject) => {
        let resp = set
        console.log('respons', set, room)
        socket.to(room).broadcast.emit('receiveStopTrack', resp)

        resolve(resp)
      })
    },
    skipToTrack({ room, index }) {
      return new Promise((resolve, reject) => {
        let resp = index
        console.log('respons', index, room)
        socket.to(room).broadcast.emit('skipToTracked', resp)

        resolve(resp)
      })
    },

    // start({ room, playlist }) {
    //   return new Promise((resolve, reject) => {
    //     roomPlaylist[room] = playlist
    //     setTimeout(function() {
    //       console.log('start', playlist[1])
    //     }, 5000)
    //     let resp = playlist
    //     let num = 0

    //     function myFunc(arg) {
    //       console.log(`arg was => ${arg}`)
    //       console.log('playing', playlist[arg].duration)

    //       let response = {
    //         number: arg,
    //         playlist: playlist[arg]
    //         // item: item
    //       }
    //       socket.to(room).broadcast.emit('timerReceived', response)

    //       num++
    //       if (num < 1000) {
    //         setTimeout(myFunc, playlist[arg].duration * 1000, num)
    //       }
    //     }

    //     setTimeout(myFunc, 5000, num)
    //     resolve(resp)
    //   })
    // },
    // startTimer({ room, playlist }) {
    //   return new Promise((resolve, reject) => {
    //     let resp = 'hello'
    //     console.log('o', playlist[1])
    //     playlist.forEach(track => {
    //       let file = track.audio
    //       track.howl = new Howl({
    //         src: [`${file}`]
    //       })
    //     })

    //     setTimeout(function() {
    //       console.log('then')
    //       tester(playlist)
    //     }, 5000)
    //     resolve(resp)
    //   })
    // }
  })
  return chatSvc
}

module.exports = {
  Svc,
}
