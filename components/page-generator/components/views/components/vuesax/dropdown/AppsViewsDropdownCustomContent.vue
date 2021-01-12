<!-- =========================================================================================
    File Name: DropdownCustomContent.vue
    Description: Display custom content inside dropdown item
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->


<template>
    <vx-card title="Custom Content" code-toggler>

        <p>Sometimes when we need something more personalized and not necessarily a menu for it you can add any content and have the dropdown functionality with the property <code>vs-custom-content</code></p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <p>For better functionality in the user's aspect when doing some interaction with the custom dropdown you can add that it is only activated and deactivated by a click event with the property <code>vs-trigger-click</code></p>
        </vs-alert>

        <div class="mt-5 demo-alignment">

            <vs-dropdown vs-custom-content vs-trigger-click>
                <a class="flex items-center" href.prevent>
                    <span>Click me open login</span>
                    <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4 ml-1" />
                </a>

                <vs-dropdown-menu class="dropdown-login">

                    <h3 class="mb-0">Login</h3>

                    <vs-input type="email" label-placeholder="Email" v-model="value1" />

                    <vs-input type="password" label-placeholder="Password" v-model="value2" />

                    <vs-button width="100%" color="success" type="gradient" class="mt-4 w-full">Login</vs-button>
                </vs-dropdown-menu>
            </vs-dropdown>

        </div>

       

    </vx-card>
</template>

<script>
export default {
  data: () => ({
    value1: '',
    value2: ''
  })
}
</script>
