<template>
  <div id="app">
    <h1>Axios as Plugin Example</h1>
    <div v-for="todo in todos" :key="todo.id">
      <ul>
        <li>Title: {{ todo.title }}</li>
        <li>Status: {{ todo.completed ? "Completed" : "Not Completed" }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "ToDoAxiosPlugin",
  async mounted() {
    try {
      const { data: todos } = await this.axios(
        "https://jsonplaceholder.typicode.com/todos"
      );
      this.todos = todos;
    } catch (error) {
      console.log(error, "error");
    }
  },
  data() {
    return { todos: [] };
  },
});
</script>
