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
    <div class="grid grid-cols-4 gap-4">
      <div>Branch Name</div>
      <div>Email</div>
      <div>Number</div>
      <div>Description</div>
    </div>
    <div
      class="grid grid-cols-4 gap-4 mt-2"
      :key="indextr"
      v-for="(tr, indextr) in branches"
    >
      <div><vs-input class="w-full" v-model="branches[indextr].b_name" /></div>
      <div><vs-input class="w-full" v-model="branches[indextr].b_email" /></div>
      <div>
        <vs-input class="w-full" v-model="branches[indextr].b_number" />
      </div>
      <div>
        <vs-input class="w-full" v-model="branches[indextr].desc" />
      </div>
    </div>

    <vs-button
      @click="addBranch()"
      type="line"
      class="mt-8 bg-gray-400 rounded-full text-white p-3"
    >
      Add Branch
    </vs-button>
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'Branch',
  components: {
    vSelect
  },
  data: () => ({
    branches: [
      {
        b_name: '',
        b_email: '',
        b_number: '',
        desc: ''
      }
    ]
  }),
  watch: {
    branches: {
      handler(val) {
        this.$store.commit('form/BRANCH_DETAILS_SET', this.branches)
      },
      deep: true
    }
  },

  methods: {
    addBranch() {
      this.branches.push({
        b_name: '',
        b_email: '',
        b_number: '',
        desc: ''
      })
    }
  }
}
</script>
