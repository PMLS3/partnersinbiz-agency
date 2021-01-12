<!-- =========================================================================================
    File Name: NotificationsPosition.vue
    Description: Change position of apperance of notification
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->


<template>
    <vx-card title="Position" code-toggler>

        <p>We can change the place where the notification appears with the property position. A practical example would be: position: 'top-right'. The supported values are</p>

        <vx-list :list="listPosition" class="mt-3"></vx-list>

        <vs-alert icon="warning" active="true" color="warning" class="mb-1">
            <span>The default notifications appear <code>bottom-right</code>, it is not necessary to add the position property if it is the desired position</span>
        </vs-alert>

        <div class="demo-alignment">
            <vs-button
                @click="$vs.notify({
                    title:'Position Default',
                    text:'Lorem ipsum dolor sit amet, consectetur',
                    color:'primary'})"
                color="primary"
                type="flat">Position Default</vs-button>

            <vs-button
                @click="$vs.notify({
                    title:'Position top-right',
                    text:'Lorem ipsum dolor sit amet, consectetur',
                    color:'success',
                    position:'top-right'})"
                color="success"
                type="flat">Position Top Right</vs-button>

            <vs-button
                @click="$vs.notify({
                    title:'Position top-left',
                    text:'Lorem ipsum dolor sit amet, consectetur',
                    color:'danger',
                    position:'top-left'})"
                color="danger"
                type="flat">Position Top Left</vs-button>

            <vs-button
                @click="$vs.notify({
                    title:'Position bottom-left',
                    text:'Lorem ipsum dolor sit amet, consectetur',
                    color:'warning',
                    position:'bottom-left'})"
                color="warning"
                type="flat">Position Bottom Left</vs-button>

            <vs-button
                @click="$vs.notify({
                    title:'Position bottom-center',
                    text:'Lorem ipsum dolor sit amet, consectetur',
                    color:'dark',
                    position:'bottom-center'})"
                color="dark"
                type="flat"> Position Bottom Center</vs-button>

            <vs-button @click="randomCenter()" color="success" type="gradient">Position Top Center Random Color</vs-button>
        </div>

     

    </vx-card>
</template>

<script>
export default {
  data () {
    return {
      listPosition: [
        'top-right',
        'top-left',
        'top-center',
        'bottom-right',
        'bottom-left'
      ]
    }
  },
  methods: {
    randomCenter () {
      function getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min)) + min
      }
      const color = `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`
      this.$vs.notify({ title: 'Position top-center', text: 'Lorem ipsum dolor sit amet, consectetur', color, position: 'top-center' })
    }
  }
}
</script>
