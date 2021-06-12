<template>
  <div id="app">
    <fieldset>
      <label for="textinput"> Text Input </label>
      <CustomInput type="text" name="textinput" id="textinput" />
    </fieldset>
    <fieldset>
      <label for="dateinput"> Date Input </label>
      <CustomInput type="date" name="dateinput" id="dateinput" />
    </fieldset>
  </div>
</template>

<script>
import Vue from "vue";
import CustomInput from "../components/CustomInput.vue";
export default Vue.extend({
  name: "UserForm",
  components: {
    CustomInput,
  },
});
</script>

<style></style>
