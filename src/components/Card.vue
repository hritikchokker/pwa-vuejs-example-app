<template>
  <div>
    <slot name="image" />
    <slot name="title" />
    <slot name="description" />
  </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  name: "Card",
  data: () => ({}),
});
</script>

<style>
</style>