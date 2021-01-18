<template>
  <div class="flex mt-24">
    <!-- {{ room_info }} -->
    <client-only>
      <div v-if="user_info">
        <AppsVideoChatVideo
          :room="room_data"
          :room_info="room_info"
          :user_info="user_info"
        />
      </div>
      <div v-else>
        <vs-input label="user_info" />
      </div>
    </client-only>
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
    user: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      user_info: {},
      room_info: {},
    }
  },
  computed: {
    room_data() {
      return this.room ? this.room : this.$route.params.id
    },
  },
  mounted() {
    let vm = this
    if (this.user) {
      this.user_info = this.user
    }
    let ref = this.$fireStore
      .collection('apps')
      .doc('VidChatCat')
      .collection('app')
      .doc(vm.room_data)
    ref
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log('Document data:', doc.data())
          vm.room_info = doc.data()
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!')
        }
      })
      .catch(function (error) {
        console.log('Error getting document:', error)
      })
  },
}
</script>
