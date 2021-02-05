<!-- =========================================================================================
    File Name: Dashboard.vue.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
  TODO: if not coming from front business, change
========================================================================================== -->

<template>
  <div class="background-dash">
    <UiHeaderImageQuote />

    <div class="vx-row">
      <div
        class="w-full vx-col md:w-1/5 sm:w-1/2 mb-base min-h-250"
        v-for="item in filteredKB"
        :key="item.id"
      >
        <vs-tooltip :text="item.tooltip" position="top">
          <UiCardSimple :item="item" class="h-full" />
        </vs-tooltip>
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

    const kb = ref([
      {
        id: 1,
        title: 'Business Settings',
        tooltip: 'Update business info, create goups and more...',
        graphic: require('@/assets/illustrations/logic.svg'),
        go_to_url: '/dashboardBusinessSettings',
      },
      {
        id: 2,
        title: 'Clients',
        tooltip: 'All your clients in one place',
        graphic: require('@/assets/illustrations/people_search.svg'),
        go_to_url: '/dashboardClients',
      },
      {
        id: 3,
        title: 'Sales',
        tooltip: 'See your sales activity, orders, shipments from one place',
        graphic: require('@/assets/illustrations/online_banking.svg'),
        go_to_url: '/dashboardSales',
      },
      {
        id: 4,
        title: 'Marketing',
        tooltip:
          'Create Marketing campaigns, assign staff to run with projects',
        graphic: require('@/assets/illustrations/design_data.svg'),
        go_to_url: '/dashboardMarketing',
      },
      {
        id: 14,
        title: 'Lead Generation',
        tooltip: 'Generate leads, get contact details and more',
        graphic: require('@/assets/illustrations/collaboration.svg'),
        go_to_url: '/dashboardLeadGen',
      },
      {
        id: 5,
        title: 'Communication',
        tooltip: 'Talk is not that cheap, spread the message',
        graphic: require('@/assets/illustrations/business_chat.svg'),
        go_to_url: '/dashboardCommunication',
      },
      {
        id: 6,
        title: 'Accounting',
        tooltip: 'Stay ontop of those numbers',
        graphic: require('@/assets/illustrations/calculator.svg'),
        go_to_url: '/dashboardAccounting',
      },
      {
        id: 7,
        title: 'Market Place',
        tooltip:
          'Want to expand or get into something new? Check what we have installed for you',
        graphic: require('@/assets/illustrations/business_shop.svg'),
        go_to_url: '/dashboardMarketPlace',
        coming_soon: true,
      },
      {
        id: 8,
        title: 'Human Resources',
        tooltip: 'The heart of your business is here',
        graphic: require('@/assets/illustrations/loving_story.svg'),
        go_to_url: '/dashboardHumanResource',
        coming_soon: true,
      },
      {
        id: 9,
        title: 'Analytics',
        tooltip: 'Sometimes its easier to see the bigger picture in a graph',
        graphic: require('@/assets/illustrations/business_plan.svg'),
        go_to_url: '/dashboardAnalytics',
      },
      {
        id: 10,
        title: 'Learn',
        tooltip: 'Knowledge base... thats all',
        graphic: require('@/assets/illustrations/lightbulb_moment.svg'),
        go_to_url: '/dashboardLearn',
      },
      {
        id: 11,
        title: 'Apps',
        tooltip: 'All the apps we have for you to Boom in the Online World',
        graphic: require('@/assets/illustrations/apps.svg'),
        go_to_url: '/dashboardApps',
      },
      {
        id: 12,
        title: 'Support',
        tooltip: 'Coming Soon',
        // tooltip: 'Run your support center from here',

        graphic: require('@/assets/illustrations/intense_feeling.svg'),
        go_to_url: '/dashboardSupport',
        coming_soon: true,
      },
      {
        id: 13,
        title: 'Suggestion/Request',
        tooltip: 'Have feature request? Found a bug? Please let us know.',
        graphic: require('@/assets/illustrations/in_thoughts.svg'),
        go_to_url: '/dashboardRequest',
      },

      {
        id: 15,
        title: 'Roadmap',
        tooltip: 'See what is on our roadmap',
        graphic: require('@/assets/illustrations/winter_road.svg'),
        go_to_url: '/dashboardRoadmap',
      },
    ])
    let knowledgeBaseSearchQuery = ref('')

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

    let business = computed(() => {
      return store.state.business.active_business
    })
    return {
      knowledgeBaseSearchQuery,
      kb,
      filteredKB,
      business,
    }
  },
}
</script>
<style lang="scss" scoped>
.background-dash {
  background-image: url('../../assets/images/pages/vuexy-login-bg.jpg');
}
</style>
