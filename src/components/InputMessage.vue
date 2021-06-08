<template>
  <div>
    <strong>This message is from parent input field</strong>
    <h2>
      {{ inputValue }}
    </h2>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "InputMessage",
  props: ["inputValue"],
});
</script>

<style>
</style>