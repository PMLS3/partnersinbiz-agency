<!-- =========================================================================================
    File Name: index.vue
    Description: Gauge component
    ----------------------------------------------------------------------------------------
          /*TODO: Work with location based
          *
          */

========================================================================================== -->

<template>
  <div>
    <div class="w-full vx-col mb-base">
      <vx-card :title="loyal.name">
        <!-- CARD ACTION -->
        <template slot="actions">
          <vs-button
            radius
            @click="popupActivo = true"
            color="primary"
            icon="person_add"
          ></vs-button>
        </template>

        <div>
          <div class="text-center vx-row">
            <div
              class="flex flex-col justify-between w-full mb-4 vx-col sm:w-1/5"
            >
              <div class="mt-6 ml-6">
                <h1 class="text-5xl font-bold">{{ loyal.points - value }}</h1>
                <small>Require</small>
              </div>
            </div>
            <div class="justify-center mx-auto mb-10 vx-col sm:w-4/5">
              <VueSvgGauge
                v-if="pointsSystem"
                :start-angle="-110"
                :end-angle="110"
                :value="Number(value)"
                :separator-step="Number(loyal.points) * 0.1"
                :min="0"
                :max="Number(loyal.points)"
                :gauge-color="[
                  { offset: 0, color: '#FDD7D3' },
                  { offset: 100, color: '#FDD7D3' }
                ]"
                :scale-interval="0.1"
              />
              <VueSvgGauge
                v-if="!pointsSystem"
                :start-angle="-110"
                :end-angle="110"
                :value="Number(value)"
                :separator-step="1"
                :min="0"
                :max="Number(loyal.points)"
                :gauge-color="[
                  { offset: 0, color: '#347AB0' },
                  { offset: 100, color: '#8CDFAD' }
                ]"
                :scale-interval="0.1"
              />
            </div>
          </div>
          <div
            class="flex flex-row justify-between pt-2 pb-2"
            style="border-top: solid 1px black; "
          >
            <p class="pr-3 text-center" style="border-right: solid 1px black">
              <span class="block">Stamps Needed</span>
              <span class="text-2xl">{{ loyal.points }}</span>
            </p>
            <p class="px-3 text-center" style="border-right: solid 1px black">
              <span class="block">Stamps Received</span>
              <span class="text-2xl">{{ value }}</span>
            </p>
            <p class="pl-3 text-center">
              <span class="block">Last Stamp</span>
              <span class="text-2l">{{ date }}</span>
            </p>
          </div>
        </div>
      </vx-card>
    </div>

    <vs-popup class="holamundo" :title="loyal.name" :active.sync="popupActivo">
      <label for>Secret Code</label>
      <vs-input type="text" v-model="secret" />
      <label v-if="pointsSystem">Points to Add</label>
      <vs-input v-if="pointsSystem" type="text" v-model="addThis" />
      <vs-button
        @click="addPoints(loyal)"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        class="mt-4"
        >SUBMIT</vs-button
      >
    </vs-popup>

    <vs-popup class="holamundo" :title="loyal.name" :active.sync="popupActivo2">
      <div v-html="loyal.html"></div>

      <label for>Secret Code</label>
      <vs-input type="text" v-model="secret" />
      <vs-button
        @click="resetPoints(loyal)"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        class="mt-4"
        >SUBMIT</vs-button
      >
    </vs-popup>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: ['loyal', 'schema'],
  components: {},
  data() {
    return {
      value: 0,
      addThis: 1,
      pointsSystem: true,
      popupActivo: false,
      popupActivo2: false,
      secret: '',
      date: 'None',
      dateTime: '',
      timestamp: 0
    }
  },
  computed: {
    activeBusinessInfo() {
      return this.$store.state.business.app_active_business
    },
    activeUserInfo() {
      return this.$store.state.user.app_active_user
    }
  },
  created() {
    console.log('guage', this.schema)
    let ref = this.$fireStore
      .collection('apps')
      .doc('apps')
      .collection(this.activeBusinessInfo.b_uid)
      .doc(this.schema.title)
      .collection(this.schema.title)
      .doc(this.schema.id)
      .collection('added')
      .doc(this.loyal.id)
      .collection('user')
      .doc(this.activeUserInfo.uid)

    ref
      .get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document!')
        } else {
          this.value = doc.data().value
          this.date = doc.data().dateMoment
          this.dateTime = doc.data().dateMoments
          this.timestamp = doc.data().timestamp
        }
      })
      .catch(err => {
        console.log('Error getting document', err)
      })

    this.checkValues()
  },
  methods: {
    checkValues() {
      let todaysNumber = Number(this.addThis) + Number(this.value)
      if (Number(todaysNumber) >= Number(this.loyal.points)) {
        this.popupActivo2 = true
      }
    },
    resetPoints(loyal) {
      if (loyal.secret == this.secret) {
        let date = Date.now()
        let dateMoment = moment(date).format('MMMM Do YYYY, h:mm:ss a')
        let dateMoments = moment(date).format('MMMM Do YYYY, h:mm:ss a')

        this.$fireStore
          .collection('apps')
          .doc('apps')
          .collection(this.activeBusinessInfo.b_uid)
          .doc(this.schema.title)
          .collection(this.schema.title)
          .doc(this.schema.id)
          .collection('added')
          .doc(this.loyal.id)
          .collection('user')
          .doc(this.activeUserInfo.uid)
          .set({
            value: 0,
            timestamp: date,
            dateMoment: dateMoment,
            dateMoments: dateMoments
          })
        this.getValue()
        this.successPass()
        this.secret = ''
        this.popupActivo2 = false
      } else {
        this.secret = ''
        this.unsuccessPass()
        this.popupActivo2 = false
      }
    },
    addPoints(loyal) {
      console.log('loyal', loyal)
      if (loyal.secret == this.secret) {
        // What the current points value plus new points are
        let addValue = Number(this.value) + Number(this.addThis)

        // Set date/time formats
        let date = Date.now()
        let dateMoments = moment(date).format('MMMM Do YYYY, h:mm:ss a')
        let dateMoment = moment(date).format('MMMM Do YYYY')
        let lastStamp

        if (this.timestamp == undefined) {
          lastStamp = 0
        } else {
          lastStamp = this.timestamp
        }

        // Calculate difference between current time and last timestamp
        let milliseconds = date - lastStamp
        let minutes = milliseconds / 60000

        let diffMins = Math.round(milliseconds / 60000) // minutes

        // Add new points score if enough time past
        if (diffMins > loyal.minutes || diffMins == loyal.minutes) {
          this.$fireStore
            .collection('apps')
            .doc('apps')
            .collection(this.activeBusinessInfo.b_uid)
            .doc(this.schema.title)
            .collection(this.schema.title)
            .doc(this.schema.id)
            .collection('added')
            .doc(this.loyal.id)
            .collection('user')
            .doc(this.activeUserInfo.uid)
            .set({
              value: addValue,
              timestamp: date,
              dateMoment: dateMoment,
              dateMoments: dateMoments
            })
          this.getValue()
          this.successPass()
          this.secret = ''
          this.popupActivo = false
        } else {
          this.secret = ''
          this.unsuccessPassTime(loyal.minutes)
          this.popupActivo = false
        }
      } else {
        this.secret = ''
        this.unsuccessPass()
        this.popupActivo = false
      }
    },
    unsuccessPass() {
      this.$vs.notify({
        color: 'danger',
        title: 'Oh no',
        text: 'The Password you have entered is incorrect'
      })
    },
    unsuccessPassTime(time) {
      this.$vs.notify({
        color: 'danger',
        title: 'Oh no',
        text: `You have to wait ${time} minutes from your last stamp`
      })
    },
    successPass() {
      this.$vs.notify({
        color: 'success',
        title: 'Yeah!! ',
        text: 'Another stamp added!'
      })
    },
    getValue() {
      console.log('getting')
      let ref = this.$fireStore
        .collection('apps')
        .doc('apps')
        .collection(this.activeBusinessInfo.b_uid)
        .doc(this.schema.title)
        .collection(this.schema.title)
        .doc(this.schema.id)
        .collection('added')
        .doc(this.loyal.id)
        .collection('user')
        .doc(this.activeUserInfo.uid)

      ref
        .get()
        .then(doc => {
          if (!doc.exists) {
            console.log('No such document!')
          } else {
            this.value = doc.data().value
            this.dateMoment = doc.data().dateMoment
            this.timestamp = doc.data().timestamp
          }
        })
        .catch(err => {
          console.log('Error getting document', err)
        })

      this.checkValues()
    }
  }
}
</script>

<style></style>
