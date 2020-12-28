<template>
  <div class="mt-24">
    <vs-tabs :color="colorx" position="left">
      <vs-tab label="Dashboard" icon="dashboard" @click="colorx = '#8B0000'">
        <TweetDashboard />
      </vs-tab>
      <vs-tab label="history" icon="history" @click="colorx = '#FFA500'">
        <div v-for="item in historyPosts" :key="item.id" class="flex-1">
          <CardTwitter :item="item" class="mt-3" />
        </div>
      </vs-tab>
      <vs-tab label="schedule" icon="schedule" @click="colorx = '#551A8B'">
        <TweetSchedular />
      </vs-tab>
      <vs-tab label="Recurring" icon="update" @click="colorx = '#0000FF'">
        <TweetRecurring />
      </vs-tab>
      <vs-tab label="AutoLike" icon="thumb_up" @click="colorx = '#0000FF'">
        <TweetAutoLike />
      </vs-tab>
      <vs-tab label="AutoRetweet" icon="repeat" @click="colorx = '#0000FF'">
        <TweetAutoShare />
      </vs-tab>
      <vs-tab
        label="AutoDMs"
        icon="question_answer"
        @click="colorx = '#0000FF'"
      >
        <TweetAutoDMs />
      </vs-tab>
      <vs-tab label="Golden" icon="toll" @click="colorx = '#0000FF'">
        <TweetGold />
      </vs-tab>

      <vs-tab
        label="Configuration"
        icon="account_box"
        @click="colorx = '#0000FF'"
      >
        <TweetConfig />
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import analyticsData from '@/js/data/analyticsData.js'
export default {
  components: {
    VueApexCharts,
  },
  data: () => ({
    colorx: '#8B0000',
    active: true,
    notExpand: false,
    reduce: true,
    showScreen: 'Dashboard',
    analyticsData,
    item: {
      name: 'dashboard',
    },
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
    business() {
      return this.$store.state.business.active_business
    },
    user() {
      return this.$store.state.auth.main_user
    },
  },
  created() {
    let vm = this
    this.$fireStore
      .collection('business')
      .doc('users')
      .collection(this.business.b_uid)
      .doc(this.user.uid)
      .collection('config')
      .doc('twitter')
      .onSnapshot(function (doc) {
        vm.$store.commit('config/TWITTER_UPDATE', doc.data())
      })
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
