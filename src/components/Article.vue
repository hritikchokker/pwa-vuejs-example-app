<template>
  <article>
    <div>Title: <slot name="title" /></div>
    <div>Excerpt: <slot name="excerpt" /></div>
  </article>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  name: "Article",
  data: () => ({}),
});
</script>