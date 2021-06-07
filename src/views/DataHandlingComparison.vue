<template>
  <div class="container">
    <h1>Methods vs watchers vs computed props</h1>
    <div class="col">
      <input
        type="text"
        placeholder="Search with method"
        v-model="input"
        @keyup="searchMethod"
      />
      <ul>
        <li v-for="(item, i) in methodFilterList" :key="i">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="col">
      <input type="text" placeholder="Search with computed" v-model="input2" />
      <ul>
        <li v-for="(item, i) in computedList" :key="i">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="col">
      <input type="text" placeholder="Search with watchers" v-model="input3" />
      <ul>
        <li v-for="(item, i) in watchFilterList" :key="i">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" module>
import Vue from "vue";
export default Vue.extend({
  name: "DataHandlingComparison",
  created() {
    this.searchMethod();
  },
  data() {
    return {
      // Shared
      frameworkList: [
        "Vue",
        "React",
        "Backbone",
        "Ember",
        "Knockout",
        "jQuery",
        "Angular",
      ],
      // Method
      input: "",
      input2: "",
      input3: "",
      watchFilterList: [],
      methodFilterList: [],
    };
  },
  methods: {
    searchMethod() {
      this.methodFilterList = this.frameworkList.filter((item) =>
        item.toLowerCase().includes(this.input.toLowerCase())
      ) as any;
    },
  },
  computed: {
    computedList(): any {
      return this.frameworkList.filter((item: any) => {
        return item.toLowerCase().includes(this.input2.toLowerCase()) as any;
      });
    },
  },
  watch: {
    input3: {
      handler() {
        this.watchFilterList = this.frameworkList.filter((item) =>
          item.toLowerCase().includes(this.input3.toLowerCase())
        ) as any;
      },
      immediate: true,
    },
  },
});
</script>

<style style="scss">
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.col {
  width: 33%;
  height: 100%;
  float: left;
}
input {
  padding: 10px 6px;
  margin: 20px 10px 10px 0;
}
</style>