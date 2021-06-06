<template>
  <div :class="$style.container">
    <h1>Shop Watcher</h1>
    <div :class="$style.container__discount">
      Black Friday sale
      <strike>Was {{ oldDiscount }}%</strike>
      <strong> Now {{ discount }}% OFF</strong>
      <br />
      <a href="#" @click="updateDiscount">Increase Discount!</a>
    </div>
    <br />
    <br />
    <br />
    <div :class="$style.container__deepwatcher">
      <h1>Deep Watcher</h1>
      <div>
        <h4>{{ product.label }}</h4>
        <h5>${{ product.price }} (${{ discount }} Off)</h5>
        <a href="#" @click="updatePrice">Reduce Price!</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import HelloWorld from "../components/HelloWorld.vue";

export default Vue.extend({
  name: "Watchers",
  data: () => {
    return {
      oldDiscount: 0,
      discount: 5,
      product: {
        price: 25,
        label: "Blue juice",
      },
      organization: {
        name: "ABC",
        employees: ["Jack", "Jill"],
      },
    };
  },
  methods: {
    updateDiscount() {
      this.discount = this.discount + 5;
    },
    updatePrice() {
      if (this.product.price < 1) return;
      this.product.price--;
    },
  },
  watch: {
    "product.price"() {
      this.discount++;
    },
    discount(newValue, oldValue) {
      console.log(newValue, "new value", oldValue, "old value");
      this.oldDiscount = oldValue;
    },
    organization: {
      handler: function (v) {
        // this.sendIntercomData();
      },

      //   deep: true,
      immediate: true,
    },
    // myDataProperty: {
    //   handler: function (newVal, oldVal) {
    //     console.log("myDataProperty changed:", newVal, oldVal);
    //   },
    //   immediate: true,
    //   deep: true,
    // },
  },
});
</script>
<style scoped lang="scss" module>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20vh;
  align-items: center;
  font-family: "Avenir", Helvetica, sans-serif;
  &__discount {
    text-align: center;
    margin-top: 20px;
  }
  &__deepwatcher {
    text-align: center;
    margin-top: 20px;
  }
}
a {
  display: inline-block;
  background: rgb(235, 50, 50);
  margin: 30px;
  border-radius: 10px;
  font-size: 14px;
  color: #000;
  padding: 10px 20px;
  text-decoration: none;
}
</style>
