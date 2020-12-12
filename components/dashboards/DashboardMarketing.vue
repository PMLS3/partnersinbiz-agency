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
        <h1 class="mb-1 text-white">Run your business from here</h1>
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
      </div>
    </div>

    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div
        class="w-full vx-col md:w-1/3 sm:w-1/2 mb-base min-h-250"
        v-for="item in filteredKB"
        :key="item.id"
      >
        <CardSimple :item="item" class="h-full" />
      </div>
    </div>
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
    })
    let knowledgeBaseSearchQuery = ref('')
    const kb = ref([
      {
        id: 1,
        title: 'Page Builder',
        description: 'Update business info, create goups and more...',
        graphic: require('@/assets/illustrations/design_feedback.svg'),
        url: '/dashboard/page-builder'
      },
      {
        id: 2,
        title: 'Email Builder',
        description:
          'See your sales activity, orders, shipments from one place',
        graphic: require('@/assets/illustrations/asset_selection.svg'),
        url: '/dashboard/email-builder'
      },
      {
        id: 3,
        title: 'Image Builder',
        description:
          'Create Marketing campaigns, assign staff to run with projects',
        graphic: require('@/assets/illustrations/add_color.svg'),
        url: '/dashboard/marketing'
      },
      {
        id: 4,
        title: 'Social Campaigns',
        description:
          'Create Marketing campaigns, assign staff to run with projects',
        graphic: require('@/assets/illustrations/social_share.svg'),
        url: '/dashboard/marketing'
      },
      {
        id: 5,
        title: 'Email Campaigns',
        description:
          'Create Marketing campaigns, assign staff to run with projects',
        graphic: require('@/assets/illustrations/message_sent.svg'),
        url: '/dashboard/marketing'
      },
      {
        id: 6,
        title: 'Website',
        description: 'Set the website...',
        graphic: require('@/assets/illustrations/content_team.svg'),
        url: '/dashboard/website-builder'
      }
    ])
    const user = computed(() => store.state.auth.main_user)
    let filteredKB = computed(() => {
      return kb.value.filter(
        item =>
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
      business
    }
  }
}
</script>

<style lang="scss">
.knowledge-base-jumbotron-content {
  background-image: url('../../assets/images/background/night.jpeg');

  background-size: cover;
}
</style>
