<template>
  <vx-card title="H3">
    <p class="mb-4">
      Add <code>btn-group</code> class to wrapper to make all contained button
      acts as grouped buttons.
    </p>

    <h3
      class="text-4xl font-normal leading-normal mt-0 mb-2 text-pink-800"
      id="pink3"
      @click="addComponent('pink3')"
    >
      Heading
    </h3>
    <h3
      class="text-4xl font-normal leading-normal mt-0 mb-2 text-purple-800"
      id="purple3"
      @click="addComponent('purple3')"
    >
      Heading
    </h3>
    <h3
      class="text-4xl font-normal leading-normal mt-0 mb-2 text-indigo-800"
      id="indigo3"
      @click="addComponent('indigo3')"
    >
      Heading
    </h3>
    <h3
      class="text-4xl font-normal leading-normal mt-0 mb-2 text-blue-800"
      id="blue3"
      @click="addComponent('blue3')"
    >
      Heading
    </h3>
    <h3
      class="text-4xl font-normal leading-normal mt-0 mb-2 text-teal-800"
      id="teal3"
      @click="addComponent('teal3')"
    >
      Heading
    </h3>
    <h3
      class="text-4xl font-normal leading-normal mt-0 mb-2 text-green-800"
      id="green3"
      @click="addComponent('green3')"
    >
      Heading
    </h3>
    <h3
      class="text-4xl font-normal leading-normal mt-0 mb-2 text-yellow-800"
      id="yellow3"
      @click="addComponent('yellow3')"
    >
      Heading
    </h3>
    <h3
      class="text-4xl font-normal leading-normal mt-0 mb-2 text-orange-800"
      id="orange3"
      @click="addComponent('orange3')"
    >
      Heading
    </h3>
    <h3
      class="text-4xl font-normal leading-normal mt-0 mb-2 text-red-800"
      id="red3"
      @click="addComponent('red3')"
    >
      Heading
    </h3>
    <h3
      class="text-4xl font-normal leading-normal mt-0 mb-2 text-gray-800"
      id="gray3"
      @click="addComponent('gray3')"
    >
      Heading
    </h3>
  </vx-card>
</template>

<script>
export default {
  name: 'h3Tag',
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
