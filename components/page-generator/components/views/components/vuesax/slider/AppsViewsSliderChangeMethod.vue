<!-- =========================================================================================
    File Name: SliderChangeMethod.vue
    Description: Trigger function on change
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->


<template>
    <vx-card title="Change Method" code-toggler>

        <p>You can add a function that will be triggered every time the value changes with <code>@change="MyFunction"</code></p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <p>You can change the minimum or maximum number admitted with the properties: <code>min</code>, <code>max</code></p>
        </vs-alert>

        <div class="mt-5">
            <vs-slider :min="50" @change="cambio" color="rgb(45, 208, 129)" v-model="value1"/>
            <div :style="{'width':widthx+'px','height':heightx+'px'}" class="p-2 bg-success rounded text-white flex items-center justify-center"> {{value1}} </div>
        </div>

     

    </vx-card>
</template>

<script>
export default {
  data () {
    return {
      value1: 55,
      widthx: 55,
      heightx: 55
    }
  },
  methods: {
    cambio (value) {
      this.widthx = value
      this.heightx = value
    }
  }
}
</script>
