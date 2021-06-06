<template>
  <div :class="$style.container">
    <h1>Vue Computed Data example</h1>
    <div :class="$style.form_fields">
      <input v-model="firstName" placeholder="First name" />
      <input v-model="lastName" placeholder="Last name" />
      <h3>
        {{ fullName }}
      </h3>
    </div>
    <br /><br />
    <div :class="$style.quantityWrapper">
      <v-btn @click="count--" class="ma-2" outlined fab color="teal">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      Count = {{ count }}
      <v-btn @click="count++" class="ma-2" outlined fab color="teal">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
    <br /><br />
    <div :class="$style.next_feature">
      <input type="number" v-model="incrementOne" />
      <h3>Get input: {{ incrementOne }}</h3>
      <h5>Set division: {{ divideByTwo }}</h5>
    </div>
  </div>
</template>

<style lang="scss" scoped  module>
.form_fields {
  text-align: center;
  input {
    height: 30px;
    width: 300px;
    margin: 15px;
  }
}
.next_feature {
  text-align: center;
}
.quantityWrapper {
  text-align: center;
}
.container {
  display: flex-wrap;
  justify-content: center;
  align-content: center;
  margin-top: 20vh;
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
  name: "ComputedData",
  data: () => {
    return {
      firstName: "",
      lastName: "",
      divideByTwo: 0,
      count: -1,
      val: 0,
    };
  },
  methods: {
    callAnotherApi: function (count: number) {
      console.log(count, "count");
    },
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    // this is just dummy example it does not do anything
    myComputedDataProp: {
      // getter
      get() {
        return this.count + 1;
      },
      // setter
      set(val: any) {
        this.count = val - 1;
        this.callAnotherApi(this.count);
      },
    },
    incrementOne: {
      // getter
      get() {
        console.log("getter called");
        return this.count + 1;
      },
      // setter
      set(val: any) {
        console.log("setter called");
        this.divideByTwo = val / 2;
        this.count = val - 1;
      },
    },
  },
});
</script>
