<!-- =========================================================================================
    File Name: LoadingColor.vue
    Description: Change color of loading animation
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->


<template>
    <vx-card title="Color" code-toggler>

        <p>You can change the color of the loading with the property <code>color</code></p>

        <div class="demo-alignment mt-3">
            <input type="color" v-model="colorLoading" name="" value="">
            <vs-button @click="openLoadingColor" type="filled" :color="colorLoading">Loading</vs-button>
        </div>

       
    </vx-card>
</template>

<script>
export default {
  data () {
    return {
      colorLoading: '#ff8000'
    }
  },
  methods: {
    openLoadingColor () {
      this.$vs.loading({ color: this.colorLoading })
      setTimeout(() => {
        this.$vs.loading.close()
      }, 2000)
    }
  }
}
</script>
