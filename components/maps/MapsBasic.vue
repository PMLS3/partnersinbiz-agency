<!-- =========================================================================================
    File Name: GoogleMapBasic.vue
    Description: Google map Basic
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div>
    <GmapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100%; height: 400px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  props: {
    center: {
      type: Object,
      default: () => {
        return { lat: 10.0, lng: 10.0 }
      },
    },
    markers: {
      type: Array,
      default: () => [
        { position: { lat: 10.0, lng: 10.0 } },
        { position: { lat: 11.0, lng: 11.0 } },
      ],
    },
  },
  data() {
    return {
      //   center: { lat: 10.0, lng: 10.0 },
      //   markers: [
      //     { position: { lat: 10.0, lng: 10.0 } },
      //     { position: { lat: 11.0, lng: 11.0 } },
      //   ],
    }
  },
}
</script>
