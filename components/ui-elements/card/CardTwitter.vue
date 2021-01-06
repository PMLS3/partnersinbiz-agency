<template>
  <div
    class="w-full p-5 mx-auto text-gray-800 bg-white rounded-lg shadow"
    style="max-width: 400px"
  >
    <div class="flex w-full mb-4">
      <div class="w-12 h-12 overflow-hidden rounded-full">
        <img
          :src="
            item.user.profile_image_url_https
              ? item.user.profile_image_url_https
              : ''
          "
          alt=""
        />
      </div>
      <div class="flex-grow pl-3">
        <h6 class="font-bold text-md">{{ item.user.name }}</h6>
        <p class="text-xs text-gray-600">@{{ item.user.screen_name }}</p>
      </div>
      <div class="w-12 text-right">
        <i class="text-3xl text-blue-400 mdi mdi-twitter"></i>
      </div>
    </div>
    <div class="w-full mb-4">
      <p class="text-sm">
        {{ item.text }}
      </p>
    </div>
    <div class="flex items-center">
      <vs-tooltip text="Like Tweet" class="flex">
        <!-- <vs-icon
          icon="thumb_up"
          class="mr-2"
          :color="item.favorited ? blue : gray"
          @click="likeTweet()"
        ></vs-icon> -->
        <vs-button
          radius
          :color="item.favorited ? blue : gray"
          type="flat"
          class="mr-2"
          icon="thumb_up"
          @click="likeTweet()"
        ></vs-button>
        <p class="text-blue-600">{{ item.favorite_count }}</p>
      </vs-tooltip>
      <vs-tooltip text="Retweet" class="flex flex-item-center">
        <!-- <vs-icon
          icon="repeat"
          class="ml-4 mr-2"
          :color="item.retweeted ? green : gray"
          @click="retweetTweet()"
        ></vs-icon
        >{{ item.retweet_count }} -->

        <vs-button
          radius
          :color="item.retweeted ? green : gray"
          type="flat"
          class="ml-4 mr-2"
          icon="repeat"
          @click="retweetTweet()"
        ></vs-button>
        <p class="text-blue-600">{{ item.retweet_count }}</p>
      </vs-tooltip>
    </div>

    <div class="w-full">
      <p class="text-xs text-right text-gray-500">
        {{ item.created_at.split('+')[0] }}
      </p>
    </div>
    <!-- <vs-button @click="followUser()">Follow</vs-button> -->
    <vs-tooltip text="Follow Account" class="right-0 float-right -mt-8">
      <vs-button
        radius
        color="dark"
        type="line"
        icon="directions_walk"
        @click="followUser()"
      ></vs-button>
    </vs-tooltip>
    <vs-tooltip text="Save Image to File" class="right-0 float-right -mt-8">
      <vs-button
        radius
        color="dark"
        type="line"
        icon="add_photo_alternate"
        @click="saveImage()"
      ></vs-button>
    </vs-tooltip>
    <vs-tooltip text="Save Tweet to Drafts" class="right-0 float-right -mt-8">
      <vs-button
        radius
        color="dark"
        type="line"
        icon="save"
        class="right-0 float-right -mt-8"
        @click="savePost()"
      ></vs-button>
    </vs-tooltip>
    <vs-tooltip text="Schedule Tweet" class="right-0 float-right -mt-8">
      <vs-button
        radius
        color="dark"
        type="line"
        icon="date_range"
        class="right-0 float-right -mt-8"
        @click="activePromptAddEvent = true"
      ></vs-button>
    </vs-tooltip>
    <vs-tooltip text="Use this Tweet" class="right-0 float-right -mt-8">
      <vs-button
        radius
        color="dark"
        type="line"
        icon="post_add"
        class="right-0 float-right -mt-8"
        @click="activePromptAddEvent2 = true"
      ></vs-button>
    </vs-tooltip>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      blue: 'blue',
      green: 'green',
      gray: 'gray',
    }
  },
  computed: {
    business() {
      return this.$store.state.business.active_business
    },
    user() {
      return this.$store.state.auth.main_user
    },
    config() {
      return this.$store.state.config.twitter
    },
  },
  created() {
    // var str = this.item.text
    // var urlRE = new RegExp(
    //   '([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?([^ ])+'
    // )
    // str.match(urlRE)
  },
  methods: {
    followUser() {
      let id = this.item.user.id_str
      let screen_name = this.item.user.screen_name
      let vm = this
      this.$axios
        .$post('/api/twitter/followUser', {
          config: this.config,
          screen_name: screen_name,
          user_id: id,
        })
        .then(
          (response) => {
            vm.successUpload('FOLLOWED')
          },
          (error) => {
            console.log(error)
            vm.unsuccessUpload(error)
          }
        )
    },
    likeTweet() {
      let id = this.item.id_str
      let vm = this
      this.$axios
        .$post('api/twitter/twitterLike', {
          config: this.config,
          post_id: id,
        })
        .then(
          (response) => {
            vm.item.favorited = true
            vm.successUpload('LIKED')
          },
          (error) => {
            console.log(error)
            vm.unsuccessUpload(error)
          }
        )
    },
    retweetTweet() {
      let id = this.item.id_str
      let vm = this
      this.$axios
        .$post('/api/twitter/twitterRetweet', {
          config: this.config,
          post_id: id,
        })
        .then(
          (response) => {
            vm.item.retweeted = true
            vm.successUpload('RETWEETED')
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

<style>
@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
</style>
