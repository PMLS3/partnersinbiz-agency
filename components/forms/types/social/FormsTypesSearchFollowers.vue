<template>
  <div>
    <vs-input
      name="search"
      class="w-full"
      label-placeholder="User handle"
      v-model="screen_name"
    ></vs-input>
    <small class="w-full mt-2">Example: 'standerpm'</small>

    <vs-button @click="searchName" class="mt-4"
      >Search Users Followers</vs-button
    >
  </div>
</template>

<script>
export default {
  props: {
    socialType: { type: String },
  },
  data() {
    return {
      screen_name: '',
    }
  },
  methods: {
    searchName() {
      console.log('mid')
      this.$emit('searchName', this.screen_name)
    },
  },
}
</script>
