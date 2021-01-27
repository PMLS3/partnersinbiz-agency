<template>
  <vx-card title="H5">
    <p class="mb-4">
      Add <code>btn-group</code> class to wrapper to make all contained button
      acts as grouped buttons.
    </p>

    <h5
      class="text-2xl font-normal leading-normal mt-0 mb-2 text-pink-800"
      id="pink5"
      @click="addComponent('pink5')"
    >
      Heading
    </h5>
    <h5
      class="text-2xl font-normal leading-normal mt-0 mb-2 text-purple-800"
      id="purple5"
      @click="addComponent('purple5')"
    >
      Heading
    </h5>
    <h5
      class="text-2xl font-normal leading-normal mt-0 mb-2 text-indigo-800"
      id="indigo5"
      @click="addComponent('indigo5')"
    >
      Heading
    </h5>
    <h5
      class="text-2xl font-normal leading-normal mt-0 mb-2 text-blue-800"
      id="blue5"
      @click="addComponent('blue5')"
    >
      Heading
    </h5>
    <h5
      class="text-2xl font-normal leading-normal mt-0 mb-2 text-teal-800"
      id="teal5"
      @click="addComponent('teal5')"
    >
      Heading
    </h5>
    <h5
      class="text-2xl font-normal leading-normal mt-0 mb-2 text-green-800"
      id="green5"
      @click="addComponent('green5')"
    >
      Heading
    </h5>
    <h5
      class="text-2xl font-normal leading-normal mt-0 mb-2 text-yellow-800"
      id="yellow5"
      @click="addComponent('yellow5')"
    >
      Heading
    </h5>
    <h5
      class="text-2xl font-normal leading-normal mt-0 mb-2 text-orange-800"
      id="orange5"
      @click="addComponent('orange5')"
    >
      Heading
    </h5>
    <h5
      class="text-2xl font-normal leading-normal mt-0 mb-2 text-red-800"
      id="red5"
      @click="addComponent('red5')"
    >
      Heading
    </h5>
    <h5
      class="text-2xl font-normal leading-normal mt-0 mb-2 text-gray-800"
      id="gray5"
      @click="addComponent('gray5')"
    >
      Heading
    </h5>
  </vx-card>
</template>

<script>
export default {
  name: 'h5Tag',
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
