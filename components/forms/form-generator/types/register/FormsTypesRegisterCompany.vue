<template>
  <div
    parent="body"
    default-index="1"
    color="primary"
    class="add-new-data-sidebar items-no-padding"
    spacer
  >
    <!-- <VuePerfectScrollbar class="pt-4 pb-6 scroll-area--data-list-add-new" :settings="settings"> -->
    <div class="p-6">
      <!-- NAME -->
      <vs-input
        label="Business Name"
        name="b_name"
        v-model="b_name"
        class="w-full mt-5"
      />
      <!-- INDUSTRY -->

      <p class="mt-5">Industry</p>
      <v-select
        class="w-full"
        v-model="industry"
        :options="categories"
      ></v-select>

      <vs-input
        label="Business email"
        name="email"
        v-model="b_email"
        type="email"
        class="w-full mt-5"
      />

      <!--Currency-->

      <!-- <p class="mt-5">Currency</p>
      <v-select
        class="w-full "
        v-model="currency"
        :options="currencies"
      ></v-select> -->

      <!-- TAX -->
      <!-- <vs-input label="Vat" name="tax" v-model="tax" class="w-full mt-5" /> -->

      <!-- DESCRIPTION -->
      <vs-textarea
        label="Description"
        v-model="description"
        class="w-full mt-5"
      />
      <!--show Public-->
      <vs-switch
        class="mt-5"
        color="success"
        icon-pack="feather"
        vs-icon-on="icon-check-circle"
        vs-icon-off="icon-slash"
        v-model="radios"
      >
        <span slot="on">Public</span>
        <span slot="off">Not Public</span>
      </vs-switch>

      <br />
      <!--Company Logo-->
      <img
        :src="uploaded_images[0]"
        v-if="uploaded_images[0]"
        style="height: 125px;"
      />
      <br />
      <UploadImage class="mb-2 mr-4 sm:mb-0" label="Company Logo" />
      <br />

      <br />

      <!--Google Address-->
      <MapsAutoLocation />
      <br />
      <vs-divider color="success" icon="check"></vs-divider>
      <br />
      <h4>Contact Person Details</h4>
      <small
        >Please use client details so that they can login to their own
        backend</small
      >

      <!-- Company -->
      <vs-input
        label="Company"
        name="company"
        v-model="company"
        class="w-full mt-5"
      />

      <!-- Client Name -->
      <vs-input
        label="Client Name"
        name="contactperson"
        v-model="contactperson"
        class="w-full mt-5"
      />

      <!-- Client Surname -->
      <vs-input
        label="Client Surname"
        name="contactsurname"
        v-model="contactsurname"
        class="w-full mt-5"
      />

      <!-- Client Number -->
      <vs-input
        label="Contact number"
        name="number"
        v-model="number"
        type="number"
        class="w-full mt-5"
      />

      <!-- Client Email -->
      <vs-input
        label="Client email"
        name="email"
        v-model="email"
        type="email"
        class="w-full mt-5"
      />
    </div>
    <!-- </VuePerfectScrollbar> -->

    <div class="flex flex-wrap items-center justify-center p-6" slot="footer">
      <vs-button class="mr-6" @click="newBusiness">Add Business</vs-button>
      <vs-button
        type="border"
        color="danger"
        @click="isSidebarActiveLocal = false"
        >Cancel</vs-button
      >
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import moment from 'moment'
import vSelect from 'vue-select'
import Geohash from 'latlon-geohash'

export default {
  components: {
    vSelect
  },
  data() {
    return {
      popupActivo: false,
      subscriptionPrice: null,
      name: '',
      b_name: '',
      category: 'audio',
      // order_status: 'pending',
      price: '',
      // currency: '',
      company: '',
      contactperson: '',
      contactsurname: '',
      email: '',
      number: '',
      b_email: '',
      description: '',
      uploadTask: '',
      images: [],
      // tax: 0,
      radios: true,
      // address: '',
      industry: '',
      // imageName: '',
      // imageFile: '',
      // imageUrls: '',
      docIdNow: null,
      geo1: 0,
      geo2: 0,
      geo3: 0,
      geo4: 0,
      geo5: 0,
      geo6: 0,
      geo7: 0,
      geo8: 0,
      geo9: 0,

      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6
      }
    }
  },
  watch: {
    industry: function() {
      if (this.industry == 'Community' || this.industry == 'Complexes') {
        this.isEstate = false
        this.subscriptionPrice = 499
      } else if (this.industry == 'Estate') {
        this.isEstate = true
        this.setEstatePrice()
      } else {
        this.isEstate = false
        this.subscriptionPrice = 699
      }
    },
    isMyEstate: function() {
      if (this.isMyEstate == 'Amenities') {
        this.subscriptionPrice = 899
      } else {
        this.subscriptionPrice = 1299
      }
    }
  },

  computed: {
    uploaded_images() {
      return this.$store.state.form.uploaded_images
    },
    user() {
      if (process.client) {
        if (localStorage.getItem('userInfo')) {
          return JSON.parse(localStorage.getItem('userInfo'))
        } else {
          return this.$store.state.auth.active_user
        }
      }
    },
    categories() {
      return this.$store.state.info.industries_available
    },
    reseller() {
      return this.$store.state.business.reseller
    },
    sub_sellers() {
      return this.$store.state.business.sub_sellers
    },
    google_place() {
      return this.$store.getters['google/google_place']
    },
    google_marker() {
      return this.$store.getters['google/google_marker']
    },

    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive
      },
      set(val) {
        if (!val) {
          this.$emit('closeSidebar')
          this.initValues()
        }
      }
    }
  },
  methods: {
    newBusiness() {
      if (process.client) {
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

        let vm = this

        const uniqueName = this.b_name.toLowerCase().replace(/\s/g, '_')
        let ref = this.$fireStore
          .collection('apps')
          .doc('info')
          .collection('general')
        ref
          .add({
            logo: this.uploaded_images[0],
            uid: firebase.auth().currentUser.uid,
            disp_name: this.user.disp_name,
            u_email: this.user.email,
            b_name: this.b_name,
            b_email: this.b_email,
            un_name: uniqueName,
            indstr: this.industry,
            c_name: this.contactperson,
            c_surname: this.contactsurname,
            c_company: this.company,
            c_email: this.email,
            c_number: this.number,
            date: moment().format('DD-MM-YYYY'),
            month: moment().format('MM-YYYY'),
            currency: '',
            desc: this.description,
            tax: 0,
            configuration: 'done',
            t_stamp: Date.now(),
            public: this.radios,
            active: false,
            paid: true,
            b_uid: '',
            reseller: this.$store.state.business.reseller,
            sub_sellers: this.$store.state.business.sub_sellers,
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
            addr_html: this.google_place.adr_address,
            for_address: this.google_place.formatted_address,
            utc_offset: this.google_place.utc_offset_minutes,
            addr_url: this.google_place.url,
            lat: this.google_marker.lat,
            lng: this.google_marker.lng
          })
          .then(function(docRef) {
            vm.successUpload()
            vm.$store.commit('form/FORM_ACTIVE', false)
            vm.$router.push('/profile')
          })
      }
    },

    successUpload() {
      this.notify({
        color: 'success',
        title: 'Upload Success',
        text: 'Whoop whoop, been uploaded'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.text-style {
  color: black;
  text-align: center;
}
.add-new-data-sidebar {
  /deep/ .vs-sidebar--background {
    z-index: 52010;
  }

  /deep/ .vs-sidebar {
    z-index: 52010;
    width: 400px;
    max-width: 90vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}

.scroll-area--data-list-add-new {
  height: calc(100% - 4.3rem);
}
</style>
