<template>
  <form class="d-flex">
    <input class="form-control me-2" type="text" placeholder="Найти задачу" v-model="$store.state.todos.searchQuery" aria-label="Search">
    <button-bootstrap @click.native="searchTodo" css-class="btn-outline-success">Поиск</button-bootstrap>
  </form>
</template>

<script>
import buttonBootstrap from "@/components/UI/ButtonBootstrap";
export default {
  name: "SearchBootstrap",
  components: {buttonBootstrap},
  data() {
    return {
      title: '',
    }
  },
  methods: {
    searchTodo() {
      this.$emit('search', this.title);
    }
  }
}
</script>

<style scoped>

</style>