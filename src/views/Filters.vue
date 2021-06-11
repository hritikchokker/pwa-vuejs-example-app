<template>
  <div id="app">
    <h3>Truncate Filter</h3>
    <h5>
      {{ message | truncate }}
    </h5>
    <br />
    <br />
    <br />
    <h3>Ellipsis Filter</h3>
    <br />
    <p>{{ "7 char" | ellipsis }}</p>
    <p>{{ "14 characters" | ellipsis }}</p>
    <p>{{ "More than 14 characters" | ellipsis }}</p>
    <p>{{ null | ellipsis }}</p>
    <p>{{ 55 | ellipsis }}</p>
  </div>
  <!-- <MessageComponent :msg="message | truncate"> -->
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "Filters",
  data: () => ({
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing
elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation llamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in
voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id
est laborum.`,
  }),
  filters: {
    truncate(value) {
      if (!value) return;
      const val = value.toString();
      return val.slice(0, 120);
      //   return value.slice(0, 120);
    },
    ellipsis(value) {
      if (!value) return;
      return value.length > 14 ? `${value.slice(0, 11)}...` : value;
    },
  },
});
</script>

<style>
</style>