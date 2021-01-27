<template>
  <vx-card title="H2">
    <p class="mb-4">
      Add <code>btn-group</code> class to wrapper to make all contained button
      acts as grouped buttons.
    </p>

    <h2
      class="mt-0 mb-2 text-5xl font-normal leading-normal text-pink-800"
      id="pink2"
      @click="addComponent('pink2')"
    >
      Heading
    </h2>
    <h2
      class="mt-0 mb-2 text-5xl font-normal leading-normal text-purple-800"
      id="purple2"
      @click="addComponent('purple2')"
    >
      Heading
    </h2>
    <h2
      class="mt-0 mb-2 text-5xl font-normal leading-normal text-indigo-800"
      id="indigo2"
      @click="addComponent('indigo2')"
    >
      Heading
    </h2>
    <h2
      class="mt-0 mb-2 text-5xl font-normal leading-normal text-blue-800"
      id="blue2"
      @click="addComponent('blue2')"
    >
      Heading
    </h2>
    <h2
      class="mt-0 mb-2 text-5xl font-normal leading-normal text-teal-800"
      id="teal2"
      @click="addComponent('teal2')"
    >
      Heading
    </h2>
    <h2
      class="mt-0 mb-2 text-5xl font-normal leading-normal text-green-800"
      id="green2"
      @click="addComponent('green2')"
    >
      Heading
    </h2>
    <h2
      class="mt-0 mb-2 text-5xl font-normal leading-normal text-yellow-800"
      id="yellow2"
      @click="addComponent('yellow2')"
    >
      Heading
    </h2>
    <h2
      class="mt-0 mb-2 text-5xl font-normal leading-normal text-orange-800"
      id="orange2"
      @click="addComponent('orange2')"
    >
      Heading
    </h2>
    <h2
      class="mt-0 mb-2 text-5xl font-normal leading-normal text-red-800"
      id="red2"
      @click="addComponent('red2')"
    >
      Heading
    </h2>
    <h2
      class="mt-0 mb-2 text-5xl font-normal leading-normal text-gray-800"
      id="gray2"
      @click="addComponent('gray2')"
    >
      Heading
    </h2>
  </vx-card>
</template>

<script>
export default {
  name: 'h2Tag',
  props: ['schema'],

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
