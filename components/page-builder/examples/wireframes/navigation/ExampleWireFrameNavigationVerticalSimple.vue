<template>
  <div @click="addComponent('nav-ver-simple')" id="nav-ver-simple">
    <div
      class="w-64 pl-4 border-r shadow bg-white border-gray-300 transition duration-150 ease-in-out hidden sm:block"
    >
      <ul aria-orientation="vertical" class="py-8">
        <li
          class="pl-2 cursor-pointer text-gray-600 text-sm py-2 leading-3 tracking-normal hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
        >
          <div class="flex items-center">
            <span class="w-32">Dashboard</span>
            <span
              class="px-3 py-1 rounded bg-indigo-700 text-white font-xs flex items-center justify-center mr-3"
              >5</span
            >
          </div>
        </li>
        <li
          class="pl-2 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
        >
          <div class="flex items-center">
            <span class="mr-8">Products</span>
          </div>
        </li>
        <li
          class="pl-2 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
        >
          <div class="flex items-center">
            <span class="w-32">Performance</span>
            <span
              class="px-3 py-1 rounded bg-gray-200 text-gray-600 font-xs flex items-center justify-center mr-3"
              >7</span
            >
          </div>
        </li>
        <li
          class="pl-2 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
        >
          <div class="flex items-center">
            <span class="mr-8">Deliverables</span>
          </div>
        </li>
      </ul>
    </div>
    <div
      class="w-64 pl-4 border-r shadow bg-white border-gray-300 sm:hidden relative transition duration-150 ease-in-out"
      id="mobile-nav"
    >
      <div
        class="h-10 w-10 bg-indigo-700 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer"
        id="mobile-toggler"
        @click="sidebarHandler()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-adjustments"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#FFFFFF"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <circle cx="6" cy="10" r="2" />
          <line x1="6" y1="4" x2="6" y2="8" />
          <line x1="6" y1="12" x2="6" y2="20" />
          <circle cx="12" cy="16" r="2" />
          <line x1="12" y1="4" x2="12" y2="14" />
          <line x1="12" y1="18" x2="12" y2="20" />
          <circle cx="18" cy="7" r="2" />
          <line x1="18" y1="4" x2="18" y2="5" />
          <line x1="18" y1="9" x2="18" y2="20" />
        </svg>
      </div>
      <ul aria-orientation="vertical" class="py-8">
        <li
          class="pl-2 cursor-pointer text-gray-600 text-sm py-2 leading-3 tracking-normal hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
        >
          <div class="flex items-center">
            <span class="w-32">Dashboard</span>
            <span
              class="px-3 py-1 rounded bg-indigo-700 text-white font-xs flex items-center justify-center mr-3"
              >5</span
            >
          </div>
        </li>
        <li
          class="pl-2 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
        >
          <div class="flex items-center">
            <span class="mr-8">Products</span>
          </div>
        </li>
        <li
          class="pl-2 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
        >
          <div class="flex items-center">
            <span class="w-32">Performance</span>
            <span
              class="px-3 py-1 rounded bg-gray-200 text-gray-600 font-xs flex items-center justify-center mr-3"
              >7</span
            >
          </div>
        </li>
        <li
          class="pl-2 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-6 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
        >
          <div class="flex items-center">
            <span class="mr-8">Deliverables</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimpleWithNotifications',
  data() {
    return {
      moved: true,
    }
  },
  methods: {
    sidebarHandler() {
      var sideBar = document.getElementById('mobile-nav')
      sideBar.style.transform = 'translateX(-260px)'
      if (this.$data.moved) {
        sideBar.style.transform = 'translateX(0px)'
        this.$data.moved = false
      } else {
        sideBar.style.transform = 'translateX(-260px)'
        this.$data.moved = true
      }
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
