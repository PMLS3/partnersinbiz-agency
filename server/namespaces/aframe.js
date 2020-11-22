function Svc(socket, io) {
  const chatSvc = Object.freeze({
    joinRoom({ room, user }) {
      return new Promise((resolve, reject) => {
        console.log("room join", room);

        socket.join(room, () => {
          let id = socket.id;
          let type = "join";

          socket[id] = {
            type: type,
            disp_name: user.disp_name,
            id: user.id,
            socket_id: id,
            position: user.position,
            rotation: user.rotation,
            color: user.color,
            character: user.character,
            url: user.url,
            animation: user.animation,
            height: user.height,
            rotation: user.rotation,
            room: room
          };

          const resp = socket[id];
          socket.to(room).broadcast.emit("joinedRoom", resp);
          resolve(resp);
        });
      });
    },
    leaveRoom({ room, user }) {
      return new Promise((resolve, reject) => {
        socket.leave(room, () => {
          let type = "left";
          let id = socket.id;
          socket[id].type = type;

          const resp = socket[id];
          socket.to(room).broadcast.emit("leavedRoom", resp);
          resolve(resp);
        });
      });
    },
    movementAvatar({ room, position, rotation }) {
      return new Promise((resolve, reject) => {
        // console.log("loc", location, room, id);
        // console.log("player", player);
        //Find index of specific object using findIndex method.
        // let objIndex = users[room].findIndex(obj => obj.id == id);

        //Log object to Console.
        // console.log('Before update: ', users[room][objIndex])
        let id = socket.id;
        //Update object's name property.
        // users[room][objIndex].location = location;
        // users[room][objIndex].rotation = rotation;

        //Log object to console again.
        // console.log('After update: ', users[room][objIndex])

        socket[id].position = position;
        socket[id].rotation = rotation;
        const resp = socket[id];

        socket.to(room).broadcast.emit("movementReceived", resp);
        resolve(resp);
      });
    },
    sendMsg({ room, message, user }) {
      return new Promise((resolve, reject) => {
        const resp = {
          room: room,
          message: message,
          user: user
        };
        socket.to(room).broadcast.emit("chatMessage", resp);
        resolve(resp);
      });
    },
    messageSent({ message, roomId }) {
      console.log("message", message);
      return new Promise((resolve, reject) => {
        socket.to(roomId).broadcast.emit("receivedMessage", message);
      });
    },

    videoSend({ stream, room }) {
      console.log("stream", stream, room);
      return new Promise((resolve, reject) => {
        let mystream = { stream: stream };
        socket.to(room).broadcast.emit("videoReceived", mystream);
      });
    }
  });
  return chatSvc;
}

module.exports = {
  Svc
};
