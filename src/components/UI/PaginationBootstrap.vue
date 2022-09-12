<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="#">Предыдущая</a></li>
      <li v-for="pageNumber in totalPages" :key="pageNumber" :class="{'active' : page === pageNumber}" class="page-item">
        <span @click="changePage(pageNumber)" class="page-link">{{pageNumber}}</span>
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
    changePage(pageNumber) {
      this.$store.commit('todos/setPage', pageNumber);
      if (pageNumber === 1) {
        this.$router.push('/todolist')
      }
      else {
        this.$router.push({name: 'todolistPagination', params: {page: pageNumber}})
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.pagination {
  .page-item {
    .page-link {
      cursor: pointer;
    }
  }
}

</style>