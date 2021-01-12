<!-- =========================================================================================
    File Name: NotificationsTime.vue
    Description: Chnage the duration of notifications
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->


<template>
    <vx-card title="Time" code-toggler>

        <p>You can change the total time that the notification stays on the screen with the <code>time</code> property. Example: <code>time: 4000</code></p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <p>By default the notifications have a time of <strong>2000</strong> (2s)</p>
        </vs-alert>

        <div class="demo-alignment">
            <vs-button @click="$vs.notify({
                title:'Time default',
                text:'Lorem ipsum dolor sit amet consectetur',
                color:'primary',
                iconPack: 'feather',
                icon: 'icon-clock'
                })" color="primary" type="flat">Time default</vs-button>

            <vs-button @click="$vs.notify({
                time:4000,
                title:'Time 4s (4000)',
                text:'Lorem ipsum dolor sit amet consectetur',
                color:'primary',
                iconPack: 'feather',
                icon: 'icon-clock'
                })" color="primary" type="flat">Time 4s (4000)</vs-button>

            <vs-button @click="$vs.notify({
                time:8000,
                title:'Time 8s (8000)',
                text:'Lorem ipsum dolor sit amet consectetur',
                color:'primary',
                iconPack: 'feather',
                icon: 'icon-clock'
                })" color="primary" type="flat">Time 8s (8000)</vs-button>
        </div>

     
    </vx-card>
</template>
