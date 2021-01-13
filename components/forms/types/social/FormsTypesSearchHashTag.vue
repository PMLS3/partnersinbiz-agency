<template>
  <div>
    <FormsTypesSearchHashTagTwt
      @searchTag="searchTag"
      v-if="socialType == 'twt'"
    />
  </div>
</template>

<script>
export default {
  props: {
    socialType: { type: String },
  },
  methods: {
    searchTag(data) {
      this.$emit('searchTag', data)
    },
  },
}
</script>

<style></style>
