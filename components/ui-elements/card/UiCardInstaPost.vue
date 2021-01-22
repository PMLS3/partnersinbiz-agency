<template>
  <div
    class="w-full mx-3 overflow-hidden bg-white border rounded lg:w-6/12 md:w-6/12 md:mx-0 lg:mx-0"
  >
    <div class="flex justify-between w-full p-3">
      <div class="flex">
        <div
          class="flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-500 rounded-full"
        >
          <img :src="profile_pic_url" alt="profilepic" />
        </div>
        <span class="pt-1 ml-2 text-sm font-bold">{{ name }}</span>
      </div>
      <span class="px-2 rounded cursor-pointer hover:bg-gray-300"
        ><i class="pt-2 text-lg fas fa-ellipsis-h"></i
      ></span>
    </div>
    <vs-button
      radius
      color="dark"
      type="line"
      icon="add_photo_alternate"
      class="right-0 float-right -mt-8"
      @click="saveImage()"
    ></vs-button>
    <vs-button
      radius
      color="dark"
      type="line"
      icon="save"
      class="right-0 float-right -mt-8"
      @click="savePost()"
    ></vs-button>
    <vs-button
      radius
      color="dark"
      type="line"
      icon="date_range"
      class="right-0 float-right -mt-8"
      @click="activePromptAddEvent = true"
    ></vs-button>

    <vs-button
      radius
      color="dark"
      type="line"
      icon="post_add"
      class="right-0 float-right -mt-8"
      @click="activePromptAddEvent2 = true"
    ></vs-button>

    <!-- <vs-icon
      icon="add_photo_alternate"
      class="right-0 float-right -mt-8"
    ></vs-icon>
    <vs-icon
      icon="save"
      class="right-0 float-right -mt-8"
      @click="savePost()"
    ></vs-icon>
    <vs-icon
      icon="date_range"
      class="right-0 float-right -mt-8"
      @click="activePromptAddEvent = true"
    ></vs-icon> -->

    <img class="w-full bg-cover" :src="item.node.display_url" />
    <div class="flex items-center ml-2">
      <vs-icon icon="thumb_up" class="mr-2" @click="likeInsta()"></vs-icon>
      <!-- <vs-icon
        icon="repeat"
        class="ml-4 mr-2"
        @click="retweetTweet()"
      ></vs-icon> -->
    </div>

    <div class="px-3 pb-2">
      <div class="pt-2">
        <i class="cursor-pointer far fa-heart"></i>
        <span class="text-sm font-medium text-gray-400"
          >{{ item.node.edge_liked_by.count }} likes</span
        >
      </div>
      <div class="pt-1">
        <div class="mb-2 text-sm">
          <span class="mr-2 font-medium">{{ name }}:</span>

          <div v-if="item.node.edge_media_to_caption.edges[0]">
            {{ item.node.edge_media_to_caption.edges[0].node.text }}
          </div>
        </div>
      </div>
      <div class="mb-2 text-sm font-medium text-gray-400 cursor-pointer">
        View all {{ item.node.edge_media_to_comment.count }} comments
      </div>
      <vs-textarea v-model="caption"></vs-textarea>
      <vs-button v-if="caption.length > 0" @click="addComment"
        >Submit</vs-button
      >
      <!-- {{ item.node.id }} -->
      <!-- <div class="mb-2">
        <div class="mb-2 text-sm">
          <span class="mr-2 font-medium">razzle_dazzle</span> Dude! How cool! I
          went to New Zealand last summer and had a blast taking the tour! So
          much to see! Make sure you bring a good camera when you go!
        </div>
      </div> -->
    </div>
    <vs-popup
      class="holamundo"
      title="Add Instagram schedule"
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
        label-placeholder="Instagram Title"
        v-model="title"
      ></vs-input>

      <div class="my-4">
        <small class="date-label">Instagram Date Time</small>
        <flat-pickr
          :config="configdateTimePicker"
          v-model="datetime"
          placeholder="Date Time"
          class="w-full"
        />
      </div>
      <img class="w-full mx-8 bg-cover" :src="item.node.display_url" />
      <vs-textarea class="w-full" v-model="caption" />

      <div class="my-4">
        <v-select label="Result type" v-model="post" :options="posts" />
        <!-- <small class="w-full mt-2"
          >* mixed : Include both popular and real time results in the
          response.</small
        >
        <small class="w-full mt-2"
          >* recent : return only the most recent results in the response</small
        >
        <small class="w-full mt-2"
          >* popular : return only the most popular results in the
          response.</small
        > -->
      </div>

      <vs-button @click="schedule">Add Instagram</vs-button>
    </vs-popup>

    <vs-popup
      class="holamundo"
      title="Post to Instagram"
      :active.sync="activePromptAddEvent2"
    >
      <img class="w-full mx-8 bg-cover" :src="item.node.display_url" />
      <vs-textarea class="w-full" v-model="caption" />

      <div class="my-4">
        <v-select label="Result type" v-model="post" :options="posts" />
      </div>

      <vs-button @click="postInsta">Post to Instagram</vs-button>
    </vs-popup>
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import vSelect from 'vue-select'

import moment from 'moment'
export default {
  props: {
    item: {
      type: Object,
    },
    name: { type: String },
    profile_pic_url: { type: String },
  },
  components: {
    flatPickr,
    vSelect,
  },
  data() {
    return {
      title: '',
      caption: '',
      posts: ['feed', 'story'],
      post: 'feed',
      activePromptAddEvent: false,
      activePromptAddEvent2: false,

      labelLocal: 'none',
      showDate: new Date(),
      datetime: null,
      configdateTimePicker: {
        enableTime: true,
        dateFormat: 'Y-m-d H:i',
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
    }
  },
  watch: {
    activePromptAddEvent() {
      this.caption = this.item.node.edge_media_to_caption.edges[0].node.text
    },
    activePromptAddEvent2() {
      this.caption = this.item.node.edge_media_to_caption.edges[0].node.text
    },
  },
  computed: {
    business() {
      return this.$store.state.business.active_business
    },
    user() {
      return this.$store.state.auth.main_user
    },
    config() {
      return this.$store.state.config.instagram
    },
  },
  methods: {
    likeInsta() {
      let vm = this
      this.$axios
        .$post('/api/instagram/like', {
          config: this.config,
          mediaId: this.item.node.id,
        })
        .then(
          (response) => {
            vm.successUpload('LIKED')
          },
          (error) => {
            console.log(error)
            vm.unsuccessUpload(error)
          }
        )
    },
    addComment() {
      let vm = this
      this.$axios
        .$post('/api/instagram/addComment', {
          config: this.config,
          mediaId: this.item.node.id,
          caption: this.caption,
        })
        .then(
          (response) => {
            vm.successUpload('LIKED')
          },
          (error) => {
            console.log(error)
            vm.unsuccessUpload(error)
          }
        )
    },
    postInsta() {
      let vm = this
      this.$axios
        .$post('/api/instagram/post', {
          config: this.config,
          url: this.item.node.display_url,
          caption: this.caption,
          post: this.post,
        })
        .then(
          (response) => {
            vm.successUpload('Posted')
          },
          (error) => {
            console.log(error)
            vm.unsuccessUpload(error)
          }
        )
    },
    saveImage() {
      let vm = this
      this.$fireStore
        .collection('images')
        .add({
          downloadURL: this.item.node.display_url,
          uid: this.user.uid,
          category: this.name,
          alt: this.name,
        })
        .then(function () {
          vm.successUpload('Saved under your images')
          window.open(this.item.node.display_url, '_blank')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
          vm.unsuccessUpload(error)
        })
    },
    savePost() {
      let vm = this
      const obj = {
        title: this.name,
        caption: this.item.node.edge_media_to_caption.edges[0].node.text,
        url: this.item.node.display_url,
        label: this.labelLocal,
        u_uid: this.user.uid,
        b_uid: this.business.b_uid,
        config: this.config,
        type: 'Instagram',
        status: 'saved',
      }
      if (this.config) {
        this.$fireStore
          .collection('instagram')
          .add(obj)
          .then(function () {
            vm.successUpload('Post saved under your files')
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
    schedule() {
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
        url: this.item.node.display_url,

        post: this.post,
        caption: this.caption,
        label: this.labelLocal,
        u_uid: this.user.uid,
        b_uid: this.business.b_uid,
        config: this.config,
        type: 'Instagram',
        status: 'scheduled',
      }
      if (this.config) {
        this.$fireStore
          .collection('instagram')
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
