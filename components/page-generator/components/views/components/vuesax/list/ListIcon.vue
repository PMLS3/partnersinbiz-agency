<!-- =========================================================================================
    File Name: ListIcon.vue
    Description: Give icon to list item
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->


<template>
    <vx-card title="Icon" code-toggler>

        <p>The list items and the headers can have a <code>icon</code> as well</p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <p>Vuesax uses the Google Material Icons font library by default. For a list of all available icons, visit the official <a href="https://material.io/icons/" target="_blank">Material Icons page</a>.</p>
            <p>FontAwesome and other fonts library are supported. Simply use the icon-pack with fa or fas. You still need to include the Font Awesome icons in your project.</p>
        </vs-alert>

        <div class="demo-alignment">

            <vs-list>

                <vs-list-header icon-pack="feather" icon="icon-users" title="Group 1"></vs-list-header>
                <vs-list-item icon-pack="feather" icon="icon-check" title="Snickerdoodle" subtitle="An excellent companion"></vs-list-item>
                <vs-list-item icon-pack="feather" icon="icon-check" title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals"></vs-list-item>

                <vs-list-header icon-pack="feather" icon="icon-user-plus" title="Group 2" color="success"></vs-list-header>
                <vs-list-item icon-pack="feather" icon="icon-shield" title="Enid's" subtitle="At night a bar, during the day a delicious brunch spot."></vs-list-item>
                <vs-list-item icon-pack="feather" icon="icon-shield" title="Veronika Ossi" subtitle="Has not watched anything recently"></vs-list-item>
            </vs-list>

        </div>

      

    </vx-card>
</template>
