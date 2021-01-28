<template>
  <div
    class="w-full py-10 bg-gray-200"
    id="card-user"
    @click="addComponent('card-user')"
  >
    <div class="container flex items-start justify-center px-6 mx-auto">
      <div class="w-full md:w-1/2 lg:w-1/4">
        <!-- Card is full width. Use in 4 col grid for best view. -->
        <!-- Card code block start -->
        <div class="bg-white rounded shadow">
          <div class="flex items-center justify-between px-4 pt-4 pb-8">
            <p class="text-xs font-normal text-indigo-700">UX Design</p>
            <div class="flex items-center">
              <svg
                class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                />
              </svg>
              <svg
                class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                />
              </svg>
              <svg
                class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                />
              </svg>
              <svg
                class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                />
              </svg>
              <svg
                class="w-3 text-gray-200 icon icon-tabler icon-tabler-star"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                />
              </svg>
            </div>
          </div>
          <div class="flex justify-center w-full mb-3">
            <div class="w-16 h-16 border border-white rounded shadow">
              <img
                class="object-cover w-full h-full overflow-hidden rounded"
                :src="profilePhoto"
                alt="placeholder image"
              />
            </div>
          </div>
          <h5
            class="mb-2 text-base font-normal leading-4 tracking-normal text-center text-gray-800"
          >
            Jackson Teller
          </h5>
          <p
            class="mb-4 text-sm font-normal leading-3 tracking-normal text-center text-gray-600"
          >
            Senior UX Designer
          </p>
          <div class="flex justify-center w-full mb-6">
            <p
              class="flex items-center justify-center px-5 py-2 text-sm leading-4 text-white bg-indigo-700 rounded-full leaing-3"
            >
              Professional
            </p>
          </div>
          <div class="flex items-center justify-center mx-4 mb-2">
            <div
              class="p-2 text-xs leading-3 tracking-normal text-center text-gray-600 bg-gray-200 rounded"
            >
              UX Research
            </div>
            <div
              class="p-2 ml-2 text-xs leading-3 tracking-normal text-center text-gray-600 bg-gray-200 rounded"
            >
              Product Strategy
            </div>
          </div>
          <div class="flex items-center justify-center mx-4 mb-5">
            <div
              class="p-2 text-xs leading-3 tracking-normal text-center text-gray-600 bg-gray-200 rounded"
            >
              UX Research
            </div>
            <div
              class="p-2 ml-2 text-xs leading-3 tracking-normal text-center text-gray-600 bg-gray-200 rounded"
            >
              Product Strategy
            </div>
          </div>
          <p
            class="flex justify-center py-4 text-sm tracking-normal text-gray-600 border-t border-gray-300 rounded-b cursor-pointer hover:bg-indigo-700 hover:text-white"
          >
            View Profile
          </p>
        </div>
        <!-- Card code block end -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThreeColUserProfileCard',
  data() {
    return {
      profilePhoto:
        'https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_2.png',
    }
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
