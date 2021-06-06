<template>
  <div :class="$style.container">
    <h1>Vue Lifecycle hooks</h1>
    <ul>
      <li v-for="(item, n) in list" :key="n">
        {{ item }}<a @click="deleteItem(item)">Delete</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped  module>
.container {
  display: flex-wrap;
  justify-content: center;
  align-content: center;
  margin-top: 50vh;
  h1 {
    text-align: center;
    color: aqua;
  }
  h3 {
    text-align: center;
    color: red;
  }
  ul {
    text-align: center;
    list-style-type: none;
    // li {
    //   width: 70px;
    //   text-align: center;
    //   border-top: 2px solid black;
    // }
  }
}
</style>
<script lang="ts" module>
import Vue from "vue";

export default Vue.extend({
  name: "LifecycleHooks",
  data: () => {
    return {
      list: [
        "Apex Legends",
        "A Plague Tale: Innocence",
        "ART SQOOL",
        "Baba Is You",
        "Devil May Cry 5",
        "The Division 2",
        "Hypnospace Outlaw",
        "Katana ZERO",
      ],
    };
  },
  methods: {
    deleteItem(value: any) {
      this.list = this.list.filter((item) => item !== value);
    },
  },
  beforeCreate() {
    alert("BEFORECREATED component will be created");
  },
  created() {
    alert("CREATED component is created");
  },
  beforeMount() {
    alert("BEFOREMOUNT component is created but not ready to use");
  },
  mounted() {
    alert("MOUNTED : DOM ready to use");
  },
  beforeUpdate() {
    alert("BEFOREUPDATE before component update called");
  },
  updated() {
    alert("UPDATED component is updated");
  },
  beforeDestroy() {
    alert("BEFOREDESTROY called before component is destroyed");
  },
  destroyed() {
    alert("DESTROYED component is destroyed");
  },
});
</script>
