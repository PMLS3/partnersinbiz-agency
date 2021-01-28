<!-- =========================================================================================
    File Name: ButtonBorder.vue
    Description: Buttons with border
    ----------------------------------------------------------------------------------------
 
========================================================================================== -->

<template>
  <div>
    <vx-card title="Simple Image">
      <p>
        To add a type of button with edges we change the value of
        <code>border</code>
      </p>

      <div class="demo-alignment">
        <div
          class="flex flex-wrap justify-center"
          id="simple-image"
          @click="addComponent('simple-image')"
        >
          <div class="w-6/12 sm:w-4/12 px-4">
            <img
              src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-1-800x800-fa5a7ac2c81a43925586ea85f2fea332.jpg"
              alt="..."
              class="shadow rounded max-w-full h-auto align-middle border-none"
            />
          </div>
        </div>
      </div>
    </vx-card>

    <vx-card title="Circle Image">
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
          <div class="w-6/12 sm:w-4/12 px-4">
            <img
              src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-2-800x800-3e08ef145920c93bbe320add0d2ef58d.jpg"
              alt="..."
              class="shadow rounded-full max-w-full h-auto align-middle border-none"
            />
          </div>
        </div>
      </div>
    </vx-card>

    <vx-card title="Simple Raised">
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
          <div class="w-6/12 sm:w-4/12 px-4">
            <img
              src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-3-800x800-19201574ed51f77138a739c0452ca104.jpg"
              alt="..."
              class="shadow-lg rounded max-w-full h-auto align-middle border-none"
            />
          </div>
        </div>
      </div>
    </vx-card>

    <vx-card title="Circle Raised">
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
          <div class="w-6/12 sm:w-4/12 px-4">
            <img
              src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-4-470x470-4ef82ef45a9598d24c4c951ead4d626a.png"
              alt="..."
              class="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
            />
          </div>
        </div>
      </div>
    </vx-card>
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
