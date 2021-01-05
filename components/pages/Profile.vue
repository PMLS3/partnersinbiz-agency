<!-- =========================================================================================
  File Name: Profile.vue
  Description: Profile Page
  ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div id="profile-page">
    <!-- PROFILE HEADER -->
    <div class="profile-header">
      <div class="relative">
        <UiImageCover :user="user" :user_info="user_info" />
        <div class="pointer-events-none profile-img-container">
          <div>
            <UiImageUserAvatar :avatar="user.avatar" />
          </div>
          <div class="flex pointer-events-auto profile-actions">
            <vs-button
              icon-pack="feather"
              radius
              icon="icon-edit-2"
              @click="$router.push('/userSettings')"
            ></vs-button>
            <vs-button
              icon-pack="feather"
              radius
              icon="icon-settings"
              class="ml-2 lg:ml-4"
            ></vs-button>
          </div>
        </div>
      </div>
      <div
        class="flex flex-wrap items-center justify-end p-6 profile-header-nav"
      >
        <div class="block sm:hidden">
          <feather-icon
            @click="isNavOpen = !isNavOpen"
            icon="AlignJustifyIcon"
            v-show="!isNavOpen"
            class="cursor-pointer vx-navbar-toggler"
          />
          <feather-icon
            icon="XIcon"
            v-show="isNavOpen"
            @click="isNavOpen = !isNavOpen"
            class="cursor-pointer vx-navbar-toggler"
          />
        </div>
        <div
          :class="isNavOpen ? 'block' : 'hidden'"
          class="flex-grow w-full sm:flex sm:items-center sm:w-auto"
        >
          <div class="text-sm sm:flex-grow">
            <div
              class="justify-around w-full mt-8 sm:flex md:mt-0 md:ml-auto md:w-3/4"
            >
              <div class="p-2 sm:p-0">
                <vs-button
                  color="primary"
                  type="flat"
                  @click="viewContent = 'Timeline'"
                  >Timeline</vs-button
                >
              </div>
              <div class="p-2 sm:p-0">
                <vs-button
                  color="primary"
                  type="flat"
                  @click="viewContent = 'About'"
                  >About</vs-button
                >
              </div>
              <div class="p-2 sm:p-0">
                <vs-button
                  color="primary"
                  type="flat"
                  @click="viewContent = 'Photos'"
                  >Photos</vs-button
                >
              </div>
              <div class="p-2 sm:p-0">
                <vs-button
                  color="primary"
                  type="flat"
                  @click="viewContent = 'Friends'"
                  >Friends</vs-button
                >
              </div>
              <div class="p-2 sm:p-0">
                <vs-button
                  color="primary"
                  type="flat"
                  @click="viewContent = 'Videos'"
                  >Videos</vs-button
                >
              </div>
              <div class="p-2 sm:p-0">
                <vs-button
                  color="primary"
                  type="flat"
                  @click="viewContent = 'Events'"
                  >Events</vs-button
                >
              </div>
              <div class="p-2 sm:p-0">
                <vs-button
                  color="primary"
                  type="flat"
                  @click="viewContent = 'Business'"
                  >Business</vs-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <vx-navbar> -->
      <!-- </vx-navbar> -->
    </div>
    <div v-if="viewContent == 'Business'">
      <vs-button
        type="flat"
        icon="add_business"
        @click="uploadBusiness = !uploadBusiness"
        >Register Business</vs-button
      >
      <vs-card class="p-3" v-if="uploadBusiness">
        <FormsTypesRegisterCompany v-on:uploaded="uploaded" />
      </vs-card>
      <div class="vx-row">
        <div
          class="w-full vx-col md:w-1/3 sm:w-1/2 mb-base min-h-250"
          v-for="(item, index) in items"
          :key="index"
        >
          <CardSimple :item="item" />
        </div>
      </div>
    </div>

    <!-- COL AREA -->
    <div class="vx-row" v-if="viewContent == 'Timeline'">
      <!-- COL 1 -->
      <div class="w-full vx-col lg:w-1/4">
        <!-- ABOUT CARD -->
        <UiMiscUserBio :user="user" />

        <!-- PAGES SUGGESTION -->
        <UiMiscSuggestionsPage :suggestedPages="suggestedPages" />

        <!-- TWITER FEEDS -->
        <UiSocialTwitterFeeds :twitterFeeds="twitterFeeds" />
      </div>

      <!-- COL 2 -->
      <div class="w-full vx-col lg:w-1/2">
        <UiSocialUserPosts
          :userPosts="userPosts"
          :userLatestPhotos="userLatestPhotos"
        />
      </div>

      <!-- COL 3 -->
      <div class="w-full vx-col lg:w-1/4">
        <UiImageGrid :userLatestPhotos="userLatestPhotos" />

        <UiMiscSuggestionsFriends :suggestedFriends="suggestedFriends" />

        <UiMiscPolls :polls="polls" />
      </div>
    </div>

    <!-- <div class="vx-row">
      <div class="w-full vx-col">
        <div class="flex justify-center mt-base">
          <vs-button
            id="button-load-more-posts"
            class="vs-con-loading__container"
            @click="loadContent"
            >Load More</vs-button
          >
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
// import { videoPlayer } from 'vue-video-player'
// import 'video.js/dist/video-js.css'

export default {
  name: 'Profile',
  data() {
    return {
      isNavOpen: false,
      viewContent: 'Timeline',
      uploadBusiness: false,
      userPoll: '',
      user_info: {
        profile_img: require('@/assets/images/profile/user-uploads/user-13.jpg'),
        cover_img: require('@/assets/images/profile/user-uploads/cover.jpg'),
      },
      mediaExtensions: {
        img: ['jpg', 'jpeg', 'png', 'bmp', 'gif', 'exif', 'tiff'],
        video: ['avi', 'flv', 'wmv', 'mov', 'mp4', '3gp'],
      },
      suggestedFriends: [
        {
          name: 'Carissa Dolle',
          avatar: require('@/assets/images/portrait/small/avatar-s-5.jpg'),
          mutualFriends: 6,
        },
        {
          name: 'Liliana Pecor',
          avatar: require('@/assets/images/portrait/small/avatar-s-6.jpg'),
          mutualFriends: 3,
        },
        {
          name: 'Isidra Strunk',
          avatar: require('@/assets/images/portrait/small/avatar-s-7.jpg'),
          mutualFriends: 2,
        },
        {
          name: 'Gerald Licea',
          avatar: require('@/assets/images/portrait/small/avatar-s-8.jpg'),
          mutualFriends: 1,
        },
        {
          name: 'Kelle Herrick',
          avatar: require('@/assets/images/portrait/small/avatar-s-9.jpg'),
          mutualFriends: 1,
        },
        {
          name: 'Cesar Lee',
          avatar: require('@/assets/images/portrait/small/avatar-s-10.jpg'),
          mutualFriends: 1,
        },
        {
          name: 'John Doe',
          avatar: require('@/assets/images/portrait/small/avatar-s-11.jpg'),
          mutualFriends: 1,
        },
        {
          name: 'Tonia Seabold',
          avatar: require('@/assets/images/portrait/small/avatar-s-12.jpg'),
          mutualFriends: 1,
        },
      ],
      userLatestPhotos: [
        require('@/assets/images/profile/user-uploads/user-01.jpg'),
        require('@/assets/images/profile/user-uploads/user-02.jpg'),
        require('@/assets/images/profile/user-uploads/user-04.jpg'),
        require('@/assets/images/profile/user-uploads/user-03.jpg'),
        require('@/assets/images/profile/user-uploads/user-05.jpg'),
        require('@/assets/images/profile/user-uploads/user-06.jpg'),
        require('@/assets/images/profile/user-uploads/user-07.jpg'),
        require('@/assets/images/profile/user-uploads/user-08.jpg'),
        require('@/assets/images/profile/user-uploads/user-09.jpg'),
      ],
      userPosts: [
        {
          author: 'Leeanna Alvord',
          time: 'Mon Dec 12 2018 07:46:05 GMT+0000 (GMT)',
          isLiked: true,
          text:
            'I love jujubes wafer pie ice cream tiramisu. Chocolate I love pastry pastry sesame snaps wafer. Pastry topping biscuit lollipop topping I love lemon drops sweet roll bonbon. Brownie donut icing.',
          media: [{ img: require('@/assets/images/profile/post-media/2.jpg') }],
          likes: 145,
          comments: 77,
          usersLiked: [
            {
              name: 'Trina Lynes',
              img: require('@/assets/images/portrait/small/avatar-s-1.jpg'),
            },
            {
              name: 'Lilian Nenez',
              img: require('@/assets/images/portrait/small/avatar-s-2.jpg'),
            },
            {
              name: 'Alberto Glotzbach',
              img: require('@/assets/images/portrait/small/avatar-s-3.jpg'),
            },
            {
              name: 'George Nordick',
              img: require('@/assets/images/portrait/small/avatar-s-4.jpg'),
            },
            {
              name: 'Vennie Mostowy',
              img: require('@/assets/images/portrait/small/avatar-s-5.jpg'),
            },
          ],
          commentbox: '',
          usersCommented: [
            {
              comment: 'orthoplumbate morningtide naphthaline exarteritis',
              author: 'Kitty Allanson',
              img: require('@/assets/images/portrait/small/avatar-s-6.jpg'),
              time: 'Mon Dec 10 2018 08:56:05 GMT+0000 (GMT)',
            },
            {
              comment: 'blockiness pandemy metaxylene speckle coppy',
              author: 'Jeanie Bulgrin',
              img: require('@/assets/images/portrait/small/avatar-s-8.jpg'),
              time: 'Mon Dec 10 2018 08:55:00 GMT+0000 (GMT)',
            },
          ],
        },
        {
          author: 'Leeanna Alvord',
          time: 'Mon Dec 11 2018 08:05:05 GMT+0000 (GMT)',
          isLiked: false,
          text:
            'Candy jelly beans powder brownie biscuit. Jelly marzipan oat cake cake. Cupcake I love wafer cake. Halvah I love powder jelly I love cheesecake cotton candy tiramisu brownie.',
          media: [
            { img: require('@/assets/images/profile/post-media/25.jpg') },
          ],
          likes: 276,
          comments: 105,
          usersLiked: [
            {
              name: 'Lai Lewandowski',
              img: require('@/assets/images/portrait/small/avatar-s-6.jpg'),
            },
            {
              name: 'Elicia Rieske',
              img: require('@/assets/images/portrait/small/avatar-s-7.jpg'),
            },
            {
              name: 'Darcey Nooner',
              img: require('@/assets/images/portrait/small/avatar-s-8.jpg'),
            },
            {
              name: 'Julee Rossignol',
              img: require('@/assets/images/portrait/small/avatar-s-10.jpg'),
            },
            {
              name: 'Jeffrey Gerondale',
              img: require('@/assets/images/portrait/small/avatar-s-9.jpg'),
            },
          ],
          commentbox: '',
          usersCommented: [
            {
              comment: 'I love cupcake danish jujubes sweet.',
              author: 'Darcey Nooner',
              img: require('@/assets/images/portrait/small/avatar-s-8.jpg'),
              time: 'Mon Dec 11 2018 09:56:05 GMT+0000 (GMT)',
            },
            {
              comment: 'Wafer I love brownie jelly bonbon tart apple pie',
              author: 'Lai Lewandowski',
              img: require('@/assets/images/portrait/small/avatar-s-6.jpg'),
              time: 'Mon Dec 10 2018 09:50:00 GMT+0000 (GMT)',
            },
          ],
        },
        {
          author: 'Leeanna Alvord',
          time: 'Mon Dec 10 2018 12:05:05 GMT+0000 (GMT)',
          isLiked: false,
          text:
            'Wafer I love brownie jelly bonbon tart. Candy jelly beans powder brownie biscuit. Jelly marzipan oat cake cake.',
          media: [
            {
              sources: [
                {
                  type: 'video/mp4',
                  src: 'http://vjs.zencdn.net/v/oceans.mp4',
                },
              ],
              poster: 'https://goo.gl/xcCsDd',
            },
          ],
          likes: 269,
          comments: 98,
          usersLiked: [
            {
              name: 'Vennie Mostowy',
              img: require('@/assets/images/portrait/small/avatar-s-5.jpg'),
            },
            {
              name: 'Elicia Rieske',
              img: require('@/assets/images/portrait/small/avatar-s-7.jpg'),
            },
            {
              name: 'Julee Rossignol',
              img: require('@/assets/images/portrait/small/avatar-s-10.jpg'),
            },
            {
              name: 'Darcey Nooner',
              img: require('@/assets/images/portrait/small/avatar-s-8.jpg'),
            },
            {
              name: 'Elicia Rieske',
              img: require('@/assets/images/portrait/small/avatar-s-7.jpg'),
            },
          ],
          commentbox: '',
          usersCommented: [
            {
              comment: 'I love cupcake danish jujubes sweet.',
              author: 'Darcey Nooner',
              img: require('@/assets/images/portrait/small/avatar-s-8.jpg'),
              time: 'Mon Dec 11 2018 09:56:05 GMT+0000 (GMT)',
            },
            {
              comment: 'Wafer I love brownie jelly bonbon tart apple pie',
              author: 'Lai Lewandowski',
              img: require('@/assets/images/portrait/small/avatar-s-6.jpg'),
              time: 'Mon Dec 10 2018 09:50:00 GMT+0000 (GMT)',
            },
          ],
        },
      ],
      suggestedPages: [
        {
          img: require('@/assets/images/profile/pages/page-09.jpg'),
          title: 'Rockose',
          type: 'Company',
        },
        {
          img: require('@/assets/images/profile/pages/page-08.jpg'),
          title: "The Devil's",
          type: 'Clothing Store',
        },
        {
          img: require('@/assets/images/profile/pages/page-03.jpg'),
          title: 'The Magician',
          type: 'Public Figure',
        },
        {
          img: require('@/assets/images/profile/pages/page-02.jpg'),
          title: 'AC/DC',
          type: 'Music',
        },
        {
          img: require('@/assets/images/profile/pages/page-07.jpg'),
          title: 'eat hard',
          type: 'restaurant / bar',
        },
        {
          img: require('@/assets/images/profile/pages/page-04.jpg'),
          title: 'B4B',
          type: 'Beauty Store',
        },
        {
          img: require('@/assets/images/profile/pages/page-05.jpg'),
          title: 'Kylie Jenner',
          type: 'Public Figure',
        },
        {
          img: require('@/assets/images/profile/pages/page-01.jpg'),
          title: 'RDJ',
          type: 'Actor',
        },
        {
          img: require('@/assets/images/profile/pages/page-06.jpg'),
          title: 'Taylor Swift',
          type: 'Music',
        },
      ],
      polls: [
        {
          id: 59,
          title: 'Who is the best actor in Marvel Cinematic Universe?',
          options: [
            {
              text: 'RDJ',
              value: 'rdj',
              voted: 58,
              usersVoted: [
                {
                  name: 'Tonia Seabold',
                  avatar: require('@/assets/images/portrait/small/avatar-s-12.jpg'),
                },
                {
                  name: 'Carissa Dolle',
                  avatar: require('@/assets/images/portrait/small/avatar-s-5.jpg'),
                },
                {
                  name: 'Kelle Herrick',
                  avatar: require('@/assets/images/portrait/small/avatar-s-9.jpg'),
                },
                {
                  name: 'Len Bregantini',
                  avatar: require('@/assets/images/portrait/small/avatar-s-10.jpg'),
                },
                {
                  name: 'John Doe',
                  avatar: require('@/assets/images/portrait/small/avatar-s-11.jpg'),
                },
                {
                  name: 'Tonia Seabold',
                  avatar: require('@/assets/images/portrait/small/avatar-s-12.jpg'),
                },
                {
                  name: 'Dirk Fornili',
                  avatar: require('@/assets/images/portrait/small/avatar-s-2.jpg'),
                },
              ],
            },
            {
              text: 'Chris Hemsworth',
              value: 'chris hemsworth',
              voted: 16,
              usersVoted: [
                {
                  name: 'Liliana Pecor',
                  avatar: require('@/assets/images/portrait/small/avatar-s-6.jpg'),
                },
                {
                  name: 'Kasandra Nalevanko',
                  avatar: require('@/assets/images/portrait/small/avatar-s-1.jpg'),
                },
              ],
            },
            {
              text: 'mark ruffalo',
              value: 'mark ruffalo',
              voted: 8,
              usersVoted: [
                {
                  name: 'Lorelei Lacsamana',
                  avatar: require('@/assets/images/portrait/small/avatar-s-4.jpg'),
                },
              ],
            },
            {
              text: 'Chris Evans',
              value: 'chris evans',
              voted: 16,
              usersVoted: [
                {
                  name: 'Jeanie Bulgrin',
                  avatar: require('@/assets/images/portrait/small/avatar-s-8.jpg'),
                },
                {
                  name: 'Graig Muckey',
                  avatar: require('@/assets/images/portrait/small/avatar-s-3.jpg'),
                },
              ],
            },
          ],
        },
      ],
      twitterFeeds: [
        {
          authorAvatar: require('@/assets/images/portrait/small/avatar-s-12.jpg'),
          authorUsername: 'tiana59',
          authorDisplayName: 'Tiana Vercetti',
          content:
            'I love cookie chupa chups sweet tart apple pie chocolate bar. Jelly-o oat cake chupa chups.',
          tags: ['js', 'vuejs'],
          time: 'Mon Dec 12 2018 07:46:05 GMT+0000 (GMT)',
        },
        {
          authorAvatar: require('@/assets/images/portrait/small/avatar-s-12.jpg'),
          authorUsername: 'tiana59',
          authorDisplayName: 'Tiana Vercetti',
          content:
            'Carrot cake cake gummies I love I love tiramisu. Biscuit marzipan cookie lemon drops.',
          tags: ['python'],
          time: 'Mon Dec 11 2018 01:05:05 GMT+0000 (GMT)',
        },
        {
          authorAvatar: require('@/assets/images/portrait/small/avatar-s-12.jpg'),
          authorUsername: 'tiana59',
          authorDisplayName: 'Tiana Vercetti',
          content:
            'I love cookie chupa chups sweet tart apple pie chocolate bar. Jelly-o oat cake chupa chups .',
          tags: [],
          time: 'Mon Dec 10 2018 03:33:05 GMT+0000 (GMT)',
        },
        {
          authorAvatar: require('@/assets/images/portrait/small/avatar-s-12.jpg'),
          authorUsername: 'tiana59',
          authorDisplayName: 'Tiana Vercetti',
          content:
            'Muffin candy caramels. I love caramels tiramisu jelly. Pie I love wafer. Chocolate cake lollipop tootsie roll cake.',
          tags: ['django', 'vuejs'],
          time: 'Mon Dec 9 2018 08:47:05 GMT+0000 (GMT)',
        },
      ],
      wasSidebarOpen: null,
      items: [],
    }
  },
  computed: {
    user() {
      if (process.client) {
        return JSON.parse(localStorage.getItem('userInfo'))
          ? JSON.parse(localStorage.getItem('userInfo'))
          : this.$store.state.auth.main_user
      }
    },
    business() {
      if (process.client) {
        return JSON.parse(localStorage.getItem('businessInfo'))
          ? JSON.parse(localStorage.getItem('businessInfo'))
          : this.$store.state.business.main_business
      }
    },
    isUserLoggedIn() {
      return this.$store.state.auth.isUserLoggedIn
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
  created() {
    let getApps = this.$fireStore
      .collection('apps')
      .doc('info')
      .collection('general')

    getApps.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let doc = change.doc
        let itemDetails = {
          graphic: doc.data().logo,
          description: doc.data().description,
          title: doc.data().b_name,
          b_uid: doc.id,
        }
        let payload = {
          ...doc.data(),
          ...itemDetails,
          url: '/dashboardMain',
        }

        this.items.push(payload)
      })
    })
  },
  methods: {
    uploaded() {
      this.uploadBusiness = false
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
  components: {
    // videoPlayer
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

<style lang="scss">
@import '@/assets/scss/vuexy/pages/profile.scss';
</style>
