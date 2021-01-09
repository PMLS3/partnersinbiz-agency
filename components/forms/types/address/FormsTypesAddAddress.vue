<!-- =========================================================================================
  File Name: UserEditTabInformation.vue
  Description: User Edit Information Tab content
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div>
    <client-only>
      <div id="user-edit-tab-info">
        <!-- Content Row -->
        <div class="vx-row">
          <auto-location class="mt-4 ml-8" />
        </div>

        <!-- Save  Button -->
        <div class="vx-row">
          <div class="w-full vx-col">
            <div class="flex flex-wrap items-center justify-end mt-8">
              <vs-button class="mt-2 ml-auto" @click="save_changes"
                >Save Changes</vs-button
              >
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import autoLocation from '@/components/maps/auto_location'
import Geohash from 'latlon-geohash'

import firebase from 'firebase'

export default {
  name: 'Address-Auto',
  components: {
    vSelect,
    autoLocation,
  },

  data() {
    return {
      geo1: 0,
      geo2: 0,
      geo3: 0,
      geo4: 0,
      geo5: 0,
      geo6: 0,
      geo7: 0,
      geo8: 0,
      geo9: 0,
    }
  },
  computed: {
    business() {
      return this.$store.state.business.active_business
    },

    google_place() {
      return this.$store.getters['google/google_place']
    },
    google_marker() {
      return this.$store.getters['google/google_marker']
    },
  },
  watch: {
    google_marker: function () {
      const geohash1 = Geohash.encode(
        `${this.google_marker.lat}`,
        `${this.google_marker.lng}`,
        1
      )
      this.geo1 = geohash1
      const geohash2 = Geohash.encode(
        `${this.google_marker.lat}`,
        `${this.google_marker.lng}`,
        2
      )
      this.geo2 = geohash2
      const geohash3 = Geohash.encode(
        `${this.google_marker.lat}`,
        `${this.google_marker.lng}`,
        3
      )
      this.geo3 = geohash3
      const geohash4 = Geohash.encode(
        `${this.google_marker.lat}`,
        `${this.google_marker.lng}`,
        4
      )
      this.geo4 = geohash4
      const geohash5 = Geohash.encode(
        `${this.google_marker.lat}`,
        `${this.google_marker.lng}`,
        5
      )
      this.geo5 = geohash5
      const geohash6 = Geohash.encode(
        `${this.google_marker.lat}`,
        `${this.google_marker.lng}`,
        6
      )
      this.geo6 = geohash6
      const geohash7 = Geohash.encode(
        `${this.google_marker.lat}`,
        `${this.google_marker.lng}`,
        7
      )
      this.geo7 = geohash7
      const geohash8 = Geohash.encode(
        `${this.google_marker.lat}`,
        `${this.google_marker.lng}`,
        8
      )
      this.geo8 = geohash8
      const geohash9 = Geohash.encode(
        `${this.google_marker.lat}`,
        `${this.google_marker.lng}`,
        9
      )
      this.geo9 = geohash9

      this.$fireStore
        .collection('apps')
        .doc('info')
        .collection('general')
        .doc(this.business.b_uid)
        .update({
          geo1: this.geo1,
          geo2: this.geo2,
          geo3: this.geo3,
          geo4: this.geo4,
          geo5: this.geo5,
          geo6: this.geo6,
          geo7: this.geo7,
          geo8: this.geo8,
          geo9: this.geo9,
          vicinity: this.google_place.vicinity,
          add_html: this.google_place.adr_address,
          for_address: this.google_place.formatted_address,
          utc_offset: this.google_place.utc_offset_minutes,
          addr_url: this.google_place.url,
          lat: this.google_marker.lat,
          lng: this.google_marker.lng,
        })
        .then(() => {
          this.successUploadAddress()
        })
    },
  },
  methods: {
    successUploadAddress() {
      this.notify({
        color: 'success',
        title: 'Adress Success',
        text: 'Your Adress has been changed!',
      })
    },
    successUpload() {
      this.notify({
        color: 'success',
        title: 'Update Success',
        text: 'Oh Yeah! Company info updated',
      })

      let logo = this.data_local.logo

      if (this.uploaded_images[0]) {
        logo = this.uploaded_images[0]
      }

      //submit user to store
      let business = this.business

      business.logo = logo
      ;(business.b_name = this.data_local.b_name),
        (business.indstr = this.data_local.indstr),
        (business.public = this.data_local.public),
        (business.currency = this.data_local.currency),
        (business.tax = this.data_local.tax),
        (business.desc = this.data_local.desc)

      this.$store.commit('business/UPDATE_BUSINESS_INFO', business)
    },
    save_changes() {
      let myPublic = this.data_local.public
      if (this.data_local.public == undefined) {
        myPublic = false
      }
      this.$fireStore
        .collection('apps')
        .doc('info')
        .collection('general')
        .doc(this.business.b_uid)
        .update({
          b_name: this.data_local.b_name,
          indstr: this.data_local.indstr,
          public: this.data_local.public,
          currency: this.data_local.currency,
          tax: this.data_local.tax,
          desc: this.data_local.desc,
        })
        .then(() => {
          this.successUpload()
        })
    },
  },
}
</script>
