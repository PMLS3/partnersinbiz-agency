<!-- =========================================================================================
    File Name: ToolptipDefault.vue
    Description: Rendering of default Tooltip
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->


<template>
    <vx-card title="Default" code-toggler>

        <p>To add a tooltip we have the component <code>vx-tooltip</code></p>

        <div class="demo-alignment">
            <vx-tooltip text="Tooltip Default">
                <vs-switch v-model="switch1" />
            </vx-tooltip>

            <vx-tooltip text="Tooltip Default">
                <vs-input-number v-model="number1" />
            </vx-tooltip>

            <vx-tooltip text="Tooltip Default">
                <vs-button color="primary" type="border">Button</vs-button>
            </vx-tooltip>
        </div>

      

    </vx-card>
</template>

<script>
export default {
  data () {
    return {
      switch1: true,
      number1: 10
    }
  }
}
</script>
