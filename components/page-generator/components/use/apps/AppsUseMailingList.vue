<template>
  <div>
    <vs-row>
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="3"
        vs-sm="12"
        style="margin-top: 110px"
      ></vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="6"
        vs-sm="12"
      >
        <div
          class="vx-col w-full mb-base grid-layout-container alignment-block"
        >
          <div
            title="Contact Form"
            vs-align="center"
            vs-type="flex"
            vs-justify="center"
          >
            <h3>We would love to hear from you</h3>
            <br />
            <vs-input placeholder="Name" class="w-full mb-4" v-model="name" />
            <vs-input
              placeholder="Email"
              type="email"
              class="w-full mb-4"
              v-model="email"
            />
            <vs-textarea label="Message" v-model="msg" />
            <vs-button class="mr-4" @click>Submit</vs-button>
            <vs-button type="border" color="warning" @click class="mt-3"
              >Cancel</vs-button
            >
          </div>
        </div>
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="3"
        vs-sm="12"
      ></vs-col>
    </vs-row>
    <div class="socialIcons" v-if="isMobile">
      <a href="https://www.facebook.com/" target="_blank">
        <img src="@/assets/images/icons/facebook.png" alt="fb" />
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <img src="@/assets/images/icons/instagram.png" alt="insta" />
      </a>
    </div>
    <div class="socialIcon" v-if="!isMobile">
      <a href="https://www.facebook.com/" target="_blank">
        <img src="@/assets/images/icons/facebook.png" alt="fb" />
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <img src="@/assets/images/icons/instagram.png" alt="insta" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['schema'],

  data() {
    return {
      name: '',
      email: '',
      msg: '',
    }
  },
  computed: {
    isMobile() {
      return this.$store.getters['app/isMobile']
    },
  },
}
</script>

<style scoped>
h3 {
  margin-top: 40px;
}
.socialIcon {
  position: absolute;
  bottom: 0;
  right: 0;
  padding-right: 40px;
  padding-bottom: 35px;
}
.socialIcons {
  position: absolute;
  bottom: 0;
  right: 0;
  padding-right: 10px;
  padding-bottom: 35px;
}
</style>
