<template>
  <div
    class="flex flex-col items-center pb-56 bg-gray-300"
    @click="addComponent('ui-pop')"
    id="ui-pop"
  >
    <div class="h-40"></div>
    <div class="container px-3 mx-auto lg:px-24">
      <div class="relative">
        <p class="pb-24 text-gray-800 cursor-pointer" @click="showPopover()">
          Popover
        </p>
        <!-- Code block starts -->
        <div
          id="popover"
          class="absolute top-0 left-0 w-full ml-20 -mt-20 transition duration-150 ease-in-out sm:w-1/2"
        >
          <div class="w-full bg-white rounded shadow-2xl">
            <div class="relative px-4 py-4 bg-gray-200 rounded-t xl:px-8">
              <svg
                class="absolute bottom-0 left-0 -mb-10 -ml-5"
                width="30px"
                height="30px"
                viewBox="0 0 9 16"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Tooltips-"
                    transform="translate(-874.000000, -1029.000000)"
                    fill="#FFFFFF"
                  >
                    <g
                      id="Group-3-Copy-16"
                      transform="translate(850.000000, 975.000000)"
                    >
                      <g
                        id="Group-2"
                        transform="translate(24.000000, 0.000000)"
                      >
                        <polygon
                          id="Triangle"
                          transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) "
                          points="4.5 57.5 12.5 66.5 -3.5 66.5"
                        ></polygon>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p
                class="text-base font-normal leading-normal tracking-normal text-gray-800 opacity-50"
              >
                Search for people to invite
              </p>
            </div>
            <div class="w-full h-full px-4 py-5 xl:px-8">
              <div class="flex items-center justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-chevron-left"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
                <div class="w-10 h-10 rounded-full shadow">
                  <img
                    class="object-cover object-center w-full h-full overflow-hidden rounded-full"
                    src="https://images.unsplash.com/photo-1570211776045-af3a51026f4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                    alt="avatar"
                  />
                </div>
                <div class="w-10 h-10 rounded-full shadow">
                  <img
                    class="object-cover object-center w-full h-full overflow-hidden rounded-full"
                    src="https://dh-ui.s3.amazonaws.com/assets/photo-1566753323558-f4e0952af115.jfif"
                    alt="avatar"
                  />
                </div>
                <div class="w-10 h-10 rounded-full shadow">
                  <img
                    class="object-cover object-center w-full h-full overflow-hidden rounded-full"
                    src="https://images.unsplash.com/photo-1586349425880-ab91652eae47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                    alt="avatar"
                  />
                </div>
                <div class="w-10 h-10 rounded-full shadow">
                  <img
                    class="object-cover object-center w-full h-full overflow-hidden rounded-full"
                    src="https://images.unsplash.com/photo-1570211776045-af3a51026f4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                    alt="avatar"
                  />
                </div>
                <div class="w-10 h-10 rounded-full shadow">
                  <img
                    class="object-cover object-center w-full h-full overflow-hidden rounded-full"
                    src="https://images.unsplash.com/photo-1588544108061-3c44c505d45d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                    alt="avatar"
                  />
                </div>
                <div class="w-10 h-10 rounded-full shadow">
                  <img
                    class="object-cover object-center w-full h-full overflow-hidden rounded-full"
                    src="https://images.unsplash.com/photo-1548958921-c5c0fe1b307d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                    alt="avatar"
                  />
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-chevron-right"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </div>
              <hr class="my-5 border border-gray-200" />
              <div class="w-full h-full pb-5 lg:pb-10">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="w-12 h-12 mr-4 rounded-full shadow">
                      <img
                        class="object-cover object-center w-full h-full overflow-hidden rounded-full"
                        src="https://images.unsplash.com/photo-1588544108061-3c44c505d45d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                        alt="avatar"
                      />
                    </div>
                    <div>
                      <h3
                        class="mb-2 text-base font-normal leading-4 text-gray-800 sm:mb-1"
                      >
                        Carry Mathison
                      </h3>
                      <p class="text-xs leading-3 text-gray-600">
                        carry.mt@gmail.com
                      </p>
                    </div>
                  </div>
                  <div
                    class="flex flex-col items-start md:flex-row md:items-center"
                  >
                    <div
                      class="flex items-center justify-center w-24 h-8 mb-4 bg-red-200 rounded-md md:mb-0"
                    >
                      <span class="text-xs font-normal text-red-500"
                        >Pending</span
                      >
                    </div>
                  </div>
                </div>
                <div class="flex items-center justify-between py-6">
                  <div class="flex items-center">
                    <div class="w-12 h-12 mr-4 rounded-full shadow">
                      <img
                        class="object-cover object-center w-full h-full overflow-hidden rounded-full"
                        src="https://images.unsplash.com/photo-1548958921-c5c0fe1b307d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                        alt="avatar"
                      />
                    </div>
                    <div>
                      <h3
                        class="mb-2 text-base font-normal leading-4 text-gray-800 sm:mb-1"
                      >
                        Ronald McDonald
                      </h3>
                      <p class="text-xs leading-3 text-gray-600">
                        ronald.md@gmail.com
                      </p>
                    </div>
                  </div>
                  <div
                    class="flex flex-col items-start md:flex-row md:items-center"
                  >
                    <div
                      class="flex items-center justify-center w-24 h-8 mb-4 bg-green-200 rounded-md md:mb-0"
                    >
                      <span class="text-xs font-normal text-green-500"
                        >Going</span
                      >
                    </div>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="w-12 h-12 mr-4 rounded-full shadow">
                      <img
                        class="object-cover object-center w-full h-full overflow-hidden rounded-full"
                        src="https://images.unsplash.com/photo-1586349425880-ab91652eae47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                        alt="avatar"
                      />
                    </div>
                    <div>
                      <h3
                        class="mb-2 text-base font-normal leading-4 text-gray-800 sm:mb-1"
                      >
                        Linda Johnson
                      </h3>
                      <p class="text-xs leading-3 text-gray-600">
                        linda.jh@gmail.com
                      </p>
                    </div>
                  </div>
                  <div
                    class="flex flex-col items-start md:flex-row md:items-center"
                  >
                    <div
                      class="flex items-center justify-center w-24 h-8 mb-4 bg-gray-200 rounded-md md:mb-0"
                    >
                      <span class="text-xs font-normal text-gray-600"
                        >Cancelled</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Code block ends -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopoverWithListAndActions',
  methods: {
    showPopover() {
      document.getElementById('popover').classList.toggle('opacity-0')
    },
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
