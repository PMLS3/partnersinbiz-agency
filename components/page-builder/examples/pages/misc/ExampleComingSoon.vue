<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div
    class="flex items-center justify-center w-full h-screen bg-img vx-row no-gutter"
    @click="addComponent('coming-soon')"
    id="coming-soon"
  >
    <div class="m-4 vx-col sm:w-1/2 md:w-1/2 lg:w-2/5">
      <vx-card>
        <div class="mb-6 vx-card__title">
          <h2 class="text-center">We are launching soon</h2>
        </div>

        <img
          src="@/assets/images/pages/rocket.png"
          alt="coming-soon"
          class="mx-auto mb-2"
          width="150"
        />

        <div class="text-center count-down">
          <countdown
            :time="
              new Date('03/09/2021 00:00:00').getTime() - new Date().getTime()
            "
          >
            <template slot-scope="props">
              <div class="single-counter">
                <span class="timer">{{ props.days }}</span>
                <span>Days</span>
              </div>

              <div class="single-counter">
                <span class="timer">{{ props.hours }}</span>
                <span>Hours</span>
              </div>

              <div class="single-counter">
                <span class="timer">{{ props.minutes }}</span>
                <span>Minutes</span>
              </div>

              <div class="single-counter">
                <span class="timer">{{ props.seconds }}</span>
                <span>Seconds</span>
              </div>
            </template>
          </countdown>
        </div>

        <vs-divider position="center">Subscribe</vs-divider>

        <div class="subscription">
          <span
            >If you would like to be notified when our app is live, Please
            subscribe to our mailing list.</span
          >
          <vs-input
            type="email"
            label-placeholder="Email"
            v-model="value1"
            class="w-full mb-4"
          />
          <vs-button class="w-full">Subscribe</vs-button>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown'

export default {
  data() {
    return {
      value1: '',
    }
  },
  components: {
    countdown: VueCountdown,
  },
  methods: {
    addComponent(name) {
      let element = document.getElementById(name)

      let payload = this.$comp_create(
        element,
        this.$store.state.page_builder.list_pos
      )

      $nuxt.$emit('component-added', payload)
      $nuxt.$emit('close_comp')
    },
  },
}
</script>
