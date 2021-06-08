<template>
  <div class="container">
    <Hello who="this message is from parent" />
    <br />
    <br />
    <Message :who="appWho" greeting="welcome to vue" />
    <button type="button" @click="setWho('JavaScript')">JavaScript</button>
    <button type="button" @click="setWho('Everyone')">Everyone</button>
    <div class="container__input">
      <input
        type="text"
        v-model="inputValue"
        placeholder="Write your message"
      />
      <br />
      <br />
      <InputMessage :inputValue="inputValue" />
      <br />
      <br />
      <h3>Repeat component example</h3>
      <Repeat :times="count" content="Repeat again." />
      <button @click="increment()">Repeat</button>
      <br />
      <br />
      <h3>Custom Select Component</h3>
      <CustomSelect :selected="selected" :options="options" />
    </div>

    <h3>Defaulting Prop types Example</h3>
    <PaginatedList :items="snacks" :offset="offset" :limit="limit" />
    <button @click="offset++">Increment Offset (current: {{ offset }})</button>
    <button @click="limit++">Increment Limit (current: {{ limit }})</button>
  </div>
</template>

<script>
import Vue from "vue";
import Hello from "../components/Hello.vue";
import Greeting from "../components/Greeting.vue";
import InputMessage from "../components/InputMessage.vue";
import Repeat from "../components/Repeat.vue";
import CustomSelect from "../components/CustomSelect.vue";
import PaginateList from "../components/PaginateList.vue";
export default Vue.extend({
  name: "ComponentExample",
  data: () => ({
    inputValue: "",
    appWho: "",
    count: 1,
    selected: "salt-vinegar",
    options: [
      {
        value: "ready-salted",
        label: "Ready Salted",
      },
      {
        value: "cheese-onion",
        label: "Cheese & Onion",
      },
      {
        value: "salt-vinegar",
        label: "Salt & Vinegar",
      },
    ],
    offset: 0,
    limit: 0,
    snacks: [
      {
        id: "ready-salted",
        content: "Ready Salted",
      },
      {
        id: "cheese-onion",
        content: "Cheese & Onion",
      },
      {
        id: "salt-vinegar",
        content: "Salt & Vinegar",
      },
    ],
  }),
  components: {
    Hello,
    Message: Greeting,
    InputMessage,
    CustomSelect,
    Repeat,
    PaginatedList: PaginateList,
  },
  methods: {
    setWho(newWho) {
      this.appWho = newWho;
    },
    increment() {
      this.count += 1;
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  &__input {
  }
}
</style>