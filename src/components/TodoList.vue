<template>
<div class="row row-cols-1 g-4">
  <TodoItem/>
</div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  name: "TodoList",
  components: {TodoItem}
}
</script>

<style lang="scss" scoped>
.row {
  margin-top: 2rem;
}
</style>