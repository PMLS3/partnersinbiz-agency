<template>
  <div class="w-full h-full bg-gray-200 overflow-x-scroll">
    <div class="container mx-auto py-20">
      <table class="w-full shadow text-left bg-white">
        <thead>
          <tr class="border-b border-gray-300">
            <th class="py-5 pl-2 sm:pl-10 w-1/4 text-base text-gray-800">
              Name
            </th>
            <th class="py-5 w-1/4 text-base text-gray-800 text-center pr-8">
              Title
            </th>
            <th class="py-5 w-1/4 text-base text-gray-800 text-center">
              Status
            </th>
            <th
              class="py-5 w-1/4 text-base text-gray-800 text-center pr-24 sm:pr-10"
            >
              Role
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-gray-200">
            <td class="pl-2 sm:pl-10 pr-2 py-4">
              <div class="flex items-center">
                <div class="w-12 h-12">
                  <img
                    src="https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg"
                    alt=""
                    class="w-full h-full object-cover rounded shadow"
                  />
                </div>
                <div class="pl-4">
                  <p class="text-gray-800 text-xs sm:text-sm">Andres Berlin</p>
                  <span class="text-xs text-gray-600"
                    >andresberlin@gmail.com</span
                  >
                </div>
              </div>
            </td>
            <td class="pr-2 pt-4 pb-5 text- gray-800 text-xs sm:text-sm">
              <div class="xl:pl-32 flex flex-col">
                <div>
                  <p class="text-gray-800 text-xs sm:text-sm pb-1">Director</p>
                  <span class="text-xs text-gray-600">Talent Management </span>
                </div>
              </div>
            </td>
            <td
              class="pr-2 pt-4 pb-5 text-green-400 text-xs sm:text-sm text-center"
            >
              Active
            </td>
            <td
              class="pt-4 pb-5 text-gray-800 pr-2 sm:pr-10 text-xs sm:text-sm text-center pl-2"
            >
              Owner
            </td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="pl-2 sm:pl-10 pr-2 py-4">
              <div class="flex items-center">
                <div class="w-12 h-12">
                  <img
                    src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif"
                    alt=""
                    class="w-full h-full object-cover rounded shadow"
                  />
                </div>
                <div class="pl-4">
                  <p class="text-gray-800 text-xs sm:text-sm">Ashley Wilson</p>
                  <span class="text-xs text-gray-600"
                    >ashleywilson@gmail.com
                  </span>
                </div>
              </div>
            </td>
            <td class="pr-2 pt-4 pb-5 text- gray-800 text-xs sm:text-sm">
              <div class="xl:pl-32 flex flex-col">
                <div>
                  <p class="text-gray-800 text-xs sm:text-sm pb-1">
                    Senior Manager
                  </p>
                  <span class="text-xs text-gray-600">Digital Design </span>
                </div>
              </div>
            </td>
            <td
              class="pr-2 pt-4 pb-5 text-red-400 text-xs sm:text-sm text-center pl-2"
            >
              Inactive
            </td>
            <td
              class="pt-4 pb-5 text-gray-800 pr-2 sm:pr-10 text-xs sm:text-sm text-center pl-2"
            >
              Owner
            </td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="pl-2 sm:pl-10 pr-2 py-4">
              <div class="flex items-center">
                <div class="w-12 h-12">
                  <img
                    src="https://cdn.tuk.dev/assets/beautiful-woman-medium-shot-with-pink-background_23-2148316670.jpg"
                    alt=""
                    class="w-full h-full object-cover rounded shadow"
                  />
                </div>
                <div class="pl-4">
                  <p class="text-gray-800 text-xs sm:text-sm">Hannah Geller</p>
                  <span class="text-xs text-gray-600"
                    >hannahgeller@gmail.com
                  </span>
                </div>
              </div>
            </td>
            <td class="pr-2 pt-4 pb-5 text- gray-800 text-xs sm:text-sm">
              <div class="xl:pl-32 flex flex-col">
                <div>
                  <p class="text-gray-800 text-xs sm:text-sm pb-1">
                    VP Engineering
                  </p>
                  <span class="text-xs text-gray-600"
                    >Engineering & Development
                  </span>
                </div>
              </div>
            </td>
            <td
              class="pr-2 pt-4 pb-5 text-green-400 text-xs sm:text-sm text-center"
            >
              Active
            </td>
            <td
              class="pt-4 pb-5 text-gray-800 pr-2 sm:pr-10 text-xs sm:text-sm text-center pl-2"
            >
              Owner
            </td>
          </tr>
          <tr>
            <td class="pl-2 sm:pl-10 pr-2 py-4">
              <div class="flex items-center">
                <div class="w-12 h-12">
                  <img
                    src="https://cdn.tuk.dev/assets/photo-1575978108872-9b1429a19a0f.jfif"
                    alt=""
                    class="w-full h-full object-cover rounded shadow"
                  />
                </div>
                <div class="pl-4">
                  <p class="text-gray-800 text-xs sm:text-sm">Jonathan Stark</p>
                  <span class="text-xs text-gray-600"
                    >jonathanstark@gmail.com
                  </span>
                </div>
              </div>
            </td>
            <td class="pr-2 pt-4 pb-5 text- gray-800 text-xs sm:text-sm">
              <div class="xl:pl-32 flex flex-col">
                <div>
                  <p class="text-gray-800 text-xs sm:text-sm pb-1">
                    Lead Developer
                  </p>
                  <span class="text-xs text-gray-600"
                    >Engineering & Development
                  </span>
                </div>
              </div>
            </td>
            <td
              class="pr-2 pt-4 pb-5 text-red-400 text-xs sm:text-sm text-center pl-2"
            >
              Inactive
            </td>
            <td
              class="pt-4 pb-5 text-gray-800 pr-2 sm:pr-10 text-xs sm:text-sm text-center pl-2"
            >
              Owner
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
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
