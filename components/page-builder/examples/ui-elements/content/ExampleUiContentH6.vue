<template>
  <vx-card title="H6">
    <p class="mb-4">
      Add <code>btn-group</code> class to wrapper to make all contained button
      acts as grouped buttons.
    </p>
    <div class="flex flex-wrap">
      <h6
        class="mt-0 mb-2 text-xl font-normal leading-normal text-pink-800"
        id="pink6"
        @click="addComponent('pink6')"
      >
        Heading
      </h6>
      <h6
        class="mt-0 mb-2 text-xl font-normal leading-normal text-purple-800"
        id="purple6"
        @click="addComponent('purple6')"
      >
        Heading
      </h6>
      <h6
        class="mt-0 mb-2 text-xl font-normal leading-normal text-indigo-800"
        id="indigo6"
        @click="addComponent('indigo6')"
      >
        Heading
      </h6>
      <h6
        class="mt-0 mb-2 text-xl font-normal leading-normal text-blue-800"
        id="blue6"
        @click="addComponent('blue6')"
      >
        Heading
      </h6>
      <h6
        class="mt-0 mb-2 text-xl font-normal leading-normal text-teal-800"
        id="teal6"
        @click="addComponent('teal6')"
      >
        Heading
      </h6>
      <h6
        class="mt-0 mb-2 text-xl font-normal leading-normal text-green-800"
        id="green6"
        @click="addComponent('green6')"
      >
        Heading
      </h6>
      <h6
        class="mt-0 mb-2 text-xl font-normal leading-normal text-yellow-800"
        id="yellow6"
        @click="addComponent('yellow6')"
      >
        Heading
      </h6>
      <h6
        class="mt-0 mb-2 text-xl font-normal leading-normal text-orange-800"
        id="orange6"
        @click="addComponent('orange6')"
      >
        Heading
      </h6>
      <h6
        class="mt-0 mb-2 text-xl font-normal leading-normal text-red-800"
        id="red6"
        @click="addComponent('red6')"
      >
        Heading
      </h6>
      <h6
        class="mt-0 mb-2 text-xl font-normal leading-normal text-gray-800"
        id="gray6"
        @click="addComponent('gray6')"
      >
        Heading
      </h6>
    </div>
  </vx-card>
</template>

<script>
export default {
  name: 'h6Tag',
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
