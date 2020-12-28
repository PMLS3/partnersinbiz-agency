<template>
  <div ref="parentSidebar" id="parentx" class="h-full min-h-screen">
    <vs-sidebar
      default-index="1"
      color="primary"
      class="sidebarx"
      spacer
      v-model="active"
    >
      <div class="header-sidebar" slot="header">
        <vs-avatar
          size="70px"
          src="https://randomuser.me/api/portraits/men/85.jpg"
        />

        <h4>
          My Name
          <vs-button color="primary" icon="more_horiz" type="flat"></vs-button>
        </h4>
      </div>

      <vs-sidebar-item
        index="1"
        icon="dashboard"
        @click="showScreen = 'Dashboard'"
      >
        Dashboard
      </vs-sidebar-item>

      <vs-sidebar-item index="2" icon="history" @click="showScreen = 'History'">
        History
      </vs-sidebar-item>
      <vs-sidebar-item
        index="3"
        icon="schedule"
        @click="showScreen = 'Schedule'"
      >
        Schedule
      </vs-sidebar-item>
      <vs-sidebar-item
        index="4"
        icon="update"
        @click="showScreen = 'Recurring'"
      >
        Recurring
      </vs-sidebar-item>
      <vs-sidebar-item
        index="5"
        icon="thumb_up"
        @click="showScreen = 'AutoLike'"
      >
        Auto Like
      </vs-sidebar-item>
      <vs-sidebar-item
        index="6"
        icon="repeat"
        @click="showScreen = 'AutoRetweet'"
      >
        Auto Retweet
      </vs-sidebar-item>
      <vs-sidebar-item
        index="7"
        icon="question_answer"
        @click="showScreen = 'AutoDMs'"
      >
        Auto DM's
      </vs-sidebar-item>

      <vs-sidebar-item index="8" icon="toll" @click="showScreen = 'Golden'">
        Golden Tweets
      </vs-sidebar-item>

      <vs-divider icon="person" position="left"> User </vs-divider>

      <vs-sidebar-item
        index="3"
        icon="verified_user"
        @click="showScreen = 'Configuration'"
      >
        Configurations
      </vs-sidebar-item>
      <vs-sidebar-item
        index="4"
        icon="account_box"
        @click="showScreen = 'Profile'"
      >
        Profile
      </vs-sidebar-item>
      <vs-sidebar-item index="5"> Card </vs-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <vs-button icon="reply" color="danger" type="flat">log out</vs-button>
        <vs-button icon="settings" color="primary" type="border"></vs-button>
      </div>
    </vs-sidebar>
    <div class="mt-8">
      <div id="Dashboard" v-if="showScreen == 'Dashboard'">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-4">
          <StatisticsCardLine
            icon="ShoppingBagIcon"
            statistic="97.5K"
            statisticTitle="Followers"
            :chartData="ordersRecevied.series"
            color="warning"
            type="area"
          />

          <StatisticsCardLine
            icon="ShoppingBagIcon"
            statistic="97.5K"
            statisticTitle="Engagements per Tweet"
            :chartData="ordersRecevied.series"
            color="warning"
            type="area"
          />

          <StatisticsCardLine
            icon="ShoppingBagIcon"
            statistic="97.5K"
            statisticTitle="Impressions"
            :chartData="ordersRecevied.series"
            color="warning"
            type="area"
          />

          <StatisticsCardLine
            icon="ShoppingBagIcon"
            statistic="97.5K"
            statisticTitle="Tweets"
            :chartData="ordersRecevied.series"
            color="warning"
            type="area"
          />
        </div>
        <div class="mt-8">
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
        <div class="mt-8">
          <AgGridTableApp
            :item="item"
            :columnDefs="columnDefs"
            :itemData="itemData"
          />
        </div>
      </div>
      <div id="History" v-if="showScreen == 'History'">
        <div v-for="item in historyPosts" :key="item.id" class="flex-1">
          <CardTwitter :item="item" class="mt-3" />
        </div>
      </div>
      <div id="Schedule" v-if="showScreen == 'Schedule'">
        <SimpleCalendar />
      </div>

      <div id="Recurring" v-if="showScreen == 'Recurring'"></div>
      <div id="AutoLike" v-if="showScreen == 'AutoLike'"></div>
      <div id="AutoRetweet" v-if="showScreen == 'AutoRetweet'"></div>
      <div id="AutoDMs" v-if="showScreen == 'AutoDMs'"></div>
      <div id="GoldenTweets" v-if="showScreen == 'GoldenTweets'"></div>
      <div id="Configuration" v-if="showScreen == 'Configuration'"></div>
      <div id="Profile" v-if="showScreen == 'Profile'"></div>
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
  data: () => ({
    active: true,
    showScreen: 'Dashboard',
    analyticsData,
    item: {
      name: 'dashboard',
    },
    itemData: [],
    columnDefs: [
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
        width: 150,
        cellRendererFramework: 'CellRendererLink',
      },
      {
        headerName: 'Tweet',
        field: 'tweet',
        filter: true,
        width: 225,
        editable: true,
      },
      {
        headerName: 'Impressions',
        field: 'impressions',
        filter: true,
        width: 200,
      },
      {
        headerName: 'Engagements',
        field: 'engagements',
        filter: true,
        width: 150,
      },
      {
        headerName: 'EPI',
        field: 'epi',
        filter: true,
        width: 150,
      },
      {
        headerName: 'Likes',
        field: 'likes',
        filter: true,
        width: 350,
        cellRendererFramework: 'CellRendererAudio',
      },
      {
        headerName: 'Retweets',
        field: 'retweets',
        filter: true,
        width: 125,
        cellRendererFramework: 'CellRendererVerified',
        cellClass: 'text-center',
      },

      {
        headerName: 'Link Clicks',
        field: 'linkclicks',
        width: 150,
        cellRendererFramework: 'CellRendererActions',
      },
      {
        headerName: 'Profile Clicks',
        field: 'profileclicks',
        width: 150,
        cellRendererFramework: 'CellRendererActions',
      },
    ],
    historyPosts: [
      {
        date: 'Oct 15th 8:33pm',
        tweet: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        handle: '@joe.blow',
        name: 'Joe Blow',
        img: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
      },
      {
        date: 'Oct 15th 8:33pm',
        tweet: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        handle: '@joe.blow',
        name: 'Joe Blow',
        img: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
      },
    ],
  }),
  computed: {
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
  },
}
</script>

<style scoped>
#parentx {
  overflow: hidden;
  height: 500px;
  position: relative;
}

.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}

h4 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>
