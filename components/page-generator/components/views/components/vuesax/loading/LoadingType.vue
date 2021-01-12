<!-- =========================================================================================
  File Name: LoadingType.vue
  Description: Change the type of the animation
  ----------------------------------------------------------------------------------------

========================================================================================== -->


<template>
  <vx-card title="Type" code-toggler>

    <p>You can change the type of animation with the type property and the animations so far are:</p>

    <div class="demo-alignment">

      <div class="fill-row-loading">
        <div
          :class="{'activeLoading':activeLoading}"
          @click="openLoading(type)"
          v-for="type in types"
          :key="type"
          :id="[`loading-${type}`]"
          class="vs-con-loading__container loading-example">
        </div>
      </div>
    </div>

  </vx-card>
</template>

<script>
export default {
  data:() => ({
    types:[
      'default',
      'point',
      'radius',
      'corners',
      'border',
      'sound',
      'material'
    ],
    activeLoading:false
  }),
  mounted () {
    this.types.forEach((type) => {
      this.$vs.loading({
        container: `#loading-${type}`,
        type,
        text:type
      })
    })
  },
  methods:{
    openLoading (type) {
      this.activeLoading = true
      this.$vs.loading({
        type
      })
      setTimeout(() => {
        this.activeLoading = false
        this.$vs.loading.close()
      }, 3000)
    }
  }
}
</script>
