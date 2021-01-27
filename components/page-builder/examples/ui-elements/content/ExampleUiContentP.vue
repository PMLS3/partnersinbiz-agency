<template>
  <vx-card title="p">
    <p class="mb-4">Add <code>p</code> for your paragraphs</p>

    <p id="none" @click="addComponent('none')">No Extras</p>
    <br />
    <p
      class="mt-0 mb-4 text-base font-light leading-relaxed text-orange-600"
      id="para"
      @click="addComponent('para')"
    >
      Far better is it to dare mighty things, to win glorious triumphs, even
      though checkered by failure... than to rank with those poor spirits who
      neither enjoy nor suffer much, because they live in a gray twilight that
      knows not victory nor defeat.
    </p>
    <br />

    <p
      class="mt-6 mb-4 text-lg font-light leading-relaxed text-orange-600"
      id="lead"
      @click="addComponent('lead')"
    >
      Far better is it to dare mighty things, to win glorious triumphs, even
      though checkered by failure... than to rank with those poor spirits who
      neither enjoy nor suffer much, because they live in a gray twilight that
      knows not victory nor defeat.
    </p>
    <br />

    <div id="quote" @click="addComponent('quote')">
      <p class="mt-0 mb-0 text-base font-light leading-relaxed text-orange-600">
        Far better is it to dare mighty things, to win glorious triumphs, even
        though checkered by failure... than to rank with those poor spirits who
        neither enjoy nor suffer much, because they live in a gray twilight that
        knows not victory nor defeat.
      </p>
      <footer class="block text-orange-600">
        - Theodore Roosevelt in <cite>Source Title</cite>
      </footer>
    </div>
    <br />

    <small
      class="mt-0 mb-4 font-normal leading-normal text-orange-600"
      id="small"
      @click="addComponent('small')"
    >
      Far better is it to dare mighty things, to win glorious triumphs, even
      though checkered by failure... than to rank with those poor spirits who
      neither enjoy nor suffer much, because they live in a gray twilight that
      knows not victory nor defeat.
    </small>
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
