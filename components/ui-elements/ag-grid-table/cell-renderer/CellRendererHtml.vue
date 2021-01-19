<template>
  <div class="flex items-center">
    <p v-html="params.data.desc" v-if="params.data.desc"></p>
    <p v-html="params.data.contentFull" v-if="params.data.contentFull"></p>
  </div>
</template>

<script>
export default {
  name: 'CellRendererHtml',
}
</script>
