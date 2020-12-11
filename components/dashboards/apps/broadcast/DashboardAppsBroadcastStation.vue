<template lang="html">
  <div id="knowledge-base-page">
    <client-only>
      <!-- JUMBOTRON -->
      <div class="knowledge-base-jumbotron">
        <div
          class="p-8 rounded-lg knowledge-base-jumbotron-content lg:p-32 md:p-24 sm:p-16 mb-base"
        >
          <h1 class="mb-1 text-white">Broadcast Station</h1>
          <h2 class="text-xl leading-tight text-white font-semibild">
            Run your station from here
          </h2>

          <div class="flex justify-between py-2">
            <div class="flex items-center">
              <p class="text-white">
                {{ motivational_quotes }}
              </p>
            </div>

            <VideoChat />
          </div>
        </div>
      </div>

      <div class="flex flex-wrap gap-1">
        <AgGridTable :item="item" :schema="schema" :columnDefs="columnDefs" />
        <MusicPlayer />
      </div>
    </client-only>
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

    let motivational_quotes = computed(() => {
      let num = Math.floor(Math.random() * 55)
      return store.state.info.motivational_quotes[num]
    })

    let item = ref({
      name: 'dashboard'
    })
    let columnDefs = ref({
      disp_name: 'Anon'
      //   uid: user.value.uid,
      //   avatar: user.value.avatar,
      //   type: user.value.role,
      //   name: character.value.name,
      //   character: character.value.character,
      //   url: character.value.url,
      //   animation: character.value.animation
    })

    let schema = ref({
      disp_name: 'Anon'
      //   uid: user.value.uid,
      //   avatar: user.value.avatar,
      //   type: user.value.role,
      //   name: character.value.name,
      //   character: character.value.character,
      //   url: character.value.url,
      //   animation: character.value.animation
    })

    return { user, columnDefs, schema, item, motivational_quotes }
  }
  //   data: () => ({
  //     colorx: "#8B0000"
  //   })
}
</script>
<style lang="scss">
.knowledge-base-jumbotron-content {
  background-image: url('../../../../assets/images/background/night.jpeg');

  background-size: cover;
}
</style>
