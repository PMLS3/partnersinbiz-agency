<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
 
========================================================================================== -->

<template functional>
  <footer class="the-footer flex-wrap justify-between" :class="classes">
    <span
      >COPYRIGHT &copy; {{ new Date().getFullYear() }}
      <a href="https://woooo" target="_blank" rel="nofollow">Wide-Nework</a>,
      All rights Reserved</span
    >
    <client-only>
      <span class="md:flex hidden items-center">
        <span>Hand-crafted & Made with</span>
        <feather-icon
          icon="HeartIcon"
          svg-classes="stroke-current text-danger w-6 h-6"
          class="ml-2"
        />
      </span>
    </client-only>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  props: {
    classes: {
      type: String
    }
  }
}
</script>
