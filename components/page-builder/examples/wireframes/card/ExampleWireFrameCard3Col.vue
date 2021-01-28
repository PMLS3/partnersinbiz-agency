<template>
  <div
    class="w-full bg-gray-200 py-10"
    id="card-col-3"
    @click="addComponent('card-col-3')"
  >
    <div class="container mx-auto px-6 flex items-start justify-center">
      <div class="w-full lg:w-1/4">
        <!-- Card is full width. Use in 4 col grid for best view. -->
        <!-- Card code block start -->
        <div class="bg-white shadow rounded p-6 w-full">
          <h3
            class="text-gray-800 leading-4 tracking-normal text-base mb-6 font-bold"
          >
            Social Media Integrations
          </h3>
          <div class="flex justify-between items-center w-full mb-5">
            <div class="flex items-center">
              <p
                class="font-medium text-gray-600 text-base tracking-normal leading-4"
              >
                Facebook
              </p>
            </div>
            <button
              class="focus:outline-none px-6 py-2 bg-indigo-700 hover:bg-indigo-600 text-white font-normal text-xs leading-3 rounded"
            >
              Connect
            </button>
          </div>
          <div class="flex justify-between items-center w-full mb-5">
            <div class="flex items-center">
              <p
                class="font-medium text-gray-600 text-base tracking-normal leading-4"
              >
                Instagram
              </p>
            </div>
            <button
              class="focus:outline-none px-6 py-2 bg-white hover:bg-red-400 hover:text-white border border-red-400 text-red-400 font-normal text-xs leading-3 rounded"
            >
              Remove
            </button>
          </div>
          <div class="flex justify-between items-center w-full mb-5">
            <div class="flex items-center">
              <p
                class="font-medium text-gray-600 text-base tracking-normal leading-4"
              >
                Twitter
              </p>
            </div>
            <button
              class="focus:outline-none px-6 py-2 bg-indigo-700 hover:bg-indigo-600 text-white font-normal text-xs leading-3 rounded"
            >
              Connect
            </button>
          </div>
          <div class="flex justify-between items-center w-full">
            <div class="flex items-center">
              <p
                class="font-medium text-gray-600 text-base tracking-normal leading-4"
              >
                Dribbble
              </p>
            </div>
            <button
              class="focus:outline-none px-6 py-2 bg-white hover:bg-red-400 hover:text-white border-red-400 border text-red-400 font-normal text-xs leading-3 rounded"
            >
              Remove
            </button>
          </div>
        </div>
        <!-- Card code block end -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThreeColListCardWithActionButtons',
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
