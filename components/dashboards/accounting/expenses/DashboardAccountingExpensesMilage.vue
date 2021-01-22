<template>
  <div>
    <h1>Milage</h1>
    <vs-button @click="popupActivo = true" color="primary" type="border"
      >Milage Preferences</vs-button
    >
    <vs-popup
      class="holamundo"
      title="Set Preferences"
      :active.sync="popupActivo"
    >
      <FormsTypesPaperTrailMilagePreference />
    </vs-popup>

    <FormsTypesExpenseMilage />
  </div>
</template>

<script>
export default {
  components: {
    // Prefence: () =>
    //   process.client
    //     ? import('@/components/forms/forms/paper_trail/milage_prefence.vue')
    //     : null,
    // Expense: () =>
    //   process.client
    //     ? import('@/components/forms/forms/expense/milage.vue')
    //     : null
  },
  data() {
    return {
      popupActivo: false,
    }
  },
}
</script>
