<template>
  <transition-group name="todos-list" tag="div" class="row row-cols-1 g-4">
    <TodoItem v-for="todo in todos" :todo="todo" :key="todo.id"/>
  </transition-group>
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
.todos-list-item {
  display: inline-block;
  margin-right: 10px;
}
.todos-list-enter-active,
.todos-list-leave-active {
  transition: all 0.4s ease;
}
.todos-list-enter-from,
.todos-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.todos-list-move {
  transition: transform 0.4s ease;
}
</style>