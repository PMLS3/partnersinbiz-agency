<!-- =========================================================================================
  File Name: DashboardAnalytics.vue
  Description: Dashboard Analytics
  ----------------------------------------------------------------------------------------
TODO: data not pulling through
========================================================================================== -->

<template>
  <div id="dashboard-analytics">
    <div class="vx-row">
      <!-- CARD 1: CONGRATS -->
      <div class="w-full vx-col lg:w-1/2 mb-base">
        <vx-card
          slot="no-body"
          class="text-center bg-primary-gradient greet-user"
        >
          <img
            src="@/assets/images/elements/decore-left.png"
            class="decore-left"
            alt="Decore Left"
            width="200"
          />
          <img
            src="@/assets/images/elements/decore-right.png"
            class="decore-right"
            alt="Decore Right"
            width="175"
          />
          <feather-icon
            icon="AwardIcon"
            class="inline-flex p-6 mb-8 text-white rounded-full shadow bg-primary"
            svgClasses="h-8 w-8"
          ></feather-icon>
          <h1 class="mb-6 text-white">
            Congratulations {{ checkpointReward.userName }},
          </h1>
          <p class="w-4/5 mx-auto text-white xl:w-3/4 lg:w-4/5 md:w-2/3">
            You have done <strong>{{ checkpointReward.progress }}</strong> more
            sales today. Check your new badge in your profile.
          </p>
        </vx-card>
      </div>

      <!-- CARD 2: SUBSCRIBERS GAINED -->
      <div class="w-full vx-col sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <UiStatisticsCardLine
          icon="UsersIcon"
          statistic="92.6k"
          statisticTitle="Subscribers Gained"
          :chartData="subscribersGained.series"
          type="area"
        />
      </div>

      <!-- CARD 3: ORDER RECIEVED -->
      <div class="w-full vx-col sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <UiStatisticsCardLine
          icon="ShoppingBagIcon"
          statistic="97.5K"
          statisticTitle="Orders Received"
          :chartData="ordersRecevied.series"
          color="warning"
          type="area"
        />
      </div>
    </div>

    <div class="vx-row">
      <!-- CARD 4: SESSION -->
      <div class="w-full vx-col md:w-1/2 mb-base">
        <vx-card>
          <div
            class="flex-col-reverse vx-row md:flex-col-reverse sm:flex-row lg:flex-row"
          >
            <!-- LEFT COL -->
            <div
              class="flex flex-col justify-between w-full vx-col md:w-full sm:w-1/2 lg:w-1/2 xl:w-1/2"
              v-if="salesBarSession.analyticsData"
            >
              <div>
                <h2 class="mb-1 font-bold">
                  {{ salesBarSession.analyticsData.session | k_formatter }}
                </h2>
                <span class="font-medium">Avg Sessions</span>

                <!-- Previous Data Comparison -->
                <p class="mt-2 text-xl font-medium">
                  <span
                    :class="
                      salesBarSession.analyticsData.comparison.result >= 0
                        ? 'text-success'
                        : 'text-danger'
                    "
                  >
                    <span
                      v-if="salesBarSession.analyticsData.comparison.result > 0"
                      >+</span
                    >
                    <span>{{
                      salesBarSession.analyticsData.comparison.result
                    }}</span>
                  </span>
                  <span> vs </span>
                  <span>{{
                    salesBarSession.analyticsData.comparison.str
                  }}</span>
                </p>
              </div>
              <vs-button
                icon-pack="feather"
                icon="icon-chevrons-right"
                icon-after
                class="w-full mt-4 shadow-md lg:mt-0"
                >View Details</vs-button
              >
            </div>

            <!-- RIGHT COL -->
            <div
              class="flex flex-col w-full vx-col md:w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 lg:mb-0 md:mb-base sm:mb-0 mb-base"
            >
              <ChangeTimeDurationDropdown class="self-end" />
              <vue-apex-charts
                type="bar"
                height="200"
                :options="analyticsData.salesBar.chartOptions"
                :series="salesBarSession.series"
                v-if="salesBarSession.series"
              />
            </div>
          </div>
          <vs-divider class="my-6"></vs-divider>
          <div class="vx-row">
            <div class="w-1/2 mb-3 vx-col">
              <p>Goal: $100000</p>
              <vs-progress
                class="block mt-1"
                :percent="50"
                color="primary"
              ></vs-progress>
            </div>
            <div class="w-1/2 mb-3 vx-col">
              <p>Users: 100K</p>
              <vs-progress
                class="block mt-1"
                :percent="60"
                color="warning"
              ></vs-progress>
            </div>
            <div class="w-1/2 mb-3 vx-col">
              <p>Retention: 90%</p>
              <vs-progress
                class="block mt-1"
                :percent="70"
                color="danger"
              ></vs-progress>
            </div>
            <div class="w-1/2 mb-3 vx-col">
              <p>Duration: 1yr</p>
              <vs-progress
                class="block mt-1"
                :percent="90"
                color="success"
              ></vs-progress>
            </div>
          </div>
        </vx-card>
      </div>

      <!-- CARD 5: SUPPORT TRACKER -->
      <div class="w-full vx-col md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
        <vx-card title="Support Tracker">
          <!-- CARD ACTION -->
          <template slot="actions">
            <ChangeTimeDurationDropdown />
          </template>

          <div slot="no-body" v-if="supportTracker.analyticsData">
            <div class="text-center vx-row">
              <!-- Open Tickets Heading -->
              <div
                class="flex flex-col justify-between order-last w-full mb-4 vx-col lg:w-1/5 md:w-full sm:w-1/5 lg:order-first md:order-last sm:order-first"
              >
                <div class="lg:ml-6 lg:mt-6 md:mt-0 md:ml-0 sm:ml-6 sm:mt-6">
                  <h1 class="text-5xl font-bold">
                    {{ supportTracker.analyticsData.openTickets }}
                  </h1>
                  <small>Tickets</small>
                </div>
              </div>

              <!-- Chart -->
              <div
                class="justify-center w-full mx-auto mt-6 vx-col lg:w-4/5 md:w-full sm:w-4/5 lg:mt-0 md:mt-6 sm:mt-0"
              >
                <vue-apex-charts
                  type="radialBar"
                  height="385"
                  :options="analyticsData.supportTrackerRadialBar.chartOptions"
                  :series="supportTracker.series"
                />
              </div>
            </div>

            <!-- Support Tracker Meta Data -->
            <div class="flex flex-row justify-between px-8 pb-4 mt-4">
              <p
                class="text-center"
                v-for="(val, key) in supportTracker.analyticsData.meta"
                :key="key"
              >
                <span class="block">{{ key }}</span>
                <span class="text-2xl font-semibold">{{ val }}</span>
              </p>
            </div>
          </div>
        </vx-card>
      </div>
    </div>

    <div class="vx-row">
      <!-- CARD 6: Product Orders -->
      <div class="w-full vx-col lg:w-1/3 mb-base">
        <vx-card title="Product Orders">
          <!-- CARD ACTION -->
          <template slot="actions">
            <ChangeTimeDurationDropdown />
          </template>

          <!-- Chart -->
          <div slot="no-body">
            <vue-apex-charts
              type="radialBar"
              height="420"
              :options="analyticsData.productOrdersRadialBar.chartOptions"
              :series="productsOrder.series"
            />
          </div>

          <ul>
            <li
              v-for="orderData in productsOrder.analyticsData"
              :key="orderData.orderType"
              class="flex justify-between mb-3"
            >
              <span class="flex items-center">
                <span
                  class="inline-block w-4 h-4 mr-2 bg-white border-solid rounded-full border-3"
                  :class="`border-${orderData.color}`"
                ></span>
                <span class="font-semibold">{{ orderData.orderType }}</span>
              </span>
              <span>{{ orderData.counts }}</span>
            </li>
          </ul>
        </vx-card>
      </div>

      <!-- CARD 7: Sales Stats -->
      <div class="w-full vx-col lg:w-1/3 mb-base">
        <vx-card title="Sales Stats" subtitle="Last 6 Months">
          <template slot="actions">
            <feather-icon
              icon="MoreVerticalIcon"
              svgClasses="w-6 h-6 text-grey"
            ></feather-icon>
          </template>
          <div class="flex">
            <span class="flex items-center"
              ><div class="w-3 h-3 mr-1 rounded-full bg-primary"></div>
              <span>Sales</span></span
            >
            <span class="flex items-center ml-4"
              ><div class="w-3 h-3 mr-1 rounded-full bg-success"></div>
              <span>Visits</span></span
            >
          </div>
          <div slot="no-body-bottom">
            <vue-apex-charts
              type="radar"
              height="385"
              :options="analyticsData.statisticsRadar.chartOptions"
              :series="salesRadar.series"
            />
          </div>
        </vx-card>
      </div>

      <!-- CARD 8: Activity Timeline -->
      <div class="w-full vx-col lg:w-1/3 mb-base">
        <vx-card title="Activity Timeline">
          <vx-timeline :data="timelineData" />
        </vx-card>
      </div>
    </div>

    <div class="vx-row">
      <!-- CARD 9: DISPATCHED ORDERS -->
      <div class="w-full vx-col">
        <vx-card title="Dispatched Orders">
          <div slot="no-body" class="mt-4">
            <vs-table :data="dispatchedOrders" class="table-dark-inverted">
              <template slot="thead">
                <vs-th>ORDER NO.</vs-th>
                <vs-th>STATUS</vs-th>
                <vs-th>OPERATORS</vs-th>
                <vs-th>LOCATION</vs-th>
                <vs-th>DISTANCE</vs-th>
                <vs-th>START DATE</vs-th>
                <vs-th>EST DELIVERY DATE</vs-th>
              </template>

              <template slot-scope="{ data }">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td :data="data[indextr].orderNo">
                    <span>#{{ data[indextr].orderNo }}</span>
                  </vs-td>
                  <vs-td :data="data[indextr].status">
                    <span class="flex items-center px-2 py-1 rounded"
                      ><div
                        class="w-3 h-3 mr-2 rounded-full"
                        :class="'bg-' + data[indextr].statusColor"
                      ></div>
                      {{ data[indextr].status }}</span
                    >
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <ul class="users-liked user-list">
                      <li
                        v-for="(user, userIndex) in data[indextr].usersLiked"
                        :key="userIndex"
                      >
                        <vx-tooltip :text="user.name" position="bottom">
                          <vs-avatar
                            :src="user.img"
                            size="30px"
                            class="-m-1 border-2 border-white border-solid"
                          ></vs-avatar>
                        </vx-tooltip>
                      </li>
                    </ul>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{ data[indextr].location }}</span>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{ data[indextr].distance }}</span>
                    <vs-progress
                      :percent="data[indextr].distPercent"
                      :color="data[indextr].statusColor"
                    ></vs-progress>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{ data[indextr].startDate }}</span>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{ data[indextr].estDelDate }}</span>
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import analyticsData from '@/js/data/analyticsData.js'

// import VxTimeline from '@/components/timeline/VxTimeline'

export default {
  name: 'analytics',
  data() {
    return {
      timelineData: [
        {
          color: 'primary',
          icon: 'PlusIcon',
          title: 'Client Meeting',
          desc: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
          time: '25 mins Ago',
        },
        {
          color: 'warning',
          icon: 'MailIcon',
          title: 'Email Newsletter',
          desc: 'Cupcake gummi bears soufflé caramels candy',
          time: '15 Days Ago',
        },
        {
          color: 'danger',
          icon: 'UsersIcon',
          title: 'Plan Webinar',
          desc: 'Candy ice cream cake. Halvah gummi bears',
          time: '20 days ago',
        },
        {
          color: 'success',
          icon: 'LayoutIcon',
          title: 'Launch Website',
          desc:
            'Candy ice cream cake. Halvah gummi bears Cupcake gummi bears soufflé caramels candy.',
          time: '25 days ago',
        },
        {
          color: 'primary',
          icon: 'TvIcon',
          title: 'Marketing',
          desc: 'Candy ice cream cake. Halvah gummi bears Cupcake gummi bears.',
          time: '28 days ago',
        },
      ],

      analyticsData,
      dispatchedOrders: [
        {
          orderNo: 879985,
          status: 'Moving',
          statusColor: 'success',
          operator: 'Cinar Knowles',
          operatorImg: require('@/assets/images/portrait/small/avatar-s-2.jpg'),
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
          ],
          location: 'Anniston, Alabama',
          distance: '130 km',
          distPercent: 80,
          startDate: '26/07/2018',
          estDelDate: '28/07/2018',
        },
        {
          orderNo: 156897,
          status: 'Pending',
          statusColor: 'warning',
          operator: 'Britany Ryder',
          operatorImg: require('@/assets/images/portrait/small/avatar-s-4.jpg'),
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
          ],
          location: 'Cordova, Alaska',
          distance: '234 km',
          distPercent: 60,
          startDate: '26/07/2018',
          estDelDate: '28/07/2018',
        },
        {
          orderNo: 568975,
          status: 'Moving',
          statusColor: 'success',
          operator: 'Kishan Ashton',
          operatorImg: require('@/assets/images/portrait/small/avatar-s-1.jpg'),
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
          location: 'Florence, Alabama',
          distance: '168 km',
          distPercent: 70,
          startDate: '26/07/2018',
          estDelDate: '28/07/2018',
        },
        {
          orderNo: 245689,
          status: 'Canceled',
          statusColor: 'danger',
          operator: 'Anabella Elliott',
          operatorImg: require('@/assets/images/portrait/small/avatar-s-6.jpg'),
          usersLiked: [
            {
              name: 'Vennie Mostowy',
              img: require('@/assets/images/portrait/small/avatar-s-5.jpg'),
            },
            {
              name: 'Elicia Rieske',
              img: require('@/assets/images/portrait/small/avatar-s-7.jpg'),
            },
          ],
          location: 'Clifton, Arizona',
          distance: '125 km',
          distPercent: 95,
          startDate: '26/07/2018',
          estDelDate: '28/07/2018',
        },
      ],
    }
  },
  components: {
    VueApexCharts,
    // VxTimeline
  },
  computed: {
    checkpointReward() {
      return { userName: 'John', progress: '57.6%' }
    },
    subscribersGained() {
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
    salesBarSession() {
      return {
        series: [
          {
            name: 'Sessions',
            data: [75, 125, 225, 175, 125, 75, 25],
          },
        ],
        analyticsData: {
          session: 2700,
          comparison: {
            str: 'Last 7 Days',
            result: +5.2,
          },
        },
      }
    },
    supportTracker() {
      return {
        analyticsData: {
          openTickets: 163,
          meta: {
            'New Tickets': 29,
            'Open Tickets': 63,
            'Response Time': '1d',
          },
        },
        series: [83],
      }
    },
    productsOrder() {
      return {
        analyticsData: [
          {
            orderType: 'Finished',
            counts: 23043,
            color: 'primary',
          },
          {
            orderType: 'Pending',
            counts: 14658,
            color: 'warning',
          },
          {
            orderType: 'Rejected ',
            counts: 4758,
            color: 'danger',
          },
        ],
        series: [70, 52, 26],
      }
    },
    salesRadar() {
      return {
        series: [
          {
            name: 'Visits',
            data: [90, 50, 86, 40, 100, 20],
          },
          {
            name: 'Sales',
            data: [70, 75, 70, 76, 20, 85],
          },
        ],
      }
    },
  },
}
</script>

<style lang="scss">
/*! rtl:begin:ignore */
#dashboard-analytics {
  .greet-user {
    position: relative;

    .decore-left {
      position: absolute;
      left: 0;
      top: 0;
    }
    .decore-right {
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  @media (max-width: 576px) {
    .decore-left,
    .decore-right {
      width: 140px;
    }
  }
}
/*! rtl:end:ignore */
</style>
