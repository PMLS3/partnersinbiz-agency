<!-- =========================================================================================
    File Name: Dashboard.vue.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
  TODO: if not coming from front business, change
========================================================================================== -->

<template>
  <div id="knowledge-base-page">
    <!-- KNOWLEDGE BASE CARDS  -->

    <DashboardAppsSocial />
    <!-- <div class="knowledge-base-jumbotron">
      <div
        class="p-8 rounded-lg knowledge-base-jumbotron-content lg:p-32 md:p-24 sm:p-16 mb-base"
      >
        <h1 class="mb-1 text-white">Social Management</h1>
        <h2 class="text-xl leading-tight text-white font-semibild">
          Manage all your social media campaigns
        </h2>

        <vs-input
          icon-no-border
          placeholder="Search Topic or Keyword"
          v-model="knowledgeBaseSearchQuery"
          icon-pack="feather"
          icon="icon-search"
          size="large"
          class="w-full mt-6"
        />
        <div class="flex items-center justify-between py-2">
          <div class="flex items-center">
            <p class="text-white">
              {{ motivational_quotes }}
            </p>
          </div>
          <div class="flex">
           
            <vs-tooltip text="Let us know what you want!" position="top">
              <vs-button
                type="filled"
                icon="live_help"
                class="float-right ml-2"
                @click="popupActivo = true"
              ></vs-button>
            </vs-tooltip>
            <vs-popup
              fullscreen
              :title="$route.params.id"
              :active.sync="popupActivo"
            >
              <KanbanTodo :type="$route.params.id" v-if="popupActivo" />
            </vs-popup>
          </div>
        </div>
      </div>
    </div>

    <div class="vx-row">
      <div
        class="w-full vx-col md:w-1/3 sm:w-1/2 mb-base min-h-250"
        v-for="item in filteredKB"
        :key="item.id"
      >
        <UiCardSimple :item="item" class="h-full" />
      </div>
    </div> -->
  </div>
</template>

<script>
import { ref, useContext, computed, onMounted } from '@nuxtjs/composition-api'
export default {
  name: 'dashboardMain',
  setup() {
    const { store } = useContext()
    onMounted(() => {
      store.commit('business/UPDATE_BUSINESS_INFO', business.value)
      store.commit('navbar/SET_BRANCH_SELECTOR', true)
    })
    let knowledgeBaseSearchQuery = ref('')
    let popupActivo = ref(false)
    const item = ref({
      item: 'dashboardSocialMedia',
      title: 'Social Media',
      type: 'Category',
    })
    const kb = ref([
      {
        id: 1,
        title: 'Twitter',
        description: 'Update business info, create goups and more...',
        graphic: require('@/assets/illustrations/viral_tweet.svg'),
        go_to_url: '/dashboardAppsTwitter',
      },
      {
        id: 2,
        title: 'Facebook',
        description:
          'See your sales activity, orders, shipments from one place',
        graphic: require('@/assets/illustrations/social_growth.svg'),
        go_to_url: '/dashboardAppsFacebook',
      },
      {
        id: 3,
        title: 'Instagram',
        description:
          'Create Marketing campaigns, assign staff to run with projects',
        graphic: require('@/assets/illustrations2/loving_it.svg'),
        go_to_url: '/dashboardAppsInstagram',
      },
      // {
      //   id: 4,
      //   title: 'Linkedin',
      //   description:
      //     'Create Marketing campaigns, assign staff to run with projects',
      //   graphic: require('@/assets/illustrations/social_ideas.svg'),
      //   go_to_url: '/dashboardAppsLinkedin',
      // },
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
      return store.state.business.active_business
    })
    return {
      knowledgeBaseSearchQuery,
      kb,
      filteredKB,
      motivational_quotes,
      business,
      popupActivo,
      item,
    }
  },
}
</script>

<style lang="scss" scoped>
.knowledge-base-jumbotron-content {
  background-image: url('../../assets/images/background/night.jpeg');

  background-size: cover;
}
</style>
