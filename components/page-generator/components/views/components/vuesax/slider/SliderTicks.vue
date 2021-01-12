<!-- =========================================================================================
    File Name: SliderTicks.vue
    Description: Add ticks to you slider using step
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->


<template>
    <vx-card title="Ticks" code-toggler>

        <p>With Ticks you can allow the user to select a value inside a range of allowed values. With the property <strong>step</strong> you can change the distance between each Tick</p>

        <div class="mt-5">
            <vs-slider step="10" v-model="value1"/>
            <vs-slider ticks step="25" v-model="value2"/>
            <vs-slider ticks step="0.5" :step-decimals="true" v-model="value3"/>
        </div>

      
    </vx-card>
</template>

<script>
export default {
  data () {
    return {
      value1: 60,
      value2: 25,
      value3: 50.5
    }
  }
}
</script>
