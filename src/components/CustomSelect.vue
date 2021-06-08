<template>
  <div>
    <select>
      <option
        :selected="selected === o.value"
        v-for="o in options"
        :key="o.value"
      >
        {{ o.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default {
  name: "CustomSelect",
  props: {
    selected: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      validator(options: any) {
        return options.every((o: any) => Boolean(o.value && o.label));
      },
    },
  },
};
</script>

<style>
</style>