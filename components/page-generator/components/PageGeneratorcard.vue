<template>
  <div>
    <vx-card title="Collapsable Card" collapse-action>
      <p class="mb-3">
        You can create collapsible content card by setting
        <code>collapse-action</code> prop to <code>true</code>. By default it is
        set to false.
      </p>
      <p class="mb-3">
        You can also get this action if you set
        <code>action-buttons</code> prop to <code>true</code>.
      </p>
      <p>
        Click on
        <feather-icon
          icon="ChevronDownIcon"
          svg-classes="h-5 w-5"
          class="align-middle"
        />
        icon to see card collapse in action.
      </p>
    </vx-card>
  </div>
</template>

<script>
export default {
  name: 'radioButtons',
  props: ['options', 'name', 'label', 'value', 'valueIn'],
}
</script>
