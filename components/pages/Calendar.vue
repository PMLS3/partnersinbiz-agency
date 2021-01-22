<template>
  <!-- Calendly inline widget begin -->
  <div
    class="calendly-inline-widget"
    data-url="https://calendly.com/partnersinbiz"
    style="min-width: 320px; height: 630px"
  ></div>
  <!-- <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script> -->
  <!-- Calendly inline widget end -->
</template>

<script>
export default {
  head: {
    script: [{ src: 'https://assets.calendly.com/assets/external/widget.js' }],
  },
}
</script>
