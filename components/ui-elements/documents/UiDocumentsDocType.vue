<template>
  <a class="items-center" :href="doc.url[0].url" target="_blank">
    <h4 class="mb-1 uppercase">{{ doc.title }}</h4>
    <img
      src="@/assets/images/file-icons/pdf.png"
      :alt="doc.url.name"
      v-if="doc.url[0].type == 'application/pdf'"
    />
    <img
      src="@/assets/images/file-icons/doc.png"
      :alt="doc.url.name"
      v-else-if="
        doc.url[0].type ==
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      "
    />

    <img
      src="@/assets/images/file-icons/xls.png"
      :alt="doc.url.name"
      v-else-if="
        doc.url[0].type ==
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      "
    />

    <img
      src="@/assets/images/file-icons/xls.png"
      :alt="doc.url.name"
      v-else-if="doc.url[0].type == 'text/csv'"
    />

    <iframe
      width="560"
      height="315"
      v-else-if="doc.url[0].type == 'youtube'"
      src="https://www.youtube.com/embed/_4kHxtiuML0"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <video
      controls
      width="250"
      v-else-if="doc.url[0].type == 'video/x-msvideo'"
    >
      <source :src="doc.url[0].url" type="video/webm" />

      <source :src="doc.url[0].url" type="video/mp4" />

      Sorry, your browser doesn't support embedded videos.
    </video>

    <video controls width="250" v-else-if="doc.url[0].type == 'video/mp4'">
      <source :src="doc.url[0].url" type="video/webm" />

      <source :src="doc.url[0].url" type="video/mp4" />

      Sorry, your browser doesn't support embedded videos.
    </video>

    <img src="@/assets/images/file-icons/xls.png" :alt="doc.url.name" v-else />

    <h6>{{ doc.url[0].type }}</h6>
  </a>
</template>

<script>
export default {
  props: {
    doc: { type: Object, default: {} },
  },
}
</script>
