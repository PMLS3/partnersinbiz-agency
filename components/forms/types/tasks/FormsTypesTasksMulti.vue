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
          Task
        </h3>
      </template>
      <template slot="thead">
        <vs-th>
          Task Name
        </vs-th>
        <vs-th>
          Description
        </vs-th>
      </template>

      <template slot-scope="{ data }">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data">
          <vs-td :data="data[indextr].task">
            <vs-input class="w-full" v-model="users[indextr].task" />
          </vs-td>
          <vs-td :data="data[indextr].desc">
            <vs-input class="w-full" v-model="users[indextr].desc" />
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
    <vs-button @click="AddTask()">Add Task </vs-button>
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'Multiple Tasks',

  components: {
    vSelect
  },
  data: () => ({
    users: [
      {
        task: '',
        desc: ''
      }
    ]
  }),
  watch: {
    users: {
      handler(val) {
        this.$store.commit('form/TASKS_SET', this.users)
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
    AddTask() {
      this.users.push({
        task: '',
        desc: ''
      })
    }
  }
}
</script>
