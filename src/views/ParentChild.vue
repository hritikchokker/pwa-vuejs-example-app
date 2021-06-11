<template>
  <div id="app">
    <p>Message: {{ message }}</p>
    <MessageEditor @send="message = $event" />
    <button @click="message = null">Reset</button>
  </div>
</template>

<script>
import Vue from "vue";
import Child from "../components/Child.vue";
export default Vue.extend({
  name: "ParentChild",
  data: () => ({
    message: null,
  }),
  components: {
    MessageEditor: Child,
  },
});
</script>
