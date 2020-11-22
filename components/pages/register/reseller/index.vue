<!-- =========================================================================================
    File Name: FormWizardIconTab.vue
    Description: Form wizard with numbers in tabs
    ----------------------------------------------------------------------------------------
    
========================================================================================== -->

<template>
  <vx-card title="Get Started">
    <p>
      Please fill in <code>ALL</code> details including <code>LOGO</code>,
      information can be changed later.
    </p>

    <div class="mt-5">
      <form-wizard
        color="rgba(var(--vs-primary), 1)"
        :title="null"
        :subtitle="null"
        finishButtonText="Submit"
        @on-complete="formSubmitted"
      >
        <tab-content title="Step 1" class="mb-5" icon="feather icon-home">
          <!-- tab 1 content -->
          <div class="vx-row">
            <div class="w-full mt-5 vx-col md:w-1/2">
              <vs-input
                label="First Name"
                v-model="contactperson"
                class="w-full"
              />
            </div>
            <div class="w-full mt-5 vx-col md:w-1/2">
              <vs-input
                label="Last Name"
                v-model="contactsurname"
                class="w-full"
              />
            </div>
            <div class="w-full mt-5 vx-col md:w-1/2">
              <vs-input
                type="email"
                label="Email"
                v-model="email"
                class="w-full"
              />
            </div>
            <div class="w-full mt-5 vx-col md:w-1/2">
              <vs-input
                label="Contact number"
                name="number"
                v-model="number"
                type="number"
                class="w-full "
              />
            </div>
            <div class="w-full mt-5 vx-col md:w-1/2">
              <vs-input
                label="Password"
                name="password"
                v-model="password"
                type="password"
                class="w-full "
              />
            </div>
          </div>
        </tab-content>

        <!-- tab 2 content -->
        <tab-content title="Step 2" class="mb-5" icon="feather icon-briefcase">
          <div class="vx-row">
            <div class="w-full vx-col md:w-1/2">
              <vs-input
                label="Business Name"
                name="b_name"
                v-model="b_name"
                class="w-full mt-4"
              />
              <vs-select
                v-model="industry"
                class="w-full select-large"
                label="Industry"
              >
                <vs-select-item
                  :key="index"
                  :value="item"
                  :text="item"
                  v-for="(item, index) in industryOptions"
                  class="w-full"
                />
              </vs-select>
            </div>
            <div class="w-full vx-col md:w-1/2">
              <vs-textarea
                v-model="description"
                label="Short discription"
                class="mt-6 mb-0 md:mt-10"
                rows="3"
              />
            </div>
          </div>
        </tab-content>

        <!-- tab 3 content -->
        <tab-content title="Step 3" class="mb-5" icon="feather icon-image">
          <div class="vx-row">
            <div class="w-full vx-col md:w-1/2">
              <!-- <img
                :src="raw_image[0].path"
                v-if="raw_image[0].path"
                style="height: 125px;"
              /> -->
              <client-only>
                <imageUpload class="mt-5" label="Company Logo" />
              </client-only>
              <vs-input
                label="Business Email"
                name="b_email"
                v-model="b_email"
                class="w-full mt-4"
              />
              <vs-input
                label="Business Number"
                name="b_number"
                v-model="b_number"
                class="w-full mt-4"
              />
              <div class="demo-alignment">
                <span>Requirements:</span>
                <div class="flex">
                  <vs-checkbox v-model="public_app">Public App</vs-checkbox>
                  <vs-checkbox v-model="terms_conditions"
                    >Accept T&C's</vs-checkbox
                  >
                </div>
              </div>
            </div>
            <div class="w-full vx-col md:w-1/2">
              <client-only>
                <auto-location class="mt-5" />
              </client-only>
            </div>
          </div>
        </tab-content>
      </form-wizard>
    </div>
  </vx-card>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import firebase from 'firebase'
import moment from 'moment'
// import { VolumeXIcon } from 'vue-feather-icons'
import Geohash from 'latlon-geohash'

export default {
  components: {
    FormWizard,
    TabContent,
    imageUpload: () =>
      process.client
        ? import(
            '@/components/forms/form-generator/components/imageUploadSingle.vue'
          )
        : null,
    autoLocation: () =>
      process.client ? import('@/components/maps/auto_location') : null
  },
  data() {
    return {
      b_name: '',
      company: '',
      contactperson: '',
      contactsurname: '',
      password: '',
      email: '',
      number: '',
      b_email: '',
      b_number: '',
      description: '',
      uploadTask: '',
      images: [],
      public_app: false,
      terms_conditions: false,
      industry: '',
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
      step1: {},
      step2: {},
      step3: {},
      cred: null,
      imageUrls: [],
      settingImages: []
    }
  },

  computed: {
    raw_image() {
      return this.$store.state.form.raw_image
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
    industryOptions() {
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
    }
  },
  watch: {
    imageUrls() {
      console.log('imag', this.imageUrls)
      if (this.imageUrls.length > 0) {
        this.registerApp()
      }
    },
    settingImages() {
      console.log('settingImages', this.settingImages)
    }
  },
  methods: {
    formSubmitted() {
      let vm = this

      vm.step1 = {
        u_name: vm.contactperson,
        u_surname: vm.contactsurname,
        u_email: vm.email,
        u_number: vm.number,
        password: vm.password
      }
      console.log('step1', vm.step1)

      vm.step2 = {
        b_name: vm.b_name,
        industry: vm.industry,
        desc: vm.description
      }

      console.log('step2', vm.step2)

      vm.step3 = {
        logo: vm.raw_image[0],
        b_email: vm.b_email,
        b_number: vm.b_number,
        public_app: vm.public_app,
        terms_conditions: vm.terms_conditions,
        google_marker: vm.google_marker,
        google_place: vm.google_place
      }
      console.log('step3', vm.step3)

      vm.$fireAuth
        // register with firebase
        .createUserWithEmailAndPassword(vm.email, vm.password)
        .then(
          cred => {
            vm.cred = cred
            // Set user details for when logged in
            let user = {
              uid: cred.user.uid,
              disp_name: vm.contactperson,
              about: '',
              avatar: require('@/static/icon.png'),
              o_status: 'online',
              role: 'admin'
            }
            // Add defaults with payload details
            let userD = {
              ...vm.step1,
              ...user
            }

            const general = this.$fireStore
              .collection('user')
              .doc('info')
              .collection('general')
              .doc(cred.user.uid)

            // const bus_general = this.$fireStore
            //   .collection('apps')
            //   .doc('users')
            //   .collection(payload.userDetails.b_uid)
            //   .doc('info')
            //   .collection('general')
            //   .doc(cred.user.uid)

            const stats = this.$fireStore.collection('data').doc('stats')

            // const bus_stats = this.$fireStore
            //   .collection('apps')
            //   .doc('stats')
            //   .collection(payload.userDetails.b_uid)
            //   .doc('stats')

            const increment = firebase.firestore.FieldValue.increment(1)

            const batch = this.$fireStore.batch()

            batch.set(general, userD)

            // batch.set(bus_general, {
            //   date: moment().format('DD-MM-YYYY'),
            //   month: moment().format('MM-YYYY'),
            //   t_stamp: Date.now(),
            //   branch: '',
            //   disp_name: payload.userDetails.displayName,
            //   email: payload.userDetails.email,
            //   uid: cred.user.uid,
            //   l_act: moment().format('DD-MM-YYYY'),
            //   name: '',
            //   mobile: null,
            //   o_status: 'Online',
            //   avatar: '',
            //   pos: '',
            //   p_notes: [],
            //   role: 'User',
            //   about: '',
            //   status: 'Active',
            //   surname: '',
            //   verified: false
            // })

            batch.set(stats, { users: increment }, { merge: true })
            batch.set(stats, { resellers: increment }, { merge: true })

            // batch.set(bus_stats, { users: increment }, { merge: true })

            batch.commit().then(() => {
              vm.uploadImage()
              vm.successUpload()
            })
          },
          error => {
            vm.noSuccessUpload(err)
          }
        )
    },
    uploadImage() {
      let vm = this

      const storageRef = this.$fireStorage.ref()

      let addingInformationLocation = vm.$fireStore
        .collection('user')
        .doc('images')
        .collection('images')

      for (let i = 0; i < vm.raw_image.length; i++) {
        const mountainsRef = storageRef.child(
          `${vm.cred.user.uid}/${vm.raw_image[i].name}`
        )

        mountainsRef
          .put(vm.raw_image[i].file)
          .then(snapshot => {
            snapshot.ref.getDownloadURL().then(downloadURL => {
              console.log('downloa', downloadURL)
              vm.settingImages.push(downloadURL)
              vm.imageUrls = downloadURL
              let data = {
                downloadURL,
                category: 'logo',
                alt: vm.raw_image[i].name,
                type: vm.raw_image[i].file.type
              }
              console.log('data', data)
              addingInformationLocation.add(data)
            })
          })
          .then(() => {
            vm.successUpload()
          })
          .catch(err => {
            vm.noSuccessUpload(err)
          })
      }
    },
    registerApp() {
      let vm = this

      console.log('settingImages', vm.settingImages)
      console.log('imageUrls', vm.imageUrls)

      var parsedobj = JSON.parse(JSON.stringify(vm.settingImages))
      console.log('parse', parsedobj)
      console.log('cred', vm.cred.user.uid)

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

        const uniqueName = this.b_name.toLowerCase().replace(/\s/g, '_')
        let ref = this.$fireStore
          .collection('apps')
          .doc('info')
          .collection('general')
        ref
          .add({
            logo: parsedobj[0],
            uid: vm.cred.user.uid,
            disp_name: vm.contactperson,
            u_email: vm.email,
            b_name: vm.b_name,
            b_email: vm.b_email,
            un_name: uniqueName,
            indstr: vm.industry,
            c_name: vm.contactperson,
            c_surname: vm.contactsurname,

            c_email: vm.email,
            c_number: vm.number,
            date: moment().format('DD-MM-YYYY'),
            month: moment().format('MM-YYYY'),
            currency: '',
            desc: vm.description,
            tax: 0,
            configuration: 'done',
            t_stamp: Date.now(),
            public_app: vm.public_app,
            active: false,
            paid: true,
            b_uid: '',
            main_seller: true,
            reseller: [],
            sub_sellers: [],
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
          .then(docRef => {
            vm.registerUserApp(docRef.id)
            vm.successUpload()
          })
          .catch(err => {
            vm.noSuccessUpload(err)
          })
      }
    },
    registerUserApp(docId) {
      let vm = this

      // Set user details for when logged in
      let user = {
        uid: vm.cred.user.uid,
        disp_name: vm.contactperson,
        about: '',
        avatar: require('@/static/icon.png'),
        o_status: 'online',
        role: 'admin'
      }
      // Add defaults with payload details

      const bus_general = this.$fireStore
        .collection('apps')
        .doc('users')
        .collection(docId)
        .doc('info')
        .collection('general')
        .doc(vm.cred.user.uid)

      const stats = this.$fireStore.collection('data').doc('stats')

      const increment = firebase.firestore.FieldValue.increment(1)

      const batch = this.$fireStore.batch()

      batch.set(bus_general, {
        date: moment().format('DD-MM-YYYY'),
        month: moment().format('MM-YYYY'),
        t_stamp: Date.now(),
        branch: '',
        disp_name: vm.contactperson,
        email: vm.email,
        uid: vm.cred.user.uid,
        l_act: moment().format('DD-MM-YYYY'),
        name: vm.contactperson,
        mobile: vm.number,
        o_status: 'Online',
        main_seller: true,
        avatar: '',
        pos: '',
        p_notes: [],
        role: 'User',
        about: '',
        status: 'Active',
        surname: vm.contactsurname,
        verified: false
      })

      batch.set(stats, { company: increment }, { merge: true })

      // batch.set(bus_stats, { users: increment }, { merge: true })

      batch.commit().then(() => {
        vm.successUpload()
        ;(vm.b_name = ''),
          (vm.company = ''),
          (vm.contactperson = ''),
          (vm.contactsurname = ''),
          (vm.password = ''),
          (vm.email = ''),
          (vm.number = ''),
          (vm.b_email = ''),
          (vm.b_number = ''),
          (vm.description = ''),
          (vm.uploadTask = ''),
          (vm.images = []),
          (vm.public_app = false),
          (vm.terms_conditions = false),
          (vm.industry = ''),
          (vm.docIdNow = null),
          (vm.geo1 = 0),
          (vm.geo2 = 0),
          (vm.geo3 = 0),
          (vm.geo4 = 0),
          (vm.geo5 = 0),
          (vm.geo6 = 0),
          (vm.geo7 = 0),
          (vm.geo8 = 0),
          (vm.geo9 = 0),
          (vm.step1 = {}),
          (vm.step2 = {}),
          (vm.step3 = {}),
          (vm.cred = null),
          (vm.imageUrls = []),
          (vm.settingImages = [])
      })
    },
    noSuccessUpload(err) {
      this.$vs.notify({
        color: 'red',
        title: 'Oops! Something wrong',
        text: `Here it is: ${err}`
      })
    },
    successUpload() {
      this.$vs.notify({
        color: 'success',
        title: 'Upload Success',
        text: 'Whoop whoop, been uploaded'
      })
    }
  }
}
</script>
