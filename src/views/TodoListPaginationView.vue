<template>
<div class="todolist">
  <ContainerBootstrap>
    <div class="row">
      <div class="col-12 text-center">
        <TitlePage :text="'Страница №'+ page"/>
        <router-link to="/todolist">
          <button-bootstrap css-class="btn-lg btn-primary mt-2 mb-4">Вернуться к началу</button-bootstrap>
        </router-link>
      </div>
      <TodoList v-if="todos" :todos="searchedTodos"/>
      <PaginationBootstrap @change="changePageNumber" :page="page" :total-pages="totalPages" class="mt-4"/>
    </div>
  </ContainerBootstrap>
</div>
</template>

<script>
import ContainerBootstrap from "@/components/UI/ContainerBootstrap";
import TitlePage from "@/components/TitlePage";
import ButtonBootstrap from "@/components/UI/ButtonBootstrap";
import TodoList from "@/components/TodoList";
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import PaginationBootstrap from "@/components/UI/PaginationBootstrap";
export default {
  name: "TodoListPaginationView",
  components: {PaginationBootstrap, TodoList, ButtonBootstrap, TitlePage, ContainerBootstrap},
  methods: {
    ...mapActions({
      fetchTodos: "todos/fetchTodos"
    }),
    ...mapMutations({
      setSearchQuery: 'todos/setSearchQuery'
    }),
    changePageNumber(pageNumber) {
      pageNumber.event.preventDefault()
      this.$store.commit('todos/setPage', pageNumber);
      if (pageNumber !== 1) {
        this.$router.push('todos/' + pageNumber)
      }
    }
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