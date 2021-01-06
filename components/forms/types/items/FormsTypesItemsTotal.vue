<template>
  <div>
    <div class="w-1/2 ml-auto mt-4 text-right">
      <vs-row>
        <vs-th class="pointer-events-none ">SUBTOTAL</vs-th>
        <vs-td>
          <vs-input name="discount" v-model="discount_amount" />
          <v-select
            style="width: 120px"
            v-model="discount_type"
            :options="discount_types"
          ></v-select>
        </vs-td>
      </vs-row>
      <vs-row>
        <vs-th class="pointer-events-none ">SHIPPING CHARGES</vs-th>
        <vs-td>
          <vs-input name="shipping" type="number" v-model="shipping_charges" />
        </vs-td>
      </vs-row>
    </div>
    <vs-table hoverFlat class="w-1/2 ml-auto mt-4 text-right" :data="items">
      <vs-tr>
        <vs-th class="pointer-events-none ">SUBTOTAL</vs-th>
        <vs-td>R {{ totalAmount.toFixed(2) }} </vs-td>
      </vs-tr>
      <vs-tr>
        <vs-th class="pointer-events-none">DISCOUNT </vs-th>
        <vs-td>R {{ totalDiscount }}</vs-td>
      </vs-tr>
      <vs-tr>
        <vs-th class="pointer-events-none">SHIPPING CHARGES </vs-th>
        <vs-td>R {{ shipping_charges }}</vs-td>
      </vs-tr>
      <vs-tr>
        <vs-th class="pointer-events-none">VAT</vs-th>
        <vs-td>0</vs-td>
      </vs-tr>
      <vs-tr>
        <vs-th class="pointer-events-none">TOTAL</vs-th>
        <vs-td>R {{ finalAmount.toFixed(2) }} </vs-td>
      </vs-tr>
    </vs-table>
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'Items-Total',
  components: {
    vSelect
  },
  data() {
    return {
      discount_type: '%',
      discount_amount: 0,
      shipping_charges: 0,
      discount_types: ['%', 'R'],
      items: [1, 2]
    }
  },
  watch: {
    discount_type: function() {
      this.ItemsSubmit()
    },
    discount_amount: function() {
      this.ItemsSubmit()
    },
    shipping_charges: function() {
      this.ItemsSubmit()
    },
    totalDiscount: function() {
      this.ItemsSubmit()
    },
    totalAmount: function() {
      this.ItemsSubmit()
    },
    totalShipping: function() {
      this.ItemsSubmit()
    },
    finalAmount: function() {
      this.ItemsSubmit()
    },
    paper_items: function() {
      this.ItemsSubmit()
    }
  },
  computed: {
    paper_items() {
      return this.$store.state.form.paper_items
    },
    totalDiscount() {
      if (this.discount_type == '%') {
        return (this.totalAmount * this.discount_amount) / 100
      } else {
        return this.discount_amount
      }
    },
    totalAmount() {
      let t_amount = 0
      for (let i = 0; i < this.paper_items.length; i++) {
        let s_amount = this.paper_items[i].price * this.paper_items[i].qty
        t_amount = t_amount + s_amount
      }
      return t_amount
    },
    totalShipping() {
      return Number(this.shipping_charges)
    },
    finalAmount() {
      return this.totalAmount - this.totalDiscount + this.totalShipping
    }
  },
  methods: {
    ItemsSubmit() {
      let payload = {
        discount_type: this.discount_type,
        discount_amount: this.discount_amount,
        shipping_charges: this.shipping_charges,
        total_discount: this.totalDiscount,
        total_amount: this.totalAmount,
        total_shipping: this.totalShipping,
        final_amount: this.finalAmount
      }
      this.$store.commit('form/ITEMS_TOTAL_SET', payload)
    }
  }
}
</script>
