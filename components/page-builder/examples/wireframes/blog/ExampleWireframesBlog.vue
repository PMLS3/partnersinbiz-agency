<!-- =========================================================================================
    File Name: blog/index.vue
    Description: Blog examples in wireframe format

    ----------------------------------------------------------------------------------------

========================================================================================== -->
<template>
  <vs-card class="m-12 bg-gray-100 border border-gray-400">
    <div slot="header" class="p-3">
      <h1 class="pb-2 text-3xl text-gray-400">Blogs</h1>
      <vs-radio v-model="val" vs-name="val" vs-value="date">Date</vs-radio>
      <vs-radio v-model="val" vs-name="val" vs-value="image">Image</vs-radio>
      <vs-radio v-model="val" vs-name="val" vs-value="news">News Feed</vs-radio>
      <vs-radio v-model="val" vs-name="val" vs-value="paragraph"
        >Paragraph</vs-radio
      >
      <vs-radio v-model="val" vs-name="val" vs-value="text">Text</vs-radio>
    </div>

    <blog-date v-if="val == 'date'" />
    <blog-image v-if="val == 'image'" />
    <blog-news-feed v-if="val == 'news'" />
    <blog-paragraph v-if="val == 'paragraph'" />
    <blog-text v-if="val == 'text'" />
  </vs-card>
</template>

<script>
import blogDate from './ExampleWireframesBlogDate.vue'
import blogImage from './ExampleWireframesBlogImage.vue'
import blogNewsFeed from './ExampleWireframesBlogNews_feed'
import blogParagraph from './ExampleWireframesBlogParagraph'
import blogText from './ExampleWireframesBlogText'
export default {
  name: 'blog',
  components: {
    blogDate,
    blogImage,
    blogNewsFeed,
    blogParagraph,
    blogText,
  },
  data: () => ({
    val: 'date',
  }),
}
</script>

<style></style>
