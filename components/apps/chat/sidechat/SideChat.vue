<template lang="html">
  <div id="parentx">
    <!-- <vs-button @click="active = !active" icon="chat" type="flat"></vs-button> -->
    <vs-sidebar
      position-right
      parent="body"
      default-index="1"
      color="red"
      class="sidebarx"
      spacer
      v-model="active"
      hidden-background
    >
      <div
        class="flex items-center justify-center mt-12 header-sidebar"
        slot="header"
      >
        <!-- <vs-avatar
          size="70px"
          :src="
            user.avatar
              ? user.avatar
              : 'https://randomuser.me/api/portraits/men/85.jpg'
          "
        />

        <h4>
          {{ name }}
        </h4> -->

        <vs-button
          color="primary"
          icon="more_horiz"
          type="flat"
          @click="disp_active = !disp_active"
        ></vs-button>
      </div>
      <div
        class="flex items-center justify-center mt-12 header-sidebar"
        slot="header"
      >
        <h2>{{ name }} - {{ room }}</h2>
      </div>
      <div style="overscroll-behavior: none;">
        <!-- HEADING -->
        <div
          class="fixed flex items-center justify-between w-full h-16 pt-2 text-black shadow-md"
          style="top:0px; overscroll-behavior: none;"
        >
          <!-- back button -->
          <a
            href="#"
            @click="active = !active"
            class="flex items-center justify-between"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-12 h-12 my-1 ml-2 text-green-100"
            >
              <path
                class="text-black fill-current"
                d="M9.41 11H17a1 1 0 0 1 0 2H9.41l2.3 2.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L9.4 11z"
              />
            </svg>
            <h2 v-if="room">Room: {{ room }}</h2>
          </a>

          <!-- 3 dots -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-8 h-8 mt-2 mr-2 icon-dots-vertical"
          >
            <path
              class="text-green-100 fill-current"
              fill-rule="evenodd"
              d="M12 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
            />
          </svg>
        </div>

        <!-- MESSAGES -->
        <perfect-scrollbar
          ref="verticalNavMenuPs"
          :key="$vs.rtl"
          class="pt-2 scroll-area-v-nav-menu"
          :settings="settings"
          @ps-scroll-y="psSectionScroll"
        >
          <div class="mt-2 mb-16" v-if="room">
            <div v-for="(msg, index) in messages" :key="index">
              <!-- SINGLE MESSAGE -->

              <div class="clearfix" v-if="userNumber === msg.user.id">
                <small class="w-3/4 p-2 mx-4 ">{{ msg.user.name }}</small>
                <div class="w-3/4 p-2 mx-4 my-2 bg-gray-300 rounded-lg">
                  {{ msg.message }}
                </div>
              </div>
              <div class="clearfix" v-else>
                <small class="float-right w-3/4 p-2 mx-4">{{
                  msg.user.name
                }}</small>

                <div
                  class="clearfix float-right w-3/4 p-2 mx-4 my-2 bg-green-300 rounded-lg"
                >
                  {{ msg.message }}
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="clearfix">
              <div class="p-2 mx-4 my-2 bg-gray-300 rounded-lg ">
                <p class="w-3/4 ">Create a room</p>

                <vs-input v-model="newRoomName" type="text" />
                <vs-button @click="createRoom()" class="mt-2">Submit</vs-button>
              </div>
            </div>
          </div>
        </perfect-scrollbar>
      </div>

      <!-- MESSAGE INPUT AREA -->
      <div
        class="fixed w-full p-2 bg-gray-100"
        style="bottom: 0px;"
        v-if="room"
      >
        <vs-textarea
          rows="1"
          placeholder="Message..."
          style="outline: none;"
          v-model="message"
        ></vs-textarea>
        <vs-button
          class="mb-2 "
          style="outline: none;"
          @click="sendText()"
          icon="mail"
          size="small"
        >
          SEND
        </vs-button>
      </div>
    </vs-sidebar>
  </div>
</template>

<script>
export default {
  props: {
    active: { type: Boolean, default: false }
  },
  data: () => ({
    disp_active: false,
    message: "",
    messages: [],
    chatMessage: "",
    newRoomName: "",
    joinedRoom: "",
    roomInfo: {},
    msgRxd: {},
    userNumber: null,
    settings: {
      maxScrollbarLength: 60,
      wheelSpeed: 0.7
    }
  }),
  computed: {
    room() {
      return this.$store.state.multiUser.room.room;
    },
    user() {
      return this.$store.state.auth.main_user;
    },
    anonState() {
      return this.$store.state.auth.anonymous;
    },
    name() {
      return this.anonState ? "Anonymous" : this.user.disp_name;
    }
  },
  watch: {
    room() {
      let user = {
        name: this.user.disp_name,
        id: this.userNumber
      };
      this.joinDetails = { room: this.room, user: user };
      this.joinRoom();
    }
  },
  mounted() {
    this.socket = this.$nuxtSocket({ channel: "/chat" });
    if (this.user.uid) {
      this.userNumber = this.user.uid;
    } else {
      this.userNumber = Math.floor(Math.random() * 1000000);
    }
    if (this.room) {
      let user = {
        name: this.name,
        id: this.userNumber
      };
      this.joinDetails = { room: this.room, user: user };
      this.joinRoom();
    }
    if (this.user.disp_name == "Guest") {
      this.disp_active = true;
    }
  },

  methods: {
    sendText() {
      let user = {
        name: this.name,
        id: this.userNumber
      };
      this.userMsg = { room: this.room, message: this.message, user: user };
      this.messages.push(this.userMsg);
      this.socket.emit("sendMsg", this.userMsg);
      this.message = "";
    },
    appendChats(data) {
      this.messages.push(data);
    },
    updateUsers(data) {},
    psSectionScroll() {
      this.showShadowBottom = this.$refs.verticalNavMenuPs.$el.scrollTop > 0;
    },
    createRoom() {
      this.$store.commit("route/ROOM_SET", this.newRoomName);
    }
  }
};
</script>
