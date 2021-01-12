<!-- =========================================================================================
    File Name: PaginationColor.vue
    Description: Rendering of default pagination
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->


<template>
    <vx-card title="Color" code-toggler>

        <p>You can change the color of the component with the property color, you can use the Main colors or RGB and HEX colors</p>

        <vs-alert icon="warning" active="true" color="warning" class="mt-5">
            <span>Only <strong>RGB</strong> and <strong>HEX</strong> colors are supported.</span>
        </vs-alert>

        <div class="flex justify-center items-center mt-5">
            <vs-pagination :color="colorx" :total="20" v-model="currentx"></vs-pagination>
            <input class="input-color ml-4" v-model="colorx" type="color">
        </div>

   
    </vx-card>
</template>

<script>
export default {
  data: () => ({
    colorx: '#f91f43',
    currentx: 7
  })
}
</script>
