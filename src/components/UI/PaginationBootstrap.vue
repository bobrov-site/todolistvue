<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="#">Предыдущая</a></li>
      <li v-for="pageNumber in totalPages" :key="pageNumber" @click="changePageNumber(pageNumber)" :class="{'active' : page === pageNumber}" class="page-item">
        <router-link v-if="pageNumber !== 1" class="page-link" :to="'/todolist/' + pageNumber">
          {{pageNumber}}
        </router-link>
        <router-link v-else to="/todolist" class="page-link">
          {{pageNumber}}
        </router-link>
      </li>
      <li class="page-item"><a class="page-link" href="#">Далее</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "PaginationBootstrap",
  props: {
    page: Number,
    totalPages: Number
  },
  methods: {
    changePageNumber(pageNumber) {
      this.$emit('change', pageNumber);
    }
  }
}
</script>

<style scoped>

</style>