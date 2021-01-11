<template>
  <div
    parent="body"
    default-index="1"
    color="primary"
    class="add-new-data-sidebar items-no-padding"
    spacer
  >
    <div class="p-6">
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
      <UploadImage class="mb-2 mr-4 sm:mb-0" label="Logo" />
      <br />
      <!-- Business details -->
      <FormsTypesBusinessDetails />
      <br />

      <!--Google Address-->
      <MapsAutoLocation />
      <br />
      <vs-divider color="success" icon="check"></vs-divider>
      <br />
      <FormsTypesPersonPrimaryContact
        title="Primary Contact"
        subtitle="Please give main contact person for branch"
      />

      <!-- </VuePerfectScrollbar> -->
      <vs-divider color="success" icon="check"></vs-divider>

      <p class="mt-5">Base Currency</p>
      <v-select
        class="w-full"
        v-model="currency"
        :options="currencies"
      ></v-select>

      <vs-input
        label="Business number"
        name="email"
        v-model="b_number"
        type="email"
        class="w-full mt-5"
      />
    </div>
    <div class="flex flex-wrap items-center justify-center p-6" slot="footer">
      <vs-button class="mr-6" @click="newBusiness">Add Branch</vs-button>
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
// import BusinessDetails from '@/components/forms/forms/business/business_details'
// import PrimaryContact from '@/components/forms/forms/person/primary_contact.vue'
// import imageUpload from '@/components/forms/form-generator/components/imageUpload.vue'

// import autoLocation from '@/components/maps/auto_location'

export default {
  name: 'Branch',
  components: {
    // autoLocation,
    vSelect,
    // imageUpload,
    // PrimaryContact,
    // BusinessDetails,
  },
  data() {
    return {
      popupActivo: false,
      subscriptionPrice: null,
      name: '',
      b_name: '',
      category: 'audio',
      price: '',
      currency: 'ZAR',
      company: '',
      contactperson: '',
      contactsurname: '',
      email: '',
      b_number: '',
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
        wheelSpeed: 0.6,
      },
    }
  },

  computed: {
    fiscal_year() {
      return this.$store.state.app.fiscal_year
    },
    country() {
      return this.$store.state.app.countries
    },
    currencies() {
      return this.$store.state.app.currencies
    },

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
    business() {
      return this.$store.state.business.active_business
    },
    categories() {
      return this.$store.state.app.industries_available
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
      },
    },
  },
  created() {
    this.industry = this.business.indstr
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
            b_number: this.b_number,
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
            lng: this.google_marker.lng,
          })
          .then(function (docRef) {
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
        text: 'Whoop whoop, been uploaded',
      })
    },
  },
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
