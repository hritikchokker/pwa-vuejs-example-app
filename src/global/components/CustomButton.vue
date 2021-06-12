<template>
  <button @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "CustomButton",
});
</script>

<style></style>
