<!-- =========================================================================================
  File Name: Fanwall.vue
  Description: Fanwall Page
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div id="profile-page">
    <div class="con-tab-ejemplo">
      <!-- COL AREA -->
      <div class="vx-row">
        <!-- COL 2 -->
        <div class="w-full vx-col">
          <!-- <div class="w-full vx-col lg:w-1/2"> -->
          <h1>{{ schema.title }}</h1>
          <vs-button
            @click="popupActivo = true"
            color="primary"
            type="filled"
            class="customizer-btn"
            icon-pack="feather"
            icon="icon-settings"
          />
          <vx-card
            class="mt-base"
            v-for="(post, index) in usersPosts"
            :key="index"
          >
            <div>
              <!-- POST HEADER -->
              <div class="flex justify-between mb-4 post-header">
                <div class="flex items-center">
                  <div>
                    <vs-avatar
                      class="m-0"
                      :src="post.a_avatar"
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
                <div v-html="post.text">{{ post.text }}</div>
              </div>
              <div class="mt-4 mb-6 post-media-container">
                <!-- <ul class="flex post-media-list">
              <li class="w-full m-1 post-media" v-for="(media, mediaIdex) in post.media.slice(0, 2)" :key="mediaIdex">-->
                <img
                  class="rounded responsive"
                  :src="post.image"
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
                <div class="mt-4 comments-container">
                  <ul class="user-comments-list" v-if="post.usersCommented">
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
                        <p class="font-medium">
                          {{ commentedUser.author }}
                        </p>
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
                  <div v-if="post.usersCommented">
                    <span
                      class="flex justify-end"
                      v-if="post.usersCommented.length > 3"
                    >
                      <a class="inline-flex items-center text-sm" href>
                        <span>View All</span>
                        <feather-icon
                          :icon="
                            $vs.rtl ? 'ChevronsLeftIcon' : 'ChevronsRightIcon'
                          "
                          svgClasses="h-4 w-4"
                        ></feather-icon>
                      </a>
                    </span>
                  </div>
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

      <vs-popup
        class="holamundo"
        title="Create your message"
        :active.sync="popupActivo"
      >
        <div class="px-6">
          <FormGenerator :schema="schemaForm" v-model="formData" />

          <br />
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button color="primary" type="gradient" @click="addPost()"
                >Submit</vs-button
              >
              <!-- <vs-button color="danger" type="gradient" @click="goBack">Cancel</vs-button> -->
            </vs-row>
          </div>
          <vs-divider color="primary" icon="check"></vs-divider>
          <br />
        </div>
        <vs-card actionable class="px-6" v-if="preview">
          <div class="flex justify-between px-6 mb-4 post-header">
            <div class="flex items-center">
              <div>
                <vs-avatar
                  class="m-0"
                  :src="activeUserInfo.avatar"
                  size="45px"
                ></vs-avatar>
              </div>
              <div class="ml-4">
                <h6>{{ activeUserInfo.disp_name }}</h6>
                <small>{{ currentDate }}</small>
                <!-- <small>{{ Date.now() }} at {{ post.time | time }}</small> -->
              </div>
            </div>
            <div class="flex">
              <feather-icon
                class="ml-4"
                icon="HeartIcon"
                :svgClasses="{
                  'text-danger fill-current stroke-current': false,
                }"
              ></feather-icon>
            </div>
          </div>
          <div class="px-6 post-content">
            <p>
              <b>{{ formData.title }}</b>
            </p>
          </div>
          <!-- POST CONTENT -->
          <div class="px-6 post-content">
            <div v-html="formData.desc">{{ formData.desc }}</div>
          </div>
          <div class="px-6 mt-4 mb-6 post-media-container">
            <ul class="flex post-media-list">
              <div v-if="formData.image">
                <li
                  class="w-full m-1 post-media"
                  v-for="(media, mediaIdex) in formData.image"
                  :key="mediaIdex"
                >
                  <img
                    class="rounded responsive"
                    :src="media"
                    alt="user-upload"
                  />
                </li>
              </div>
            </ul>
          </div>
        </vs-card>
      </vs-popup>
    </div>
  </div>
</template>

<script>
// import { videoPlayer } from 'vue-video-player'
// import addData from "./addData";
// import 'video.js/dist/video-js.css'
import firebase from 'firebase'
import moment from 'moment'
export default {
  components: {
    // videoPlayer,
    // addData
  },
  props: ['schema'],
  data() {
    return {
      isNavOpen: false,

      currentDate: moment(Date.now()).format('LLLL'),
      loadMore: false,
      formData: {},

      mediaExtensions: {
        img: ['jpg', 'jpeg', 'png', 'bmp', 'gif', 'exif', 'tiff'],
        video: ['avi', 'flv', 'wmv', 'mov', 'mp4', '3gp'],
      },
      popupActivo: false,
      usersPosts: [],
      userPosts: [],
      preview: false,
    }
  },
  watch: {
    formData: function () {
      console.log('form', this.formData)
      if (this.formData) {
        if (this.formData.title || this.formData.desc || this.formData.image) {
          this.preview = true
        }
      }
    },
  },
  computed: {
    schemaForm() {
      return [
        {
          title: 'TextInput',
          placeholder: 'Title',
          label: 'Title',
          name: 'title',
        },

        {
          title: 'QuilEditor',
          name: 'desc',
          label: 'Message',
          placeholder: 'Message',
        },
        {
          title: 'ImageUpload',
          placeholder: 'Add Image',
          label: 'Add Image',
          name: 'image',
        },
      ]
    },
    activeBusinessInfo() {
      return this.$store.state.business.app_active_business
    },
    activeUserInfo() {
      return this.$store.state.user.app_active_user
    },
    mediaType() {
      return (media) => {
        if (media.img) {
          const ext = media.img.split('.').pop()
          if (this.mediaExtensions.img.includes(ext)) return 'image'
        } else if (media.sources && media.poster) {
          // other validations
          return 'video'
        }
      }
    },
    playerOptions() {
      return (media) => {
        return {
          height: '360',
          fluid: true,
          autoplay: false,
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: media.sources,
          poster: media.poster,
        }
      }
    },
  },
  methods: {
    addPost() {
      let messageInfo = this.formData

      let extraInfo = {
        uid: firebase.auth().currentUser.uid,
        a_avatar: this.activeUserInfo.avatar,
        author: this.activeUserInfo.disp_name,
        time: this.currentDate,
        isLiked: false,
        text: this.formData.desc,
        image: this.formData.image,
        title: this.formData.title,
        media: 'image',
        likes: 0,
        comments: 0,
        usersLiked: [],
        commentbox: '',
        usersCommented: [],
        date: moment().format('DD-MM-YYYY'),
        month: moment().format('MM-YYYY'),
        t_stamp: Date.now(),
      }

      let addingInformation

      addingInformation = this.$fireStore
        .collection('apps')
        .doc('apps')
        .collection(this.activeBusinessInfo.b_uid)
        .doc(this.schema.title)
        .collection(this.schema.title)
        .doc(this.schema.id)
        .collection('added')

      addingInformation.add(extraInfo)
      this.successUpload()
      this.popupActivo = false
    },
    postComment(post) {
      let vm = this
      let routeID = this.routeID
      let addingInformation
      for (let i = 0; i < this.usersPosts.length; i++) {
        if (this.usersPosts[i].id == post.id) {
          this.usersPosts[i].usersCommented.push({
            comment: post.commentbox,
            author: vm.activeUserInfo.disp_name,
            img: vm.activeUserInfo.avatar,
            time: vm.currentDate,
          })
        }
      }

      addingInformation = this.$fireStore
        .collection('apps')
        .doc('apps')
        .collection(this.activeBusinessInfo.b_uid)
        .doc(this.schema.title)
        .collection(this.schema.title)
        .doc(this.schema.id)
        .collection('added')
        .doc(post.id)

      addingInformation.update({
        usersCommented: firebase.firestore.FieldValue.arrayUnion({
          comment: post.commentbox,
          author: vm.activeUserInfo.disp_name,
          img: vm.activeUserInfo.avatar,
          time: vm.currentDate,
        }),

        comments: 1 + post.comments,
      })
      this.successUpload()
    },
    successUpload() {
      this.$vs.notify({
        color: 'success',
        title: 'Success',
        text: 'Message Sent!',
      })
    },

    loadContent() {
      this.$vs.loading({
        background: this.backgroundLoading,
        color: this.colorLoading,
        container: '#button-load-more-posts',
        scale: 0.45,
      })
      setTimeout(() => {
        this.$vs.loading.close('#button-load-more-posts > .con-vs-loading')
      }, 3000)
    },
  },

  created() {
    console.log('company', this.companyDetails)
    let myUsers = []
    let getFanWalls
    let routeID = this.routeID

    getFanWalls = this.$fireStore
      .collection('apps')
      .doc('apps')
      .collection(this.activeBusinessInfo.b_uid)
      .doc(this.schema.title)
      .collection(this.schema.title)
      .doc(this.schema.id)
      .collection('added')

    getFanWalls.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let doc = change.doc
        if (change.type === 'added') {
          this.usersPosts.push({
            id: doc.id,

            image: doc.data().image,
            uid: doc.data().uid,
            a_name: doc.data().a_name,
            a_surname: doc.data().a_surname,
            a_avatar: doc.data().a_avatar,
            author: doc.data().author,
            time: doc.data().time,
            isLiked: doc.data().isLiked,
            title: doc.data().title,
            text: doc.data().text,
            likes: doc.data().likes,
            comments: doc.data().comments,
            usersLiked: doc.data().usersLiked,
            commentbox: doc.data().commentbox,
            usersCommented: doc.data().usersCommented,
            date: doc.data().date,
            month: doc.data().month,
            t_stamp: doc.data().t_stamp,
          })
        }
        if (change.type === 'modified') {
          for (let i = 0; i < this.usersPosts.length; i++) {
            if (this.usersPosts[i].id == change.doc.id) {
              this.usersPosts[i] = {
                id: doc.id,
                image: doc.data().image,
                uid: doc.data().uid,
                a_name: doc.data().a_name,
                a_surname: doc.data().a_surname,
                author: doc.data().author,
                time: doc.data().time,
                isLiked: doc.data().isLiked,
                title: doc.data().title,
                a_avatar: doc.data().a_avatar,
                text: doc.data().text,
                likes: doc.data().likes,
                comments: doc.data().comments,
                usersLiked: doc.data().usersLiked,
                commentbox: doc.data().commentbox,
                usersCommented: doc.data().usersCommented,
                date: doc.data().date,
                month: doc.data().month,
                t_stamp: doc.data().t_stamp,
              }
              console.log('after', this.usersPosts)
            }
          }
        }
        if (change.type === 'removed') {
          console.log('Removed city: ', change.doc.data())
        }
      })
    })
    // }
  },
  mounted() {
    this.wasSidebarOpen = this.$store.state.reduceButton
    this.$store.commit('TOGGLE_REDUCE_BUTTON', true)
  },
  beforeDestroy() {
    if (!this.wasSidebarOpen) this.$store.commit('TOGGLE_REDUCE_BUTTON', false)
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/vuexy/pages/profile.scss';
.customizer-btn {
  position: fixed;
  top: 50%;
  right: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  z-index: 50000;

  .vs-icon {
    animation: spin 1.5s linear infinite;
  }
}
</style>
