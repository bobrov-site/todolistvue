<template>
<div class="todolist">
  <ContainerBootstrap>
    <div class="row">
      <div class="col-12 text-center">
        <TitlePage text="Список задач"/>
        <button-bootstrap data-bs-toggle="modal" data-bs-target="#createTodoModal" css-class="btn-lg btn-success mt-2">Создать задачу</button-bootstrap>
      </div>
    </div>
    <TodoList :todos="todos"/>
  </ContainerBootstrap>
  <ModalBootstrap id-css="createTodoModal" title="Напишите задачу" ariaLabelByCss="createTodoModalLabel"/>
</div>
</template>

<script>
import ContainerBootstrap from "@/components/UI/ContainerBootstrap";
import TitlePage from "@/components/TitlePage";
import TodoList from "@/components/TodoList";
import {mapState, mapActions} from 'vuex'
import ButtonBootstrap from "@/components/UI/ButtonBootstrap";
import ModalBootstrap from "@/components/UI/ModalBootstrap";
export default {
  name: "TodoListView",
  components: {ModalBootstrap, ButtonBootstrap, TodoList, TitlePage, ContainerBootstrap},
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