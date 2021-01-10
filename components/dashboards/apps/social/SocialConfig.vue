<template>
  <FormsTypesTwtConfig
    :entity="entity"
    :branch="branch"
    :twtConfig="twtConfig"
  />
</template>

<script>
export default {
  name: 'TweetConfig',
  props: {
    entity: { type: String, default: 'person' },
    handle: { type: String, default: '' },
    branch: { type: String, default: '' },
    twtConfig: { type: Object },
  },
}
</script>
