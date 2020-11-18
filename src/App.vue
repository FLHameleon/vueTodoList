<template>
  <div id="app">
    <h1>Todo Application</h1>
    <AddTodo 
      @add-todo="addTodo"
    />
    <hr>
    <TodoList 
      v-bind:todos="todos"
      v-on:remove-todo="removeTodo"
    />
  </div>
</template>

<script>
import TodoList from '/home/iai/workOcen3/12112020/opiti/myProdg/1232/src/components/TodoList.vue'
import AddTodo from '/home/iai/workOcen3/12112020/opiti/myProdg/1232/src/components/AddTodo.vue'
export default {
  name: 'app',
  data() {
    return {
      todos: []
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
  .then(response => response.json())
  .then(json => {
    this.todos = json
  })
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo(todo) {
      this.todos.push(todo)
    }
  },
  components: {
    TodoList, AddTodo
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
