<template>
  <div>
    <vs-tabs
      :position="$device.isMobile ? 'top' : 'left'"
      class="mt-24 tabs-shadow-none"
      id="profile-tabs"
    >
      <!-- GENERAL -->
      <vs-tab icon="search" :label="!$device.isMobile ? 'AnyMailer' : ''">
        <AnyMailer />
      </vs-tab>
      <vs-tab icon="search" :label="!$device.isMobile ? 'Skrapp' : ''">
        <Skrapp />
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
