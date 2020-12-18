<template>
  <div class="w-full h-full bg-black bg-opacity-75 rounded">
    <div class="absolute h-screen z-9" id="mydiv4">
      <div>
        <div class="vx-row">
          <div
            class="w-full text-gray-500 bg-black bg-opacity-25 vx-col sm:w-1/2"
          >
            <vs-list>
              <vs-list-header
                icon="supervisor_account"
                title="Selected List"
              ></vs-list-header>
              <draggable
                :list="selectedMusic"
                :group="{ name: 'tags', pull: 'clone', put: false }"
                class="p-2 cursor-move"
              >
                <vs-list-item
                  icon="check"
                  :title="listItem.title"
                  :subtitle="listItem.artist"
                  v-for="(listItem, index) in selectedMusic"
                  :key="index"
                >
                  <vs-button icon="add" @click="addMusic(listItem)"></vs-button>
                </vs-list-item>
              </draggable>
            </vs-list>
          </div>
          <div
            class="w-full text-gray-500 bg-black bg-opacity-25 vx-col sm:w-1/2"
          >
            <vs-list>
              <vs-list-header icon="supervisor_account" title="Play List">
              </vs-list-header>

              <draggable
                :list="list2"
                :group="{ name: 'tags' }"
                class="p-2 cursor-move"
              >
                <vs-list-item
                  v-for="(listItem, index) in list2"
                  :key="index"
                  icon="verified_user"
                  :title="listItem.title"
                  :subtitle="listItem.artist"
                ></vs-list-item>
              </draggable>
            </vs-list>
          </div>
          <vs-button class="w-full" @click="updateList()">Update</vs-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var ss = require('socket.io-stream')
import { Howl, Howler } from 'howler'

export default {
  components: {
    draggable: () => (process.client ? import('vuedraggable') : null),
  },
  data() {
    return {
      setdata: {},
      playlist: [],
      playlist2: [],
      currentUrl: null,
      roomInfo: null,
      list2: [],
    }
  },
  computed: {
    station() {
      return this.$store.state.form.uploaded_stations
    },
    user() {
      return this.$store.state.auth.active_user
    },
    selectedMusic() {
      return this.$store.state.form.selected_music
    },
    uploadedMusic() {
      return this.$store.state.form.uploaded_music
    },
    room() {
      return this.station.room
    },
  },
  watch: {
    receivePlaylist() {
      if (this.receivePlaylist) {
        this.$vs.notify({
          title: 'Received',
          text: 'Playlist has been update in cloud',
          color: 'success',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
        })
      }
      this.receivePlaylist = false
    },
    room() {
      console.log('room')
    },
    roomInfo() {
      console.log('roominfo', this.roomInfo)
      if (this.roomInfo.playlist) {
        this.list2 = this.roomInfo.playlist
        this.updateList()
      }
    },
    station() {
      let user = {
        name: this.user.disp_name,
        id: this.userNumber,
      }
      this.joinDetails = { room: this.station.room, user: user }
      this.joinRoom()
    },
  },

  methods: {
    updateList() {
      this.playlist2 = this.list2
      this.showStation = true

      this.$store.commit('radio/SET_PLAYLIST', this.list2)
    },
    addMusic(item) {
      this.list2.push(item)
    },
  },
}
</script>

<style scoped>
body {
  max-width: 960px;
  margin: auto;
  text-align: center;
  font: 14px/1.5 'Anonymous Pro', monospace;

  background: url('http://cdn.backgroundhost.com/backgrounds/subtlepatterns/cream_dust.png');
}

h1,
h2 {
  font-weight: lighter;
  font-size: 1em;
  text-decoration: underline;
}

.media-buttons {
  margin-top: 3rem;
}

.media-button {
  transition: all 0.3s;

  line-height: 1;
  display: inline-block;
  font-size: 1rem;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  text-align: center;
  background: transparent;
  border-style: solid;
  border-color: black;
  border-width: thin;
}

.media-button:hover {
  color: white;
  cursor: pointer;
  background-color: black;
}

.song-list {
  margin-top: 2rem;
  list-style: none;
  padding: 2em 0;
  border-top: 1px solid rgba(0, 0, 0, 0.5);
}

.song-list .song {
  transition: all 0.3s;

  margin-bottom: 5px;
  display: block;
}

.song-list .song:hover .song-name {
  cursor: pointer;
  background-color: black;
  color: white;
  padding: 5px;
}

#upload-file-form {
  display: block;
}

@media (max-width: 600px) {
  #upload-file-form {
    display: none;
  }
}

#upload-file-form #submit-button {
  display: none;
}

#upload-field {
  transition: all 0.3s;
  width: 10em;
  padding: 4rem 1rem;
  outline: 3px dashed black;
  outline-offset: -15px;
  margin: 2rem auto 0;
  /*cursor: copy;*/
}

#upload-field.hover {
  background-color: black;
  outline: 3px dashed white;
  color: white;
}

.audio-player {
  width: 100%;
}
</style>
