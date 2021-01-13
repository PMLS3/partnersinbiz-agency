<template>
  <div class="w-full h-full">
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
      class="w-full mb-4"
      label-placeholder="Post Title"
      v-model="title"
    ></vs-input>

    <div :key="index" v-for="(twt, index) in postss">
      <vs-textarea
        class="w-full"
        counter="280"
        label="Counter: 280 (Twitter limit)"
        :counter-danger.sync="counterDanger"
        v-model="postss[index].textarea"
      />

      <vs-tooltip text="Add a Image" position="left">
        <UploadImage
          class="mt-4 mb-4"
          @input="input"
          @indexChange="change(index)"
        />
      </vs-tooltip>
      <div v-for="(img, i) in postss[index].imgs" :key="i">
        <img :src="img" class="h-24" />
      </div>
    </div>

    <vs-tooltip text="Add a sub Post" position="left" class="float-right">
      <vs-button
        color="success"
        type="filled"
        icon="library_add"
        @click="addAnother"
      ></vs-button>
    </vs-tooltip>

    <div class="flex m-4">
      <vs-tooltip text="Post now to selected Social Platforms" position="right">
        <vs-checkbox v-model="post_now">Post Now</vs-checkbox>
      </vs-tooltip>
      <vs-tooltip text="Save to Drafts" position="right">
        <vs-checkbox v-model="save_to_drafts">Save to Drafts</vs-checkbox>
      </vs-tooltip>

      <vs-tooltip text="Schedule to selected Social Platforms" position="right">
        <vs-checkbox v-model="schedule">Schedule</vs-checkbox>
      </vs-tooltip>
    </div>

    <div class="my-4" v-if="schedule">
      <small class="date-label">Post Date Time</small>
      <flat-pickr
        :config="configdateTimePicker"
        v-model="datetime"
        placeholder="Date Time"
        class="w-full"
      />
    </div>

    <div class="flex m-4" v-if="post_now == true || schedule == true">
      <vs-tooltip text="To twitter" position="right">
        <vs-checkbox v-model="to_twitter">Twitter</vs-checkbox>
      </vs-tooltip>
      <vs-tooltip text="To Facebook" position="right">
        <vs-checkbox v-model="to_facebook">Facebook</vs-checkbox>
      </vs-tooltip>

      <vs-tooltip text="To Instagram" position="right">
        <vs-checkbox v-model="to_instagram">Instagram</vs-checkbox>
      </vs-tooltip>
    </div>

    <div class="flex m-4" v-if="save_to_drafts">
      <vs-tooltip
        text="Everyone in the Company will have this draft"
        position="right"
      >
        <vs-checkbox v-model="for_all">Everyone</vs-checkbox>
      </vs-tooltip>
      <vs-tooltip
        text="Everyone in the Branch will have this draft"
        position="right"
      >
        <vs-checkbox v-model="for_branch" v-if="entity == 'branch'"
          >For everyon in Branch</vs-checkbox
        >
      </vs-tooltip>
    </div>
    <vs-button @click="preview">Submit Posts</vs-button>
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
    entity: { type: String, default: 'person' },
    handle: { type: String, default: '' },
    branch: { type: String, default: '' },
    twtConfig: { type: Object },
    posts: { required: false, type: Array, default: () => [] },
  },
  components: {
    CalendarView,
    CalendarViewHeader,
    Datepicker,
    flatPickr,
  },
  data() {
    return {
      post_now: false,
      save_to_drafts: false,
      schedule: false,
      for_all: false,
      for_branch: false,
      to_instagram: false,
      to_twitter: false,
      to_facebook: false,
      //   showDate: new Date(),
      //   disabledFrom: false,
      id: 0,
      title: '',
      postss: [
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
      blue: 'blue',
      green: 'green',
      gray: 'gray',
    }
  },

  computed: {
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
  },
  created() {
    console.log('post', this.posts)
    if (this.posts.length > 0) {
      this.postss = this.posts
      console.log('postss', this.postss)
    }
  },
  methods: {
    change(index) {
      console.log(index)
      this.id = index
    },
    addAnother() {
      this.postss.push({
        textarea: '',
        imgs: [],
      })
    },

    preview() {
      let vm = this
      this.activePromptAddEvent = false

      var d = new Date()
      var n = d.getTimezoneOffset()
      var t = n / 60

      if (this.datetime) {
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
          posts: this.postss,
          label: this.labelLocal,
          url: this.url,
          u_uid: this.user.uid,
          b_uid: this.business.b_uid,
          post_now: this.post_now,
          save_to_drafts: this.save_to_drafts,
          schedule: this.schedule,
          for_all: this.for_all,
          for_branch: this.for_branch,
          to_instagram: this.to_instagram,
          to_twitter: this.to_twitter,
          to_facebook: this.to_facebook,
        }

        if (this.datetime) {
          obj.startDate = date
          obj.endDate = date
          obj.time = time
          obj.scheduled_date = setDay
          obj.scheduled_hour = setHour
          obj.scheduled_minutes = minutes
        }

        this.$emit('send-data', obj)
      }
    },

    input(data) {
      console.log('input', data)
      this.postss[this.id].imgs = data
      console.log('input', this.postss)
    },
  },
}
</script>

<style>
@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
</style>
