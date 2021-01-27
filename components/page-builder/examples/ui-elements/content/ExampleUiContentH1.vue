<template>
  <vx-card title="H1">
    <p class="mb-4">Add <code>h1</code> heading to your page.</p>
    <div class="flex flex-auto">
      <h1
        class="mt-0 mb-2 text-6xl font-normal leading-normal text-pink-800"
        id="pink"
        @click="addComponent('pink')"
      >
        Heading
      </h1>
      <h1
        class="mt-0 mb-2 text-6xl font-normal leading-normal text-purple-800"
        id="purple"
        @click="addComponent('purple')"
      >
        Heading
      </h1>
      <h1
        class="mt-0 mb-2 text-6xl font-normal leading-normal text-indigo-800"
        id="indigo"
        @click="addComponent('indigo')"
      >
        Heading
      </h1>
      <h1
        class="mt-0 mb-2 text-6xl font-normal leading-normal text-blue-800"
        id="blue"
        @click="addComponent('blue')"
      >
        Heading
      </h1>
      <h1
        class="mt-0 mb-2 text-6xl font-normal leading-normal text-teal-800"
        id="teal"
        @click="addComponent('teal')"
      >
        Heading
      </h1>
      <h1
        class="mt-0 mb-2 text-6xl font-normal leading-normal text-green-800"
        id="green"
        @click="addComponent('green')"
      >
        Heading
      </h1>
      <h1
        class="mt-0 mb-2 text-6xl font-normal leading-normal text-yellow-800"
        id="yellow"
        @click="addComponent('yellow')"
      >
        Heading
      </h1>
      <h1
        class="mt-0 mb-2 text-6xl font-normal leading-normal text-orange-800"
        id="orange"
        @click="addComponent('orange')"
      >
        Heading
      </h1>
      <h1
        class="mt-0 mb-2 text-6xl font-normal leading-normal text-red-800"
        id="red"
        @click="addComponent('red')"
      >
        Heading
      </h1>
      <h1
        class="mt-0 mb-2 text-6xl font-normal leading-normal text-gray-800"
        id="gray"
        @click="addComponent('gray')"
      >
        Heading
      </h1>
    </div>
  </vx-card>
</template>

<script>
export default {
  name: 'h1Tag',
  props: ['schema'],

  methods: {
    addComponent(name) {
      let element = document.getElementById(name)

      let payload = this.$comp_create(
        element,
        this.$store.state.page_builder.list_pos
      )
      console.log('payload front:', payload)
      if (payload) {
        $nuxt.$emit('component-added', payload)
        $nuxt.$emit('close_comp')
      }
    },
  },
}
</script>
