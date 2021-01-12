<!-- =========================================================================================
    File Name: ButtonBorder.vue
    Description: Buttons with border
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div>
    <vx-card
      title="Image 1"
      @click="
        addComponent('imageAdd', 'https://picsum.photos/400/400?image=12')
      "
    >
      <vs-image :src="`https://picsum.photos/400/400?image=12`" />
    </vx-card>
    <vx-card title="Default">
      <p>
        You can create an image gallery easily with the components vs-images y
        vs-image
      </p>

      <vs-images>
        <vs-image
          :key="index"
          :src="`https://picsum.photos/400/400?image=2${index}`"
          v-for="(image, index) in 9"
        />
        <vs-image
          :key="index"
          :src="`https://picsum.photos/400/400?image=1${index}`"
          v-for="(image, index) in 7"
        />
      </vs-images>
    </vx-card>

    <vx-card title="Hover">
      <p>
        You can change the animation by hovering with the property hover
      </p>
      <p>
        the types of hover are
      </p>

      <ul>
        <li>default</li>
        <li>blur</li>
        <li>zoom</li>
        <li>dark</li>
        <li>scale</li>
        <li>curtain</li>
      </ul>

      <div class="con-example-images">
        <vs-select class="selectExample" label="Figuras" v-model="hover">
          <vs-select-item
            :key="index"
            :value="item.value"
            :text="item.text"
            v-for="(item, index) in hovers"
          />
        </vs-select>

        <vs-images :hover="hover">
          <vs-image
            :key="index"
            :src="`https://picsum.photos/400/400?image=3${index}`"
            v-for="(image, index) in 9"
          />
          <vs-image
            :key="index"
            :src="`https://picsum.photos/400/400?image=4${index}`"
            v-for="(image, index) in 7"
          />
        </vs-images>
      </div>
    </vx-card>

    <vx-card title="More">
      <p>
        You can make changes in some details like removing the border-radius
        with the property not-border-radius or adding a different style of
        layout with the property alternating, you can also remove the margin
        between the images with the property not- margin.
      </p>

      <vs-images alternating not-border-radius not-margin>
        <vs-image
          :key="index"
          :src="`https://picsum.photos/400/400?image=3${index}`"
          v-for="(image, index) in 9"
        />
        <vs-image
          :key="index"
          :src="`https://picsum.photos/400/400?image=4${index}`"
          v-for="(image, index) in 7"
        />
      </vs-images>
    </vx-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    hover: 'blur',
    hovers: [
      { text: 'Default', value: 'default' },
      { text: 'Blur', value: 'blur' },
      { text: 'Zoom', value: 'zoom' },
      { text: 'Dark', value: 'dark' },
      { text: 'Scale', value: 'scale' },
      { text: 'Curtain', value: 'curtain' }
    ]
  }),
  methods: {
    addComponent(type, src) {
      let payload = []

      payload.push({
        title: type,
        content: {
          title: 'imageAdd',
          src: src
        }
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
