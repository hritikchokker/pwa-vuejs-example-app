/* eslint-disable vue/no-unused-components */
<template>
  <div id="app">
    <h2>String Template Example</h2>
    <StringTemplate />

    <br /><br /><br />
    <h2>Render function example</h2>
    <RenderFunction />
    <br /><br /><br /><br />
    <h2>JSX example</h2>
    <JSXRender />
  </div>
</template>

<script>
import Vue from "vue";
import StringTemplate from "../components/StringTemplate";
import RenderFunction from "../components/RenderFunction";
import JSXRender from "../components/JSXRender";
export default Vue.extend({
  name: "NonSFC",
  components: {
    StringTemplate,
    RenderFunction,
    JSXRender,
  },
});
</script>
