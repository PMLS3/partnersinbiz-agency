<!-- =========================================================================================
  File Name: primary_contact.vue
  Description: Template Customizer
  Component Name: Primary Contact

  Submit to store: form/CONTACT_PRIMARY_SET  retrieve from store form/contact_primary
  ----------------------------------------------------------------------------------------
    takes two props: title and subtitle
========================================================================================== -->

<template>
  <div>
    <h6>{{ title }}</h6>
    <small>{{ subtitle }}</small>
    <p class="mt-5">Salutation</p>
    <v-select
      class="w-full"
      v-model="users.salutation"
      :options="salutation"
    ></v-select>
    <!-- Client Name -->
    <vs-input
      label="Name"
      name="contactperson"
      v-model="users.name"
      class="w-full mt-5"
    />

    <!-- Client Surname -->
    <vs-input
      label="Surname"
      name="contactsurname"
      v-model="users.surname"
      class="w-full mt-5"
    />

    <p class="mt-5">Position</p>
    <v-select
      label="name"
      class="w-full"
      v-model="users.pos"
      :options="positions"
    ></v-select>

    <!-- Client Number -->
    <vs-input
      label="Contact number"
      name="number"
      v-model="users.mobile"
      type="number"
      class="w-full mt-5"
    />

    <!-- Client Email -->
    <vs-input
      label="Email"
      name="email"
      v-model="users.email"
      type="email"
      class="w-full mt-5"
    />
  </div>
</template>
<script>
import vSelect from 'vue-select'
export default {
  name: 'Primary Contact Person',

  props: ['title', 'subtitle'],
  components: {
    vSelect
  },
  data: () => ({
    users: {
      salutation: '',
      name: '',
      surname: '',
      pos: '',
      email: '',
      mobile: ''
    }
  }),
  computed: {
    salutation() {
      return this.$store.state.app.salutation
    },
    business() {
      if (process.client) {
        if (localStorage.getItem('mainBusiness')) {
          return JSON.parse(localStorage.getItem('mainBusiness'))
        } else {
          return this.$store.state.business.main_business
        }
      }
    },

    positions() {
      let grp = ['None']
      if (this.business.pos) {
        let new_grp = grp.concat(this.business.pos)

        return new_grp
      } else {
        return grp
      }
    }
  },
  watch: {
    users: {
      handler(val) {
        this.$store.commit('form/CONTACT_PRIMARY_SET', this.users)
      },
      deep: true
    }
  }
}
</script>
