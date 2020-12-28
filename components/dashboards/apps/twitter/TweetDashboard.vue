<template>
  <div>
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
    notExpand: false,
    reduce: true,
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
