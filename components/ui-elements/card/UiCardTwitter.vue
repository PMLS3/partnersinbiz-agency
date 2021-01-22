<!-- =========================================================================================
    File Name: CardTwitter.vue
    Description: Twitter Thread display
    ----------------------------------------------------------------------------------------
  TODO unlike and cancel retweets on
  TODO follow or unfollow
  TODO Retweet reply
========================================================================================== -->

<template>
  <div
    class="w-full p-5 mx-auto text-gray-800 bg-white rounded-lg shadow"
    style="max-width: 400px"
  >
    <div class="flex w-full mb-4">
      <div class="w-12 h-12 overflow-hidden rounded-full">
        <img
          v-if="item.user"
          :src="
            item.user.profile_image_url_https
              ? item.user.profile_image_url_https
              : ''
          "
          alt=""
        />
        <img v-else :src="user.avatar" alt="" />
      </div>
      <div class="flex-grow pl-3" v-if="item.user">
        <h6 class="font-bold text-md" v-if="item.user.name">
          {{ item.user.name }}
        </h6>

        <p class="text-xs text-gray-600" v-if="item.user.screen_name">
          @{{ item.user.screen_name }}
        </p>
      </div>
      <div class="flex-grow pl-3" v-else>
        <h6 class="font-bold text-md">
          {{ user.disp_name }}
        </h6>

        <p class="text-xs text-gray-600">@{{ user.disp_name }}</p>
      </div>
      <div class="w-12 text-right">
        <i class="text-3xl text-blue-400 mdi mdi-twitter"></i>
      </div>
    </div>
    <div class="w-full mb-4" v-if="item.text">
      <p class="text-sm">
        {{ item.text }}
      </p>
    </div>
    <div class="w-full mb-4" v-else>
      <p class="text-sm">
        {{ item.tweets[0].textarea }}
      </p>
    </div>
    <div class="flex items-center">
      <vs-tooltip text="Like Tweet" class="flex">
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
    <div v-if="item.tweets">
      <div v-if="item.tweets.length > 1">
        <div
          class="w-full mb-4"
          v-for="(item, index) in item.tweets"
          :key="index"
        >
          <vs-divider class="w-full mb-4" v-if="index != 0" />
          <p class="text-sm" v-if="index != 0">
            {{ item.textarea }}
          </p>
        </div>
      </div>
    </div>

    <div class="w-full" v-if="item.created_at">
      <p class="text-xs text-right text-gray-500">
        {{ item.created_at.split('+')[0] }}
      </p>
    </div>
    <div class="w-full" v-else>
      <p class="text-xs text-right text-gray-500">
        {{ item.scheduled_date }} - {{ item.time }}
      </p>
    </div>
    <vs-tooltip text="Follow Account" class="right-0 float-right -mt-8">
      <vs-button
        radius
        color="dark"
        type="line"
        icon="directions_walk"
        @click="followUser()"
      ></vs-button>
    </vs-tooltip>

    <vs-tooltip text="Use this Tweet" class="right-0 float-right -mt-8">
      <vs-button
        radius
        color="dark"
        type="line"
        icon="post_add"
        class="right-0 float-right -mt-8"
        @click="usePost()"
      ></vs-button>
    </vs-tooltip>

    <vs-popup
      class="holamundo"
      title="Use this Post"
      :active.sync="activePromptAddPost"
    >
      <SocialPost
        v-if="activePromptAddPost"
        :posts="posts"
        :entity="entity"
        :branch="branch"
        :twtConfig="twtConfig"
        :fbConfig="fbConfig"
        :instaConfig="instaConfig"
      />
    </vs-popup>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object },
    entity: { type: String, default: 'person' },
    handle: { type: String, default: '' },
    branch: { type: String, default: '' },
    twtConfig: { type: Object },
    fbConfig: { type: Object },
    instaConfig: { type: Object },
  },
  data() {
    return {
      activePromptAddPost: false,
      posts: [
        {
          textarea: '',
          imgs: [],
        },
      ],
      blue: 'orange',
      green: 'orange',
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

  methods: {
    usePost() {
      let vm = this
      let imgs = []
      if (vm.item.images) {
        imgs = vm.item.images
      }
      console.log('vm.item', vm.item.tweets)
      // this.posts = [
      //   {
      //     textarea: vm.item.text,
      //     imgs: [],
      //   },
      // ]

      this.posts = vm.item.tweets
      this.activePromptAddPost = true
    },

    followUser() {
      let id = this.item.user.id_str
      let screen_name = this.item.user.screen_name
      let vm = this
      console.log('config', this.twtConfig)
      this.$axios
        .$post('/api/twitter/followUser', {
          config: this.twtConfig,
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
          config: this.twtConfig,
          post_id: id,
        })
        .then(
          (response) => {
            vm.item.favorited = true
            vm.item.favorite_count = vm.item.favorite_count + 1
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
          config: this.twtConfig,
          post_id: id,
        })
        .then(
          (response) => {
            vm.item.retweeted = true
            vm.item.retweet_count = vm.item.retweet_count + 1
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

<style scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
</style>
