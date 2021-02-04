<template>
  <div
    style="
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      width: 100%;
      height: 100%;
      min-height: 100vh;
    "
  >
    <client-only>
      <vue-cal
        :selected-date="selectedDate"
        :events="events"
        :on-event-click="onEventClick"
      ></vue-cal>
    </client-only>

    <vs-popup
      class="holamundo"
      :title="selectedEvent.title"
      :active.sync="showDialog"
    >
      <div class="grid grid-cols-2 gap-4">
        <div v-if="selectedEvent.images">
          <img :src="selectedEvent.images[0]" width="100%" />
        </div>
        <div class="container mx-auto">
          <p v-html="selectedEvent.contentFull" />
        </div>
      </div>
      <vs-divider icon="check"></vs-divider>

      <div class="grid grid-cols-2 gap-4">
        <div>
          Start: {{ selectedEvent.date_start }} -
          {{ selectedEvent.time_start }}
        </div>
        <div>
          End:
          {{ selectedEvent.date_end }} - {{ selectedEvent.time_end }}
        </div>
      </div>

      <vs-divider icon="check"></vs-divider>
      <div class="mx-auto">
        <p v-html="selectedEvent.addr_html" />
      </div>
      <MapsBasic
        :center="selectedEvent.center"
        :markers="selectedEvent.markers"
      />

      <vs-divider icon="check"></vs-divider>
      <vs-row vs-type="flex" vs-justify="space-around">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
          <vs-button
            @click="addToMyCalendar(selectedEvent, true)"
            class="button_event"
            >I'm Going</vs-button
          >
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
          <vs-button
            @click="goToEvent(selectedEvent.addr_url)"
            class="button_event"
            >Directions</vs-button
          >
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
          <vs-button
            @click="addToMyCalendar(selectedEvent, false)"
            class="button_event"
            >I'm NOT Going</vs-button
          >
        </vs-col>
      </vs-row>
    </vs-popup>
    <vs-popup class="holamundo" title="Login" :active.sync="showLogin">
      <vs-tabs>
        <vs-tab label="Login">
          <LoginFirebase
            :registerButton="registerButton"
            :goToRoute="goToRoute"
            @logged="showLogin = !showLogin"
          />
        </vs-tab>
        <vs-tab label="Register">
          <RegisterFirebase
            :loginButton="loginButton"
            :goToRoute="goToRoute"
            @logged="showLogin = !showLogin"
          />
        </vs-tab>
      </vs-tabs>
    </vs-popup>
  </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import moment from 'moment'
import vSelect from 'vue-select'

export default {
  components: { VueCal, vSelect },
  props: {
    events: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedEvent: {},
      selectedDate: moment(Date.now()).format('YYYY MM DD'),
      showDialog: false,
      showLogin: false,
      loginButton: false,
      registerButton: false,
      goToRoute: null,
    }
  },
  computed: {
    business() {
      return this.$store.state.business.main_business
    },
    user() {
      return this.$store.state.auth.main_user
    },
  },
  methods: {
    addToMyCalendar(cal, bool) {
      let vm = this

      let payload = {
        start: cal.start,
        end: cal.end,
        title: cal.title,
        icon: cal.icon, // Custom attribute.
        content: cal.content,
        contentFull: cal.contentFull,
        images: cal.images,
        color: cal.color,
        addr_html: cal.addr_html,
        addr_url: cal.addr_url,
        time_end: cal.time_end,
        time_start: cal.time_start,
        date_end: cal.date_end,
        date_start: cal.date_start,
        lat: cal.lat,
        lng: cal.lng,
        center: cal.center,
        markers: cal.markers,
        going: bool,
      }

      if (this.user.uid) {
        vm.$fireStore
          .collection('business')
          .doc('users')
          .collection(vm.business.b_uid)
          .doc(vm.user.id)
          .collection('calendar')
          .doc(cal.id)
          .set(payload)
          .then(() => {
            vm.adduserEvent(payload)
            if (bool) {
              vm.addNotification(payload)
              vm.successUpload()
            } else {
              vm.notGoing()
            }
          })
      } else {
        vm.showDialog = false

        this.$vs.notify({
          color: 'warning',
          title: 'Login',
          text: 'Please login first',
        })

        setTimeout(() => {
          vm.showLogin = true
        }, 500)
      }
    },

    addNotification(cal) {
      let vm = this

      this.$fireStore
        .collection('business')
        .doc('users')
        .collection(vm.business.b_uid)
        .doc(vm.user.id)
        .collection('notification')
        .doc(cal.id)
        .set({
          id: cal.id,
          index: cal.id,
          title: 'Event added to Calendar',
          msg: cal.title,
          icon: 'CalendarIcon',
          time: Date.now(),
          category: 'warning',
        })
    },

    adduserEvent(payload) {
      this.$fireStore
        .collection('apps')
        .doc('EventsSingle')
        .collection('app')
        .doc(payload.id)
        .collection('attendees')
        .doc(this.user.id)
        .set({
          name: this.user.name,
          surname: this.user.surname,
          uid: this.user.id,
          displayName: this.user.disp_name,
          avatar: this.user.avatar,
          going: payload.going,
        })
    },
    successUpload() {
      this.$vs.notify({
        color: 'success',
        title: 'Event',
        text: 'Whoop whoop, been uploaded to your calendar',
      })
    },
    notGoing() {
      this.$vs.notify({
        color: 'danger',
        title: 'Event',
        text: 'Set as not going',
      })
    },
    successUploadNot() {
      this.$vs.notify({
        color: 'danger',
        title: 'Event',
        text: 'We will miss you',
      })
    },
    goToEvent(event) {
      window.open(event)
    },

    onEventClick(event, e) {
      console.log('event', event)
      this.selectedEvent = event
      this.showDialog = true
      // Prevent navigating to narrower view (default vue-cal behavior).
      e.stopPropagation()
    },
  },
}
</script>

<style scoped>
.selectExample {
  z-index: 55000;
}
.vuecal__event {
  cursor: pointer;
}

.vuecal__event-title {
  font-size: 1.2em;
  font-weight: bold;
  margin: 4px 0 8px;
}

.vuecal__event-time {
  display: inline-block;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.vuecal__event-content {
  font-style: italic;
}
.vuecal__event.leisure {
  background-color: rgba(253, 156, 66, 0.9);
  border: 1px solid rgb(233, 136, 46);
  color: #fff;
}
.vuecal__event.sport {
  background-color: rgba(255, 102, 102, 0.9);
  border: 1px solid rgb(235, 82, 82);
  color: #fff;
}
.vuecal__event.yellow {
  background-color: rgba(225, 250, 85, 0.9);
  border: 1px solid rgb(235, 82, 82);
  color: #fff;
}
.vuecal__event.blue {
  background-color: rgba(44, 26, 201, 0.9);
  border: 1px solid rgb(235, 82, 82);
  color: #fff;
}
.vuecal__event.green {
  background-color: rgba(38, 201, 65, 0.9);
  border: 1px solid rgb(235, 82, 82);
  color: #fff;
}
.vuecal__event.red {
  background-color: rgba(243, 10, 10, 0.9);
  border: 1px solid rgb(235, 82, 82);
  color: #fff;
}
.vuecal__event.orange {
  background-color: rgba(224, 170, 21, 0.9);
  border: 1px solid rgb(235, 82, 82);
  color: #fff;
}
.vuecal__event.brown {
  background-color: rgba(219, 104, 104, 0.9);
  border: 1px solid rgb(235, 82, 82);
  color: #fff;
}
.button_event {
  width: 100%;
  height: 100%;
}
</style>
