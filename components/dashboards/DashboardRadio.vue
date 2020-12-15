<template lang="html">
  <div :style="`margin-top: ${$store.state.marginTop}px`">
    <vs-tabs :color="colorx">
      <vs-tab label="Pets" icon="pets" @click="colorx = '#8B0000'">
        <!-- <AgGridTable :item="item" :schema="schema" :columnDefs="columnDefs" /> -->
      </vs-tab>
      <vs-tab label="Bank" icon="account_balance" @click="colorx = '#FFA500'">
      </vs-tab>
      <vs-tab label="Dashboard" icon="dashboard" @click="colorx = '#551A8B'">
      </vs-tab>
      <vs-tab label="Profile" icon="account_circle" @click="colorx = '#0000FF'">
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
import {
  ref,
  useContext,
  computed,
  onBeforeMount
} from '@nuxtjs/composition-api'
export default {
  name: 'dashboardRadio',
  setup() {
    const { store } = useContext()

    const user = computed(() => store.state.auth.main_user)

    let columnDefs = ref({
      disp_name: 'Anon',
      uid: user.value.uid,
      avatar: user.value.avatar,

      type: user.value.role,
      name: character.value.name,
      character: character.value.character,
      url: character.value.url,
      animation: character.value.animation
    })
    return { player, user, room }
  }
  //   data: () => ({
  //     colorx: "#8B0000"
  //   })
}
</script>
