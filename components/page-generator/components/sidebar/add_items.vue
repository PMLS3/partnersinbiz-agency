<template>
  <div id="theme-customizer">
    <!-- Open Customizer Button -->
    <vs-button
      color="primary"
      type="filled"
      class="customizer-btn"
      icon-pack="feather"
      icon="icon-settings"
      @click.stop="active = !active"
      >Add Assets</vs-button
    >

    <!-- Customizer Content -->
    <vs-sidebar
      v-model="active"
      click-not-close
      hidden-background
      position-right
      class="items-no-padding"
    >
    <VuePerfectScrollbar>
      <div class="h-full mx-4">
        <div
          class="customizer-header mt-6 flex items-center justify-between px-6"
        >
          <div>
            <h4>Assets</h4>
            <small>Register your assets</small>
          </div>
          <feather-icon
            icon="XIcon"
            class="cursor-pointer"
            @click.stop="active = false"
          ></feather-icon>
        </div>
      </div>

      </VuePerfectScrollbar>
    </vs-sidebar>
  </div>
</template>

<script>
export default {
    data(){
        return {
            active: false
        }
    }
}
</script>