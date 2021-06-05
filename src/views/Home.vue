<template>
  <div class="container">
    <h1>{{ dynamicMessage }} Home component</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import HelloWorld from "../components/HelloWorld.vue";

export default Vue.extend({
  name: "Home",
  data: () => {
    return {
      dynamicMessage: "Hello World from Vue",
    };
  },
  components: {
    // HelloWorld,
  },
});
</script>
<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 50vh;
  h1 {
    text-align: center;
    color: aqua;
  }
  h1:hover {
    transform: scale(1.1);
    transition: 0.5s all ease-in-out;
  }
}
</style>
