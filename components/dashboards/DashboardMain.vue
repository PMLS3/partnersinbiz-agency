<!-- =========================================================================================
    File Name: Dashboard.vue.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
  TODO: if not coming from front business, change
========================================================================================== -->

<template>
  <div id="knowledge-base-page">
    <!-- JUMBOTRON -->
    <div class="knowledge-base-jumbotron">
      <div
        class="p-8 rounded-lg knowledge-base-jumbotron-content lg:p-32 md:p-24 sm:p-16 mb-base"
      >
        <h1 class="mb-1 text-white">Run {{ business.b_name }} from here</h1>
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
        <vs-tooltip
          text="Let us know what you want!"
          class="float-right mt-2"
          position="top"
        >
          <vs-button
            type="filled"
            icon="live_help"
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

    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div
        class="w-full vx-col md:w-1/3 sm:w-1/2 mb-base min-h-250"
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
  name: 'dashboardMain',
  setup() {
    const { store, $fireStore } = useContext()
    onMounted(() => {
      store.commit('business/UPDATE_BUSINESS_INFO', business.value)
      console.log('cont', useContext())
    })
    let knowledgeBaseSearchQuery = ref('')
    let popupActivo = ref(false)
    const kb = ref([
      {
        id: 1,
        title: 'Business Settings',
        description: 'Update business info, create goups and more...',
        graphic: require('@/assets/illustrations/logic.svg'),
        go_to_url: '/dashboardBusinessSettings',
      },
      {
        id: 2,
        title: 'Clients',
        description: 'All your clients in one place',
        graphic: require('@/assets/illustrations/people_search.svg'),
        go_to_url: '/dashboardClients',
      },
      {
        id: 3,
        title: 'Sales',
        description:
          'See your sales activity, orders, shipments from one place',
        graphic: require('@/assets/illustrations/online_banking.svg'),
        go_to_url: '/dashboardSales',
      },
      {
        id: 4,
        title: 'Marketing',
        description:
          'Create Marketing campaigns, assign staff to run with projects',
        graphic: require('@/assets/illustrations/design_data.svg'),
        go_to_url: '/dashboardMarketing',
      },
      {
        id: 5,
        title: 'Communication',
        description: 'Talk is not that cheap, spread the message',
        graphic: require('@/assets/illustrations/business_chat.svg'),
        go_to_url: '/dashboardCommunication',
      },
      {
        id: 6,
        title: 'Accounting',
        description: 'Stay ontop of those numbers',
        graphic: require('@/assets/illustrations/calculator.svg'),
        go_to_url: '/dashboardAccounting',
      },
      {
        id: 7,
        title: 'Market Place',
        description:
          'Want to expand or get into something new? Check what we have installed for you',
        graphic: require('@/assets/illustrations/business_shop.svg'),
        go_to_url: '/dashboardMarketPlace',
      },
      {
        id: 8,
        title: 'Human Resources',
        description: 'The heart of your business is here',
        graphic: require('@/assets/illustrations/loving_story.svg'),
        go_to_url: '/dashboardHumanResource',
      },
      {
        id: 9,
        title: 'Analytics',
        description:
          'Sometimes its easier to see the bigger picture in a graph',
        graphic: require('@/assets/illustrations/business_plan.svg'),
        go_to_url: '/dashboardAnalytics',
      },
      {
        id: 10,
        title: 'Learn',
        description: 'Knowledge base... thats all',
        graphic: require('@/assets/illustrations/lightbulb_moment.svg'),
        go_to_url: '/dashboardLearn',
      },
      {
        id: 11,
        title: 'Apps',
        description: 'All the apps we have for you to Boom in the Online World',
        graphic: require('@/assets/illustrations/apps.svg'),
        go_to_url: '/dashboardApps',
      },
      {
        id: 12,
        title: 'Support',
        description: 'Run your support center from here',
        graphic: require('@/assets/illustrations/intense_feeling.svg'),
        go_to_url: '/dashboardSupport',
      },
      {
        id: 13,
        title: 'Suggestion/Request',
        description: 'Have feature request? Found a bug? Please let us know.',
        graphic: require('@/assets/illustrations/in_thoughts.svg'),
        go_to_url: '/dashboardRequest',
      },
      {
        id: 14,
        title: 'Lead Gen',
        description: 'Have feature request? Found a bug? Please let us know.',
        graphic: require('@/assets/illustrations/in_thoughts.svg'),
        go_to_url: '/dashboardLeadGen',
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
      return store.state.business.active_business
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
}
</script>

<style lang="scss">
.knowledge-base-jumbotron-content {
  background-image: url('../../assets/images/background/night.jpeg');

  background-size: cover;
}
</style>
