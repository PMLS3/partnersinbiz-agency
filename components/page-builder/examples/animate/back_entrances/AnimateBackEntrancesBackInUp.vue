<template>
  <div>
    <div @click="addComponent('backInUp')" id="backInUp">
      <transition name="backInUp" appear>
        <button class="p-4 text-white bg-orange-600 border-none">
          Back In Up
        </button>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AnimateBackEntrancesbackInUp',
  methods: {
    addComponent(name) {
      let element = document.getElementById(name)

      let payload = {
        class: '',
        title: 'TRANSITIONS',
        place: [...this.$store.state.page_builder.list_pos],
        id: Math.random().toString(36).substr(2, 6),
        name: name,
        dragDisabled: false,
        addTreeNodeDisabled: false,
        addLeafNodeDisabled: false,
        editNodeDisabled: false,
        delNodeDisabled: false,
        children: [
          {
            class: 'text-orange-600 h12',
            title: 'DIV',
            place: [...this.$store.state.page_builder.list_pos, 0],
            id: Math.random().toString(36).substr(2, 6),
            name: 'DIV' + name,
            dragDisabled: false,
            addTreeNodeDisabled: false,
            addLeafNodeDisabled: false,
            editNodeDisabled: false,
            delNodeDisabled: false,
            innerText: name,
            children: [],
          },
        ],
      }

      $nuxt.$emit('component-added', payload)
      $nuxt.$emit('close_comp')
    },
  },
}
</script>
