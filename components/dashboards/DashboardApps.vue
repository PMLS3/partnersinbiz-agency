<!-- =========================================================================================
    File Name: Dashboard.vue.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
  TODO: if not coming from front business, change
========================================================================================== -->

<template>
  <div id="knowledge-base-page" class="background-dash">
    <!-- JUMBOTRON -->
    <div class="mb-4 knowledge-base-jumbotron">
      <div class="p-8 pt-24 bg-gray-700 bg-opacity-75 rounded">
        <p class="text-white">
          {{ motivational_quotes }}
        </p>
        <vs-input
          icon-no-border
          placeholder="Search Topic or Keyword"
          v-model="knowledgeBaseSearchQuery"
          icon-pack="feather"
          icon="icon-search"
          size="large"
          class="w-full mt-6"
        />
        <vs-button
          radius
          type="filled"
          icon="all_out"
          class="float-right mt-1/9"
          @click="popupActivo = true"
        ></vs-button>
        <vs-popup
          fullscreen
          :title="$route.params.id"
          :active.sync="popupActivo"
        >
          <KanbanTodo :type="$route.params.id" v-if="popupActivo" />
        </vs-popup>
      </div>
    </div>

    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div
        class="w-full vx-col md:w-1/5 sm:w-1/2 mb-base min-h-250"
        v-for="item in filteredKB"
        :key="item.id"
      >
        <UiCardSimple :item="item" class="h-full" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, useContext, computed, onMounted } from '@nuxtjs/composition-api'
export default {
  name: 'dashboardApps',
  setup() {
    const { store } = useContext()
    onMounted(() => {
      store.commit('business/UPDATE_BUSINESS_INFO', business.value)
    })
    let knowledgeBaseSearchQuery = ref('')
    let popupActivo = ref(false)
    const kb = ref([
      {
        title: 'Builders',
        description: 'Page, Email, Forms and Social Media builders...',
        graphic: require('@/assets/illustrations/abstract.svg'),
        go_to_url: '/dashboardBuilders',
      },
      {
        title: 'Events',
        description: 'Create Event Calendars for all your awesome events',
        graphic: require('@/assets/illustrations/online_calendar.svg'),
        go_to_url: '/dashboardAppsEvents',
      },
      {
        title: 'Around Us',
        description: 'Show users places, events around their location',
        graphic: require('@/assets/illustrations/location_search.svg'),
        go_to_url: '/dashboardAppsAroundUs',
      },
      {
        title: 'Blog',
        description: 'Share your knowledge',
        graphic: require('@/assets/illustrations/personal_notebook.svg'),
        go_to_url: '/dashboardAppsBlog',
      },
      {
        title: 'Contacts',
        description:
          'Create Contact lists to be used all over for effective communication',
        graphic: require('@/assets/illustrations/everywhere_together.svg'),
        go_to_url: '/dashboardAppsContacts',
      },
      {
        title: 'eCommerce',
        description:
          'It is all online, advertise and sell your digital and physical products as well as services',
        graphic: require('@/assets/illustrations/web_shopping.svg'),
        go_to_url: '/dashboardAppsEcommerce',
      },
      {
        title: 'Email Photo',
        description: 'Gather photos from your users',
        graphic: require('@/assets/illustrations/taking_selfie.svg'),
        go_to_url: '/dashboardAppsEmailPhoto',
      },
      {
        title: 'Fan Wall',
        description: 'Up the engagement with your own Fan Wall!',
        graphic: require('@/assets/illustrations/browsing_online.svg'),
        go_to_url: '/dashboardAppsFanwall',
      },
      {
        title: 'Image Gallery',
        description: 'Illustrate your images',
        graphic: require('@/assets/illustrations/online_gallery.svg'),
        go_to_url: '/dashboardAppsImageGallery',
      },
      {
        title: 'Info Tier',
        description: 'A lot of knowledge to be shared',
        graphic: require('@/assets/illustrations/add_notes.svg'),
        go_to_url: '/dashboardAppsInfoTier',
      },
      {
        title: 'Real Estate',
        description: 'Run your own real estate portfolio',
        graphic: require('@/assets/illustrations/apartment_rent.svg'),
        go_to_url: '/dashboardAppsRealEstate',
      },
      {
        title: 'Mailing List',
        description: 'Create Sign up forms to your mailing lists',
        graphic: require('@/assets/illustrations/files_sent.svg'),
        go_to_url: '/dashboardAppsMailingList',
      },
      {
        title: 'Documents',
        description: 'Create a central storage for all your documents',
        graphic: require('@/assets/illustrations/add_documents.svg'),
        go_to_url: '/dashboardAppsDocuments',
      },
      {
        title: 'Loyalty',
        description: 'Reward your loayla customers with a loyalty scheme',
        graphic: require('@/assets/illustrations/send_gift.svg'),
        go_to_url: '/dashboardAppsLoyalty',
      },
      {
        title: 'Videos',
        description: 'Upload your Videos to showcase',
        graphic: require('@/assets/illustrations/online_video.svg'),
        go_to_url: '/dashboardAppsVideos',
      },
      {
        title: 'Music',
        description: 'Upload your Music to showcase',
        graphic: require('@/assets/illustrations/music.svg'),
        go_to_url: '/dashboardAppsMusic',
      },
      {
        title: 'Golf',
        description: 'How far to the pin?',
        graphic: require('@/assets/illustrations/golf.svg'),
        go_to_url: '/dashboardAppsGolf',
      },
      {
        title: 'Drawing Board',
        description: 'Multi User Drawing boards!',
        graphic: require('@/assets/illustrations/predictive_analytics.svg'),
        go_to_url: '/dashboardAppsDrawingBoard',
      },
      {
        title: 'Radio',
        description: 'Create your own station and playlists',
        graphic: require('@/assets/illustrations/listening.svg'),
        go_to_url: '/dashboardAppsRadio',
      },
      {
        title: 'Classroom',
        description:
          'Education is key, and we have your classroom needs covered',
        graphic: require('@/assets/illustrations/exams.svg'),
        go_to_url: '/dashboardAppsClassroom',
      },
      {
        title: 'Video Call',
        description: 'Conference call to a whole new level',
        graphic: require('@/assets/illustrations/group_video.svg'),
        go_to_url: '/dashboardAppsVideoCall',
      },
      {
        title: 'Alert Button',
        description:
          'Feeling Stressed? Need urgent assistance? Let all know where you are!',
        graphic: require('@/assets/illustrations/my_location.svg'),
        go_to_url: '/dashboardAppsAlertButton',
      },
      {
        title: 'Project Management',
        description: 'Kanban style management tool',
        graphic: require('@/assets/illustrations/our_solution.svg'),
        go_to_url: '/dashboardAppsProjectManagement',
      },
      {
        title: 'Broadcaster',
        description: 'Your own broadcast station',
        graphic: require('@/assets/illustrations/podcast.svg'),
        go_to_url: '/dashboardAppsBroadcast',
      },
    ])
    const user = computed(() => store.state.auth.main_user)
    let filteredKB = computed(() => {
      return kb.value.filter(
        (item) =>
          item.title
            .toLowerCase()
            .includes(knowledgeBaseSearchQuery.value.toLowerCase()) ||
          item.description
            .toLowerCase()
            .includes(knowledgeBaseSearchQuery.value.toLowerCase())
      )
    })
    let motivational_quotes = computed(() => {
      let num = Math.floor(Math.random() * 55)
      return store.state.info.motivational_quotes[num]
    })

    let business = computed(() => {
      return store.state.business.main_business
    })
    return {
      knowledgeBaseSearchQuery,
      kb,
      filteredKB,
      motivational_quotes,
      business,
      popupActivo,
    }
  },

  //   created() {
  //     this.$store.commit("business/UPDATE_BUSINESS_INFO", this.business);
  //   }
}
</script>

<style lang="scss" scoped>
.knowledge-base-jumbotron-content {
  background-image: url('../../assets/images/background/night.jpeg');
  background-size: cover;
}
.background-dash {
  background-image: url('../../assets/images/pages/vuexy-login-bg.jpg');
}
</style>
