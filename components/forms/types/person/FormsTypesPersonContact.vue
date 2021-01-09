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
    <div class="grid grid-cols-6 gap-4">
      <div>Salutation</div>
      <div>First Name</div>
      <div>Last Name</div>
      <div>Email</div>
      <div>Work Phone</div>
      <div>Work Position</div>
    </div>

    <div
      class="grid grid-cols-6 gap-4 mt-2"
      :key="indextr"
      v-for="(tr, indextr) in users"
    >
      <div>
        <v-select
          label="name"
          class="w-full"
          v-model="users[indextr].salutation"
          :options="salutations"
        ></v-select>
      </div>
      <div>
        <vs-input class="w-full" v-model="users[indextr].name" name="name" />
      </div>
      <div>
        <vs-input
          class="w-full"
          v-model="users[indextr].surname"
          name="surname"
        />
      </div>
      <div>
        <vs-input
          class="w-full"
          v-model="users[indextr].u_email"
          name="email"
          type="email"
        />
      </div>

      <div>
        <vs-input
          class="w-full"
          v-model="users[indextr].mobile"
          name="mobile"
          type="number"
        />
      </div>
      <div>
        <v-select
          label="name"
          class="w-full"
          v-model="users[indextr].pos"
          :options="positions"
        ></v-select>
      </div>
    </div>

    <vs-button @click="AddPerson()" type="line" class="mt-8"
      >Add Person
    </vs-button>
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'Contact Person',

  components: {
    vSelect,
  },
  data: () => ({
    users: [
      {
        salutation: '',
        name: '',
        surname: '',
        u_email: '',
        mobile: '',
        pos: '',
      },
    ],
  }),
  watch: {
    users: {
      handler(val) {
        this.$store.commit('form/CONTACT_SET', this.users)
      },
      deep: true,
    },
  },
  computed: {
    business() {
      return this.$store.state.business.active_business
    },

    positions() {
      let grp = ['None']
      if (this.business.pos) {
        let new_grp = grp.concat(this.business.pos)

        return new_grp
      } else {
        return grp
      }
    },
    salutations() {
      return this.$store.state.app.salutation
    },
  },

  methods: {
    AddPerson() {
      this.users.push({
        salutation: '',
        name: '',
        surname: '',
        u_email: '',
        mobile: '',
        pos: '',
      })
    },
  },
}
</script>
