<template>
  <nav
    class="bg-white shadow"
    @click="addComponent('nav-leftaligned')"
    id="nav-leftaligned"
  >
    <div class="container mx-auto px-6">
      <div class="flex items-center justify-between">
        <div class="inset-y-0 left-0 flex items-center xl:hidden">
          <div
            class="xl:hidden cursor-pointer inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out"
          >
            <ul
              class="p-2 border-r bg-white absolute rounded left-0 right-0 top-0 shadow mt-12 md:mt-12 hidden"
            >
              <li
                class="flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
              >
                <div class="flex items-center">
                  <span class="ml-2 font-bold">Dashboard</span>
                </div>
              </li>
              <li
                class="flex xl:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none justify-center"
                @click="dropdownHandler($event)"
              >
                <div class="flex items-center">
                  <span class="ml-2 font-bold">Products</span>
                </div>
                <ul class="ml-3 mt-1 hidden">
                  <li
                    class="cursor-pointer text-gray-600 text-xs leading-3 tracking-normal py-2 hover:bg-indigo-700 hover:text-white px-3 font-normal"
                  >
                    Landing Pages
                  </li>
                  <li
                    class="cursor-pointer text-gray-600 text-xs leading-3 tracking-normal py-2 hover:bg-indigo-700 hover:text-white px-3 font-normal"
                  >
                    Templates
                  </li>
                  <li
                    class="cursor-pointer text-gray-600 text-xs leading-3 tracking-normal pt-2 hover:bg-indigo-700 hover:text-white px-3 font-normal"
                  >
                    Components
                  </li>
                </ul>
              </li>
              <li
                class="xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
              >
                <span class="ml-2 font-bold">Performance</span>
              </li>
              <li
                class="border-b border-gray-300 flex xl:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none justify-center"
                @click="dropdownHandler($event)"
              >
                <div class="flex items-center">
                  <span class="ml-2 font-bold">Deliverables</span>
                </div>
                <ul class="ml-3 mt-1 hidden">
                  <li
                    class="cursor-pointer text-gray-600 text-xs leading-3 tracking-normal py-2 hover:bg-indigo-700 hover:text-white px-3 font-normal"
                  >
                    Landing Pages
                  </li>
                  <li
                    class="cursor-pointer text-gray-600 text-xs leading-3 tracking-normal py-2 hover:bg-indigo-700 hover:text-white px-3 font-normal"
                  >
                    Templates
                  </li>
                  <li
                    class="cursor-pointer text-gray-600 text-xs leading-3 tracking-normal pt-2 hover:bg-indigo-700 hover:text-white px-3 font-normal"
                  >
                    Components
                  </li>
                </ul>
              </li>
              <li
                class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
              >
                <div class="flex items-center">
                  <div
                    class="w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out"
                  >
                    <img
                      class="rounded h-10 w-10 object-cover"
                      :src="profilePhoto"
                      alt="logo"
                    />
                  </div>
                  <p class="text-sm ml-2 cursor-pointer">Jane Doe</p>
                  <div class="sm:ml-2 text-white relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </li>
              <li
                class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
              >
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-user"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="7" r="4" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                  <span class="ml-2">Profile</span>
                </div>
              </li>
            </ul>
            <svg
              @click="MenuHandler($event, true)"
              aria-haspopup="true"
              aria-label="Main Menu"
              xmlns="http://www.w3.org/2000/svg"
              class="show-m-menu icon icon-tabler icon-tabler-menu"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <line x1="4" y1="8" x2="20" y2="8"></line>
              <line x1="4" y1="16" x2="20" y2="16"></line>
            </svg>
            <div
              class="hidden close-m-menu"
              @click="MenuHandler($event, false)"
            >
              <svg
                aria-label="Close"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          </div>
        </div>
        <div
          class="w-2/5 hidden xl:flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="">
            <div class="hidden xl:flex">
              <a
                href="javascript: void(0)"
                class="py-6 block text-sm leading-5 text-gray-700 hover:text-indigo-700 focus:outline-none focus:text-indigo-700 transition duration-150 ease-in-out"
                >Dashboard</a
              >
              <a
                href="javascript: void(0)"
                class="ml-10 items-center flex py-6 text-sm leading-5 text-gray-700 hover:text-indigo-700 focus:outline-none focus:text-indigo-700 transition duration-150 ease-in-out relative"
                @click="dropdownHandler($event)"
              >
                <ul
                  class="bg-white shadow rounded py-1 w-32 left-0 mt-16 -ml-4 absolute hidden top-0"
                >
                  <li
                    class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal"
                  >
                    Landing Pages
                  </li>
                  <li
                    class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal"
                  >
                    Templates
                  </li>
                  <li
                    class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal"
                  >
                    Components
                  </li>
                </ul>
                Products
                <span class="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-chevron-down"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </a>
              <a
                href="javascript: void(0)"
                class="mx-10 py-6 block text-sm leading-5 text-gray-700 hover:text-indigo-700 focus:outline-none focus:text-indigo-700 transition duration-150 ease-in-out"
                >Performance</a
              >
              <a
                href="javascript: void(0)"
                class="items-center flex py-6 text-sm leading-5 text-gray-700 hover:text-indigo-700 focus:outline-none focus:text-indigo-700 transition duration-150 ease-in-out relative"
                @click="dropdownHandler($event)"
              >
                <ul
                  class="bg-white shadow rounded py-1 w-32 left-0 mt-16 -ml-4 absolute hidden top-0"
                >
                  <li
                    class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal"
                  >
                    Landing Pages
                  </li>
                  <li
                    class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal"
                  >
                    Templates
                  </li>
                  <li
                    class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal"
                  >
                    Components
                  </li>
                </ul>
                Deliverables
                <span class="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-chevron-down"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="flex items-center md:pr-10 xl:pr-0">
          <svg
            aria-label="Home"
            class="w-12 h-12"
            id="logo"
            enable-background="new 0 0 300 300"
            height="44"
            viewBox="0 0 300 300"
            width="43"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g>
              <path
                fill="#4c51bf"
                d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
              />
            </g>
          </svg>
        </div>
        <div class="w-2/5 hidden xl:flex items-center justify-end">
          <div
            class="cursor-pointer py-6 mr-0 px-4 sm:px-10 border-l border-gray-300 p-1 text-gray-600 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out flex items-center"
          >
            <input
              type="text"
              class="bg-transparent focus:outline-none text-xs w-0 transition duration-150 ease-in-out"
              placeholder="Type something..."
            />
            <svg
              @click="searchHandler($event)"
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-search"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <circle cx="10" cy="10" r="7"></circle>
              <line x1="21" y1="21" x2="15" y2="15"></line>
            </svg>
          </div>
          <div
            class="relative cursor-pointer py-6 mr-0 px-4 sm:px-10 border-l border-r border-gray-300 p-1 text-gray-600 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-bell"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path
                d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
              ></path>
              <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
            </svg>
            <div class="absolute top-0 right-0 mt-6 mr-4 sm:mr-10 pr-1 pt-1">
              <div class="animate-ping w-2 h-2 rounded-full bg-red-400"></div>
            </div>
          </div>
          <div class="ml-6 relative">
            <div
              class="flex items-center relative cursor-pointer"
              @click="dropdownHandler($event)"
            >
              <ul
                class="p-2 w-40 border-r bg-white absolute rounded right-0 shadow top-0 mt-16 hidden"
              >
                <li
                  class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
                >
                  <div class="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-user"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx="12" cy="7" r="4" />
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                    <span class="ml-2">My Profile</span>
                  </div>
                </li>
                <li
                  class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-help"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="12" y1="17" x2="12" y2="17.01" />
                    <path
                      d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"
                    />
                  </svg>
                  <span class="ml-2">Help Center</span>
                </li>
                <li
                  class="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-settings"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <span class="ml-2">Account Settings</span>
                </li>
              </ul>
              <div
                class="w-10 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out"
              >
                <img
                  class="rounded h-10 w-10 object-cover"
                  :src="profilePhoto"
                  alt="logo"
                />
              </div>
              <span class="ml-2 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-chevron-down"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'LeftAlignedWithCenteredLogo',
  data() {
    return {
      profilePhoto:
        'https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png',
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
    dropdownHandler(event) {
      let single = event.currentTarget.getElementsByTagName('ul')[0]
      single.classList.toggle('hidden')
    },
    MenuHandler(el, val) {
      let MainList = el.currentTarget.parentElement.getElementsByTagName(
        'ul'
      )[0]
      let closeIcon = el.currentTarget.parentElement.getElementsByClassName(
        'close-m-menu'
      )[0]
      let showIcon = el.currentTarget.parentElement.getElementsByClassName(
        'show-m-menu'
      )[0]
      if (val) {
        MainList.classList.remove('hidden')
        el.currentTarget.classList.add('hidden')
        closeIcon.classList.remove('hidden')
      } else {
        showIcon.classList.remove('hidden')
        MainList.classList.add('hidden')
        el.currentTarget.classList.add('hidden')
      }
    },
    searchHandler(event) {
      let Input = event.currentTarget.parentElement.getElementsByTagName(
        'input'
      )[0]
      Input.classList.toggle('w-0')
      Input.classList.toggle('w-24')
    },
  },
}
</script>
