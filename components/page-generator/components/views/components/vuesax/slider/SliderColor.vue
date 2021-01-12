<!-- =========================================================================================
    File Name: SliderColor.vue
    Description: Change color of slider
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->


<template>
    <vx-card title="Color" code-toggler>

        <p>You can change the slider's color with the property color. You can also add the main <code>colors</code> like: <code>primary</code>, <code>success</code>, <code>danger</code>, <code>warning</code>, <code>dark</code></p>

        <div class="mt-5">
            <input type="color" v-model="colorx" name="" >
            <vs-slider :color="colorx" v-model="value1"/>
        </div>

       

    </vx-card>
</template>

<script>
export default {
  data () {
    return {
      colorx:'#db7d12',
      value1:24
    }
  }
}
</script>
