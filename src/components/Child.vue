<template>
  <div>
    <input v-model="message" />
    <button @click="$emit('send', message)">Emit inline</button>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "Child",
  data: () => ({
    message: "",
  }),
});
</script>
