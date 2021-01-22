<!-- =========================================================================================
    File Name: DashboardEcommerce.vue
    Description: Dashboard - Ecommerce
    ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div>
    <div class="vx-row">
      <div class="w-full vx-col sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <client-only>
          <UiStatisticsCardLine
            v-if="subscribersGained.analyticsData"
            icon="UsersIcon"
            :statistic="
              subscribersGained.analyticsData.subscribers | k_formatter
            "
            statisticTitle="Subscribers Gained"
            :chartData="subscribersGained.series"
            type="area"
          />
        </client-only>
      </div>

      <div class="w-full vx-col sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <UiStatisticsCardLine
          v-if="revenueGenerated.analyticsData"
          icon="DollarSignIcon"
          :statistic="revenueGenerated.analyticsData.revenue | k_formatter"
          statisticTitle="Revenue Generated"
          :chartData="revenueGenerated.series"
          color="success"
          type="area"
        />
      </div>

      <div class="w-full vx-col sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <UiStatisticsCardLine
          v-if="quarterlySales.analyticsData"
          icon="ShoppingCartIcon"
          :statistic="quarterlySales.analyticsData.sales"
          statisticTitle="Quarterly Sales"
          :chartData="quarterlySales.series"
          color="danger"
          type="area"
        />
      </div>
      <div class="w-full vx-col sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <UiStatisticsCardLine
          v-if="ordersRecevied.analyticsData"
          icon="ShoppingBagIcon"
          :statistic="ordersRecevied.analyticsData.orders | k_formatter"
          statisticTitle="Orders Received"
          :chartData="ordersRecevied.series"
          color="warning"
          type="area"
        />
      </div>
    </div>

    <div class="vx-row">
      <!-- LINE CHART -->
      <div class="w-full vx-col md:w-2/3 mb-base">
        <vx-card title="Revenue">
          <template slot="actions">
            <feather-icon
              icon="SettingsIcon"
              svgClasses="w-6 h-6 text-grey"
            ></feather-icon>
          </template>
          <div slot="no-body" class="p-6 pb-0">
            <div class="flex" v-if="revenueComparisonLine.analyticsData">
              <div class="mr-6">
                <p class="mb-1 font-semibold">This Month</p>
                <p class="text-3xl text-success">
                  <sup class="mr-1 text-base">$</sup
                  >{{
                    revenueComparisonLine.analyticsData.thisMonth.toLocaleString()
                  }}
                </p>
              </div>
              <div>
                <p class="mb-1 font-semibold">Last Month</p>
                <p class="text-3xl">
                  <sup class="mr-1 text-base">$</sup
                  >{{
                    revenueComparisonLine.analyticsData.lastMonth.toLocaleString()
                  }}
                </p>
              </div>
            </div>
            <vue-apex-charts
              type="line"
              height="266"
              :options="analyticsData.revenueComparisonLine.chartOptions"
              :series="revenueComparisonLine.series"
            />
          </div>
        </vx-card>
      </div>

      <!-- RADIAL CHART -->
      <div class="w-full vx-col md:w-1/3 mb-base">
        <vx-card title="Goal Overview">
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
                :options="analyticsData.goalOverviewRadialBar.chartOptions"
                :series="goalOverview.series"
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
              <p class="mt-4">Completed</p>
              <p class="mb-4 text-3xl font-semibold">786,617</p>
            </div>
            <div
              class="w-1/2 border border-b-0 border-r-0 border-solid d-theme-border-grey-light"
            >
              <p class="mt-4">In Progress</p>
              <p class="mb-4 text-3xl font-semibold">13,561</p>
            </div>
          </div>
        </vx-card>
      </div>
    </div>

    <div class="vx-row">
      <div class="w-full vx-col md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
        <vx-card title="Browser Statistics">
          <div
            v-for="(browser, index) in browserStatistics"
            :key="browser.id"
            :class="{ 'mt-4': index }"
          >
            <div class="flex justify-between">
              <div class="flex flex-col">
                <span class="mb-1">{{ browser.name }}</span>
                <h4>{{ browser.ratio }}%</h4>
              </div>
              <div class="flex flex-col text-right">
                <span class="flex -mr-1">
                  <span class="mr-1">{{ browser.comparedResult }}</span>
                  <feather-icon
                    :icon="
                      browser.comparedResult < 0
                        ? 'ArrowDownIcon'
                        : 'ArrowUpIcon'
                    "
                    :svgClasses="[
                      browser.comparedResult < 0
                        ? 'text-danger'
                        : 'text-success',
                      'stroke-current h-4 w-4 mb-1 mr-1',
                    ]"
                  ></feather-icon>
                </span>
                <span class="text-grey">{{ browser.time | time(true) }}</span>
              </div>
            </div>
            <vs-progress :percent="browser.ratio"></vs-progress>
          </div>
        </vx-card>
      </div>

      <div class="w-full vx-col md:w-2/3">
        <vx-card title="Client Retention">
          <div class="flex">
            <span class="flex items-center"
              ><div class="w-3 h-3 mr-1 rounded-full bg-primary"></div>
              <span>New Clients</span></span
            >
            <span class="flex items-center ml-4"
              ><div class="w-3 h-3 mr-1 rounded-full bg-danger"></div>
              <span>Retained Clients</span></span
            >
          </div>
          <vue-apex-charts
            type="bar"
            height="277"
            :options="analyticsData.clientRetentionBar.chartOptions"
            :series="clientRetentionBar.series"
          />
        </vx-card>
      </div>
    </div>

    <div class="vx-row">
      <!-- Sessions By Device -->
      <div class="w-full vx-col lg:w-1/3 lg:mt-0 mt-base">
        <vx-card title="Sessions By Device">
          <!-- SLOT = ACTIONS -->
          <template slot="actions">
            <ChangeTimeDurationDropdown />
          </template>

          <div slot="no-body">
            <vue-apex-charts
              class="mt-6 mb-8"
              type="donut"
              height="325"
              :options="analyticsData.sessionsByDeviceDonut.chartOptions"
              :series="sessionsData.series"
            />
          </div>

          <ul class="mt-6">
            <li
              v-for="deviceData in sessionsData.analyticsData"
              :key="deviceData.device"
              class="flex mb-3"
            >
              <feather-icon
                :icon="deviceData.icon"
                :svgClasses="[
                  `h-5 w-5 stroke-current text-${deviceData.color}`,
                ]"
              ></feather-icon>
              <span class="inline-block ml-2 font-semibold">{{
                deviceData.device
              }}</span>
              <span class="mx-2">-</span>
              <span class="mr-4">{{ deviceData.sessionsPercentage }}%</span>
              <div class="flex ml-auto -mr-1">
                <span class="mr-1"
                  >{{ deviceData.comparedResultPercentage }}%</span
                >
                <feather-icon
                  :icon="
                    deviceData.comparedResultPercentage < 0
                      ? 'ArrowDownIcon'
                      : 'ArrowUpIcon'
                  "
                  :svgClasses="[
                    deviceData.comparedResultPercentage < 0
                      ? 'text-danger'
                      : 'text-success',
                    'stroke-current h-4 w-4 mb-1 mr-1',
                  ]"
                ></feather-icon>
              </div>
            </li>
          </ul>
        </vx-card>
      </div>

      <!-- CHAT CARD -->
      <div class="w-full vx-col lg:w-1/3 lg:mt-0 mt-base">
        <vx-card title="Chat" class="overflow-hidden">
          <template slot="no-body">
            <div class="chat-card-log">
              <component
                :is="scrollbarTag"
                ref="chatLogPS"
                class="px-6 pt-6 scroll-area"
                :settings="settings"
                :key="$vs.rtl"
              >
                <ul ref="chatLog">
                  <li
                    class="flex items-start"
                    :class="{ 'flex-row-reverse': msg.isSent, 'mt-4': index }"
                    v-for="(msg, index) in chatLog"
                    :key="index"
                  >
                    <vs-avatar
                      size="40px"
                      class="flex-shrink-0 m-0"
                      :class="msg.isSent ? 'ml-5' : 'mr-5'"
                      :src="msg.senderImg"
                    ></vs-avatar>
                    <div
                      class="relative max-w-md px-4 py-3 mb-2 bg-white rounded-lg shadow-md msg"
                      :class="{
                        'chat-sent-msg bg-primary-gradient text-white':
                          msg.isSent,
                        'border border-solid d-theme-border-grey-light': !msg.isSent,
                      }"
                    >
                      <span>{{ msg.msg }}</span>
                    </div>
                  </li>
                </ul>
              </component>
            </div>
            <div class="flex p-6 bg-white chat-input-container">
              <vs-input
                class="w-full mr-3"
                v-model="chatMsgInput"
                @keyup.enter="chatMsgInput = ''"
                placeholder="Type Your Message"
              ></vs-input>
              <vs-button
                icon-pack="feather"
                icon="icon-send"
                @click="chatMsgInput = ''"
              ></vs-button>
            </div>
          </template>
        </vx-card>
      </div>

      <!-- CUSTOMERS CHART -->
      <div class="w-full vx-col lg:w-1/3 lg:mt-0 mt-base">
        <vx-card title="Customers">
          <!-- SLOT = ACTIONS -->
          <template slot="actions">
            <ChangeTimeDurationDropdown />
          </template>

          <div slot="no-body">
            <!-- CHART -->
            <vue-apex-charts
              type="pie"
              height="345"
              class="mt-10 mb-10"
              :options="analyticsData.customersPie.chartOptions"
              :series="customersData.series"
            />

            <!-- CHART DATA -->
            <ul class="mb-1">
              <li
                v-for="customerData in customersData.analyticsData"
                :key="customerData.customerType"
                class="flex justify-between px-6 py-3 border border-b-0 border-l-0 border-r-0 border-solid d-theme-border-grey-light"
              >
                <span class="flex items-center">
                  <span
                    class="inline-block w-3 h-3 mr-2 rounded-full"
                    :class="`bg-${customerData.color}`"
                  ></span>
                  <span class="font-semibold">{{
                    customerData.customerType
                  }}</span>
                </span>
                <span>{{ customerData.counts }}</span>
              </li>
            </ul>
          </div>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
// import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import analyticsData from '@/js/data/analyticsData.js'

export default {
  components: {
    VueApexCharts,
    // StatisticsCardLine,
  },
  data() {
    return {
      // subscribersGained: {},
      // revenueGenerated: {},
      // quarterlySales: {},
      // ordersRecevied: {},

      // revenueComparisonLine: {},
      // goalOverview: {},

      // browserStatistics: [],
      // clientRetentionBar: {},

      // sessionsData: {},
      // chatLog: [],
      chatMsgInput: '',
      // customersData: {},

      analyticsData,
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
    }
  },
  computed: {
    scrollbarTag() {
      return this.$store.getters.scrollbarTag
    },
    subscribersGained() {
      return {
        series: [
          {
            name: 'Subscribers',
            data: [28, 40, 36, 52, 38, 60, 55],
          },
        ],
        analyticsData: {
          subscribers: 92600,
        },
      }
    },
    revenueGenerated() {
      return {
        series: [
          {
            name: 'Revenue',
            data: [350, 275, 400, 300, 350, 300, 450],
          },
        ],
        analyticsData: {
          revenue: 97500,
        },
      }
    },
    quarterlySales() {
      return {
        series: [
          {
            name: 'Sales',
            data: [10, 15, 7, 12, 3, 16],
          },
        ],
        analyticsData: {
          sales: '36%',
        },
      }
    },
    ordersRecevied() {
      return {
        series: [
          {
            name: 'Orders',
            data: [10, 15, 8, 15, 7, 12, 8],
          },
        ],
        analyticsData: {
          orders: 97500,
        },
      }
    },

    revenueComparisonLine() {
      return {
        analyticsData: {
          thisMonth: 86589,
          lastMonth: 73683,
        },
        series: [
          {
            name: 'This Month',
            data: [45000, 47000, 44800, 47500, 45500, 48000, 46500, 48600],
          },
          {
            name: 'Last Month',
            data: [46000, 48000, 45500, 46600, 44500, 46500, 45000, 47000],
          },
        ],
      }
    },
    goalOverview() {
      return {
        analyticsData: {
          completed: 786617,
          inProgress: 13561,
        },
        series: [83],
      }
    },

    browserStatistics() {
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
    },
    clientRetentionBar() {
      return {
        series: [
          {
            name: 'New Clients',
            data: [175, 125, 225, 175, 160, 189, 206, 134, 159, 216, 148, 123],
          },
          {
            name: 'Retained Clients',
            data: [
              -144,
              -155,
              -141,
              -167,
              -122,
              -143,
              -158,
              -107,
              -126,
              -131,
              -140,
              -137,
            ],
          },
        ],
      }
    },

    sessionsData() {
      return {
        analyticsData: [
          {
            device: 'Dekstop',
            icon: 'MonitorIcon',
            color: 'primary',
            sessionsPercentage: 58.6,
            comparedResultPercentage: 2,
          },
          {
            device: 'Mobile',
            icon: 'SmartphoneIcon',
            color: 'warning',
            sessionsPercentage: 34.9,
            comparedResultPercentage: 8,
          },
          {
            device: 'Tablet',
            icon: 'TabletIcon',
            color: 'danger',
            sessionsPercentage: 6.5,
            comparedResultPercentage: -5,
          },
        ],
        series: [58.6, 34.9, 6.5],
      }
    },
    chatLog() {
      return [
        {
          senderImg: require('@/assets/images/portrait/small/avatar-s-2.jpg'),
          msg: 'Cake sesame snaps cupcake gingerbread',
          isSent: false,
        },
        {
          senderImg: require('@/assets/images/portrait/small/avatar-s-5.jpg'),
          msg: 'Apple pie pie jujubes chupa chups muffin',
          isSent: true,
        },
        {
          senderImg: require('@/assets/images/portrait/small/avatar-s-2.jpg'),
          msg: 'Chocolate cake',
          isSent: false,
        },
        {
          senderImg: require('@/assets/images/portrait/small/avatar-s-5.jpg'),
          msg: 'Donut sweet pie oat cake dragée fruitcake',
          isSent: true,
        },
        {
          senderImg: require('@/assets/images/portrait/small/avatar-s-2.jpg'),
          msg: 'Liquorice chocolate bar jelly beans icing',
          isSent: false,
        },
        {
          senderImg: require('@/assets/images/portrait/small/avatar-s-5.jpg'),
          msg: 'Pudding candy',
          isSent: true,
        },
      ]
    },

    customersData() {
      return {
        analyticsData: [
          {
            customerType: 'New',
            counts: 890,
            color: 'primary',
          },
          {
            customerType: 'Returning',
            counts: 258,
            color: 'warning',
          },
          {
            customerType: 'Referrals ',
            counts: 149,
            color: 'danger',
          },
        ],
        series: [690, 258, 149],
      }
    },
  },
  mounted() {
    // const scroll_el = this.$refs.chatLogPS.$el || this.$refs.chatLogPS
    // scroll_el.scrollTop = this.$refs.chatLog.scrollHeight
  },
  created() {
    // if (process.client) {
    // // Subscribers gained - Statistics
    // this.$http
    //   .get('/api/card/card-statistics/subscribers')
    //   .then(response => {
    //     this.subscribersGained = response.data
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    // Revenue Generated
    //   this.$http
    //     .get('/api/card/card-statistics/revenue')
    //     .then(response => {
    //       this.revenueGenerated = response.data
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    //   // Sales
    //   this.$http
    //     .get('/api/card/card-statistics/sales')
    //     .then(response => {
    //       this.quarterlySales = response.data
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    //   // Orders - Statistics
    //   this.$http
    //     .get('/api/card/card-statistics/orders')
    //     .then(response => {
    //       this.ordersRecevied = response.data
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    //   // Revenue Comparison
    //   this.$http
    //     .get('/api/card/card-analytics/revenue-comparison')
    //     .then(response => {
    //       this.revenueComparisonLine = response.data
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    //   // Goal Overview
    //   this.$http
    //     .get('/api/card/card-analytics/goal-overview')
    //     .then(response => {
    //       this.goalOverview = response.data
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    //   // Browser Analytics
    //   this.$http
    //     .get('/api/card/card-analytics/browser-analytics')
    //     .then(response => {
    //       this.browserStatistics = response.data
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    //   // Client Retention
    //   this.$http
    //     .get('/api/card/card-analytics/client-retention')
    //     .then(response => {
    //       this.clientRetentionBar = response.data
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    //   // Sessions By Device
    //   this.$http
    //     .get('/api/card/card-analytics/session-by-device')
    //     .then(response => {
    //       this.sessionsData = response.data
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    //   // Chat Log
    //   this.$http
    //     .get('/api/chat/demo-1/log')
    //     .then(response => {
    //       this.chatLog = response.data
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    //   // Customers
    //   this.$http
    //     .get('/api/card/card-analytics/customers')
    //     .then(response => {
    //       this.customersData = response.data
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // }
  },
}
</script>

<style lang="scss" scoped>
.chat-card-log {
  height: 400px;

  .chat-sent-msg {
    background-color: #f2f4f7 !important;
  }
}
</style>
