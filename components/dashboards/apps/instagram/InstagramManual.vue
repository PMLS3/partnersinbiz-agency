<template>
  <div>
    <vs-input v-model="search" name="search" />
    <vs-button @click="SearchNow">Search Hastag</vs-button>
    <vs-tabs position="left">
      <vs-tab label="Dashboard" icon="dashboard" v-if="instaActivity">
        <div v-if="instaActivity.edge_hashtag_to_media">
          <div
            v-for="(item, index) in instaActivity.edge_hashtag_to_media.edges"
            :key="index"
            class="mt-4"
          >
            <CardInstaPost
              :item="item"
              :name="instaActivity.name"
              :profile_pic_url="instaActivity.profile_pic_url"
            />
          </div>
        </div>
      </vs-tab>

      <vs-tab label="Feeds" icon="dashboard" v-if="instaActivity">
        <div v-if="instaActivity.edge_hashtag_to_top_posts">
          <div
            v-for="(item, index) in instaActivity.edge_hashtag_to_top_posts
              .edges"
            :key="index"
          >
            <!-- <CardInstaPost
              :item="item"
              :name="instaActivity.name"
              :profile_pic_url="instaActivity.profile_pic_url"
            /> -->
          </div>
        </div>
      </vs-tab>
      <!-- <vs-tab label="Feeds" icon="dashboard" v-if="instaActivity">
        {{ instaActivity }}
      </vs-tab> -->
    </vs-tabs>
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import vSelect from 'vue-select'

import moment from 'moment'
export default {
  components: {
    flatPickr,
    vSelect,
  },
  data() {
    return {
      search: '',
      instaActivity: {},
      test: {
        node: {
          comments_disabled: false,
          __typename: 'GraphSidecar',
          id: '2479427480409517414',
          edge_media_to_caption: {
            edges: [
              {
                node: {
                  text:
                    "In programming, there are many built-in methods which help us when working with arrays, strings and other data types.\n\nWe can use these methods for different operations like searching, replacing etc.,\n\nNow, we'll see how to get a substring from a string in JavaScript.\n\nWe'll look at 3 built-in methods, \n- slice()\n- substring()\n- substr()\n\nHope, this helps you when working with strings in JavaScript.\n\n#javascript #js #frontenddeveloper #ecmascript #nodejs #100daysofcode #stringsinjavascript #stringmethods #backenddeveloper #strings #webdevelopment #webdeveloper #sailsjs #react #rajesh996",
                },
              },
            ],
          },
          shortcode: 'CJosigoJq1m',
          edge_media_to_comment: { count: 0 },
          taken_at_timestamp: 1609790810,
          dimensions: { height: 1080, width: 1080 },
          display_url:
            'https://scontent-jnb1-1.cdninstagram.com/v/t51.2885-15/e35/136356641_1673798502781559_3850758043173336168_n.jpg?_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=rEHSlUG-HCAAX_WTTNN&tp=1&oh=9c9974dd032ff067855fb5097f26f0dc&oe=601E45F6',
          edge_liked_by: { count: 0 },
          edge_media_preview_like: { count: 0 },
          owner: { id: '3208333537' },
          thumbnail_src:
            'https://scontent-jnb1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/136356641_1673798502781559_3850758043173336168_n.jpg?_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=rEHSlUG-HCAAX_WTTNN&tp=1&oh=7b38b40935ff32d4e0aea6402fe51e38&oe=601D5EED',
          thumbnail_resources: [
            {
              src:
                'https://scontent-jnb1-1.cdninstagram.com/v/t51.2885-15/e35/s150x150/136356641_1673798502781559_3850758043173336168_n.jpg?_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=rEHSlUG-HCAAX_WTTNN&tp=1&oh=996042d39104689ae07026a7896fd81d&oe=601BE51A',
              config_width: 150,
              config_height: 150,
            },
            {
              src:
                'https://scontent-jnb1-1.cdninstagram.com/v/t51.2885-15/e35/s240x240/136356641_1673798502781559_3850758043173336168_n.jpg?_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=rEHSlUG-HCAAX_WTTNN&tp=1&oh=9a88017c562e3b1ed7531ac6b1a59203&oe=601DA852',
              config_width: 240,
              config_height: 240,
            },
            {
              src:
                'https://scontent-jnb1-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/136356641_1673798502781559_3850758043173336168_n.jpg?_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=rEHSlUG-HCAAX_WTTNN&tp=1&oh=667602b8ec39af2a53b6469a4c15478b&oe=601B950F',
              config_width: 320,
              config_height: 320,
            },
            {
              src:
                'https://scontent-jnb1-1.cdninstagram.com/v/t51.2885-15/e35/s480x480/136356641_1673798502781559_3850758043173336168_n.jpg?_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=rEHSlUG-HCAAX_WTTNN&tp=1&oh=9958eb626e242ed4373b452fa024ead3&oe=601E28CD',
              config_width: 480,
              config_height: 480,
            },
            {
              src:
                'https://scontent-jnb1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/136356641_1673798502781559_3850758043173336168_n.jpg?_nc_ht=scontent-jnb1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=rEHSlUG-HCAAX_WTTNN&tp=1&oh=7b38b40935ff32d4e0aea6402fe51e38&oe=601D5EED',
              config_width: 640,
              config_height: 640,
            },
          ],
          is_video: false,
          accessibility_caption:
            "Photo by Rajesh Chittampally on January 04, 2021. Image may contain: text that says '{Javacript} <> Get substring from a string in JavaScript @rajesh996'.",
        },
      },
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
      return this.$store.state.config.instagram
    },
  },
  watch: {},
  methods: {
    async SearchNow() {
      let vm = this
      const ip = await this.$axios
        .$get(
          `/api/instagram/getFeedHashtag?username=${this.config.username}&password=${this.config.password}&hashtag=${this.search}`
        )
        .then(vm.successUpload('searching...'))

      this.instaActivity = ip
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
  created() {
    // let vm = this
    // this.$fireStore
    //   .collection('retweets')
    //   .doc(this.config.consumer_key)
    //   .onSnapshot(function (doc) {
    //     vm.set_retweets = doc.data().retweet_words
    //     vm.retweet_status = doc.data().status
    //   })
    // this.$fireStore
    //   .collection('likeTweets')
    //   .doc(this.config.consumer_key)
    //   .onSnapshot(function (doc) {
    //     vm.set_liked_words = doc.data().liked_words
    //     vm.liked_status = doc.data().status
    //   })
  },
}
</script>
