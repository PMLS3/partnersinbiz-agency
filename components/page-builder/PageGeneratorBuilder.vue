<template>
  <div>
    <DraggableNested :list="list" @submitNewList="newList" />
  </div>
</template>

<script>
import { ref, useContext, computed, onMounted } from '@nuxtjs/composition-api'
export default {
  name: 'pageGeneratorBuilder',
  setup() {
    const { store } = useContext()
    onMounted(() => {})

    const user = computed(() => store.state.auth.main_user)

    let business = computed(() => {
      return store.state.business.main_business
    })
    return {
      user,
      business,
    }
  },

  //   created() {
  //     this.$store.commit("business/UPDATE_BUSINESS_INFO", this.business);
  //   }
}
</script>
