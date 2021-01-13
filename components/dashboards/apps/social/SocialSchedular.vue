<!-- =========================================================================================
    File Name: CardTwitter.vue
    Description: Twitter Thread display
    ----------------------------------------------------------------------------------------
  TODO Add to drafts as well
  TODO create own tags
  TODO: show next three days tweets
  TODO: Delete tweets
  TODO: show timezones compared to where person tweets from
========================================================================================== -->

<template>
  <div id="simple-calendar-app">
    <div class="vx-card no-scroll-content">
      <calendar-view
        ref="calendar"
        :displayPeriodUom="calendarView"
        :show-date="showDate"
        :events="simpleCalendarEvents"
        enableDragDrop
        :eventTop="windowWidth <= 400 ? '2rem' : '3rem'"
        eventBorderHeight="0px"
        eventContentHeight="1.65rem"
        class="theme-default"
        @click-date="openAddNewEvent"
        @click-event="openEditEvent"
        @drop-on-date="eventDragged"
      >
        <div slot="header" class="mb-4">
          <div class="vx-row no-gutter">
            <!-- Month Name -->
            <div class="items-center hidden w-1/3 vx-col sm:flex">
              <!-- Add new event button -->
              <vs-button
                icon-pack="feather"
                icon="icon-plus"
                @click="promptAddNewEvent(new Date())"
                >Schedule</vs-button
              >
            </div>

            <!-- Current Month -->
            <div
              class="flex justify-center order-last w-full my-3 vx-col sm:w-1/3 sm:my-0 sm:justify-end"
            >
              <div class="flex items-center">
                <feather-icon
                  :icon="$vs.rtl ? 'ChevronRightIcon' : 'ChevronLeftIcon'"
                  @click="updateMonth(-1)"
                  svgClasses="w-5 h-5 m-1"
                  class="text-white rounded-full cursor-pointer bg-primary"
                />

                <span class="mx-3 text-xl font-medium whitespace-no-wrap">{{
                  showDate | month
                }}</span>

                <feather-icon
                  :icon="$vs.rtl ? 'ChevronLeftIcon' : 'ChevronRightIcon'"
                  @click="updateMonth(1)"
                  svgClasses="w-5 h-5 m-1"
                  class="text-white rounded-full cursor-pointer bg-primary"
                />
              </div>
            </div>

            <div class="flex justify-center w-full vx-col sm:w-1/3">
              <template v-for="(view, index) in calendarViewTypes">
                <vs-button
                  v-if="calendarView === view.val"
                  :key="String(view.val) + 'filled'"
                  type="filled"
                  class="p-3 md:px-8 md:py-3"
                  :class="{
                    'border-l-0 rounded-l-none': index,
                    'rounded-r-none': calendarViewTypes.length !== index + 1,
                  }"
                  @click="calendarView = view.val"
                  >{{ view.label }}</vs-button
                >
                <vs-button
                  v-else
                  :key="String(view.val) + 'border'"
                  type="border"
                  class="p-3 md:px-8 md:py-3"
                  :class="{
                    'border-l-0 rounded-l-none': index,
                    'rounded-r-none': calendarViewTypes.length !== index + 1,
                  }"
                  @click="calendarView = view.val"
                  >{{ view.label }}</vs-button
                >
              </template>
            </div>
          </div>

          <div class="hidden mt-4 vx-row sm:flex">
            <div class="flex w-full vx-col">
              <!-- Labels -->
              <div class="flex flex-wrap justify-center sm:justify-start">
                <div
                  v-for="(label, index) in calendarLabels"
                  :key="index"
                  class="flex items-center mb-2 mr-4"
                >
                  <div
                    class="inline-block w-3 h-3 mr-2 rounded-full"
                    :class="'bg-' + label.color"
                  ></div>
                  <span>{{ label.text }}</span>
                </div>
                <div class="flex items-center mb-2 mr-4">
                  <div
                    class="inline-block w-3 h-3 mr-2 rounded-full bg-primary"
                  ></div>
                  <span>None</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </calendar-view>
    </div>

    <vs-popup
      class="holamundo"
      title="Schedule Post"
      :active.sync="activePromptAddEvent"
    >
      <SocialPost />
    </vs-popup>

    <!-- EDIT EVENT -->
    <vs-prompt
      class="calendar-event-dialog"
      title="Edit Event"
      accept-text="Submit"
      cancel-text="Remove"
      button-cancel="border"
      @cancel="removeEvent"
      @accept="editEvent"
      :is-valid="validForm"
      :active.sync="activePromptEditEvent"
    >
      <SocialPost
        :twtConfig="twtConfig"
        :fbConfig="fbConfig"
        :instaConfig="instaConfig"
      />
    </vs-prompt>

    <vs-card class="grid gap-4 mt-20 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="item in tweetsTimelines" :key="item.id">
        <vs-button
          icon="delete_sweep"
          @click="deleteSchedule(item.id)"
          class="float-left"
          color="danger"
        ></vs-button>
        <CardTwitter :item="item" class="mt-3" />
      </div>
      <div>
        <h1>FB</h1>
      </div>
      <div>
        <h1>insta</h1>
      </div>
    </vs-card>

    <!-- <UiSocialTwitterFeeds :simpleCalendarEvents="tweetsTimelines" /> -->
  </div>
</template>

<script>
import { CalendarView, CalendarViewHeader } from 'vue-simple-calendar'
require('vue-simple-calendar/static/css/default.css')
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

import Datepicker from 'vuejs-datepicker'
import { en, he } from 'vuejs-datepicker/src/locale'
import moment from 'moment'

export default {
  components: {
    CalendarView,
    CalendarViewHeader,
    Datepicker,
    flatPickr,
  },
  props: {
    entity: { type: String, default: 'person' },
    handle: { type: String, default: '' },
    branch: { type: String, default: '' },
    twtConfig: { type: Object },
    fbConfig: { type: Object },
    instaConfig: { type: Object },
  },
  data() {
    return {
      showDate: new Date(),
      disabledFrom: false,
      id: 0,
      title: '',
      tweets: [
        {
          textarea: '',
          imgs: [],
        },
      ],
      tweetsTimelines: [],
      labelLocal: 'none',
      textarea: '',
      counterDanger: false,
      datetime: null,
      configdateTimePicker: {
        enableTime: true,
        dateFormat: 'Y-m-d H:i',
      },

      langHe: he,
      langEn: en,

      url: '',
      calendarView: 'month',

      activePromptAddEvent: false,
      activePromptEditEvent: false,

      calendarViewTypes: [
        {
          label: 'Month',
          val: 'month',
        },
        {
          label: 'Week',
          val: 'week',
        },
        {
          label: 'Year',
          val: 'year',
        },
      ],
    }
  },
  computed: {
    simpleCalendarEvents() {
      return this.$store.state.calendar.events
    },
    validForm() {
      //   return (
      //     this.title !== '' &&
      //     this.startDate !== '' &&
      //     this.endDate !== '' &&
      //     Date.parse(this.endDate) - Date.parse(this.startDate) >= 0 &&
      //     !this.errors.has('event-url')
      //   )
      return true
    },
    disabledDatesTo() {
      return { to: new Date(this.startDate) }
    },
    disabledDatesFrom() {
      return { from: new Date(this.endDate) }
    },
    calendarLabels() {
      return this.$store.state.calendar.eventLabels
    },
    labelColor() {
      return (label) => {
        if (label === 'business') return 'success'
        else if (label === 'work') return 'warning'
        else if (label === 'personal') return 'danger'
        else if (label === 'none') return 'primary'
      }
    },
    windowWidth() {
      return this.$store.state.windowWidth
    },
    business() {
      return this.$store.state.business.active_business
    },
    user() {
      return this.$store.state.auth.main_user
    },
    config() {
      return this.$store.state.config.twitter
    },
  },
  methods: {
    addAnother() {
      this.tweets.push({
        textarea: '',
        imgs: [],
      })
    },
    deleteSchedule(id) {
      let vm = this
      this.$fireStore
        .collection('tweets')
        .doc(id)
        .delete()
        .then(() => {
          vm.successUpload('Delete Success')
        })
        .catch((error) => {
          vm.unsuccessUpload(error)
        })
    },
    successUpload() {
      this.$vs.notify({
        color: 'success',
        title: 'Yeah',
        text: 'Message has been scheduled!',
      })
    },
    unsuccessUpload(err) {
      this.$vs.notify({
        color: 'danger',
        title: 'Oops',
        text: `${err}`,
      })
    },
    updateMonth(val) {
      this.showDate = this.$refs.calendar.getIncrementedPeriod(val)
    },
    clearFields() {
      this.title = this.endDate = this.url = ''
      this.id = 0
      this.labelLocal = 'none'
    },
    promptAddNewEvent(date) {
      this.disabledFrom = false
      this.addNewEventDialog(date)
    },
    addNewEventDialog(date) {
      this.clearFields()
      this.startDate = date
      this.endDate = date
      this.activePromptAddEvent = true
    },
    openAddNewEvent(date) {
      this.disabledFrom = true
      this.addNewEventDialog(date)
    },
    openEditEvent(event) {
      const e = this.$store.getters['calendar/getEvent'](event.id)
      this.id = e.id
      this.title = e.title
      this.startDate = e.startDate
      this.endDate = e.endDate
      this.url = e.url
      this.labelLocal = e.label
      this.activePromptEditEvent = true
    },
    editEvent() {
      const obj = {
        id: this.id,
        title: this.title,
        startDate: this.startDate,
        endDate: this.endDate,
        label: this.labelLocal,
        url: this.url,
      }
      obj.classes = `event-${this.labelColor(this.labelLocal)}`
      this.$store.dispatch('calendar/editEvent', obj)
    },
    removeEvent() {
      this.$store.dispatch('calendar/removeEvent', this.id)
    },
    eventDragged(event, date) {
      this.$store.dispatch('calendar/eventDragged', { event, date })
    },
  },
  created() {
    let vm = this
    //     this.$fireStore.collection("tweets").where("u_uid", "==", this.user.uid).get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(`${doc.id} => ${doc.data()}`);
    //           let obj = {...doc.data(), id: doc.id};
    //           vm.$store.dispatch('calendar/addEvent', obj)
    //     });

    var today = new Date()

    const date = moment(today).format('YYYY-MM-DD')

    this.$fireStore
      .collection('tweets')
      .where('u_uid', '==', this.user.uid)
      .orderBy('scheduled_date', 'asc')
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, ' => ', doc.data())
          let obj = { ...doc.data(), id: doc.id }
          vm.$store.dispatch('calendar/addEvent', obj)
          if (obj.scheduled_date >= date) {
            vm.tweetsTimelines.push(obj)
          }
        })
      })
      .catch(function (error) {
        console.log('Error getting documents: ', error)
      })

    this.$store.dispatch('calendar/fetchEvents')
    this.$store.dispatch('calendar/fetchEventLabels')
  },
  //   beforeDestroy() {
  //     this.$store.unregisterModule('calendar')
  //   },
}
</script>

<style lang="scss">
@import '@/assets/scss/vuexy/apps/simple-calendar.scss';
</style>
