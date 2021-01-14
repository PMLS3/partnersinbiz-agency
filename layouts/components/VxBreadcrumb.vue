<!-- =========================================================================================
    File Name: VxBreadcrumb.vue
    Description: Breadcrumb component
    Component Name: VxBreadcrumb
    ----------------------------------------------------------------------------------------

========================================================================================== -->

<template functional>
  <div class="vx-breadcrumb" :class="data.staticClass">
    <ul class="flex flex-wrap items-center">
      <li class="inline-flex items-end">
        <router-link to="/">
          <feather-icon
            icon="HomeIcon"
            svg-classes="h-5 w-5 mb-1 stroke-current text-primary"
          />
        </router-link>
        <span class="mx-2 breadcrumb-separator"
          ><feather-icon
            :icon="props.isRTL ? 'ChevronsLeftIcon' : 'ChevronsRightIcon'"
            svg-classes="w-4 h-4"
        /></span>
      </li>
      <li
        v-for="(link, index) in props.route.meta.breadcrumb.slice(1, -1)"
        :key="index"
        class="inline-flex items-center"
      >
        <router-link v-if="link.url" :to="link.url">{{
          link.title
        }}</router-link>
        <span v-else class="cursor-default text-primary">{{ link.title }}</span>
        <span class="flex items-start mx-2 breadcrumb-separator"
          ><feather-icon
            :icon="props.isRTL ? 'ChevronsLeftIcon' : 'ChevronsRightIcon'"
            svg-classes="w-4 h-4"
        /></span>
      </li>
      <li class="inline-flex">
        <span
          v-if="props.route.meta.breadcrumb.slice(-1)[0].active"
          class="cursor-default"
          >{{ props.route.meta.breadcrumb.slice(-1)[0].title }}</span
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VxBreadcrumb',
}
</script>
