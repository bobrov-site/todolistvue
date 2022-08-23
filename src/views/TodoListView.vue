<template>
<div class="todolist">
  <ContainerBootstrap>
    <div class="row">
      <div class="col-12 text-center">
        <TitlePage text="Список задач"/>
        <button-bootstrap data-bs-toggle="modal" data-bs-target="#createTodo" css-class="btn-lg btn-success mt-2 mb-4">Создать задачу</button-bootstrap>
        <SearchBootstrap/>
        <ModalBootstrap @create="createTodo" :todos="todos" css-id="createTodo"/>
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
import ButtonBootstrap from "@/components/UI/ButtonBootstrap";
import ModalBootstrap from "@/components/UI/ModalBootstrap";
import SearchBootstrap from "@/components/UI/SearchBootstrap";
export default {
  name: "TodoListView",
  components: {SearchBootstrap, ModalBootstrap, ButtonBootstrap, TodoList, TitlePage, ContainerBootstrap},
  data: function() {
    return {
      isShow: false,
    }
  },
  methods: {
    ...mapActions({
      fetchTodos: "todos/fetchTodos"
    }),
    createTodo(todo) {
      console.log(todo)
      this.todos.unshift(todo);
    }
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