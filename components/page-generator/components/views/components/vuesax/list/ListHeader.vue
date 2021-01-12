<!-- =========================================================================================
    File Name: ListHeader.vue
    Description: Create list with header
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->


<template>
    <vx-card title="Header" code-toggler>

        <p>A <code>vs-list-header</code> separator with custom <code>color</code></p>

        <div class="demo-alignment">

            <vs-list>
                <vs-list-header title="Group 1"></vs-list-header>

                <vs-list-item title="Snickerdoodle" subtitle="An excellent companion"></vs-list-item>
                <vs-list-item title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals"></vs-list-item>
                <vs-list-header title="Group 2" color="success"></vs-list-header>
                <vs-list-item title="Enid's" subtitle="At night a bar, during the day a delicious brunch spot."></vs-list-item>
                <vs-list-item title="Veronika Ossi" subtitle="Has not watched anything recently"></vs-list-item>
            </vs-list>

        </div>


    </vx-card>
</template>
