<template>
  <vs-tabs
    :position="$device.isMobile ? 'top' : 'left'"
    class="mt-24 tabs-shadow-none"
    id="profile-tabs"
  >
    <!-- GENERAL -->
    <vs-tab icon="search" :label="!$device.isMobile ? 'Forms' : ''">
      <FormsTypes />
    </vs-tab>
  </vs-tabs>
</template>

<script>
export default {}
</script>
