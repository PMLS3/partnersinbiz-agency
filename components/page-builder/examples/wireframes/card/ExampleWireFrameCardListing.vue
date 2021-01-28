<template>
  <!-- Card is full width. Use in 6 col grid for best view. -->
  <!-- Card code block start -->
  <div
    class="mx-auto bg-white shadow p-8 rounded w-full"
    id="card-listing"
    @click="addComponent('card-listing')"
  >
    <div class="flex items-center pb-5">
      <div class="h-12 w-12">
        <img
          src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_7.png"
          alt=""
          class="rounded shadow h-full w-full object-cover"
        />
      </div>
      <div class="pl-3">
        <p class="text-lg font-bold text-gray-800">The Economist</p>
        <p class="text-yellow-400 text-sm">
          &#9733;&#9733;&#9733;&#9733;<span class="text-gray-200">&#9733;</span>
        </p>
      </div>
    </div>
    <p class="pb-5 text-sm leading-6 text-gray-600">
      Between social media and content marketing and ad campaigns and brand
      reputation management, marketing can feel chaotic. Sometimes, though, all
      we need to see is a quick quote that cuts right to the point of what we’re
      trying to accomplish.
    </p>
    <p class="pb-3 text-sm text-gray-800 font-medium">Contributions In</p>
    <div class="flex xl:w-2/3 lg:w-2/3 md:w-2/3 w-full">
      <p class="text-sm text-indigo-700 font-medium flex">
        <span class="pr-2 cursor-pointer">Home</span> <span>|</span
        ><span class="px-2 cursor-pointer">Work</span> <span>|</span>
        <span class="px-2 cursor-pointer">Family</span> <span>|</span>
        <span class="px-2 cursor-pointer">Living</span>
      </p>
    </div>
  </div>
  <!-- Card code block end -->
</template>

<script>
export default {
  name: 'SixColListingCard',
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
