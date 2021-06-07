<template>
  <v-container>
    <v-row class="text-center">
      <!-- <v-col cols="12">
          <v-img
            :src="require('../assets/logo.svg')"
            class="my-1"
            contain
            height="200"
          />
        </v-col> -->
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Vue</h1>
        <h3 class="subheading font-weight-regular">
          {{ who }}
        </h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Hello",
  props: ["who"],
  data: () => ({}),
});
</script>


