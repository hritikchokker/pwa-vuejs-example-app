<template>
  <div>
    <h1>This Message(function) is ran via mixin</h1>
    {{ greet("world") }}
    <br /><br />
    <h2>Message from debug.js mixin</h2>
    <pre>{{ debug(myObj) }}</pre>
  </div>
</template>

<script>
import Vue from "vue";
import debug from "../mixins/debug.js";
import greeting from "../mixins/greeting";
export default Vue.extend({
  name: "GreetingMixinWrapper",
  mixins: [debug, greeting],
  data: () => ({
    myObj: {
      some: "data",
      other: "values",
    },
  }),
  created() {
    console.log(this.debug(this.myObj));
  },
});
</script>
