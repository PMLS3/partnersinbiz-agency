<!-- =========================================================================================
	File Name: 
	Description:
	Component Name: 
	----------------------------------------------------------------------------------------
TODO: Work on login and stay here
TODO: like and comment on likes and comment
========================================================================================== -->

<template>
  <div>
    <!-- COL AREA -->
    <div class="max-w-md px-6 mx-auto vx-row">
      <!-- COL 2 -->
      <div class="w-full vx-col">
        <!-- <div class="w-full vx-col lg:w-1/2"> -->
        <vx-card class="mt-base" v-for="(post, index) in items" :key="index">
          <div>
            <!-- POST HEADER -->
            <div class="flex justify-between mb-4 post-header">
              <div class="flex items-center">
                <div>
                  <vs-avatar
                    class="m-0"
                    :src="user.avatar"
                    size="45px"
                  ></vs-avatar>
                </div>
                <div class="ml-4">
                  <h6>{{ post.author }}</h6>
                  <small>{{ post.time }} </small>
                </div>
              </div>
              <div class="flex">
                <feather-icon
                  class="ml-4"
                  icon="HeartIcon"
                  :svgClasses="{
                    'text-danger fill-current stroke-current': post.isLiked,
                  }"
                ></feather-icon>
              </div>
            </div>
            <div class="px-6 post-content">
              <p>
                <b>{{ post.title }}</b>
              </p>
            </div>
            <!-- POST CONTENT -->
            <div class="post-content">
              <p>{{ post.text }}</p>
            </div>
            <div class="mt-4 mb-6 post-media-container">
              <!-- <ul class="flex post-media-list">
              <li class="w-full m-1 post-media" v-for="(media, mediaIdex) in post.media.slice(0, 2)" :key="mediaIdex">-->
              <img
                class="rounded responsive"
                :src="post.imgs[0]"
                alt="user-upload"
              />
              <!-- <img class="rounded responsive" :src="media.img" alt="user-upload" v-if="mediaType(media) == 'image'"> -->

              <!-- <video-player ref="player" class="media-video-player" :options="playerOptions(media)" v-else-if="mediaType(media) == 'video'" v-once />
                                    <span class="text-lg text-primary" v-else>Unknown Media Type</span>
                                </li>
              </ul>-->
              <!-- <span class="flex justify-end" v-if="post.media.length > 2">
                                <a class="inline-flex items-center text-sm" href=""><span>View All</span> <feather-icon :icon="$vs.rtl ? 'ChevronsLeftIcon' : 'ChevronsRightIcon'" svgClasses="h-4 w-4"></feather-icon></a>
              </span>-->
            </div>

            <!-- POST ACTION DATA -->
            <div>
              <div class="flex justify-between">
                <div class="flex items-center">
                  <div class="flex items-center">
                    <feather-icon
                      class="mr-2"
                      icon="HeartIcon"
                      svgClasses="h-5 w-5"
                    ></feather-icon>
                    <span>{{ post.likes }}</span>
                  </div>
                  <ul class="ml-3 users-liked user-list sm:ml-6">
                    <li
                      v-for="(user, userIndex) in post.usersLiked"
                      :key="userIndex"
                    >
                      <vx-tooltip :text="user.name" position="bottom">
                        <vs-avatar
                          :src="user.img"
                          size="30px"
                          class="-m-1 border-2 border-white border-solid"
                        ></vs-avatar>
                      </vx-tooltip>
                    </li>
                  </ul>
                  <small class="ml-2">+{{ post.likes - 5 }} more</small>
                </div>
                <div class="flex items-center">
                  <feather-icon
                    class="mr-2"
                    icon="MessageSquareIcon"
                    svgClasses="h-5 w-5"
                  ></feather-icon>
                  <span>{{ post.comments }}</span>
                </div>
              </div>
              <div class="mt-4 comments-container" v-if="post.usersCommented">
                <ul class="user-comments-list">
                  <li
                    v-for="(
                      commentedUser, commentIndex
                    ) in post.usersCommented.slice(0, 3)"
                    :key="commentIndex"
                    class="flex items-center mb-4 commented-user"
                  >
                    <div class="mr-3">
                      <vs-avatar
                        class="m-0"
                        :src="commentedUser.img"
                        size="30px"
                      />
                    </div>
                    <div class="leading-tight">
                      <p class="font-medium">{{ commentedUser.author }}</p>
                      <span class="text-xs">{{ commentedUser.comment }}</span>
                    </div>
                    <div class="ml-auto">
                      <div class="flex">
                        <feather-icon
                          icon="HeartIcon"
                          svgClasses="h-4 w-4"
                          class="mr-2 cursor-pointer"
                        ></feather-icon>
                        <feather-icon
                          icon="MessageSquareIcon"
                          svgClasses="h-4 w-4"
                          class="cursor-pointer"
                        ></feather-icon>
                      </div>
                    </div>
                  </li>
                </ul>
                <span
                  class="flex justify-end"
                  v-if="post.usersCommented.length > 3"
                >
                  <a class="inline-flex items-center text-sm" href>
                    <span>View All</span>
                    <feather-icon
                      :icon="$vs.rtl ? 'ChevronsLeftIcon' : 'ChevronsRightIcon'"
                      svgClasses="h-4 w-4"
                    ></feather-icon>
                  </a>
                </span>
              </div>
              <div class="post-comment">
                <vs-textarea
                  label="Add Comment"
                  class="mb-2"
                  v-model="post.commentbox"
                />
                <vs-button size="small" @click="postComment(post)"
                  >Post Comment</vs-button
                >
              </div>
            </div>
          </div>
        </vx-card>
      </div>
    </div>
    <vs-card>
      <FormsTypesFanwallPost />
    </vs-card>
  </div>
</template>

<script>
import moment from 'moment'
import firebase from 'firebase'

export default {
  name: 'AppsEvents',
  props: {
    item_id: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      items: [],
      feature: {},
    }
  },
  computed: {
    item_unique() {
      return this.item_id ? this.item_id : this.$route.params.id
    },
    business() {
      return this.$store.state.business.active_business
    },
    user() {
      return this.$store.state.auth.main_user
    },
    currentDate() {
      return moment(Date.now()).format('LLLL')
    },
  },
  watch: {
    feature() {
      this.$fireStore
        .collection('business')
        .doc(this.feature.b_uid)
        .get()
        .then((snapshot) => {
          const document = snapshot.data()
          let payload = snapshot.data()
          payload.b_uid = doc.id
          this.$store.commit('business/UPDATE_BUSINESS_INFO')
          this.$store.commit('business/UPDATE_MAIN_BUSINESS_SET')

          // do something with document
        })
    },
  },

  created() {
    console.log('thi', this.business)
    let vm = this
    if (!this.business) {
      this.$fireStore
        .collection('apps')
        .doc('Fanwall')
        .collection('app')
        .doc(this.item_unique)
        .get()
        .then((snapshot) => {
          const document = snapshot.data()
          this.feature = snapshot.data()
          // do something with document
        })
    }

    this.$nuxt.$on('send-data', (data) => {
      //Do Something
      console.log('data', data)
      if (this.user) {
        data.u_uid = this.user.uid
      }

      let payload = {
        uid: this.user.uid,
        customer_name: this.user.name,
        customer_surname: this.user.surname,
        author: this.user.disp_name,
        time: this.currentDate,
        isLiked: false,
        text: data.posts[0].textarea,
        title: data.title,
        imgs: data.posts[0].imgs,
        posts: data.posts,
        media: 'image',
        likes: 0,
        comments: 0,
        usersLiked: [],
        commentbox: '',
        usersCommented: [],
        created_date: moment().format('DD-MM-YYYY'),
        created_month: moment().format('MM-YYYY'),
        t_stamp: Date.now(),
        wall_id: this.item_unique,
      }

      this.$fireStore
        .collection('apps')
        .doc('FanwallSingle')
        .collection('app')
        .add(payload)
        .then(() => {
          this.success()
        })
        .catch((err) => {
          this.failure(err)
        })
    })

    let ref = this.$fireStore
      .collection('apps')
      .doc('FanwallSingle')
      .collection('app')
      .where('wall_id', '==', this.item_unique)
      .orderBy('t_stamp')

    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          let doc = change.doc
          let data = doc.data()
          data.id = doc.id

          vm.items.push(data)
        }
      })
    })
  },
  methods: {
    postComment(post) {
      let vm = this
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].id == post.id) {
          console.log('Im in')
          this.items[i].usersCommented.push({
            comment: post.commentbox,
            author: vm.user.disp_name,
            img: vm.user.avatar,
            time: vm.currentDate,
          })
        }
      }

      let addingInformation = this.$fireStore
        .collection('apps')
        .doc('FanwallSingle')
        .collection('app')
        .doc(post.id)

      addingInformation.update({
        usersCommented: firebase.firestore.FieldValue.arrayUnion({
          comment: post.commentbox,
          author: vm.user.disp_name,
          img: vm.user.avatar,
          time: vm.currentDate,
        }),

        comments: 1 + post.comments,
      })
      this.success()
    },
    success() {
      this.$vs.notify({
        text: 'Posted',
        title: 'Success',
        color: 'success',
      })
    },
    failure(err) {
      this.$vs.notify({
        text: `${err}`,
        title: 'Oops',
        color: 'danger',
      })
    },
  },
}
</script>
