<!-- =========================================================================================
    File Name: Dashboard.vue.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
  TODO: if not coming from front business, change
========================================================================================== -->

<template>
  <vs-tabs
    :position="$device.isMobile ? 'top' : 'left'"
    class="mt-24 tabs-shadow-none"
    id="profile-tabs"
  >
    <vs-tab label="Opening Balances" icon="dashboard">
      <DashboardAccountingOpeningBalances />
    </vs-tab>
    <vs-tab label="Dashboard" icon="dashboard"> </vs-tab>
    <vs-tab label="Items" icon="dashboard">
      <vs-tabs
        :position="$device.isMobile ? 'top' : 'left'"
        class="tabs-shadow-none"
        id="profile-tabs"
      >
        <vs-tab label="Items" icon="dashboard"> </vs-tab>
        <vs-tab label="Price Lists" icon="dashboard"> </vs-tab>
        <vs-tab label="Inventory Adjustment" icon="dashboard"> </vs-tab>
      </vs-tabs>
    </vs-tab>
    <vs-tab label="Banking" icon="dashboard">
      <DashboardAccountingBankAccount />
    </vs-tab>
    <vs-tab label="Sales" icon="dashboard">
      <vs-tabs
        :position="$device.isMobile ? 'top' : 'left'"
        class="tabs-shadow-none"
        id="profile-tabs"
      >
        <vs-tab label="Customers" icon="dashboard">
          <DashboardAccountingCustomer />
        </vs-tab>
        <vs-tab label="Estimates" icon="dashboard">
          <DashboardAccoutingEstimates />
        </vs-tab>
        <vs-tab label="Retainer Invoices" icon="dashboard"> </vs-tab>
        <vs-tab label="Sales Orders" icon="dashboard"> </vs-tab>
        <vs-tab label="Invoices" icon="dashboard"> </vs-tab>
        <vs-tab label="Payment Links" icon="dashboard"> </vs-tab>
        <vs-tab label="Payments Received" icon="dashboard"> </vs-tab>
        <vs-tab label="Recurring Invoices" icon="dashboard"> </vs-tab>
        <vs-tab label="Credit Notes" icon="dashboard"> </vs-tab>
      </vs-tabs>
    </vs-tab>
    <vs-tab label="Purchases" icon="dashboard">
      <vs-tabs
        :position="$device.isMobile ? 'top' : 'left'"
        class="tabs-shadow-none"
        id="profile-tabs"
      >
        <vs-tab label="Vendors" icon="dashboard"> </vs-tab>
        <vs-tab label="Expenses" icon="dashboard"> </vs-tab>
        <vs-tab label="Recurring Expenses" icon="dashboard"> </vs-tab>
        <vs-tab label="Purchase Orders" icon="dashboard"> </vs-tab>
        <vs-tab label="Bills" icon="dashboard"> </vs-tab>
        <vs-tab label="Payment made" icon="dashboard"> </vs-tab>

        <vs-tab label="Recurring Bills" icon="dashboard"> </vs-tab>
        <vs-tab label="Vedor" icon="dashboard"> </vs-tab>
      </vs-tabs>
    </vs-tab>
    <vs-tab label="Time Tracking" icon="dashboard"> </vs-tab>
    <vs-tab label="Accountant" icon="dashboard"> </vs-tab>
    <vs-tab label="Reports" icon="dashboard">
      <vs-tabs
        :position="$device.isMobile ? 'top' : 'left'"
        class="tabs-shadow-none"
        id="profile-tabs"
      >
        <vs-tab label="Projects" icon="dashboard"> </vs-tab>
        <vs-tab label="Timesheet" icon="dashboard"> </vs-tab>
      </vs-tabs>
    </vs-tab>
    <vs-tab label="Documents" icon="dashboard">
      <vs-tabs
        :position="$device.isMobile ? 'top' : 'left'"
        class="tabs-shadow-none"
        id="profile-tabs"
      >
        <vs-tab label="Manual Journal" icon="dashboard"> </vs-tab>
        <vs-tab label="Recurring Journal" icon="dashboard"> </vs-tab>

        <vs-tab label="Bulk Update" icon="dashboard"> </vs-tab>
        <vs-tab label="Currency Adjustment" icon="dashboard"> </vs-tab>
        <vs-tab label="Charts of Accounts" icon="dashboard"> </vs-tab>
        <vs-tab label="Budget" icon="dashboard"> </vs-tab>
        <vs-tab label="Transaction Locking" icon="dashboard"> </vs-tab>
      </vs-tabs>
    </vs-tab>
    <vs-tab label="Reports" icon="dashboard"> </vs-tab>
    <vs-tab label="Documents" icon="dashboard"> </vs-tab>
  </vs-tabs>
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
    let popupActivo = ref(false)
    const kb = ref([
      {
        id: 12,
        title: 'Business Settings',
        description: 'Update business info, create goups and more...',
        graphic: require('@/assets/illustrations/logic.svg'),
        url: '/dashboardBusinessSettings',
      },
      {
        id: 1,
        title: 'Sales',
        description:
          'See your sales activity, orders, shipments from one place',
        graphic: require('@/assets/illustrations/online_banking.svg'),
        url: '/dashboardSales',
      },
      {
        id: 2,
        title: 'Marketing',
        description:
          'Create Marketing campaigns, assign staff to run with projects',
        graphic: require('@/assets/illustrations/design_data.svg'),
        url: '/dashboard/marketing',
      },
      {
        id: 3,
        title: 'Communication',
        description: 'Talk is not that cheap, spread the message',
        graphic: require('@/assets/illustrations/business_chat.svg'),
        url: '/dashboard/communication',
      },
      {
        id: 4,
        title: 'Accounting',
        description: 'Stay ontop of those numbers',
        graphic: require('@/assets/illustrations/calculator.svg'),
        url: '/dashboard/accounting',
      },
      {
        id: 5,
        title: 'Market Place',
        description:
          'Want to expand or get into something new? Check what we have installed for you',
        graphic: require('@/assets/illustrations/business_shop.svg'),
        url: '/dashboard/market-place',
      },
      {
        id: 6,
        title: 'Human Resources',
        description: 'The heart of your business is here',
        graphic: require('@/assets/illustrations/loving_story.svg'),
        url: '/dashboard/human-resource',
      },
      {
        id: 7,
        title: 'Analytics',
        description:
          'Sometimes its easier to see the bigger picture in a graph',
        graphic: require('@/assets/illustrations/business_plan.svg'),
        url: '/dashboard/analytics',
      },
      {
        id: 8,
        title: 'Learn',
        description: 'Knowledge base... thats all',
        graphic: require('@/assets/illustrations/lightbulb_moment.svg'),
        url: '/dashboard/learn',
      },
      {
        id: 9,
        title: 'Apps',
        description: 'All the apps we have for you to Boom in the Online World',
        graphic: require('@/assets/illustrations/apps.svg'),
        url: '/dashboard-apps',
      },
      {
        id: 10,
        title: 'Support',
        description: 'Run your support center from here',
        graphic: require('@/assets/illustrations/intense_feeling.svg'),
        url: '/dashboard/support',
      },
      {
        id: 11,
        title: 'Suggestion/Request',
        description: 'Have feature request? Found a bug? Please let us know.',
        graphic: require('@/assets/illustrations/in_thoughts.svg'),
        url: '/dashboard/suggestions',
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
