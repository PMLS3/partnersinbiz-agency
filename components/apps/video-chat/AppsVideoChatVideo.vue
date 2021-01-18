<template>
  <div class="flex">
    <!-- <div>room: {{ room }}</div>
    <div>room_info: {{ room_info }}</div>
    <div>user_info: {{ user_info }}</div>
    <div>room: {{ room }}</div> -->

    <vs-button icon="mic" @click="muteMicrophone()"></vs-button>
    <vs-button icon="videocam" @click="videoSwitch()"></vs-button>
    <!-- <vs-button icon="video_library" @click="videoShow()"></vs-button> -->
    <div id="video-grid" class="absolute z-10 flex" style="height: 150px"></div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    room: {
      type: String,
      default: '',
    },
    room_info: {
      type: Object,
      default: () => {},
    },
    user_info: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      joinDetails: {
        roomId: 'hello',
        userId: 'Peet',
      },
      roomInfo: {},
      message: '',
      messages: [],
      users: [],
      messageInfo: {},
      videoGrid: null,
      myVideo: null,
      myPeer: null,
      peers: {},
      stream: null,
      mode: 'camera',
      joinedRoom: '',
      video: true,
      audio: true,
      classesToAdd: [
        'transition',
        'duration-500',
        'ease-in-out',
        'bg-blue-500',
        'hover:bg-red-500',
        'transform',
        'hover:-translate-y-1',
        'hover:scale-110',
        'moveable',
        'z-50',
      ],
    }
  },
  mounted() {
    this.joinDetails.userId = Math.floor(Math.random() * 1000 + 1)
    this.joinDetails.roomId = this.room
    if (process.client) {
      this.socket = this.$nuxtSocket({ channel: '/videochat' })
      this.startVideo()
    }
  },
  methods: {
    startVideo() {
      let vm = this
      this.myPeer = this.$peer
      this.myPeer.on('open', (id) => {
        console.log('id', id)
        this.joinDetails.userId = id
        this.socket.emit('joinRoom', this.joinDetails)
      })
      this.videoGrid = document.getElementById('video-grid')
      this.myVideo = document.createElement('video')
      this.myVideo.muted = true
      this.myVideo.classList.add(...this.classesToAdd)

      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          this.stream = stream
          this.addVideoStream(this.myVideo, this.stream)
          this.myPeer.on('call', (call) => {
            call.answer(this.stream)
            const video = document.createElement('video')
            call.on('stream', (userVideoStream) => {
              console.log('vide user', userVideoStream)
              this.addVideoStream(video, userVideoStream)
            })
          })
        })
    },

    videoScreen() {
      this.myPeer = new Peer(undefined)
      this.myPeer.on('open', (id) => {
        this.joinDetails.userId = id
        this.socket.emit('joinRoom', this.joinDetails)
      })
      let vm = this
      let myVideo = document.createElement('video')
      myVideo.classList.add(...this.classesToAdd)
      if (this.mode === 'camera') {
        // Request screen share, note we dont want to capture audio
        // as we already have the stream from the Webcam
        // this.stream.getTracks().forEach(track => track.stop())
        navigator.mediaDevices
          .getDisplayMedia({
            video: true,
            audio: false,
          })
          .then(function (stream) {
            // Close allow screenshare snackbar
            vm.mode = 'screen'
            stream
            vm.addVideoStream(myVideo, stream)
            vm.myPeer.on('call', (call) => {
              call.answer(stream)
              const video = document.createElement('video')
              call.on('stream', (userVideoStream) => {
                vm.addVideoStream(video, userVideoStream)
              })
            })
          })
          .catch(function (err) {
            console.log('err', err)
          })
      }
    },
    // Swap current video track with passed in stream
    switchStreamHelper(stream) {
      // Get current video track
      let videoTrack = stream.getVideoTracks()[0]
      // Add listen for if the current track swaps, swap back
      videoTrack.onended = function () {
        this.swap()
      }
      if (this.VideoChat.connected) {
        // Find sender
        const sender = this.VideoChat.peerConnection
          .getSenders()
          .find(function (s) {
            // make sure tack types match
            return s.track.kind === videoTrack.kind
          })
        // Replace sender track
        sender.replaceTrack(videoTrack)
      }
      // Update local video stream
      this.VideoChat.localStream = videoTrack
      // Update local video object
      this.VideoChat.localVideo.srcObject = stream
      // Unpause video on swap
      if (this.videoIsPaused) {
        this.pauseVideo()
      }
    },
    muteMicrophone() {
      this.stream.getAudioTracks()[0].enabled = !this.stream.getAudioTracks()[0]
        .enabled
    },
    videoSwitch() {
      this.stream.getVideoTracks()[0].enabled = !this.stream.getVideoTracks()[0]
        .enabled
    },

    connectToNewUser(userId, stream) {
      const call = this.myPeer.call(userId, stream)
      const video = document.createElement('video')

      call.on('stream', (userVideoStream) => {
        this.addVideoStream(video, userVideoStream)
      })
      call.on('close', () => {
        video.remove()
      })
    },
    addVideoStream(video, stream) {
      video.style.width = '150px'
      video.srcObject = stream
      video.addEventListener('loadedmetadata', () => {
        video.play()
      })
      this.videoGrid.append(video)
    },

    updateUsers(resp) {
      this.users.push(resp)
      this.connectToNewUser(resp.userId, this.stream)
    },
    messageSend() {
      this.messageInfo = {
        message: this.message,
        roomId: this.joinDetails.roomId,
      }
      this.messageSent()
    },
    receive(resp) {
      this.messages.push(resp)
    },
  },
}
</script>

<style>
#video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-auto-rows: 300px;
}
video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
