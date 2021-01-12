<!-- =========================================================================================
    File Name: AlertColor.vue
    Description: Change color alert
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Color" code-toggler>
    <p>
      You can change the color of the alert with the property
      <code>color</code>. You are able to use the Main Colors or
      <strong>RGB</strong> and <strong>HEX</strong> colors
    </p>

    <vs-alert
      icon="warning"
      active="true"
      color="warning"
      class="my-5"
      @click="addComponent('warning', 'true')"
    >
      <span
        >Only <strong>RGB</strong> and <strong>HEX</strong> colors are
        supported.</span
      >
    </vs-alert>

    <vs-alert
      color="success"
      title="Success"
      active="true"
      class="mt-3"
      @click="addComponent('success', 'Success')"
    >
      {{ description }}
    </vs-alert>

    <vs-alert
      color="danger"
      title="Danger"
      active="true"
      class="mt-3"
      @click="addComponent('danger', 'Danger')"
    >
      {{ description }}
    </vs-alert>

    <vs-alert
      color="warning"
      title="Warning"
      active="true"
      class="mt-3"
      @click="addComponent('warning', 'Warning')"
    >
      {{ description }}
    </vs-alert>

    <vs-alert
      color="dark"
      title="Dark"
      active="true"
      class="mt-3"
      @click="addComponent('dark', 'Dark')"
    >
      {{ description }}
    </vs-alert>

    <vs-alert
      color="rgb(41, 147, 138)"
      title="RGB"
      active="true"
      class="mt-3"
      @click="addComponent('rgb(41, 147, 138)', 'RGB')"
    >
      {{ description }}
    </vs-alert>

    <vs-alert
      color="#842993"
      title="HEX"
      active="true"
      class="mt-3"
      @click="addComponent('#842993', 'HEX')"
    >
      {{ description }}
    </vs-alert>
  </vx-card>
</template>

<script>
export default {
  data() {
    return {
      description:
        'Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.'
    }
  },
  methods: {
    addComponent(color, title) {
      let payload = []

      payload.push({
        title: 'alert',
        content: {
          title: title,
          description: this.description
        },
        inline: {
          active: true,
          color: color
        },
        class: 'mt-3'
      })

      this.$store.commit('page_builder/COMPONENTS_LIST', payload)

      let payloads = {
        active_card: false,
        component_show: 'builder'
      }
      this.$store.commit('page_builder/COMPONENTS_NEEDED', payloads)
    }
  }
}
</script>
