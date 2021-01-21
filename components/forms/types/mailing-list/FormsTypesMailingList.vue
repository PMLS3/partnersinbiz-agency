<template>
  <div>
    <h1 class="text-xl">{{ item.title }}</h1>
    <p v-html="item.desc">{{ item.desc }}</p>
    <div>
      <vs-input class="w-full" v-model="user.name" name="name" label="name" />
    </div>
    <div>
      <vs-input
        class="w-full"
        v-model="user.email"
        name="email"
        type="email"
        label="email"
      />
    </div>
    <vs-button @click="AddDetails()" type="line" class="mt-8"
      >Submit
    </vs-button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      user: {
        name: '',
        email: '',
      },
    }
  },
  methods: {
    AddDetails() {
      $nuxt.$emit('add-details', this.user)
    },
  },
}
</script>

<style></style>
