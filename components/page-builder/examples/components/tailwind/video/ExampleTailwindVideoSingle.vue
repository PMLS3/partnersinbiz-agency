<!-- =========================================================================================
    File Name: ButtonBorder.vue
    Description: Buttons with border
    ----------------------------------------------------------------------------------------
 
========================================================================================== -->

<template>
  <div>
    <vx-card title="Single Video">
      <p>
        To add a type of button with edges we change the value of
        <code>border</code>
      </p>

      <div class="demo-alignment">
        <div
          class="flex flex-wrap justify-center"
          @click="addComponent('single-vid')"
        >
          <video
            class="object-cover w-full h-screen"
            autoplay
            muted
            loop
            id="single-vid"
          >
            <source
              class="object-contain h-screen"
              src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1280_10MG.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </vx-card>

    <vx-card class="mt-8" title="Circle Image">
      <p>
        To add a type of button with edges we change the value of
        <code>border</code>
      </p>

      <div class="demo-alignment">
        <div
          class="flex flex-wrap justify-center"
          id="circle-image"
          @click="addComponent('circle-image')"
        >
          <video
            src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1280_10MG.mp4"
            autoplay
            muted
            loop
            class="object-cover w-full h-full"
          ></video>
        </div>
      </div>
    </vx-card>
    <!--
    <vx-card class="mt-8" title="Simple Raised">
      <p>
        To add a type of button with edges we change the value of
        <code>border</code>
      </p>

      <div class="demo-alignment">
        <div
          class="flex flex-wrap justify-center"
          id="simple-raised"
          @click="addComponent('simple-raised')"
        >
          <div class="w-6/12 px-4 sm:w-4/12">
            <img
              src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-3-800x800-19201574ed51f77138a739c0452ca104.jpg"
              alt="..."
              class="h-auto max-w-full align-middle border-none rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </vx-card>

    <vx-card class="mt-8" title="Circle Raised">
      <p>
        To add a type of button with edges we change the value of
        <code>border</code>
      </p>

      <div class="demo-alignment">
        <div
          class="flex flex-wrap justify-center"
          id="circle-raised"
          @click="addComponent('circle-raised')"
        >
          <div class="w-6/12 px-4 sm:w-4/12">
            <img
              src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-4-470x470-4ef82ef45a9598d24c4c951ead4d626a.png"
              alt="..."
              class="h-auto max-w-full align-middle border-none rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </vx-card> -->
  </div>
</template>
<script>
export default {
  name: 'ExampleTailwindImageSingle',
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
