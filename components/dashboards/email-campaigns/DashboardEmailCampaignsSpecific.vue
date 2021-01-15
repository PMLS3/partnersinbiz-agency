<!-- =========================================================================================
    File Name: Dashboard.vue.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
  TODO: if not coming from front business, change
========================================================================================== -->

<template>
  <div class="w-full">
    <!-- KNOWLEDGE BASE CARDS  -->
    <vs-card class="vx-row">
      <vs-tabs
        :position="$device.isMobile ? 'top' : 'left'"
        class="mt-24 tabs-shadow-none"
        id="profile-tabs"
      >
        <vs-tab label="Data" icon="dashboard">
          <div class="w-full vx-col md:w-1/3 sm:w-1/2 mb-base min-h-250">
            {{ campaign_data }}
          </div>
        </vs-tab>
        <vs-tab label="Prospects" icon="dashboard">
          <div class="w-full vx-col md:w-1/3 sm:w-1/2 mb-base min-h-250">
            {{ campaign_emails }}
          </div>
        </vs-tab>
      </vs-tabs>
    </vs-card>
    <div>
      <div>
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
      </div>
      <div>
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
                <p class="mb-4 text-3xl font-semibold">786,617</p>
              </div>
              <div
                class="w-1/2 border border-b-0 border-r-0 border-solid d-theme-border-grey-light"
              >
                <p class="mt-4">OPT-OUT</p>
                <p class="mb-4 text-3xl font-semibold">13,561</p>
              </div>
            </div>
          </vx-card>
        </div>
      </div>
    </div>
    <vs-card class>
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
  </div>
</template>

<script>
import { ref, useContext, computed, onMounted } from '@nuxtjs/composition-api'
import CellRendererHtml from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererHtml.vue'
import CellRendererStatus from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererStatus.vue'
import CellRendererGo from '@/components/ui-elements/ag-grid-table/cell-renderer/CellRendererGo.vue'
export default {
  name: 'dashboardMain',
  components: { CellRendererHtml, CellRendererStatus, CellRendererGo },

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

      // $fireStore
      //     .collection('apps')
      //     .doc('Email-Campaigns')
      //     .collection('app')
      //     .doc(this.route_id)
      //     .collection('emails')
      //   .get()
      //   .then(function (doc) {
      //     if (doc.exists) {
      //       console.log('Document data:', doc.data())
      //       let payload = doc.data()
      //       payload.id = doc.id
      //       campaign_emails.value = payload
      //     } else {
      //       // doc.data() will be undefined in this case
      //       console.log('No such document!')
      //     }
      //   })
      //   .catch(function (error) {
      //     console.log('Error getting document:', error)
      //   })

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

      // nuxt.$on('emails_submit', (data) => {
      //   let payload = data
      //   payload.branch = branch
      //   payload.uid = user.uid

      //   $fireStore
      //     .collection('apps')
      //     .doc('Email-Campaigns')
      //     .collection('app')
      //     .doc(route_id.value)
      //     .collection('emails')
      //     .doc('emails')
      //     .set(data)
      // })
    })

    let campaign_data = ref({})
    let campaign_emails = ref([])

    let item = ref('Email-Campaign-Specific')
    let info = ref([])

    let route_id = computed(() => store.state.app.route_id)

    const user = computed(() => store.state.auth.main_user)

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
          completed: 786617,
          inProgress: 13561,
        },
        series: [83],
      }
    })

    let prospectStatistics = computed(() => {
      return [
        {
          id: 1,
          name: 'Google Chrome',
          ratio: 73,
          time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
          comparedResult: '800',
        },
        {
          id: 3,
          name: 'Opera',
          ratio: 8,
          time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
          comparedResult: '-200',
        },
        {
          id: 2,
          name: 'Firefox',
          ratio: 19,
          time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
          comparedResult: '100',
        },
        {
          id: 4,
          name: 'Internet Explorer',
          ratio: 27,
          time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
          comparedResult: '-450',
        },
      ]
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
          cellRendererFramework: 'CellRendererHtml',
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
    }
  },
}
</script>
