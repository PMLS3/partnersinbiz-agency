<template>
  <vx-card title="p">
    <p class="mb-4">
      Add <code>btn-group</code> class to wrapper to make all contained button
      acts as grouped buttons.
    </p>

    <p id="none" @click="addComponent('none')">No Extras</p>
    <p
      class="mt-0 mb-4 text-base font-light leading-relaxed text-orange-800"
      id="para"
      @click="addComponent('para')"
    >
      I will be the leader of a company that ends up being worth billions of
      dollars, because I got the answers. I understand culture. I am the
      nucleus. I think that’s a responsibility that I have, to push
      possibilities, to show people, this is the level that things could be at.
    </p>
    <p
      class="mt-6 mb-4 text-lg font-light leading-relaxed text-pink-800"
      id="lead"
      @click="addComponent('lead')"
    >
      I will be the leader of a company that ends up being worth billions of
      dollars, because I got the answers. I understand culture. I am the
      nucleus. I think that’s a responsibility that I have, to push
      possibilities, to show people, this is the level that things could be at.
    </p>

    <div id="quote" @click="addComponent('quote')">
      <p class="mt-0 mb-0 text-base font-light leading-relaxed text-pink-800">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer class="block text-pink-600">
        - Someone famous in <cite>Source Title</cite>
      </footer>

      <small
        class="mt-0 mb-4 font-normal leading-normal text-pink-800"
        id="small"
        @click="addComponent('small')"
      >
        I will be the leader of a company that ends up being worth billions of
        dollars, because I got the answers. I understand culture. I am the
        nucleus. I think that’s a responsibility that I have, to push
        possibilities, to show people, this is the level that things could be
        at.
      </small>
    </div>
  </vx-card>
</template>

<script>
export default {
  name: 'pTag',
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
