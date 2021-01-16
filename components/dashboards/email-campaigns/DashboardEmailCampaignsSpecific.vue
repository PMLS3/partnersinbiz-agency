<!-- =========================================================================================
    File Name: Dashboard.vue.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
  TODO: if not coming from front business, change
========================================================================================== -->

<template>
  <div class="w-full">
    <!-- KNOWLEDGE BASE CARDS  -->

    <div class="mt-24 knowledge-base-jumbotron">
      <div
        class="p-8 rounded-lg knowledge-base-jumbotron-content sm:p-16 mb-base"
      >
        <h1 class="mb-1 text-white">Campaign {{ campaign_data.title }}</h1>
        <h2 class="text-xl leading-tight text-white font-semibild">
          Manage your campaign from here
        </h2>

        <!-- <vs-input
          icon-no-border
          placeholder="Search Topic or Keyword"
          v-model="knowledgeBaseSearchQuery"
          icon-pack="feather"
          icon="icon-search"
          size="large"
          class="w-full mt-6"
        /> -->
        <div class="flex items-center justify-between py-2">
          <div class="flex items-center">
            <p class="text-white">
              {{ motivational_quotes }}
            </p>
          </div>
          <div class="flex">
            <!-- <UploadApps :schema="schema" :item="item" /> -->
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

    <vs-tabs
      alignment="center"
      class="w-full tabs-shadow-none"
      id="profile-tabs"
    >
      <vs-tab label="Data" icon="dashboard" class="w-full">
        <div class="w-full mt-4 vx-row">
          <div class="w-full vx-col md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
            <vx-card title="PROSPECTS">
              <div
                v-for="(prospect, index) in prospectStatistics"
                :key="prospect.id"
                :class="{ 'mt-4': index }"
              >
                <div class="flex justify-between">
                  <div class="flex flex-col">
                    <span class="mb-1">{{ prospect.name }}</span>
                    <h4>{{ prospect.ratio }}%</h4>
                  </div>
                  <div class="flex flex-col text-right">
                    <span class="flex -mr-1">
                      <span class="mr-1">{{ prospect.comparedResult }}</span>
                      <feather-icon
                        :icon="
                          prospect.comparedResult < 0
                            ? 'ArrowDownIcon'
                            : 'ArrowUpIcon'
                        "
                        :svgClasses="[
                          prospect.comparedResult < 0
                            ? 'text-danger'
                            : 'text-success',
                          'stroke-current h-4 w-4 mb-1 mr-1',
                        ]"
                      ></feather-icon>
                    </span>
                    <span class="text-grey">{{
                      prospect.time | time(true)
                    }}</span>
                  </div>
                </div>
                <vs-progress :percent="prospect.ratio"></vs-progress>
              </div>
            </vx-card>
          </div>
          <div class="w-full vx-col md:w-1/3 mb-base">
            <vx-card title="Opened Overview">
              <template slot="actions">
                <feather-icon
                  icon="HelpCircleIcon"
                  svgClasses="w-6 h-6 text-grey"
                ></feather-icon>
              </template>

              <!-- CHART -->
              <template slot="no-body">
                <div class="mt-10">
                  <vue-apex-charts
                    type="radialBar"
                    height="240"
                    :options="chartOptions"
                    :series="emailOpen.series"
                  />
                </div>
              </template>

              <!-- DATA -->
              <div
                class="flex justify-between mt-6 text-center"
                slot="no-body-bottom"
              >
                <div
                  class="w-1/2 border border-b-0 border-l-0 border-r-0 border-solid d-theme-border-grey-light"
                >
                  <p class="mt-4">CLICKED</p>
                  <p class="mb-4 text-3xl font-semibold">
                    {{ totals.clicked }}
                  </p>
                </div>
                <div
                  class="w-1/2 border border-b-0 border-r-0 border-solid d-theme-border-grey-light"
                >
                  <p class="mt-4">OPT-OUT</p>
                  <p class="mb-4 text-3xl font-semibold">
                    {{ totals.opt_out }}
                  </p>
                </div>
              </div>
            </vx-card>
          </div>

          <div class="w-full vx-col md:w-1/3 mb-base">
            <vx-card title="Responded">
              <template slot="actions">
                <feather-icon
                  icon="HelpCircleIcon"
                  svgClasses="w-6 h-6 text-grey"
                ></feather-icon>
              </template>

              <!-- CHART -->
              <template slot="no-body">
                <div class="mt-10">
                  <vue-apex-charts
                    type="radialBar"
                    height="240"
                    :options="chartOptions"
                    :series="emailOpen.responded"
                  />
                </div>
              </template>

              <!-- DATA -->
              <div
                class="flex justify-between mt-6 text-center"
                slot="no-body-bottom"
              >
                <div
                  class="w-1/2 border border-b-0 border-l-0 border-r-0 border-solid d-theme-border-grey-light"
                >
                  <p class="mt-4">SENT</p>
                  <p class="mb-4 text-3xl font-semibold">{{ totals.sent }}</p>
                </div>
                <div
                  class="w-1/2 border border-b-0 border-r-0 border-solid d-theme-border-grey-light"
                >
                  <p class="mt-4">RESPONDED</p>
                  <p class="mb-4 text-3xl font-semibold">
                    {{ totals.responded }}
                  </p>
                </div>
              </div>
            </vx-card>
          </div>
        </div>
        <vs-card>
          <UiAgGridTableAny
            :campaign_type="campaign_data.types"
            :item="item"
            :schema="schema"
            :columnDefs="columnDefs"
            :info="campaign_emails"
            :entity="entity"
            :branch="branch"
          />
        </vs-card>
      </vs-tab>
      <vs-tab label="Users" icon="dashboard">
        <vs-tabs
          alignment="center"
          class="w-full tabs-shadow-none"
          id="profile-tabs"
        >
          <vs-tab label="Users in Campaign" icon="dashboard" class="w-full">
            <UiAgGridUsersAdd
              :campaign_type="campaign_data.types"
              :item="item"
              :schema="schema"
              :columnDefs="columnDefsUsers"
              :info="users_all"
              :entity="entity"
              :branch="branch"
            />
          </vs-tab>
          <vs-tab label="All Users" icon="dashboard" class="w-full">
            <UiAgGridUsersAdd
              :campaign_type="campaign_data.types"
              :item="item"
              :schema="schema"
              :columnDefs="columnDefsUsersAll"
              :info="users"
              :entity="entity"
              :branch="branch"
            />
          </vs-tab>
        </vs-tabs>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
import { ref, useContext, computed, onMounted } from '@nuxtjs/composition-api'
import VueApexCharts from 'vue-apexcharts'

import CellRendererHtml from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererHtml.vue'
import CellRendererStatus from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererStatus.vue'
import CellRendererGo from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererGo.vue'
import CellRendererActionsAdd from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererActionsAdd.vue'

export default {
  name: 'dashboardMain',
  components: {
    CellRendererHtml,
    CellRendererStatus,
    CellRendererGo,
    CellRendererActionsAdd,
    VueApexCharts,
  },

  setup() {
    const { store, $fireStore, nuxt } = useContext()
    onMounted(() => {
      $fireStore
        .collection('apps')
        .doc('Email-Campaigns')
        .collection('app')
        .doc(route_id.value)
        .get()
        .then(function (doc) {
          if (doc.exists) {
            console.log('Document data:', doc.data())
            let payload = doc.data()
            payload.id = doc.id
            campaign_data.value = payload
          } else {
            // doc.data() will be undefined in this case
            console.log('No such document!')
          }
        })
        .catch(function (error) {
          console.log('Error getting document:', error)
        })

      $fireStore
        .collection('apps')
        .doc('Email-Campaigns')
        .collection('app')
        .doc(route_id.value)
        .collection('emails')
        .orderBy('sequence_nr')
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, ' => ', doc.data())
            let payload = doc.data()
            payload.id = doc.id
            campaign_emails.value.push(payload)
          })
        })
        .catch(function (error) {
          console.log('Error getting documents: ', error)
        })

      let getUser = $fireStore
        .collection('business')
        .doc('users')
        .collection(business.value.b_uid)
      // .where('b_uid', '==', business.value.b_uid)

      getUser.onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          console.log('change', change)
          if (change.type === 'added') {
            let doc = change.doc
            let data = doc.data()
            data.id = doc.id
            clients.value.push(data)
          }
        })
      })

      store.commit('userManagement/SET_USERS', clients.value)
    })

    let clients = ref([])

    let users_all = computed(() => {
      let all = []
      for (let i = 0; i < clients.value.length; i++) {
        if (clients.value[i].email_campaigns) {
          if (clients.value[i].email_campaigns.includes(route_id.value)) {
            all.push(clients.value[i])
          }
        }
      }

      return all
    })

    let campaign_data = ref({})
    let campaign_emails = ref([])

    let popupActivo = ref(false)

    let item = ref('Email-Campaign-Specific')
    let info = ref([])

    let route_id = computed(() => store.state.app.route_id)

    const user = computed(() => store.state.auth.main_user)

    const users = computed(() => store.state.userManagement.users)

    let business = computed(() => {
      return store.state.business.active_business
    })

    let entity = computed(() => {
      if (branch.value == 'Company') {
        return 'business'
      } else {
        return 'branch'
      }
    })

    let prospectStatistics = computed(() => {
      return [
        {
          id: 1,
          name: 'Queued',
          ratio: ratio.value.queued,
          time: new Date(),
          comparedResult: totals.value.queued,
        },
        {
          id: 2,
          name: 'Sent',
          ratio: ratio.value.sent,

          time: new Date(),
          comparedResult: totals.value.sent,
        },
        {
          id: 3,
          name: 'Bounced',
          ratio: ratio.value.bounced,
          time: new Date(),
          comparedResult: totals.value.bounced,
        },
        {
          id: 4,
          name: 'Delivered',
          ratio: ratio.value.delivered,
          time: new Date(),
          comparedResult: totals.value.delivered,
        },
      ]
    })

    let ratio = computed(() => {
      let total = {
        delivered:
          (totals.value.delivered / totals.value.sent) * 100
            ? (totals.value.delivered / totals.value.sent) * 100
            : 0,
        opened:
          (totals.value.opened / totals.value.delivered) * 100
            ? (totals.value.opened / totals.value.delivered) * 100
            : 0,
        queued:
          (totals.value.queued / (totals.value.queued + totals.value.sent)) *
          100
            ? (totals.value.queued /
                (totals.value.queued + totals.value.sent)) *
              100
            : 0,
        sent:
          (totals.value.sent / (totals.value.queued + totals.value.sent)) * 100
            ? (totals.value.sent / (totals.value.queued + totals.value.sent)) *
              100
            : 0,
        opt_out:
          (totals.value.bounced / totals.value.sent) * 100
            ? (totals.value.bounced / totals.value.sent) * 100
            : 0,
        bounced:
          (totals.value.bounced / totals.value.sent) * 100
            ? (totals.value.bounced / totals.value.sent) * 100
            : 0,
        clicked:
          (totals.value.clicked / totals.value.sent) * 100
            ? (totals.value.clicked / totals.value.sent) * 100
            : 0,
        responded:
          (totals.value.responded / totals.value.sent) * 100
            ? (totals.value.responded / totals.value.sent) * 100
            : 0,
      }

      return total
    })

    let totals = computed(() => {
      let total = {
        delivered: 0,
        opened: 0,
        queued: 0,
        sent: 0,
        opt_out: 0,
        bounced: 0,
        clicked: 0,
        responded: 0,
      }

      for (let i = 0; i < campaign_emails.value.length; i++) {
        total.delivered =
          total.delivered + parseInt(campaign_emails.value[i].delivered)
        total.opened = total.opened + parseInt(campaign_emails.value[i].opened)
        total.queued = total.queued + parseInt(campaign_emails.value[i].queued)
        total.sent = total.sent + parseInt(campaign_emails.value[i].sent)
        total.opt_out =
          total.opt_out + parseInt(campaign_emails.value[i].opt_out)
        total.bounced =
          total.bounced + parseInt(campaign_emails.value[i].bounced)
        total.clicked =
          total.clicked + parseInt(campaign_emails.value[i].clicked)

        total.responded =
          total.responded + parseInt(campaign_emails.value[i].responded)
      }

      return total
    })

    let chartOptions = computed(() => {
      return {
        plotOptions: {
          radialBar: {
            size: 110,
            startAngle: -150,
            endAngle: 150,
            hollow: {
              size: '77%',
            },
            track: {
              background: '#bfc5cc',
              strokeWidth: '50%',
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                offsetY: 18,
                color: '#99a2ac',
                fontSize: '4rem',
              },
            },
          },
        },
        colors: ['#00db89'],
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#00b5b5'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: 'round',
        },
        chart: {
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            blur: 3,
            left: 1,
            top: 1,
            opacity: 0.1,
          },
        },
      }
    })

    let emailOpen = computed(() => {
      return {
        analyticsData: {
          completed: totals.value.clicked,
          inProgress: totals.value.opt_out,
        },
        series: [ratio.value.opened],
        responded: [ratio.value.responded],
      }
    })
    let motivational_quotes = computed(() => {
      let num = Math.floor(Math.random() * 55)
      return store.state.info.motivational_quotes[num]
    })

    let branch = computed(() => {
      return store.state.app.selected_branch
    })
    let schema = computed(() => {
      return [
        {
          title: 'TextInput',
          placeholder: 'Campaign Name',
          type: 'text',
          label: 'Campaign Name',
          name: 'title',
        },

        {
          title: 'QuilEditor',
          name: 'desc',
          label: 'Description',
          placeholder: 'Description',
        },
      ]
    })

    let columnDefs = computed(() => {
      return [
        {
          headerName: 'ID',
          field: 'id',
          width: 125,
          filter: true,
          checkboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          headerCheckboxSelection: true,
        },
        {
          headerName: 'Date',
          field: 'date',
          filter: true,
          width: 125,
        },
        {
          headerName: 'Heading',
          field: 'title',
          filter: true,
          width: 125,
        },
        {
          headerName: 'Email',
          field: 'content',
          filter: true,
          width: 250,
          // cellRendererFramework: 'CellRendererHtml',
        },
        {
          headerName: 'Sent',
          field: 'sent',
          filter: true,
          width: 210,
        },
        {
          headerName: 'Queued',
          field: 'queued',
          filter: true,
          width: 210,
        },
        {
          headerName: 'Delivered',
          field: 'delivered',
          filter: true,
          width: 225,
        },
        {
          headerName: 'Opened',
          field: 'opened',
          filter: true,
          width: 200,
        },
        {
          headerName: 'Clicked',
          field: 'clicked',
          filter: true,
          width: 200,
        },
        {
          headerName: 'Responed',
          field: 'responded',
          filter: true,
          width: 150,
        },
        {
          headerName: 'Bounced',
          field: 'bounced',
          filter: true,
          width: 150,
        },
        {
          headerName: 'Opt-Out',
          field: 'opt_out',
          filter: true,
          width: 150,
        },
        {
          headerName: 'Interest Level',
          field: 'role',
          filter: true,
          width: 150,
        },
        {
          headerName: 'Status',
          field: 'status',
          filter: true,
          width: 150,
          cellRendererFramework: 'CellRendererStatus',
        },
      ]
    })
    let columnDefsUsers = computed(() => {
      return [
        {
          headerName: 'ID',
          field: 'id',
          width: 125,
          filter: true,
          checkboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          headerCheckboxSelection: true,
        },
        {
          headerName: 'Avatar',
          field: 'avatar',
          filter: true,
          width: 125,
          cellRendererFramework: 'CellRendererLink',
        },
        {
          headerName: 'Username',
          field: 'disp_name',
          filter: true,
          width: 210,
        },
        {
          headerName: 'Email',
          field: 'email',
          filter: true,
          width: 225,
        },
        {
          headerName: 'Name',
          field: 'name',
          filter: true,
          width: 200,
        },
        {
          headerName: 'Country',
          field: 'country',
          filter: true,
          width: 150,
        },
        {
          headerName: 'Role',
          field: 'role',
          filter: true,
          width: 150,
        },
        {
          headerName: 'Status',
          field: 'status',
          filter: true,
          width: 150,
          cellRendererFramework: 'CellRendererStatus',
        },
        {
          headerName: 'Verified',
          field: 'is_verified',
          filter: true,
          width: 125,
          cellRendererFramework: 'CellRendererVerified',
          cellClass: 'text-center',
        },
        {
          headerName: 'Department',
          field: 'department',
          filter: true,
          width: 150,
        },
        {
          headerName: 'Actions',
          field: 'transactions',
          width: 150,
          cellRendererFramework: 'CellRendererActions',
        },
      ]
    })

    let columnDefsUsersAll = computed(() => {
      return [
        {
          headerName: 'ID',
          field: 'id',
          width: 125,
          filter: true,
          checkboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          headerCheckboxSelection: true,
        },
        {
          headerName: 'Avatar',
          field: 'avatar',
          filter: true,
          width: 125,
          cellRendererFramework: 'CellRendererLink',
        },
        {
          headerName: 'Username',
          field: 'disp_name',
          filter: true,
          width: 210,
        },
        {
          headerName: 'Email',
          field: 'email',
          filter: true,
          width: 225,
        },
        {
          headerName: 'Name',
          field: 'name',
          filter: true,
          width: 200,
        },
        {
          headerName: 'Surname',
          field: 'surname',
          filter: true,
          width: 150,
        },
        {
          headerName: 'Actions',
          field: 'transactions',
          width: 150,
          cellRendererFramework: 'CellRendererActionsAdd',
        },
      ]
    })
    return {
      business,
      user,
      campaign_data,
      item,
      schema,
      columnDefs,
      info,
      entity,
      branch,
      campaign_emails,
      chartOptions,
      emailOpen,
      prospectStatistics,
      popupActivo,
      totals,
      motivational_quotes,
      users_all,
      users,
      columnDefsUsersAll,
      columnDefsUsers,
    }
  },
}
</script>
<style lang="scss">
.knowledge-base-jumbotron-content {
  background-image: url('../../../assets/images/background/night.jpeg');

  background-size: cover;
}
</style>
