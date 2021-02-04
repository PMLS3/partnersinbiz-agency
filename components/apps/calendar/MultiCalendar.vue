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
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
          <div v-if="selectedEvent.images">
            <img :src="selectedEvent.images[0]" width="100%" />
          </div>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
          <p v-html="selectedEvent.contentFull" />
        </vs-col>
      </vs-row>
      <vs-divider icon="check"></vs-divider>
      <ul>
        <li>
          <b
            >Start: {{ selectedEvent.date_start }} -
            {{ selectedEvent.time_start }}</b
          >
        </li>
        <li>
          End:
          {{ selectedEvent.date_end }} - {{ selectedEvent.time_end }}
        </li>
      </ul>
      <div v-if="selectedEvent.address">
        <p>Here</p>
        <p v-html="selectedEvent.address.addr_html" />
      </div>
      <vs-divider icon="check"></vs-divider>
      <vs-row vs-type="flex" vs-justify="space-around">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
          <vs-button
            @click="addToMyCalendar(selectedEvent)"
            class="button_event"
            >I'm Going</vs-button
          >
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
          <vs-button
            @click="goToEvent(selectedEvent.address_url)"
            class="button_event"
            >Directions</vs-button
          >
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
          <vs-button
            @click="addNotToMyCalendar(selectedEvent)"
            class="button_event"
            >I'm NOT Going</vs-button
          >
        </vs-col>
      </vs-row>
      <!-- <vs-row
          vs-type="flex"
          vs-justify="space-around"
          v-if="selectedEvent.add_filter"
        >
          <div v-if="selectedEvent.add_group_branches">
            <div
              v-for="branch in selectedEvent.add_group_branches_selected"
              :key="branch"
            >
              <div v-if="branch == userDetails.group_branches">
                <vs-col
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="6"
                >
                  <v-select
                    label="displayName"
                    :closeOnSelect="false"
                    v-model="userSelect"
                    :options="branchUsers"
                  />
              
                </vs-col>
                <vs-col
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="6"
                >
                  <vs-button @click="addToFriendCalendar(selectedEvent)"
                    >Invite</vs-button
                  >
                </vs-col>
              </div>
            </div>
          </div>
          <div v-if="selectedEvent.add_group_positions" style="width: 100%">
            <div
              v-for="position in selectedEvent.add_group_positions_selected"
              :key="position"
              style="width: 100%"
            >
              <div
                v-if="position == userDetails.group_positions"
                style="width: 100%"
              >
                <vs-col
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="6"
                >
                  <v-select
                    label="displayName"
                    :closeOnSelect="false"
                    v-model="userSelect"
                    :options="branchUsers"
                  />
                </vs-col>
                <vs-col
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="6"
                >
                  <vs-button @click="addToFriendCalendar(selectedEvent)"
                    >Invite</vs-button
                  >
                </vs-col>
              </div>
            </div>
          </div>
          <div v-if="selectedEvent.add_group_push_notes">
            <div
              v-for="pushNotes in selectedEvent.add_group_push_notes_selected"
              :key="pushNotes"
            >
              <div v-if="pushNotes == userDetails.group_push_notes">
                <vs-col
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="6"
                >
                  <v-select
                    label="displayName"
                    :closeOnSelect="false"
                    v-model="userSelect"
                    :options="branchUsers"
                  />
                </vs-col>
                <vs-col
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="6"
                >
                  <vs-button @click="addToFriendCalendar(selectedEvent)"
                    >Invite</vs-button
                  >
                </vs-col>
              </div>
            </div>
          </div>
          <div v-if="selectedEvent.add_group_views">
            <div
              v-for="views in selectedEvent.add_group_views_selected"
              :key="views"
            >
              <div v-if="views == userDetails.group_views">
                <vs-col
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="6"
                >
                  <v-select
                    label="displayName"
                    :closeOnSelect="false"
                    v-model="userSelect"
                    :options="branchUsers"
                  />
                </vs-col>
                <vs-col
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="6"
                >
                  <vs-button @click="addToFriendCalendar(selectedEvent)"
                    >Invite</vs-button
                  >
                </vs-col>
              </div>
            </div>
          </div>

          <vs-divider color="success" icon="check"></vs-divider>
        </vs-row>
        <vs-row vs-type="flex" vs-justify="space-around" v-else>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
            <v-select
              label="displayName"
              :closeOnSelect="false"
              v-model="userSelect"
              :options="branchUsers"
            />
          </vs-col>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
            <vs-button @click="addToFriendCalendar(selectedEvent)"
              >Invite</vs-button
            >
          </vs-col>
          <vs-divider color="success" icon="check"></vs-divider>
        </vs-row>
        <vs-row
          vs-type="flex"
          vs-justify="space-around"
          v-if="
            selectedEvent.add_group_positions &&
              selectedEvent.add_group_positions_selected ==
                this.userDetails.group_positions
          "
        >
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
            <vs-button
              @click="addToMyCalendar(selectedEvent)"
              class="button_event"
              >I'm Going</vs-button
            >
          </vs-col>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
            <vs-button
              @click="goToEvent(selectedEvent.address_url)"
              class="button_event"
              >Directions</vs-button
            >
          </vs-col>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
            <vs-button
              @click="addNotToMyCalendar(selectedEvent)"
              class="button_event"
              >I'm NOT Going</vs-button
            >
          </vs-col>
        </vs-row> -->
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
    }
  },
  computed: {},

  methods: {
    addToFriendCalendar(cal) {
      let vm = this

      this.$fireStore
        .collection(vm.resellerName)
        .doc(vm.companyDetails.id)
        .collection('users')
        .doc(this.userSelect.id)
        .collection('calendar')
        .doc(cal.id)
        .set({
          id: cal.id,
          start: cal.start,
          end: cal.end,
          title: cal.title,
          icon: cal.icon, // Custom attribute.
          content: cal.content,
          contentFull: cal.contentFull, // Custom attribute.
          class: cal.class,
          downloadURL: cal.downloadURL,
          adr_address: cal.adr_address,
          address_url: cal.address_url,
          resellerName: vm.resellerName,
          companyDetails_id: vm.companyDetails.id,
          companyDetails_name: vm.companyDetails.appname,
        })
        .then(() => {
          this.addFriendEvent(cal)
          this.addFriendNotification(cal)
          this.save_changes_branch()
          this.successUpload()
        })
    },
    addNotToMyCalendar(cal) {
      let currentUser
      let vm = this
      if (this.currentlyDisplayingUser) {
        currentUser = vm.user_data
      } else {
        currentUser = vm.userDetails
      }
      if (this.is_blank) {
        this.$fireStore
          .collection(this.resellerName)
          .doc('apps')
          .collection(this.companyDetails.appcode)
          .doc('blank_page')
          .collection(this.componentID)
          .doc(this.$route.params.id)
          .collection('features')
          .doc(cal.id)
          .collection('Notgoing')
          .doc(currentUser.id)
          .set({
            name: currentUser.name,
            surname: currentUser.surname,
            uid: currentUser.id,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
            branch: currentUser.group_branches,
            position: currentUser.group_positions,
          })
      } else {
        this.$fireStore
          .collection(this.resellerName)
          .doc('apps')
          .collection(this.companyDetails.appcode)
          .doc(this.$route.params.id)
          .collection('features')
          .doc(cal.id)
          .collection('Notgoing')
          .doc(currentUser.id)
          .set({
            name: currentUser.name,
            surname: currentUser.surname,
            uid: currentUser.id,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
            branch: currentUser.group_branches,
            position: currentUser.group_positions,
          })
          .then(() => {
            this.successUploadNot()
          })
      }
    },
    addToMyCalendar(cal) {
      let vm = this
      let currentUser

      if (this.currentlyDisplayingUser) {
        currentUser = vm.user_data
      } else {
        currentUser = vm.userDetails
      }

      this.$fireStore
        .collection(vm.resellerName)
        .doc(vm.companyDetails.id)
        .collection('users')
        .doc(currentUser.id)
        .collection('calendar')
        .doc(cal.id)
        .set({
          id: cal.id,
          start: cal.start,
          end: cal.end,
          title: cal.title,
          icon: cal.icon, // Custom attribute.
          content: cal.content,
          contentFull: cal.contentFull, // Custom attribute.
          class: cal.class,
          downloadURL: cal.downloadURL,
          adr_address: cal.adr_address,
          address_url: cal.address_url,
          resellerName: vm.resellerName,
          companyDetails_id: vm.companyDetails.id,
          companyDetails_name: vm.companyDetails.appname,
        })
        .then(() => {
          this.adduserEvent(cal)
          this.addNotification(cal)
          this.save_changes_branch()
          this.successUpload()
        })
    },
    addFriendNotification(cal) {
      let vm = this

      this.$fireStore
        .collection(vm.resellerName)
        .doc(vm.companyDetails.id)
        .collection('users')
        .doc(this.userSelect.id)
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

    save_changes_branch() {
      let mySeller = this.resellerName
      let myCompanyDetails = this.companyDetails
      let vm = this
      let numberUsed

      if (this.branchDetails.used == undefined) {
        numberUsed = 1
      } else {
        numberUsed = this.branchDetails.used + 1
      }

      this.$fireStore
        .collection(this.resellerName)
        .doc('newapp')
        .collection('newapp')
        .doc(myCompanyDetails.id)
        .collection('group_branch')
        .doc(this.userDetails.group_branches)
        .update({
          used: numberUsed,
        })

      this.successUpload()
    },

    addNotification(cal) {
      let vm = this
      let currentUser

      if (this.currentlyDisplayingUser) {
        currentUser = vm.user_data
      } else {
        currentUser = vm.userDetails
      }

      this.$fireStore
        .collection(vm.resellerName)
        .doc(vm.companyDetails.id)
        .collection('users')
        .doc(currentUser.id)
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
    addFriendEvent(cal) {
      let currentUser = this.userSelect

      if (this.is_blank) {
        this.$fireStore
          .collection(this.resellerName)
          .doc('apps')
          .collection(this.companyDetails.appcode)
          .doc('blank_page')
          .collection(this.componentID)
          .doc(this.$route.params.id)
          .collection('features')
          .doc(cal.id)
          .collection('going')
          .doc(currentUser.id)
          .set({
            name: currentUser.name,
            surname: currentUser.surname,
            uid: currentUser.id,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
            branch: currentUser.group_branches,
            position: currentUser.group_positions,
          })
      } else {
        this.$fireStore
          .collection(this.resellerName)
          .doc('apps')
          .collection(this.companyDetails.appcode)
          .doc(this.$route.params.id)
          .collection('features')
          .doc(cal.id)
          .collection('going')
          .doc(currentUser.id)
          .set({
            name: currentUser.name,
            surname: currentUser.surname,
            uid: currentUser.id,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
            branch: currentUser.group_branches,
            position: currentUser.group_positions,
          })
          .then(() => {
            console.log('going added')
          })
      }
    },
    adduserEvent(cal) {
      let currentUser
      let vm = this
      if (this.currentlyDisplayingUser) {
        currentUser = vm.user_data
      } else {
        currentUser = vm.userDetails
      }
      if (this.is_blank) {
        this.$fireStore
          .collection(this.resellerName)
          .doc('apps')
          .collection(this.companyDetails.appcode)
          .doc('blank_page')
          .collection(this.componentID)
          .doc(this.$route.params.id)
          .collection('features')
          .doc(cal.id)
          .collection('going')
          .doc(currentUser.id)
          .set({
            name: currentUser.name,
            surname: currentUser.surname,
            uid: currentUser.id,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
            branch: currentUser.group_branches,
            position: currentUser.group_positions,
          })
      } else {
        this.$fireStore
          .collection(this.resellerName)
          .doc('apps')
          .collection(this.companyDetails.appcode)
          .doc(this.$route.params.id)
          .collection('features')
          .doc(cal.id)
          .collection('going')
          .doc(currentUser.id)
          .set({
            name: currentUser.name,
            surname: currentUser.surname,
            uid: currentUser.id,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
            branch: currentUser.group_branches,
            position: currentUser.group_positions,
          })
          .then(() => {
            console.log('going added')
          })
      }
    },
    successUpload() {
      this.$vs.notify({
        color: 'success',
        title: 'Event',
        text: 'Whoop whoop, been uploaded to your calendar',
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
