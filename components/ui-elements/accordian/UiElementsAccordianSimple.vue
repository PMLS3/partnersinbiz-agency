<template>
  <div class="w-full mt-5 vx-col">
    <vs-collapse accordion type="margin" class="p-0">
      <vs-collapse-item
        v-for="(que, index) in info"
        class="rounded-lg faq-bg"
        :class="{ 'mt-0': !index }"
        :key="que.id"
      >
        <div slot="header">
          <h5>{{ que.title }}</h5>
        </div>
        <div v-html="que.htmlForEditor"></div>
      </vs-collapse-item>
    </vs-collapse>
  </div>
</template>

<script>
export default {
  props: ['info']
}
</script>
