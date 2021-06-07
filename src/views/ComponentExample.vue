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
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Hello from "../components/Hello.vue";
import Greeting from "../components/Greeting.vue";
import InputMessage from "../components/InputMessage.vue";
export default Vue.extend({
  name: "ComponentExample",
  data: () => ({
    inputValue: "",
    appWho: "",
  }),
  components: {
    Hello,
    Message: Greeting,
    InputMessage,
  },
  methods: {
    setWho(newWho) {
      this.appWho = newWho;
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