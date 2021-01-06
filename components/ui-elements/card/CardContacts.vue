<template>
  <vx-card>
    <img :src="contact.img" style="width: 100%" />
    <vs-divider></vs-divider>
    <div class="text-center">
      <h4>{{ contact.title }}</h4>
    </div>
    <!-- <vs-avatar class="block mx-auto my-6" size="80px" :src=" contact.downloadURL " /> -->
    <div class="mt-6 mb-8 text-center">
      <span v-html="contact.html"></span>
    </div>

    <vs-row vs-align="flex-start" vs-type="flex" vs-justify="center" vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center">
        <a :href="`${contact.website}`" target="_blank">
          <vs-button
            :style="`background-size: cover; background-repeat: no-repeat;`"
            icon="web"
          ></vs-button>
        </a>
        <a :href="`tel:${contact.number}`">
          <vs-button
            :style="`background-size: cover; background-repeat: no-repeat; background-color: `"
            icon="speaker_phone"
            class="ml-2"
          ></vs-button>
        </a>
        <a :href="`mailto:${contact.email}`">
          <vs-button
            :style="`background-size: cover; background-repeat: no-repeat;  `"
            icon="mail"
            class="ml-2"
          ></vs-button>
        </a>
        <a
          :href="`http://www.google.com/maps/place/${contact.lat},${contact.lng}`"
          target="_blank"
        >
          <vs-button
            :style="`background-size: cover; background-repeat: no-repeat;    `"
            icon="location_on"
            class="ml-2"
          ></vs-button>
        </a>
      </vs-col>
    </vs-row>
  </vx-card>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
