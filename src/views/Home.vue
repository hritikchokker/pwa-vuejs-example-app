<template>
  <div :class="$style.container">
    <h1>{{ dynamicMessage }} Home component</h1>
    <h4 v-once v-text="dummyText">loading.....</h4>
    <div :class="$style.quantityWrapper">
      <v-btn
        @click="updateQuantity(false)"
        class="ma-2"
        v-bind:disabled="quantity === 0"
        outlined
        fab
        color="teal"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      Quantity = {{ quantity }}
      <v-btn
        v-bind:disabled="quantity === 30"
        @click="updateQuantity(true)"
        class="ma-2"
        outlined
        fab
        color="teal"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <p>Maximum quantity can be 30</p>
    </div>
    <br />
    <br />
    <h3>Global component no need fo importing</h3>
    <CustomButton>Click Me</CustomButton>
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
      quantity: 0,
      dummyText:
        "vuejs development dummy text using v-text and v-once directive",
    };
  },
  methods: {
    updateQuantity: function (flag: boolean) {
      if (flag) {
        this.quantity++;
      } else {
        this.quantity--;
      }
    },
  },
  components: {
    // HelloWorld,
  },
});
</script>
<style scoped lang="scss" module>
.container {
  display: flex-wrap;
  justify-content: center;
  align-content: center;
  margin-top: 50vh;
  h1 {
    text-align: center;
    color: aqua;
  }
  h4 {
    text-align: center;
  }
  h1:hover {
    transform: scale(1.1);
    cursor: pointer;
    transition: 0.5s all ease-in-out;
  }
}
.quantityWrapper {
  text-align: center;
}
</style>
