<!-- =========================================================================================
  File Name: contact_persons.vue
  Description: Template Customizer
  Component Name: Contact Persons

  Submit to store: form/CONTACT_SET  retrieve from store form/contact_person
  ----------------------------------------------------------------------------------------

  Add more that one person

========================================================================================== -->
<template lang="html">
  <div>
    <vs-table stripe :data="users" class="pb-10">
      <template slot="header">
        <h3>
          Users
        </h3>
      </template>
      <template slot="thead">
        <vs-th>
          User
        </vs-th>
      </template>
      // TODO: add users
      <template slot-scope="{ data }">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data">
          <vs-td :data="data[indextr].salution">
            <v-select
              label="name"
              class="w-full"
              v-model="users[indextr].salution"
              :options="salutions"
            ></v-select>
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
    <vs-button @click="AddPerson()">Add Person </vs-button>
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'Mulitple Persons',

  components: {
    vSelect
  },
  data: () => ({
    users: [
      {
        salution: '',
        name: '',
        surname: '',
        u_email: '',
        mobile: ''
      }
    ]
  }),
  watch: {
    users: {
      handler(val) {
        this.$store.commit('form/CONTACT_SET', this.users)
      },
      deep: true
    }
  },
  computed: {
    salutions() {
      return this.$store.state.app.salutation
    }
  },

  methods: {
    AddPerson() {
      this.users.push({
        salution: '',
        name: '',
        surname: '',
        u_email: '',
        mobile: ''
      })
    }
  }
}
</script>
