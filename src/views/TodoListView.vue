<template>
<div class="todolist">
  <ContainerBootstrap>
    <div class="row">
      <div class="col-12 text-center">
        <TitlePage text="Список задач"/>
      </div>
    </div>
    <TodoList :todos="todos"/>
  </ContainerBootstrap>
</div>
</template>

<script>
import ContainerBootstrap from "@/components/UI/ContainerBootstrap";
import TitlePage from "@/components/TitlePage";
import TodoList from "@/components/TodoList";
import {mapState, mapActions} from 'vuex'
export default {
  name: "TodoListView",
  components: {TodoList, TitlePage, ContainerBootstrap},
  methods: {
    ...mapActions({
      fetchTodos: "todos/fetchTodos"
    })
  },
  mounted() {
    this.fetchTodos()
  },
  computed: {
    ...mapState({
      todos: state => state.todos.todos,
      isTodosLoading: state => state.todos.isTodosLoading,
      page: state => state.todos.page,
      limit: state => state.todos.limit,
      totalPages: state => state.todos.totalPages
    })
  }
}
</script>

<style lang="scss" scoped>

</style>