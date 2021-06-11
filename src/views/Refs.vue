<template>
  <div id="app">
    <input placeholder="enter here" ref="theInput" />
    <button @click="focus()">Focus Input field</button>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "Refs",
  data: () => ({}),
  methods: {
    focus() {
      this.$refs.theInput.focus();
    },
  },
});
</script>