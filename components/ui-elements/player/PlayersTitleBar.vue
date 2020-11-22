<template>
  <vs-system-bar window>
    <vs-menu offset-y transition="slide-y-transition">
      <vs-btn flat small right slot="activator">
        <vs-icon>headset</vs-icon> MENU
      </vs-btn>
      <vs-list>
        <vs-list-tile @click="dialog = true">
          <vs-list-tile-title>About</vs-list-tile-title>
        </vs-list-tile>
        <vs-dialog v-model="dialog" max-width="300">
          <vs-card>
            <vs-card-title><h2>Vue Music Player</h2></vs-card-title>
            <vs-card-text>Version 1.0.0</vs-card-text>
            <vs-card-actions>
              <vs-spacer></vs-spacer>
              <vs-btn flat @click="dialog = false">OK</vs-btn>
            </vs-card-actions>
          </vs-card>
        </vs-dialog>
      </vs-list>
    </vs-menu>
    <vs-spacer></vs-spacer>
    VUE MUSIC PLAYER
    <vs-spacer></vs-spacer>
    <vs-icon>remove</vs-icon>
    <vs-icon>check_box_outline_blank</vs-icon>
    <vs-icon>close</vs-icon>
  </vs-system-bar>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    }
  }
}
</script>
