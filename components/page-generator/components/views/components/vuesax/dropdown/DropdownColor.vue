<!-- =========================================================================================
    File Name: DropdownDefault.vue
    Description: Rendering of default dropdown
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->


<template>
    <vx-card title="Color" code-toggler>

        <p>You can change the color of the component with the property <code>color</code></p>

        <vs-alert icon="warning" active="true" color="warning" class="mt-5">
            <span>Only <strong>RGB</strong> and <strong>HEX</strong> colors are supported.</span>
        </vs-alert>

        <div class="mt-5 demo-alignment">

            <input type="color" v-model="colorx">

            <vs-dropdown :color="colorx">
                <a class="flex items-center" href="#">
                    Dropdown hover
                    <i class="material-icons">expand_more</i>
                </a>

                <vs-dropdown-menu>

                    <vs-dropdown-item>
                        option 1
                    </vs-dropdown-item>

                    <vs-dropdown-item>
                        option 2
                    </vs-dropdown-item>

                    <vs-dropdown-item divider>
                        option 3
                    </vs-dropdown-item>
                </vs-dropdown-menu>
            </vs-dropdown>

        </div>

      
    </vx-card>
</template>

<script>
export default {
  data: () => ({
    colorx: '#c80948'
  })
}
</script>
