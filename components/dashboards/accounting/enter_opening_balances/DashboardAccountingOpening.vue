<template>
  <div>
    <div>
      <vs-row
        vs-w="12"
        class="p-2"
        style=" border-style: double; border-color: rgba(0,0,0,0.25)"
      >
        <vs-col
          vs-type="flex"
          vs-justify="flex-start"
          vs-align="flex-start"
          vs-lg="8"
          vs-sm="4"
          vs-xs="12"
        >
          <h3>Accounts</h3>
        </vs-col>
        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          vs-lg="2"
          vs-sm="4"
          vs-xs="12"
        >
          Credit
        </vs-col>
        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          vs-lg="2"
          vs-sm="4"
          vs-xs="12"
        >
          Debit
        </vs-col>
      </vs-row>
      <div>
        <vs-row
          vs-w="12"
          v-for="(item, index) in items"
          :key="index"
          class="p-2"
        >
          <vs-col
            vs-type="flex"
            vs-justify="flex-start"
            vs-align="flex-start"
            vs-lg="8"
            vs-sm="4"
            vs-xs="12"
          >
            <h3>{{ item.acc_name }}</h3>
          </vs-col>
          <vs-col
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            vs-lg="2"
            vs-sm="4"
            vs-xs="12"
          >
            <vs-input v-model="item.Credit" />
          </vs-col>
          <vs-col
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            vs-lg="2"
            vs-sm="4"
            vs-xs="12"
          >
            <vs-input v-model="item.Debit" />
          </vs-col>
        </vs-row>
      </div>
      <vs-row vs-w="12" class="p-2">
        <vs-col
          vs-type="flex"
          vs-justify="flex-start"
          vs-align="flex-start"
          vs-lg="8"
          vs-sm="4"
          vs-xs="12"
        >
        </vs-col>
        <vs-col
          vs-type="flex"
          vs-justify="flex-start"
          vs-align="flex-start"
          vs-lg="2"
          vs-sm="4"
          vs-xs="12"
          style=" border-style: double; border-color: rgba(0,0,0,0.25)"
        >
          <h6 class="ml-3 p-2">R {{ credit | k_formatter }}</h6>
        </vs-col>
        <vs-col
          vs-type="flex"
          vs-justify="flex-start"
          vs-align="flex-start"
          vs-lg="2"
          vs-sm="4"
          vs-xs="12"
          style=" border-style: double; border-color: rgba(0,0,0,0.25)"
        >
          <h6 class="ml-3 p-2">R {{ debit | k_formatter }}</h6>
        </vs-col>
      </vs-row>

      <vs-row vs-w="12" class="p-2">
        <vs-col
          vs-type="flex"
          vs-justify="flex-start"
          vs-align="flex-start"
          vs-lg="8"
          vs-sm="4"
          vs-xs="12"
        >
        </vs-col>
        <vs-col
          vs-type="flex"
          vs-justify="flex-start"
          vs-align="flex-start"
          vs-lg="2"
          vs-sm="4"
          vs-xs="12"
          style=" border-style: double; border-color: rgba(0,0,0,0.25)"
        >
          <h6 class="ml-3 p-2">Total</h6>
        </vs-col>
        <vs-col
          vs-type="flex"
          vs-justify="flex-start"
          vs-align="flex-start"
          vs-lg="2"
          vs-sm="4"
          vs-xs="12"
          style=" border-style: double; border-color: rgba(0,0,0,0.25)"
        >
          <h6 class="ml-3 p-2">R {{ total | k_formatter }}</h6>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>
<script>
export default {
  props: ['items'],

  computed: {
    debit() {
      let debit = 0
      for (let i = 0; i < this.items.length; i++) {
        debit = debit + Number(this.items[i].Debit)
      }
      return debit
    },
    credit() {
      let credit = 0
      for (let i = 0; i < this.items.length; i++) {
        credit = credit + Number(this.items[i].Credit)
      }
      return credit
    },
    total() {
      return this.debit - this.credit
    }
  }
}
</script>
