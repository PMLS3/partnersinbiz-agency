<!-- =========================================================================================
    File Name: NotificationsFixedAndFunctionClick.vue
    Description: Rendering of default notifications
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->


<template>
    <vx-card title="Fixed and function click" code-toggler>

        <p>Sometimes we need to execute a function when the user clicks on the notification. For this, pass a function to the click property. Example: <code>click:()=>{ ... }</code></p>

        <vs-button @click="myFunction()" type="gradient" color="success" class="mt-4">Run Example</vs-button>

       

    </vx-card>
</template>

<script>
export default {
  methods: {
    myFunction () {
      this.$vs.notify({
        title: 'Function click',
        text: 'Click on me to execute function',
        color: 'primary',
        fixed: true,
        click: () => {
          // Secondary function
          this.$vs.notify({
            title: 'Secondary function',
            text: 'Executed the function when clicking',
            color: 'success',
            iconPack: 'feather',
            icon: 'icon-check'
          })
        }
      })
    }
  }
}
</script>
