<!-- =========================================================================================
  File Name: NotificationsIcon.vue
  Description: Add Icons to notifications
  ----------------------------------------------------------------------------------------

========================================================================================== -->


<template>
  <vx-card title="Icon" code-toggler>

    <p>Notifications can include icons to improve the user experience and to construct a more pleasant and intuitive notification. To make this, use the <code>icon</code> property. A practical example would be: <code>icon: 'chat'</code></p>

    <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
      <p>Vuesax uses the Google Material Icons font library by default. For a list of all available icons, visit the official <a href="https://material.io/icons/" target="_blank">Material Icons page</a>.</p>
      <p>FontAwesome and other fonts library are supported. Simply use the icon-pack with fa or fas. You still need to include the Font Awesome icons in your project.</p>
    </vs-alert>

    <div class="demo-alignment">

      <vs-button color="primary" type="flat"
        @click="$vs.notify({
          title:'Icon mail',
          text:'Lorem ipsum dolor sit amet, consectetur',
          color:'primary',
          iconPack: 'feather',
          icon:'icon-mail'})">Icon Mail</vs-button>

      <vs-button color="success" type="flat"
        @click="$vs.notify({
          title:'Icon mail',
          text:'Lorem ipsum dolor sit amet, consectetur',
          color:'success',
          iconPack: 'feather',
          icon:'icon-check'})">Icon check_box</vs-button>

      <vs-button color="danger" type="flat"
        @click="$vs.notify({
          title:'Icon mail',
          text:'Lorem ipsum dolor sit amet, consectetur',
          color:'danger',
          iconPack: 'feather',
          icon:'icon-heart'})">Icon favorite</vs-button>

      <vs-button color="warning" type="flat"
        @click="$vs.notify({
          title:'Icon mail',
          text:'Lorem ipsum dolor sit amet, consectetur',
          color:'warning',
          iconPack: 'feather',
          icon:'icon-alert-circle'})">Icon error</vs-button>

      <vs-button color="dark" type="flat"
        @click="$vs.notify({
          title:'Icon mail',
          text:'Lorem ipsum dolor sit amet, consectetur',
          color:'dark',
          iconPack: 'feather',
          icon:'icon-message-square'})">Icon chat</vs-button>

      <vs-button @click="randomIcon()" color="success" type="gradient">Icon Random Color</vs-button>
    </div>

  

  </vx-card>
</template>

<script>
export default {
  methods: {
    randomIcon () {
      function getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min)) + min
      }
      const color = `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`

      this.$vs.notify({ title: 'Icon Award', text: 'Lorem ipsum dolor sit amet, consectetur', color, icon: 'icon-award', iconPack: 'feather' })
    }
  }
}
</script>
