<!-- =========================================================================================
  File Name: contact_persons.vue
  Description: Template Customizer
  Component Name: Contact Persons

  Submit to store: form/CONTACT_SET  retrieve from store form/contact_person
  ----------------------------------------------------------------------------------------

  Add more that one person
  TODO link selectors, upload doc, if there is difference cant add

========================================================================================== -->
<template>
  <div>
    <vs-row class="border-2 border-gray-800 bg-gray-600 mb-5">
      <vs-col
        v-tooltip="'col - 2'"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="2"
      >
        Account
      </vs-col>
      <vs-col
        v-tooltip="'col - 2'"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="2"
      >
        Description
      </vs-col>
      <vs-col
        v-tooltip="'col - 2'"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="2"
      >
        Contact
      </vs-col>
      <vs-col
        v-tooltip="'col - 2'"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="2"
      >
        Tax
      </vs-col>
      <vs-col
        v-tooltip="'col - 2'"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="2"
      >
        Debits
      </vs-col>
      <vs-col
        v-tooltip="'col - 2'"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="2"
      >
        Credits
      </vs-col>
    </vs-row>
    <vs-row v-for="(item, index) in items" :key="index">
      <vs-col
        v-tooltip="'col - 2'"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="2"
      >
        <v-select
          class="w-full"
          label="item"
          placeholder="SelectAccount"
          v-model="items[index].account"
          :options="tax_types"
        ></v-select>
      </vs-col>
      <vs-col
        v-tooltip="'col - 2'"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="2"
      >
        <vs-input
          class="w-full"
          placeholder="Description"
          v-model="items[index].desc"
        />
      </vs-col>
      <vs-col
        v-tooltip="'col - 2'"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="2"
      >
        <v-select
          class="w-full"
          label="item"
          placeholder="Contact"
          v-model="items[index].contact"
          :options="tax_types"
        ></v-select>
      </vs-col>
      <vs-col
        v-tooltip="'col - 2'"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="2"
      >
        <v-select
          class="w-full"
          label="item"
          placeholder="SelectAccount"
          v-model="items[index].tax"
          :options="tax_types"
        ></v-select>
      </vs-col>
      <vs-col
        v-tooltip="'col - 2'"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="2"
      >
        <vs-input
          class="w-full"
          placeholder="Debit"
          type="number"
          v-model="items[index].deb"
        />
      </vs-col>
      <vs-col
        v-tooltip="'col - 2'"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="2"
      >
        <vs-input
          class="w-full"
          type="number"
          placeholder="Credit"
          v-model="items[index].cred"
        />
      </vs-col>
    </vs-row>
    <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" vs-w="12">
      <vs-col
        v-tooltip="'col - 2'"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="8"
      >
        Total
      </vs-col>

      <vs-col
        v-tooltip="'col - 2'"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="2"
      >
        {{ totalDebit }}
      </vs-col>
      <vs-col
        v-tooltip="'col - 2'"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="2"
      >
        {{ totalCredit }}
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col
        v-tooltip="'col - 2'"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="8"
      >
        Difference
      </vs-col>

      <vs-col
        v-tooltip="'col - 2'"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="2"
      >
      </vs-col>
      <vs-col
        v-tooltip="'col - 2'"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="2"
      >
        {{ totalDifference }}
      </vs-col>
    </vs-row>

    <ImageUpload label="" />

    <vs-button @click="addMore()" class="mt-8">Add Another</vs-button>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import ImageUpload from '@/components/forms/form-generator/components/imageUpload.vue'

export default {
  name: 'Journal-Entries',
  components: {
    vSelect,
    ImageUpload,
  },
  data() {
    return {
      items: [
        {
          account: '',
          desc: '',
          contact: '',
          tax: '',
          deb: 0,
          cred: 0,
        },
      ],
    }
  },
  computed: {
    totalDebit() {
      let num = 0
      for (let i = 0; i < this.items.length; i++) {
        num = Number(num) + Number(this.items[i].deb)
      }
      return num
    },
    totalCredit() {
      let num = 0
      for (let i = 0; i < this.items.length; i++) {
        console.log('this.items', this.items[i])
        num = Number(num) + Number(this.items[i].cred)
      }
      return num
    },
    totalDifference() {
      return this.totalDebit - this.totalCredit
    },
  },
  methods: {
    addMore() {
      this.items.push({
        account: '',
        desc: '',
        contact: '',
        tax: '',
        deb: 0,
        cred: 0,
      })
    },
  },
}
</script>
