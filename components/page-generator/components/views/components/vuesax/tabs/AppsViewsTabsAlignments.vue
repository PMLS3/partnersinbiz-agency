<!-- =========================================================================================
    File Name: TabsAlignments.vue
    Description: Align your tabs using alignments prop
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->


<template>
    <vx-card title="Alignments" code-toggler>

        <p>Change the alignment of the buttons with the property alignments. Allowed values are:</p>

        <vx-list :list="['center', 'right', 'fixed']" class="mt-3"></vx-list>

        <div class="mt-5">
            <h6 class="mb-3"> Default </h6>
            <vs-tabs>
                <vs-tab label="Home">
                    <div></div>
                </vs-tab>
                <vs-tab label="Documents">
                    <div></div>
                </vs-tab>
                <vs-tab label="Contributors">
                    <div></div>
                </vs-tab>
                <vs-tab label="Ecosystem">
                    <div></div>
                </vs-tab>
            </vs-tabs>
        </div>

        <div class="mt-5">
            <h6 class="mb-3"> Center </h6>
            <vs-tabs alignment="center">
                <vs-tab label="Home">
                    <div></div>
                </vs-tab>
                <vs-tab label="Documents">
                    <div></div>
                </vs-tab>
                <vs-tab label="Contributors">
                    <div></div>
                </vs-tab>
                <vs-tab label="Ecosystem">
                    <div></div>
                </vs-tab>
            </vs-tabs>
        </div>

        <div class="mt-5">
            <h6 class="mb-3"> Right </h6>
            <vs-tabs alignment="right">
                <vs-tab label="Home">
                    <div></div>
                </vs-tab>
                <vs-tab label="Documents">
                    <div></div>
                </vs-tab>
                <vs-tab label="Contributors">
                    <div></div>
                </vs-tab>
                <vs-tab label="Ecosystem">
                    <div></div>
                </vs-tab>
            </vs-tabs>
        </div>

        <div class="mt-5">
            <h6 class="mb-3"> Fixed </h6>
            <vs-tabs alignment="fixed">
                <vs-tab label="Home">
                    <div></div>
                </vs-tab>
                <vs-tab label="Documents">
                    <div></div>
                </vs-tab>
                <vs-tab label="Contributors">
                    <div></div>
                </vs-tab>
                <vs-tab label="Ecosystem">
                    <div></div>
                </vs-tab>
            </vs-tabs>
        </div>

       

    </vx-card>
</template>
