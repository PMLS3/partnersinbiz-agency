<template>
  <div>
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="block"
      >Block</vs-radio
    >
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="inline-block"
      >Inline Block</vs-radio
    >
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="inline"
      >Inline</vs-radio
    >
    <br />
    <vs-radio v-model="pmType" vs-name="pmType" vs-value="flex"
      >Flex</vs-radio
    >
    <br />

    <vs-radio v-model="pmType" vs-name="pmType" vs-value="inline-flex">Inline Flex</vs-radio>
    <br />

    <vs-radio v-model="pmType" vs-name="pmType" vs-value="table">Table</vs-radio>
    <br />

    <vs-radio v-model="pmType" vs-name="pmType" vs-value="table-caption">Table Caption</vs-radio>
    <br />

    <vs-radio v-model="pmType" vs-name="pmType" vs-value="table-cell">Table Cell</vs-radio>
    <br />

       <vs-radio v-model="pmType" vs-name="pmType" vs-value="table-column">Table Column</vs-radio>
    <br />
   <vs-radio v-model="pmType" vs-name="pmType" vs-value="table-column-group">Table Column Group</vs-radio>
    <br />
       <vs-radio v-model="pmType" vs-name="pmType" vs-value="table-footer-group">Table Footer Group</vs-radio>
    <br />

       <vs-radio v-model="pmType" vs-name="pmType" vs-value="table-header-group">Table Header Group</vs-radio>
    <br />

       <vs-radio v-model="pmType" vs-name="pmType" vs-value="table-row-group"><vs-ration>Table Row Group</vs-radio>
           <br />

              <vs-radio v-model="pmType" vs-name="pmType" vs-value="table-row">Table Row</vs-radio>
    <br />

       <vs-radio v-model="pmType" vs-name="pmType" vs-value="flow-root">Flow Root</vs-radio>
    <br />

       <vs-radio v-model="pmType" vs-name="pmType" vs-value="grid">Grid</vs-radio>
    <br />
       <vs-radio v-model="pmType" vs-name="pmType" vs-value="inline-grid">Inline Grid</vs-radio>
    <br />
       <vs-radio v-model="pmType" vs-name="pmType" vs-value="contents">Content</vs-radio>
    <br />
   <vs-radio v-model="pmType" vs-name="pmType" vs-value="hidden">Hidden</vs-radio>
    <br />
    <vs-divider></vs-divider>
    <div v-if="pmType != 'mx-auto' && pmType != 'my-auto'">
      <vs-input-number min="0" v-model="number" class="w-24 mx-auto" />
      <vs-divider></vs-divider>

      <vs-button
        @click="changeComponent(pmType + number)"
        class="w-full mx-auto"
        >Submit</vs-button
      >
    </div>

    <vs-button @click="changeComponent(pmType)" class="w-full mx-auto" v-else
      >Submit</vs-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      pmType: 'block',
    }
  },
  methods: {
    changeComponent(data) {
      this.$emit('emitvalue', data)
    },
  },
}
</script>

<style></style>
