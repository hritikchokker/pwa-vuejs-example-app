<template>
  <ul>
    <li v-for="el in currentWindow" :key="el.id">
      {{ el.content }}
    </li>
  </ul>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "PaginationList",
  props: {
    // items: {
    //   type: Array,
    // },
    items: {
      type: Array,
      // in case of array or objects default must be return from a factory function
      default() {
        return [];
      },
    },
    limit: {
      type: Number,
      default: 25,
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    currentWindow() {
      return this.items.slice(this.offset, this.limit);
    },
  },
});
</script>

<style>
</style>