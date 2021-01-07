<!-- =========================================================================================
  File Name: UserEditTabInformation.vue
  Description: User Edit Information Tab content
  ----------------------------------------------------------------------------------------
TODO Google address option
========================================================================================== -->

<template>
  <div id="user-edit-tab-info">
    <div class="vx-row">
      <div class="w-full vx-col md:w-1/2">
        <!-- Col Header -->
        <div class="flex items-end">
          <feather-icon icon="UserIcon" class="mr-2" svgClasses="w-5 h-5" />
          <span class="font-medium leading-none">Personal Information</span>
        </div>

        <!-- Col Content -->
        <div>
          <!-- DOB -->
          <div class="mt-4">
            <label class="text-sm">Birth Date</label>
            <flat-pickr
              v-model="data_local.dob"
              :config="{ dateFormat: 'd F Y', maxDate: new Date() }"
              class="w-full"
              name="dob"
            />
            <!-- <span class="text-sm text-danger" v-show="errors.has('dob')">{{
              errors.first('dob')
            }}</span> -->
          </div>

          <vs-input
            class="w-full mt-4"
            label="Mobile"
            v-model="data_local.mobile"
            name="mobile"
          />
          <!-- <span class="text-sm text-danger" v-show="errors.has('mobile')">{{
            errors.first('mobile')
          }}</span> -->

          <vs-input
            class="w-full mt-4"
            label="Website"
            v-model="data_local.website"
            name="website"
          />
          <!-- <span class="text-sm text-danger" v-show="errors.has('website')">{{
            errors.first('website')
          }}</span> -->

          <div class="mt-4">
            <label class="text-sm">Languages</label>
            <v-select
              v-model="data_local.languages_known"
              multiple
              :closeOnSelect="false"
              :options="langOptions"
              name="lang_known"
              :dir="$vs.rtl ? 'rtl' : 'ltr'"
            />
            <!-- <span
              class="text-sm text-danger"
              v-show="errors.has('lang_known')"
              >{{ errors.first('lang_known') }}</span
            > -->
          </div>

          <!-- Gender -->
          <div class="mt-4">
            <label class="text-sm">Gender</label>
            <div class="mt-2">
              <vs-radio v-model="data_local.gender" vs-value="male" class="mr-4"
                >Male</vs-radio
              >
              <vs-radio
                v-model="data_local.gender"
                vs-value="female"
                class="mr-4"
                >Female</vs-radio
              >
              <vs-radio v-model="data_local.gender" vs-value="other"
                >Other</vs-radio
              >
            </div>
          </div>

          <div class="mt-6">
            <label>Contact Options</label>
            <div class="flex flex-wrap mt-1">
              <vs-checkbox
                v-model="data_local.contact_options_email"
                vs-value="email"
                class="mb-2 mr-4"
                >Email</vs-checkbox
              >
              <vs-checkbox
                v-model="data_local.contact_options_message"
                vs-value="message"
                class="mb-2 mr-4"
                >Message</vs-checkbox
              >
              <vs-checkbox
                v-model="data_local.contact_options_phone"
                vs-value="Phone"
                class="mb-2"
                >Phone</vs-checkbox
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Address Col -->
      <div class="w-full vx-col md:w-1/2">
        <!-- Col Header -->
        <div class="flex items-end md:mt-0 mt-base">
          <feather-icon icon="MapPinIcon" class="mr-2" svgClasses="w-5 h-5" />
          <span class="font-medium leading-none">Address</span>
        </div>

        <!-- Col Content -->
        <div>
          <vs-input
            class="w-full mt-4"
            label="Address Line 1"
            v-model="data_local.add_line_1"
            name="addd_line_1"
          />
          <!-- <span
            class="text-sm text-danger"
            v-show="errors.has('addd_line_1')"
            >{{ errors.first('addd_line_1') }}</span
          > -->

          <vs-input
            class="w-full mt-4"
            label="Address Line 2"
            v-model="data_local.add_line_2"
          />

          <vs-input
            class="w-full mt-4"
            label="Post Code"
            v-model="data_local.post_code"
            name="post_code"
          />
          <!-- <span class="text-sm text-danger" v-show="errors.has('post_code')">{{
            errors.first('post_code')
          }}</span> -->

          <vs-input
            class="w-full mt-4"
            label="City"
            v-model="data_local.city"
            name="city"
          />
          <!-- <span class="text-sm text-danger" v-show="errors.has('city')">{{
            errors.first('city')
          }}</span> -->

          <vs-input
            class="w-full mt-4"
            label="State"
            v-model="data_local.state"
            name="state"
          />
          <!-- <span class="text-sm text-danger" v-show="errors.has('state')">{{
            errors.first('state')
          }}</span> -->

          <vs-input
            class="w-full mt-4"
            label="Country"
            v-model="data_local.country"
            name="country"
          />
          <!-- <span class="text-sm text-danger" v-show="errors.has('country')">{{
            errors.first('country')
          }}</span> -->
        </div>
      </div>
    </div>

    <!-- Save & Reset Button -->
    <div class="mb-6 vx-row">
      <div class="w-full vx-col">
        <div class="flex flex-wrap items-center justify-end mt-8">
          <vs-button
            class="mt-2 ml-auto"
            @click="save_changes"
            :disabled="!validateForm"
            >Save Changes</vs-button
          >
          <vs-button
            class="mt-2 ml-4"
            type="border"
            color="warning"
            @click="reset_data"
            >Reset</vs-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import vSelect from 'vue-select'

export default {
  components: {
    vSelect,
    flatPickr,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      data_local: JSON.parse(JSON.stringify(this.data)),

      langOptions: [
        'English',
        'Spanish',
        'French',
        'Russian',
        'German',
        'Arabic',
        'Sanskrit',
      ],
    }
  },
  created() {},
  computed: {
    validateForm() {
      return !this.errors.any()
    },
    user() {
      if (process.client) {
        if (localStorage.getItem('userInfo')) {
          return JSON.parse(localStorage.getItem('userInfo'))
        } else {
          return this.$store.state.auth.main_user
        }
      }
    },
    business() {
      return this.$store.state.business.active_business
    },
  },
  methods: {
    save_changes() {
      console.log('this', this.data_local)
      let vm = this
      let payload = this.data_local
      this.$fireStore
        .collection('business')
        .doc('users')
        .collection(this.business.b_uid)
        .doc(this.data_local.id)
        .update(payload)
        .then(() => {
          vm.successUpload()
        })
        .catch((err) => {
          vm.unsuccessUpload(err)
        })
    },
    successUpload() {
      this.$vs.notify({
        title: 'Success',
        text: 'Successful upload',
        color: 'green',
      })
    },
    unsuccessUpload(err) {
      this.$vs.notify({
        title: 'Error',
        text: `${err}`,
        color: 'red',
      })
    },
    reset_data() {
      this.data_local = Object.assign({}, this.data)
    },
  },
}
</script>
