<!-- =========================================================================================
    File Name: CardTwitter.vue
    Description: Twitter Thread display
    ----------------------------------------------------------------------------------------
  TODO unlike and cancel retweets on
  TODO follow or unfollow
  TODO Retweet reply
========================================================================================== -->

<template>
  <div
    class="w-full p-5 mx-auto text-gray-800 bg-white rounded-lg shadow"
    style="max-width: 400px"
  >
    <div class="flex w-full mb-4">
      <div class="w-12 h-12 overflow-hidden rounded-full">
        <img
          v-if="item.user"
          :src="
            item.user.profile_image_url_https
              ? item.user.profile_image_url_https
              : ''
          "
          alt=""
        />
      </div>
      <div class="flex-grow pl-3">
        <h6 class="font-bold text-md">{{ item.user.name }}</h6>
        <p class="text-xs text-gray-600">@{{ item.user.screen_name }}</p>
      </div>
      <div class="w-12 text-right">
        <i class="text-3xl text-blue-400 mdi mdi-twitter"></i>
      </div>
    </div>
    <div class="w-full mb-4">
      <p class="text-sm">
        {{ item.text }}
      </p>
    </div>
    <div class="flex items-center">
      <vs-tooltip text="Like Tweet" class="flex">
        <!-- <vs-icon
          icon="thumb_up"
          class="mr-2"
          :color="item.favorited ? blue : gray"
          @click="likeTweet()"
        ></vs-icon> -->
        <vs-button
          radius
          :color="item.favorited ? blue : gray"
          type="flat"
          class="mr-2"
          icon="thumb_up"
          @click="likeTweet()"
        ></vs-button>
        <p class="text-blue-600">{{ item.favorite_count }}</p>
      </vs-tooltip>
      <vs-tooltip text="Retweet" class="flex flex-item-center">
        <!-- <vs-icon
          icon="repeat"
          class="ml-4 mr-2"
          :color="item.retweeted ? green : gray"
          @click="retweetTweet()"
        ></vs-icon
        >{{ item.retweet_count }} -->

        <vs-button
          radius
          :color="item.retweeted ? green : gray"
          type="flat"
          class="ml-4 mr-2"
          icon="repeat"
          @click="retweetTweet()"
        ></vs-button>
        <p class="text-blue-600">{{ item.retweet_count }}</p>
      </vs-tooltip>
    </div>
    <div v-if="item.tweet">
      <div v-if="item.tweets.length > 1">
        <div
          class="w-full mb-4"
          v-for="(item, index) in item.tweets"
          :key="index"
        >
          <vs-divider class="w-full mb-4" v-if="index != 0" />
          <p class="text-sm" v-if="index != 0">
            {{ item.textarea }}
          </p>
        </div>
      </div>
    </div>

    <div class="w-full">
      <p class="text-xs text-right text-gray-500">
        {{ item.created_at.split('+')[0] }}
      </p>
    </div>
    <!-- <vs-button @click="followUser()">Follow</vs-button> -->
    <vs-tooltip
      text="Follow Account"
      class="right-0 float-right -mt-8"
      v-if="followAccount"
    >
      <vs-button
        radius
        color="dark"
        type="line"
        icon="directions_walk"
        @click="followUser()"
      ></vs-button>
    </vs-tooltip>
    <vs-tooltip text="Save Image to File" class="right-0 float-right -mt-8">
      <vs-button
        radius
        color="dark"
        type="line"
        icon="add_photo_alternate"
        @click="saveImage()"
      ></vs-button>
    </vs-tooltip>
    <vs-tooltip
      text="Save Tweet to Drafts"
      class="right-0 float-right -mt-8"
      v-if="saveDraft"
    >
      <vs-button
        radius
        color="dark"
        type="line"
        icon="save"
        class="right-0 float-right -mt-8"
        @click="savePost()"
      ></vs-button>
    </vs-tooltip>
    <vs-tooltip text="Schedule Tweet" class="right-0 float-right -mt-8">
      <vs-button
        radius
        color="dark"
        type="line"
        icon="date_range"
        class="right-0 float-right -mt-8"
        @click="schedular()"
      ></vs-button>
    </vs-tooltip>
    <vs-tooltip text="Use this Tweet" class="right-0 float-right -mt-8">
      <vs-button
        radius
        color="dark"
        type="line"
        icon="post_add"
        class="right-0 float-right -mt-8"
        @click="useTweet()"
      ></vs-button>
    </vs-tooltip>

    <vs-popup
      class="holamundo"
      title="Add Tweet"
      :active.sync="activePromptAddEvent"
    >
      <div class="flex calendar__label-container">
        <vs-chip
          v-if="labelLocal != 'none'"
          class="text-white"
          :class="'bg-' + labelColor(labelLocal)"
          >{{ labelLocal }}</vs-chip
        >

        <vs-dropdown
          vs-custom-content
          vs-trigger-click
          class="my-2 ml-auto cursor-pointer"
        >
          <feather-icon
            icon="TagIcon"
            svgClasses="h-5 w-5"
            class="cursor-pointer"
            @click.prevent
          ></feather-icon>

          <vs-dropdown-menu style="z-index: 200001">
            <vs-dropdown-item
              v-for="(label, index) in calendarLabels"
              :key="index"
              @click="labelLocal = label.value"
            >
              <div
                class="inline-block w-3 h-3 mr-2 rounded-full"
                :class="'bg-' + label.color"
              ></div>
              <span>{{ label.text }}</span>
            </vs-dropdown-item>

            <vs-dropdown-item @click="labelLocal = 'none'">
              <div
                class="inline-block w-3 h-3 mr-2 rounded-full bg-primary"
              ></div>
              <span>None</span>
            </vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>
      </div>

      <vs-input
        name="event-name"
        class="w-full"
        label-placeholder="Tweet Title"
        v-model="title"
      ></vs-input>

      <div class="my-4">
        <small class="date-label">Tweet Date Time</small>
        <flat-pickr
          :config="configdateTimePicker"
          v-model="datetime"
          placeholder="Date Time"
          class="w-full"
        />
      </div>
      <div :key="index" v-for="(twt, index) in tweets">
        <vs-textarea
          class="w-full"
          counter="280"
          label="Counter: 280"
          :counter-danger.sync="counterDanger"
          v-model="tweets[index].textarea"
        />

        <ImageUpload class="mt-4 mb-4" />
      </div>

      <vs-button
        color="success"
        type="filled"
        icon="library_add"
        class="float-right"
        @click="addAnother"
      ></vs-button>

      <vs-button @click="addEvent">Add Tweet</vs-button>
    </vs-popup>

    <vs-popup
      class="holamundo"
      title="Save to Drafts"
      :active.sync="activePromptSave"
    >
      <vs-card>
        <div :key="index" v-for="(twt, index) in tweets">
          <vs-textarea
            class="w-full"
            counter="280"
            label="Counter: 280"
            :counter-danger.sync="counterDanger"
            v-model="tweets[index].textarea"
          />

          <ImageUpload @input="input" class="mt-4 mb-4" />
        </div>

        <vs-button
          color="success"
          type="filled"
          icon="library_add"
          class="float-right"
          @click="addAnother"
        ></vs-button>

        <div class="flex m-4">
          <vs-tooltip
            text="Everyone in the Company will have this draft"
            position="top"
          >
            <vs-checkbox v-model="for_all">Everyone</vs-checkbox>
          </vs-tooltip>
          <vs-tooltip
            text="Everyone in the Branch will have this draft"
            position="top"
          >
            <vs-checkbox v-model="for_branch" v-if="entity == 'branch'"
              >For everyon in Branch</vs-checkbox
            >
          </vs-tooltip>
        </div>
        <vs-tooltip
          text="Save Tweet to Drafts"
          position="top"
          class="float-right"
        >
          <vs-button @click="createDraft" class="mt-4" icon="save"
            >Save</vs-button
          >
        </vs-tooltip>
      </vs-card>
    </vs-popup>

    <vs-popup
      class="holamundo"
      title="Ready to Tweet"
      :active.sync="activePromptAddTweet"
    >
      <vs-card>
        <div :key="index" v-for="(twt, index) in tweets">
          <vs-textarea
            class="w-full"
            counter="280"
            label="Counter: 280"
            :counter-danger.sync="counterDanger"
            v-model="tweets[index].textarea"
          />

          <ImageUpload @input="input" class="mt-4 mb-4" />
        </div>

        <vs-button
          color="success"
          type="filled"
          icon="library_add"
          class="float-right"
          @click="addAnother"
        ></vs-button>

        <vs-tooltip text="Tweet" position="top" class="float-right">
          <vs-button @click="createTweet" class="mt-4" icon="save"
            >Send Tweet</vs-button
          >
        </vs-tooltip>
      </vs-card>
    </vs-popup>
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
  props: {
    item: {
      type: Object,
    },
    saveDraft: {
      type: Boolean,
      default: true,
    },
    followAccount: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    CalendarView,
    CalendarViewHeader,
    Datepicker,
    flatPickr,
  },
  data() {
    return {
      for_all: false,
      for_branch: false,
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
      activePromptAddTweet: true,
      activePromptSave: false,

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
      blue: 'blue',
      green: 'green',
      gray: 'gray',
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
  created() {
    // var str = this.item.text
    // var urlRE = new RegExp(
    //   '([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?([^ ])+'
    // )
    // str.match(urlRE)
  },
  methods: {
    addAnother() {
      this.tweets.push({
        textarea: '',
        imgs: [],
      })
    },
    savePost() {
      console.log('savepost')
      let vm = this
      let imgs = []
      if (vm.item.images) {
        imgs = vm.item.images
      }
      this.tweets = [
        {
          textarea: vm.item.text,
          imgs: [],
        },
      ]
      this.activePromptSave = true
    },
    createTweet() {
      console.log('date', this.date)
      let vm = this
      let message = this.tweets[0].textarea
      // if (this.images) {
      //   for (let i = 0; i < this.images.length; i++) {
      //     message = message + ' ' + this.images[i] + ' '
      //   }
      // }
      // console.log('image', message)

      this.$axios
        .$post('/api/twitter/tweet', {
          config: this.config,
          message: message,
        })
        .then(
          (response) => {
            vm.successUpload('TWEETED')
          },
          (error) => {
            console.log(error)
            vm.unsuccessUpload(error)
          }
        )
    },
    addEvent() {
      let vm = this
      this.activePromptAddEvent = false

      var d = new Date()
      var n = d.getTimezoneOffset()
      var t = n / 60

      let dateTimeSplit = this.datetime.split(' ')
      let date = dateTimeSplit[0]
      let time = dateTimeSplit[1]
      let timeSplit = time.split(':')
      let hour = timeSplit[0]
      let minutes = parseInt(timeSplit[1])

      let setTime = parseInt(hour) + parseInt(t)
      let setHour = hour
      let setDay = date
      console.log('hour', hour)
      console.log('minutes', minutes)
      console.log('set time', setTime)
      if (setTime == 0) {
        setHour = 0
      } else if (setTime < 0) {
        setDay = moment(date).subtract(1, 'days').format('YYYY-MM-DD')
        setHour = 24 + setTime
      } else if (setTime > 23) {
        etDay = moment(date).add(1, 'days').format('YYYY-MM-DD')
        setHour = 24 - setTime
        setDay = moment(date, 'YYYY-MM-DD').add(1, 'days')
      } else {
        setHour = setTime
      }

      console.log('setHour', setHour)
      console.log('setDay', setDay)

      const obj = {
        title: this.title,
        startDate: date,
        endDate: date,
        time: time,
        scheduled_date: setDay,
        scheduled_hour: setHour,
        scheduled_minutes: minutes,
        tweets: this.tweets,
        label: this.labelLocal,
        url: this.url,
        u_uid: this.user.uid,
        b_uid: this.business.b_uid,
        config: this.config,
        type: 'Tweet',
        status: 'scheduled',
      }
      if (this.config) {
        this.$fireStore
          .collection('tweets')
          .add(obj)
          .then(function () {
            obj.classes = `event-${vm.labelColor(vm.labelLocal)}`
            vm.$store.dispatch('calendar/addEvent', obj)
            vm.successUpload()
          })
          .catch(function (error) {
            console.error('Error writing document: ', error)
            vm.unsuccessUpload(error)
          })
      } else {
        let error = 'Please enter your configuration file'
        vm.unsuccessUpload(error)
      }
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
    schedular() {
      console.log('schedular')
      let vm = this
      let imgs = []
      if (vm.item.images) {
        imgs = vm.item.images
      }
      this.tweets = [
        {
          textarea: vm.item.text,
          imgs: [],
        },
      ]
      this.activePromptAddEvent = true
    },
    useTweet() {
      let vm = this
      let imgs = []
      if (vm.item.images) {
        imgs = vm.item.images
      }
      this.tweets = [
        {
          textarea: vm.item.text,
          imgs: [],
        },
      ]
      this.activePromptAddTweet = true
    },
    createDraft() {
      let obj = {
        b_uid: this.business.b_uid,
        uid: this.user.uid,
        branch: this.branch,
        tweets: this.tweets,
        for_all: this.for_all,
        for_branch: this.for_branch,
        timestamp: Date.now(),
      }

      this.$fireStore.collection('tweetDrafts').add(obj)
      this.activePromptSave = false
    },
    input(data) {
      console.log('data', data)
      this.images = data
      console.log('images', this.images)
    },
    followUser() {
      let id = this.item.user.id_str
      let screen_name = this.item.user.screen_name
      let vm = this
      this.$axios
        .$post('/api/twitter/followUser', {
          config: this.config,
          screen_name: screen_name,
          user_id: id,
        })
        .then(
          (response) => {
            vm.successUpload('FOLLOWED')
          },
          (error) => {
            console.log(error)
            vm.unsuccessUpload(error)
          }
        )
    },
    likeTweet() {
      let id = this.item.id_str
      let vm = this
      this.$axios
        .$post('api/twitter/twitterLike', {
          config: this.config,
          post_id: id,
        })
        .then(
          (response) => {
            vm.item.favorited = true
            vm.item.favorite_count = vm.item.favorite_count + 1
            vm.successUpload('LIKED')
          },
          (error) => {
            console.log(error)
            vm.unsuccessUpload(error)
          }
        )
    },
    retweetTweet() {
      let id = this.item.id_str
      let vm = this
      this.$axios
        .$post('/api/twitter/twitterRetweet', {
          config: this.config,
          post_id: id,
        })
        .then(
          (response) => {
            vm.item.retweeted = true
            vm.item.retweet_count = vm.item.retweet_count + 1
            vm.successUpload('RETWEETED')
          },
          (error) => {
            console.log(error)
            vm.unsuccessUpload(error)
          }
        )
    },
    successUpload(msg) {
      this.$vs.notify({
        color: 'success',
        title: 'Yeah',
        text: `${msg}`,
      })
    },
    unsuccessUpload(err) {
      this.$vs.notify({
        color: 'danger',
        title: 'Oops',
        text: `${err}`,
      })
    },
  },
}
</script>

<style>
@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
</style>
