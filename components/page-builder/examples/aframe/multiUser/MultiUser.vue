<template>
  <div>
    <a class="hide" href="#">Hide</a>
    <section class="instructions">
      <h1>
        A-Frame Sharedspace Component {{ newPos }} -- {{ cylinders.length }}
      </h1>
      <div v-for="(cyl, index) in cylinders" :key="index">
        <h1>{{ cyl.location }} || {{ cyl.id }}</h1>
      </div>
    </section>
    <a-scene embedded>
      <a-assets> </a-assets>
      <a-entity>
        <!-- Room -->
        <a-sky color="#333"></a-sky>
        <a-plane rotation="-90 0 0" width="15" height="15" color="#777">
        </a-plane>

        <a-entity
          id="myCil"
          color="#FF00FF"
          position="0 0.8 0"
          obj-model="obj: url(https://cdn.glitch.com/4e53a88a-96d2-46e5-ab4b-f8f1b9c2d486%2Fface.obj?1506059732633)"
          rotation="0 180 0"
          scale="0.01 0.01 0.01 "
        ></a-entity>

        <a-entity
          :position="cyl.position"
          :color="cyl.color"
          v-for="(cyl, index) in cylinders"
          :key="index"
          obj-model="obj: url(https://cdn.glitch.com/4e53a88a-96d2-46e5-ab4b-f8f1b9c2d486%2Fface.obj?1506059732633)"
          rotation="0 180 0"
          scale="0.01 0.01 0.01 "
        ></a-entity>
      </a-entity>
      <a-entity position="0 0 1">
        <a-camera user-height="0.9" active="true" id="camera" camera-listener>
        </a-camera>
      </a-entity>
    </a-scene>
    <template>
      <a-entity>
        <a-entity
          obj-model="obj: url(https://cdn.glitch.com/4e53a88a-96d2-46e5-ab4b-f8f1b9c2d486%2Fface.obj?1506059732633)"
          rotation="0 180 0"
          scale="0.01 0.01 0.01"
        ></a-entity>
        <!--
      Anime Face Model Stocking(https://sketchfab.com/models/d049b6a85d204057b170ef9dbc851200) by stocking(https://sketchfab.com/stocking) is licensed under CC Attribution(http://creativecommons.org/licenses/by/4.0/)
      -->
      </a-entity>
    </template>
  </div>
</template>

<script>
if (process.client) {
  require('@/js/aframe/index.js')
}
import { setStore, setSocket, setUser } from './index'
export default {
  name: 'multi-user',
  head: {
    script: [],
  },
  data() {
    return {
      cylinders: [],
      color: 'FF00FF',
      height: '1.6',
      active: false,
      disp_active: false,
      message: '',
      messages: [],
      chatMessage: '',
      newRoomName: '',
      joinedRoom: '',
      roomInfo: {},
      msgRxd: {},
      userNumber: null,
      myAvatar: {},
    }
  },
  computed: {
    room() {
      return this.$store.state.route.room
    },
    user() {
      return this.$store.state.auth.active_user
    },
    myAvatar() {
      return this.$store.state.aframe.myAvatar
    },

    newPos() {
      return this.$store.state.aframe.location
    },
  },
  created() {
    setStore(this.$store, this)
  },
  watch: {
    // newPos() {
    //   console.log('newPos', this.newPos)
    //   let vm = this
    //   this.myMovement = {
    //     location: vm.newPos,
    //     id: vm.userNumber,
    //     room: vm.room
    //   }
    //   this.movementAvatar()
    // },

    newPos: function (data) {
      console.log('new poa', data)
    },
    room() {
      console.log('room')
      let user = {
        name: this.user.disp_name,
        id: this.userNumber,
      }
      this.joinDetails = { room: this.room, user: user }
      this.joinRoom()
    },
    roomInfo() {
      this.cylinders = this.roomInfo
    },
  },
  mounted() {
    this.socket = this.$nuxtSocket({ channel: '/aframe' })
    if (this.user.uid) {
      this.userNumber = this.user.uid
    } else {
      this.userNumber = Math.floor(Math.random() * 1000000)
    }
    if (this.room) {
      let user = {
        name: this.user.disp_name,
        id: this.userNumber,
        location: { x: 0, y: 1.6, z: 0 },
        color: this.color,
        surname: this.user.surname ? this.user.surname : '',
        height: this.height,
        rotation: '0 180 0',
      }
      setUser({ room: this.room, userNumber: this.userNumber })
      this.joinDetails = { room: this.room, user: user }
      this.$store.commit('aframe/SET_AVATAR', this.joinDetails)
      this.joinRoom()
    }
    if (this.user.disp_name == 'Guest') {
      this.disp_active = true
    }
    var myAvatr = document.getElementById('myCil')
    myAvatr.pos = myAvatr.getAttribute('position')
    this.myAvatar = myAvatr
  },

  methods: {
    updateMovement(data) {
      console.log('current', this.cylinders)
      console.log('current data', data)

      //Find index of specific object using findIndex method.
      let objIndex = this.cylinders.findIndex((obj) => obj.id == data.id)

      //Log object to Console.
      console.log('Before update: ', this.cylinders[objIndex])

      //Update object's name property.
      this.cylinders[objIndex].location = data.location

      //Log object to console again.
      console.log('After update: ', this.cylinders[objIndex])
    },

    sendText() {
      let user = {
        name: this.user.disp_name,
        id: this.userNumber,
      }
      this.userMsg = { room: this.room, message: this.message, user: user }
      this.messages.push(this.userMsg)
      this.socket.emit('sendMsg', this.userMsg)
      this.message = ''
    },
    appendChats(data) {
      console.log('append', data)
      this.messages.push(data)
    },
    updateUsers(data) {
      console.log('updateing', data)
      var parsedobj = JSON.parse(JSON.stringify(data))
      console.log(parsedobj)
      console.log('this', this.cylinders)
      this.cylinders.push(parsedobj.user)
    },

    createRoom() {
      this.$store.commit('route/ROOM_SET', this.newRoomName)
    },
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html {
  font-size: 14pt;
  font-family: sans-serif;
}

.hide {
  color: black;
  margin: 0;
  padding: 1rem;
  float: right;
  text-align: right;
  position: relative;
  z-index: 110;
  background-color: white;
  font-size: 1rem;
}

section {
  box-sizing: border-box;
  padding: 0.5rem;
  position: relative;
  z-index: 100;
  background-color: white;
  transform: translateY(0);
  transition: transform 500ms;
}

section.hidden {
  transform: translateY(-100%);
}

p {
  margin-top: 0.75rem;
  margin-bottom: 0.3rem;
}

.options {
  display: flex;
}

a-scene {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.link,
.move {
  display: block;
  border-radius: 5px;
  border: 2px dashed grey;
  padding: 0.4rem;
  margin-top: 1rem;
}

.move {
  background-color: #61b8ec;
  border: 2px solid #61b8ec;
}

a.move {
  color: white;
  font-weight: strong;
  text-decoration: none;
}
</style>
