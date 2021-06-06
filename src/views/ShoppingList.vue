<template>
  <div :class="$style.container">
    <h1>Shopping List</h1>
    <div :class="$style.searchWrapper">
      <v-text-field
        label="add items"
        v-model="searchField"
        :class="$style.searchWrapper__input"
        :rules="rules"
        @keyup.enter="addItem"
        hide-details="auto"
      ></v-text-field>
      <v-btn @click="addItem" class="ma-2" outlined fab color="teal">
        Add
      </v-btn>
    </div>
    <div :class="$style.listWrapper">
      <ul>
        <li v-for="(item, n) in list" :key="n">
          {{ item }}<a @click="deleteItem(n)">Delete</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" module>
import Vue from "vue";
export default Vue.extend({
  name: "ShoppingList",
  data: () => ({
    searchField: "",
    rules: [
      (value: any) => !!value || "Required.",
      (value: any) => (value && value.length >= 3) || "Min 3 characters",
    ],
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
  }),
  methods: {
    addItem: function () {
      this.list.unshift(this.searchField);
      this.searchField = "";
    },
    deleteItem: function (index: number) {
      this.list.splice(index, 1);
    },
  },
});
</script>

<style lang="scss" scoped module>
.listWrapper {
  ul {
    text-align: center;
    list-style: none;
  }
}
.container {
  display: flex;
  flex-direction: column;
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
}
.searchWrapper {
  text-align: center;
  &__input {
    margin: auto;
    width: 300px;
  }
}
</style>