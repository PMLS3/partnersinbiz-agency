<template>
  <div>
    <FormsTypesSearchHashTagTwt @searchTag="searchTag" />
  </div>
</template>

<script>
export default {
  methods: {
    searchTag(data) {
      console.log('mid')
      this.$emit('searchTag', data)
    },
  },
}
</script>

<style></style>
