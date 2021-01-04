<template>
  <div
    class="w-full mx-3 overflow-hidden bg-white border rounded lg:w-6/12 md:w-6/12 md:mx-0 lg:mx-0"
  >
    <div class="flex justify-between w-full p-3">
      <div class="flex">
        <div
          class="flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-500 rounded-full"
        >
          <img :src="profile_pic_url" alt="profilepic" />
        </div>
        <span class="pt-1 ml-2 text-sm font-bold">{{ name }}</span>
      </div>
      <span class="px-2 rounded cursor-pointer hover:bg-gray-300"
        ><i class="pt-2 text-lg fas fa-ellipsis-h"></i
      ></span>
    </div>
    <img class="w-full bg-cover" :src="item.node.display_url" />
    <div class="flex items-center ml-2">
      <vs-icon icon="thumb_up" class="mr-2" @click="likeInsta()"></vs-icon>
      <vs-icon
        icon="repeat"
        class="ml-4 mr-2"
        @click="retweetTweet()"
      ></vs-icon>
    </div>

    <div class="px-3 pb-2">
      <div class="pt-2">
        <i class="cursor-pointer far fa-heart"></i>
        <span class="text-sm font-medium text-gray-400"
          >{{ item.node.edge_liked_by.count }} likes</span
        >
      </div>
      <div class="pt-1">
        <div class="mb-2 text-sm">
          <span class="mr-2 font-medium">{{ item.name }}</span>
          {{ item.node.edge_media_to_caption.edges[0].node.text }}
        </div>
      </div>
      <div class="mb-2 text-sm font-medium text-gray-400 cursor-pointer">
        View all {{ item.node.edge_media_to_comment.count }} comments
      </div>

      {{ item.node.id }}
      <!-- <div class="mb-2">
        <div class="mb-2 text-sm">
          <span class="mr-2 font-medium">razzle_dazzle</span> Dude! How cool! I
          went to New Zealand last summer and had a blast taking the tour! So
          much to see! Make sure you bring a good camera when you go!
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
    name: { type: String },
    profile_pic_url: { type: String },
  },
  computed: {
    business() {
      return this.$store.state.business.active_business
    },
    user() {
      return this.$store.state.auth.main_user
    },
    config() {
      return this.$store.state.config.instagram
    },
  },
  methods: {
    likeInsta() {
      let vm = this
      this.$axios
        .$post('/api/instagram/like', {
          config: this.config,
          mediaId: this.item.node.id,
        })
        .then(
          (response) => {
            vm.successUpload('LIKED')
          },
          (error) => {
            console.log(error)
            vm.unsuccessUpload(error)
          }
        )
    },
    successUpload(msg) {
      this.$vs.notify({
        color: 'success',
        title: 'Yeah',
        text: `${msg}`,
      })
    },
    unsuccessUpload(err) {
      this.$vs.notify({
        color: 'danger',
        title: 'Oops',
        text: `${err}`,
      })
    },
  },
}
</script>

<style></style>
