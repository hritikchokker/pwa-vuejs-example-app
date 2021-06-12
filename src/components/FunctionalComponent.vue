<!--
<template functional>
  <div>Functional Component: {{ props.greeting }} {{ props.audience }}</div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  functional: true,
  render(h, context) {
    return h(
      "h2",
      `Functional Render: ${context.props.greeting}
${context.props.audience}`
    );
  },
});
</script>
!-->
