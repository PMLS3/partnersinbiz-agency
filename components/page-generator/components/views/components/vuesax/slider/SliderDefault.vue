<!-- =========================================================================================
    File Name: SliderDefault.vue
    Description: Rendering of default Slider
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->


<template>
    <vx-card title="Default" code-toggler>

        <p>To implement a <strong>Slider</strong> we have the <code>vs-slider</code> component</p>

        <div class="mt-5">
            <vs-slider v-model="value1"/>
            <vs-slider disabled="true" v-model="value2"/>
            <vs-slider max="200" v-model="value3"/>
        </div>

       

    </vx-card>
</template>

<script>
export default {
  data () {
    return {
      value1: 67,
      value2: 34,
      value3: 60
    }
  }
}
</script>
