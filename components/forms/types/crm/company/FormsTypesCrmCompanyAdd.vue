<template>
  <div id="theme-customizer">
    <vs-button
      @click.stop="active = !active"
      color="primary"
      class="ml-5"
      type="filled"
      icon-pack="feather"
      icon="icon-settings"
      >Add Company</vs-button
    >
    <vs-sidebar
      hidden-background
      position-right
      v-model="active"
      click-not-close
      class="items-no-padding"
    >
      <div
        class="flex items-center justify-between px-6 mt-6 customizer-header"
      >
        <div>
          <h4>Add Company</h4>
          <small>Let's do this</small>
        </div>
      </div>
      <vs-divider class="mb-0"></vs-divider>

      <p v-if="currentlyDisplayingUser" class="px-6 font-semibold">
        Adding for: {{ currentDisplayUser.displayName }}
      </p>
      <form-generator
        :schema="formStyle"
        v-model="formData"
        class="p-6"
      ></form-generator>

      <div class="flex flex-wrap items-center justify-center p-6">
        <vs-button class="mr-6" @click="newCategory">Add Data</vs-button>
        <vs-button type="border" color="danger" @click="active = false"
          >Cancel</vs-button
        >
      </div>
    </vs-sidebar>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'CRM-Company-Add',
  components: {
    FormGenerator: () =>
      process.client
        ? import('@/components/forms/form-generator/formGenerator')
        : null
  },
  data() {
    return {
      formStyle: [
        {
          title: 'TextInput',
          placeholder: 'Company',
          label: 'Company',
          name: 'Company',
          type: 'text'
        },
        {
          title: 'TextInput',
          placeholder: 'Email',
          label: 'Email',
          name: 'Email',
          type: 'text'
        },
        {
          title: 'TextInput',
          placeholder: 'Phone',
          label: 'Phone',
          name: 'Phone',
          type: 'text'
        },
        {
          title: 'TextInput',
          placeholder: 'Website',
          label: 'Website',
          name: 'Website',
          type: 'text'
        },
        {
          title: 'SelectList',
          name: 'Sources',
          multi: false,
          label: 'Sources',
          options: [
            'Facebook',
            'Website',
            'Networks',
            'Direct Marketing',
            'Others'
          ]
        },
        {
          title: 'SelectList',
          name: 'Ratings',
          multi: false,
          label: 'Ratings',
          options: this.$store.state.business.active_business.customer_groups
        },
        {
          title: 'GoogleAddress',
          placeholder: 'Address',
          label: 'Address',
          name: 'Address'
        },
        {
          title: 'TextArea',
          placeholder: 'Description',
          label: 'Description',
          name: 'Description'
        }
      ],
      active: false,

      popupActivo4: false,
      configdateTimePicker: {
        enableTime: true,
        enableSeconds: true,
        noCalendar: true
      },

      formData: {},

      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.6
      }
    }
  },

  computed: {
    business() {
      if (process.client) {
        if (localStorage.getItem('mainBusiness')) {
          return JSON.parse(localStorage.getItem('mainBusiness'))
        } else {
          return this.$store.state.business.main_business
        }
      }
    },
    user() {
      if (process.client) {
        if (localStorage.getItem('userInfo')) {
          return JSON.parse(localStorage.getItem('userInfo'))
        } else {
          return this.$store.state.auth.active_user
        }
      }
    }
  },

  mounted() {},
  methods: {
    frontChange() {
      this.front = !this.front
    },
    newCategory() {
      let userAdding = {
        uid: this.user.id,
        user_name: this.user.name,
        user_surname: this.user.surname,
        user_displayName: this.user.displayName,
        user_branch: this.user.branches,
        user_positions: this.user.ositions
      }

      let vm = this

      if (userAdding.user_branch == undefined) {
        userAdding.user_branch = 'not set'
      }

      if (userAdding.user_positions == undefined) {
        userAdding.user_positions = 'not set'
      }
      let docR
      docR = this.$fireStore
        .collection('apps')
        .doc('crm')
        .collection(this.business.b_uid)
        .doc('company')
        .collection('company')

      docR
        .add({
          uid: this.user.uid,
          user_name: this.user.name,
          user_surname: this.user.surname,
          user_displayName: this.user.display_name,
          user_branch: this.user.branch,
          user_positions: this.user.position,
          company: this.formData.Company,
          companyDisplayname: this.formData.Company,
          email: this.formData.Email,
          phone: this.formData.Phone,
          website: this.formData.Website,
          sources: this.formData.Sources,
          ratings: this.formData.Ratings,
          lastMeeting: moment().format('DD-MM-YYYY'),
          adr_address: this.formData.Address.places[0].adr_address,
          formatted_address: this.formData.Address.places[0].formatted_address,
          address_url: this.formData.Address.places[0].url,
          vicinity: this.formData.Address.places[0].vicinity,
          lat: this.formData.Address.markers[0].position.lat,
          lng: this.formData.Address.markers[0].position.lng,
          geolocation: {
            lat: this.formData.Address.markers[0].position.lat,
            lng: this.formData.Address.markers[0].position.lng
          },
          geo1: this.formData.Address.geoAll.geo1,
          geo2: this.formData.Address.geoAll.geo2,
          geo3: this.formData.Address.geoAll.geo3,
          geo4: this.formData.Address.geoAll.geo4,
          geo5: this.formData.Address.geoAll.geo5,
          geo6: this.formData.Address.geoAll.geo6,
          geo7: this.formData.Address.geoAll.geo7,
          geo8: this.formData.Address.geoAll.geo8,
          geo9: this.formData.Address.geoAll.geo9,

          created_date: moment().format('DD-MM-YYYY'),
          created_month: moment().format('MM-YYYY'),
          description: this.formData.Description,
          timestamp: Date.now()
        })
        .then(function() {
          vm.successUpload()
        })
        .catch(function(error) {
          vm.noSuccessUpload(error)
        })
      this.active = false
    },
    noSuccessUpload(err) {
      this.notify({
        color: 'red',
        title: 'Oops! Something wrong',
        text: `Here it is: ${err}`
      })
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
