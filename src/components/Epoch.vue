/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
<template>
  <div>
    <slot :epoch="epoch" />
  </div>
</template>

<!--
do this in parent template
<template>
<div>
<Epoch>
<template v-slot:default="{ epoch }">
Epoch as rendered with parent template {{ epoch }}
</template>
</Epoch>
</div>
</template> 

or you can also do this

  <template>
    <div>
      <Epoch>
        <template v-slot:default="{ epoch }">
          Epoch as rendered with parent template {{ epoch }}
        </template></Epoch
      >
      </Epoch>
    </div>
    </template>
</template>
!-->
<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    date: {
      type: Date,
      default() {
        return new Date();
      },
    },
  },
  computed: {
    epoch() {
      return Number(this.date);
    },
  },
});
</script>
