<template>
<div class="todolist">
  <ContainerBootstrap>
    <div class="row">
      <div class="col-12 text-center">
        <TitlePage v-if="todos" text="Список задач"/>
        <TitlePage v-else text="Список задач пуст, создайте новую!"/>
        <button-bootstrap data-bs-toggle="modal" data-bs-target="#createTodo" css-class="btn-lg btn-primary mt-2 mb-4">Создать задачу</button-bootstrap>
        <ModalBootstrap @create="createTodo" :todos="todos" css-id="createTodo"/>
        <SearchBootstrap v-if="todos" @search="searchTodo"/>
        <div v-if="todos" class="d-flex justify-content-end mt-2">
          <button-bootstrap @click.native="setCompletedToAllTodo()" css-class="btn-lg btn-success">Отменить всё как "Выполненные"</button-bootstrap>
        </div>
      </div>
    </div>
    <TodoList v-if="todos" :todos="searchedTodos"/>
    <PaginationBootstrap :page="page" :total-pages="totalPages" class="mt-4"/>
  </ContainerBootstrap>
</div>
</template>

<script>
import ContainerBootstrap from "@/components/UI/ContainerBootstrap";
import TitlePage from "@/components/TitlePage";
import TodoList from "@/components/TodoList";
import {mapState, mapActions, mapMutations, mapGetters} from 'vuex'
import ButtonBootstrap from "@/components/UI/ButtonBootstrap";
import ModalBootstrap from "@/components/UI/ModalBootstrap";
import SearchBootstrap from "@/components/UI/SearchBootstrap";
import PaginationBootstrap from "@/components/UI/PaginationBootstrap";
export default {
  name: "TodoListView",
  components: {
    PaginationBootstrap,
    SearchBootstrap, ModalBootstrap, TodoList , ButtonBootstrap, TitlePage, ContainerBootstrap},
  data: function() {
    return {
      isShow: false,
    }
  },
  methods: {
    ...mapActions({
      fetchTodos: "todos/fetchTodos"
    }),
    ...mapMutations({
      setSearchQuery: 'todos/setSearchQuery'
    }),
    createTodo(todo) {
      this.$store.commit('todos/addTodo', todo);
    },
    setCompletedToAllTodo() {
      console.log('hello')
      this.$store.commit('todos/setCompletedToAllTodo')
    },
    searchTodo(query) {
      this.$store.state.todos.searchQuery = query;
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
      totalPages: state => state.todos.totalPages,
      searchQuery: state => state.todos.searchQuery
    }),
    ...mapGetters({
      searchedTodos: 'todos/searchedTodos'
    })
  }
}
</script>