<template>
  <vs-tabs position="left" class="tabs-shadow-none" id="profile-tabs">
    <vs-tab icon-pack="feather" icon="icon-twitter" label="Twitter">
      <FormsTypesTwtConfig
        :entity="entity"
        :branch="branch"
        :twtConfig="twtConfig"
      />
    </vs-tab>
    <vs-tab icon-pack="feather" icon="icon-facebook" label="Facebook"></vs-tab>
    <vs-tab
      icon-pack="feather"
      icon="icon-instagram"
      label="Instagram"
    ></vs-tab>
  </vs-tabs>
</template>

<script>
export default {
  props: {
    entity: { type: String, default: 'person' },
    handle: { type: String, default: '' },
    branch: { type: String, default: '' },
    twtConfig: { type: Object },
    fbConfig: { type: Object },
    instaConfig: { type: Object },
  },
}
</script>
