<!-- =========================================================================================
  File Name: addAddressMan.vue
  Description: Forms send data to store. form/address gets update in store
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div>
    <div class="centerx">
      <p class="mt-5 ml-1" style="font-size: .85rem; rgba(0,0,0,.7)">
        BILLING ADDRESS
      </p>

      <p class="mt-5 ml-1" style="font-size: .85rem; rgba(0,0,0,.7)">
        Attention
      </p>
      <vs-input class="w-full" v-model="bill_att" />

      <p class="mt-5 ml-1" style="font-size: .85rem; rgba(0,0,0,.7)">
        Country
      </p>
      <v-select
        label="name"
        class="w-full"
        v-model="bill_country"
        :options="country"
      ></v-select>

      <p class="mt-5 ml-1" style="font-size: .85rem; rgba(0,0,0,.7)">
        ADDRESS
      </p>

      <p class="mt-5 ml-1" style="font-size: .85rem; rgba(0,0,0,.7)">
        Street 1
      </p>
      <vs-textarea
        counter="100"
        label="Max: 100 characters"
        :counter-danger.sync="counterDanger"
        v-model="bill_street1"
      />

      <p class="mt-5 ml-1" style="font-size: .85rem; rgba(0,0,0,.7)">
        Street 2
      </p>

      <vs-textarea
        counter="100"
        label="Max: 100 characters"
        :counter-danger.sync="counterDanger2"
        v-model="bill_street2"
      />

      <p class="mt-5 ml-1" style="font-size: .85rem; rgba(0,0,0,.7)">
        City
      </p>
      <vs-input class="w-full" v-model="bill_city" />

      <p class="mt-5 ml-1" style="font-size: .85rem; rgba(0,0,0,.7)">
        State
      </p>
      <vs-input class="w-full" v-model="bill_state" />

      <p class="mt-5 ml-1" style="font-size: .85rem; rgba(0,0,0,.7)">
        Code
      </p>
      <vs-input class="w-full" v-model="bill_code" />

      <p class="mt-5 ml-1" style="font-size: .85rem; rgba(0,0,0,.7)">
        Phone
      </p>
      <vs-input class="w-full" v-model="bill_phone" />

      <p class="mt-5 ml-1" style="font-size: .85rem; rgba(0,0,0,.7)">Fax</p>
      <vs-input class="w-full" v-model="bill_fax" />

      <vs-checkbox class="inline-flex mt-5" v-model="dash"
        >Copy Billing Address</vs-checkbox
      >

      <p class="mt-5 ml-1" style="font-size: .85rem; rgba(0,0,0,.7)">
        SHIPPING ADDRESS
      </p>

      <p class="mt-5 ml-1" style="font-size: .85rem; rgba(0,0,0,.7)">
        Attention
      </p>
      <vs-input class="w-full" v-model="ship_att" />

      <p class="mt-5 ml-1" style="font-size: .85rem; rgba(0,0,0,.7)">
        Country
      </p>
      <v-select
        label="name"
        class="w-full"
        v-model="ship_country"
        :options="country"
      ></v-select>

      <p class="mt-5 ml-1" style="font-size: .85rem; rgba(0,0,0,.7)">
        ADDRESS
      </p>

      <p class="mt-5 ml-1" style="font-size: .85rem; rgba(0,0,0,.7)">
        Street 1
      </p>
      <vs-textarea
        counter="100"
        label="Max: 100 characters"
        :counter-danger.sync="counterDanger3"
        v-model="ship_street1"
      />

      <p class="mt-5 ml-1" style="font-size: .85rem; rgba(0,0,0,.7)">
        Street 2
      </p>

      <vs-textarea
        counter="100"
        label="Max: 100 characters"
        :counter-danger.sync="counterDanger4"
        v-model="ship_street2"
      />

      <p class="mt-5 ml-1" style="font-size: .85rem; rgba(0,0,0,.7)">
        City
      </p>
      <vs-input class="w-full" v-model="ship_city" />

      <p class="mt-5 ml-1" style="font-size: .85rem; rgba(0,0,0,.7)">
        State
      </p>
      <vs-input class="w-full" v-model="ship_state" />

      <p class="mt-5 ml-1" style="font-size: .85rem; rgba(0,0,0,.7)">
        Code
      </p>
      <vs-input class="w-full" v-model="ship_code" />

      <p class="mt-5 ml-1" style="font-size: .85rem; rgba(0,0,0,.7)">
        Phone
      </p>
      <vs-input class="w-full" v-model="ship_phone" />

      <p class="mt-5 ml-1" style="font-size: .85rem; rgba(0,0,0,.7)">Fax</p>
      <vs-input class="w-full" v-model="ship_fax" />
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import moment from 'moment'
export default {
  name: 'Address-Man',
  props: ['entry_type'],
  components: {
    vSelect
  },
  data() {
    return {
      dash: false,
      counterDanger: false,
      counterDanger2: false,
      counterDanger3: false,
      counterDanger4: false,
      bill_att: '',
      bill_country: '',
      bill_street1: '',
      bill_street2: '',
      bill_city: '',
      bill_state: '',
      bill_code: '',
      bill_phone: '',
      bill_fax: '',

      ship_att: '',
      ship_country: '',
      ship_street1: '',
      ship_street2: '',
      ship_city: '',
      ship_state: '',
      ship_code: '',
      ship_phone: '',
      ship_fax: ''
    }
  },
  watch: {
    dash: function() {
      if (this.dash) {
        ;(this.ship_att = this.bill_att),
          (this.ship_country = this.bill_country),
          (this.ship_street1 = this.bill_street1),
          (this.ship_street2 = this.bill_street2),
          (this.ship_city = this.bill_city),
          (this.ship_state = this.bill_state),
          (this.ship_code = this.bill_code),
          (this.ship_phone = this.bill_phone),
          (this.ship_fax = this.bill_fax)
      } else {
        ;(this.ship_att = ''),
          (this.ship_country = ''),
          (this.ship_street1 = ''),
          (this.ship_street2 = ''),
          (this.ship_city = ''),
          (this.ship_state = ''),
          (this.ship_code = ''),
          (this.ship_phone = ''),
          (this.ship_fax = '')
      }
    },
    payload: function() {
      this.$store.commit('form/ADDRESS_SET', this.payload)
    }
  },

  computed: {
    payload() {
      let pay = {
        billing_address: {
          bill_att: this.bill_att,
          bill_country: this.bill_country,
          bill_street1: this.bill_street1,
          bill_street2: this.bill_street2,
          bill_city: this.bill_city,
          bill_state: this.bill_state,
          bill_code: this.bill_code,
          bill_phone: this.bill_phone,
          bill_fax: this.bill_fax
        },
        shipping_address: {
          ship_att: this.ship_att,
          ship_country: this.ship_country,
          ship_street1: this.ship_street1,
          ship_street2: this.ship_street2,
          ship_city: this.ship_city,
          ship_state: this.ship_state,
          ship_code: this.ship_code,
          ship_phone: this.ship_phone,
          ship_fax: this.ship_fax
        }
      }

      return pay
    },
    // user() {
    //   if (process.client) {
    //   if (localStorage.getItem('userInfo')) {
    //     return JSON.parse(localStorage.getItem('userInfo'))
    //   } else {
    //     return this.$store.state.auth.active_user
    //   }
    // }
    // },
    // business() {
    //   return this.$store.state.business.active_business
    // },
    country() {
      return this.$store.state.info.countries
    }
  }
}
</script>
