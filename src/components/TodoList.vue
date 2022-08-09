<template>
<div class="row row-cols-1 g-4">
  <TodoItem v-for="todo in todos" :todo="todo" :key="todo.id"/>
</div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  name: "TodoList",
  components: {TodoItem},
  props: {
    todos: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  margin-top: 2rem;
}
</style>