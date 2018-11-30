<template>
  <label>
    <span v-if="label">{{label}}:</span>
    <slot></slot>
  </label>
</template>

<script>

export default {
  props: {
    label: String
  }
};

</script>

<style lang="postcss" scoped>
label {
  display: block;
  margin-top: 10px;

  span {
    display: inline-block;
    width: 75px;
  }
}
</style>
