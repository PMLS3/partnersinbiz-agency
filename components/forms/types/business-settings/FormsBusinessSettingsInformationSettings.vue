<!-- =========================================================================================
  File Name: UserEditTabInformation.vue
  Description: User Edit Information Tab content
  ----------------------------------------------------------------------------------------
========================================================================================== -->

<template>
  <div>
    <client-only>
      <div id="user-edit-tab-info">
        <div class="vx-row">
          <div class="w-full vx-col md:w-1/2">
            <!-- Col Header -->
            <div class="flex items-end">
              <feather-icon icon="UserIcon" class="mr-2" svgClasses="w-5 h-5" />
              <span class="font-medium leading-none"
                >Contact Person Information</span
              >
            </div>
            <!-- Col Content -->
            <div>
              <vs-input
                class="w-full mt-4"
                label="Company"
                v-model="data_local.c_company"
                type="company"
                name="company"
              />

              <vs-input
                class="w-full mt-4"
                label="Name"
                v-model="data_local.c_name"
                name="name"
              />

              <vs-input
                class="w-full mt-4"
                label="Surname"
                v-model="data_local.c_surname"
                name="surname"
              />

              <vs-input
                class="w-full mt-4"
                label="Number"
                v-model="data_local.c_number"
                type="number"
                name="number"
              />

              <vs-input
                class="w-full mt-4"
                label="Email"
                v-model="data_local.c_email"
                type="email"
                name="email"
              />
            </div>
          </div>
        </div>

        <!-- Save & Reset Button -->
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

export default {
  name: 'information-setting',
  components: {
    vSelect,
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
    }
  },
  computed: {
    business() {
      return this.$store.state.business.active_business
    },
  },
  methods: {
    successUpload() {
      this.$vs.notify({
        color: 'success',
        title: 'Upload Success',
        text: 'Whoop whoop, been uploaded',
      })

      let business = this.business

      ;(business.c_company = this.data_local.c_company),
        (business.c_name = this.data_local.c_name),
        (business.c_surname = this.data_local.c_surname),
        (business.c_number = this.data_local.c_number),
        (business.c_email = this.data_local.c_email)

      this.$store.commit('business/UPDATE_BUSINESS_INFO', business)
    },
    save_changes() {
      let obj = {
        c_company: this.data_local.c_company,
        c_name: this.data_local.c_name,
        c_surname: this.data_local.c_surname,
        c_number: this.data_local.c_number,
        c_email: this.data_local.c_email,
      }

      if (this.data_local.c_company) {
        obj.c_company = this.data_local.c_company
      }

      if (this.data_local.c_name) {
        obj.c_name = this.data_local.c_name
      }

      if (this.data_local.c_surname) {
        obj.c_surname = this.data_local.c_surname
      }

      if (this.data_local.c_number) {
        obj.c_number = this.data_local.c_number
      }

      if (this.data_local.c_email) {
        obj.c_email = this.data_local.c_email
      }

      this.$fireStore
        .collection('business')
        .doc(this.business.b_uid)
        .update(obj)
        .then(() => {
          this.successUpload()
        })
    },
  },
}
</script>
