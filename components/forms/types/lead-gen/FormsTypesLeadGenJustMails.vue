<template>
  <div>
    <div v-for="(item, index) in data_clients" :key="index">
      <vs-input
        name="name"
        label-placeholder="Name"
        v-model="item.name"
        class="w-full mt-6"
      />

      <vs-input
        name="surname"
        label-placeholder="Surname"
        v-model="item.surname"
        class="w-full mt-6"
      />

      <vs-input
        name="email"
        label-placeholder="Email"
        v-model="item.email"
        class="w-full mt-6"
      />
    </div>
    <vs-input
      v-if="data_company.input.domain"
      name="domain"
      label-placeholder="Domain"
      v-model="data_company.input.domain"
      class="w-full mt-6"
    />
    <vs-input
      v-if="data_company.input.domain"
      name="domain"
      label-placeholder="Domain"
      v-model="data_company.input.domain"
      class="w-full mt-6"
    />

    <vs-input
      v-if="data_company.input.company_name"
      name="domain"
      label-placeholder="Domain"
      v-model="data_company.input.company_name"
      class="w-full mt-6"
    />
    <vs-tooltip :text="text" position="right">
      <vs-button
        class="my-4"
        icon="verified"
        :color="items.email_class == 'not_verified' ? red : green"
      ></vs-button>
    </vs-tooltip>

    <vs-button @click="AddProspects">Add Prospects</vs-button>
  </div>
</template>

<script>
export default {
  props: {
    items: { type: Object },
  },
  data() {
    return {
      red: 'red',
      green: 'green',
      data_clients: [],
      data_company: {},
    }
  },
  computed: {
    text() {
      let text = 'Emails Verified'
      if (this.items.email_class == 'not_verified') {
        text = 'Emails are not verified'
      }
      return text
    },
  },
  created() {
    for (let i = 0; i < this.items.emails.length; i++) {
      let payload = { name: '', surname: '', email: this.items.emails[i] }
      this.data_clients.push(payload)
    }
    this.data_company = this.items
  },
  methods: {
    AddProspects() {
      console.log('items', this.data)
    },
  },
}
</script>

<style></style>
