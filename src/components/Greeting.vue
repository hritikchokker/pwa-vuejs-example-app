<template>
  <v-container>
    <v-row class="text-center mt-4">
      <v-col class="mb-3">
        <h3 class="subheading font-weight-regular">to {{ who }}</h3>
        <h4 class="font-weight-bold mb-3">{{ greeting }}</h4>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "Greeting",
  props: ["who", "greeting"],
});
</script>

<style>
</style>