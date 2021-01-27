<template>
  <vx-card title="H4">
    <p class="mb-4">
      Add <code>btn-group</code> class to wrapper to make all contained button
      acts as grouped buttons.
    </p>

    <h4
      class="text-3xl font-normal leading-normal mt-0 mb-2 text-pink-800"
      id="pink4"
      @click="addComponent('pink4')"
    >
      Heading
    </h4>
    <h4
      class="text-3xl font-normal leading-normal mt-0 mb-2 text-purple-800"
      id="purple4"
      @click="addComponent('purple4')"
    >
      Heading
    </h4>
    <h4
      class="text-3xl font-normal leading-normal mt-0 mb-2 text-indigo-800"
      id="indigo4"
      @click="addComponent('indigo4')"
    >
      Heading
    </h4>
    <h4
      class="text-3xl font-normal leading-normal mt-0 mb-2 text-blue-800"
      id="blue4"
      @click="addComponent('blue4')"
    >
      Heading
    </h4>
    <h4
      class="text-3xl font-normal leading-normal mt-0 mb-2 text-teal-800"
      id="teal4"
      @click="addComponent('teal4')"
    >
      Heading
    </h4>
    <h4
      class="text-3xl font-normal leading-normal mt-0 mb-2 text-green-800"
      id="green4"
      @click="addComponent('green4')"
    >
      Heading
    </h4>
    <h4
      class="text-3xl font-normal leading-normal mt-0 mb-2 text-yellow-800"
      id="yellow4"
      @click="addComponent('yellow4')"
    >
      Heading
    </h4>
    <h4
      class="text-3xl font-normal leading-normal mt-0 mb-2 text-orange-800"
      id="orange4"
      @click="addComponent('orange4')"
    >
      Heading
    </h4>
    <h4
      class="text-3xl font-normal leading-normal mt-0 mb-2 text-red-800"
      id="red4"
      @click="addComponent('red4')"
    >
      Heading
    </h4>
    <h4
      class="text-3xl font-normal leading-normal mt-0 mb-2 text-gray-800"
      id="gray4"
      @click="addComponent('gray4')"
    >
      Heading
    </h4>
  </vx-card>
</template>

<script>
export default {
  name: 'h4Tag',
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
