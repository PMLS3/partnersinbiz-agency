<template>
  <div>
    <audio id="audio" controls>
      <source :src="params.data.audio" id="audio" />
    </audio>
  </div>
</template>

<script>
export default {
  name: 'CellRendererAudio',
  computed: {},
}
</script>

<style lang="scss" scpoped></style>
