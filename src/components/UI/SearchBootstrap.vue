<template>
  <form class="d-flex">
    <input class="form-control" type="text" placeholder="Найти задачу" v-model="$store.state.todos.searchQuery" aria-label="Search">
  </form>
</template>

<script>
export default {
  name: "SearchBootstrap",
  data() {
    return {
      title: '',
    }
  }
}
</script>

<style scoped>

</style>