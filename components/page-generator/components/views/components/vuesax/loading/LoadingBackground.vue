<!-- =========================================================================================
    File Name: LoadingBackground.vue
    Description: Change background color of loading animation
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->


<template>
    <vx-card title="Background" code-toggler>

        <p>If you need to change the background of the loading, you can use the property <code>background</code></p>

        <vs-alert icon="warning" active="true" color="warning" class="mt-5">
            <span>Only <strong>RGB</strong> and <strong>HEX</strong> colors are supported.</span>
        </vs-alert>

        <div class="demo-alignment mt-3">
            <input type="color" v-model="backgroundLoading" name="" value="">
            <vs-button @click="openLoadingBackground" type="gradient" color="success">Success</vs-button>
        </div>

      
    </vx-card>
</template>

<script>
export default {
  data () {
    return {
      backgroundLoading: '#22c16b'
    }
  },
  methods: {
    openLoadingBackground () {
      this.$vs.loading({ background: this.backgroundLoading, color: 'rgb(255, 255, 255)' })
      setTimeout(() => {
        this.$vs.loading.close()
      }, 3000)
    }
  }
}
</script>
