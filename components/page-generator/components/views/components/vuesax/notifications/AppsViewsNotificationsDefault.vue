<!-- =========================================================================================
    File Name: NotificationsDefault.vue
    Description: Rendering of default notifications
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->


<template>
    <vx-card title="Default" code-toggler>

        <p>To add a notification we have the global function <code>$vs.notify</code>. The first parameter is a <code>json</code> with all the necessary attributes, or if we only want the standard notification we can only add a string with the text of the notification</p>

        <div class="demo-alignment">
            <vs-button
                @click="$vs.notify({
                    title:'Primary',
                    text:'Lorem ipsum dolor sit amet, consectetur',
                    color:'primary'})"
                color="primary"
                type="flat">Notification Primary</vs-button>

            <vs-button
                @click="$vs.notify({
                    title:'Success',
                    text:'Lorem ipsum dolor sit amet, consectetur',
                    color:'success'})"
                color="success"
                type="flat">Notification Success</vs-button>

            <vs-button
                @click="$vs.notify({
                    title:'Danger',
                    text:'Lorem ipsum dolor sit amet, consectetur',
                    color:'danger'})"
                color="danger"
                type="flat">Notification Danger</vs-button>

            <vs-button
                @click="$vs.notify({
                    title:'Warning',
                    text:'Lorem ipsum dolor sit amet, consectetur',
                    color:'warning'})"
                color="warning"
                type="flat">Notification Warning</vs-button>

            <vs-button
                @click="$vs.notify({
                    title:'dark',
                    text:'Lorem ipsum dolor sit amet, consectetur',
                    color:'dark'})"
                color="dark"
                type="flat">Notification Dark</vs-button>

            <vs-button @click="random()" color="success" type="gradient">Notification Random Color</vs-button>
        </div>
    </vx-card>
</template>

<script>
export default {
  methods: {
    random () {
      function getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min)) + min
      }
      const color = `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`

      this.$vs.notify({
        title: 'Color',
        text: 'Lorem ipsum dolor sit amet, consectetur',
        color
      })

    }
  }
}
</script>
