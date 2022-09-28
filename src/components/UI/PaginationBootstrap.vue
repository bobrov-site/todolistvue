<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li :class="{disabled : previousDisable}" class="page-item">
        <a @click="previousPage(page)" class="page-link" href="#">Предыдущая</a>
      </li>
      <li v-for="pageNumber in totalPages" :key="pageNumber" :class="{'active' : page === pageNumber}" class="page-item">
        <span @click="changePage(pageNumber)" class="page-link">{{pageNumber}}</span>
      </li>
      <li :class="{disabled : nextDisable}" class="page-item">
        <a class="page-link" href="#">Далее</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "PaginationBootstrap",
  data() {
    return {
      previousDisable: false,
      nextDisable: false,
    }
  },
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
  },
  watch: {
    page: function (val) {
      console.log(val)
      this.nextDisable = val === this.totalPages;
    }
  },
  created() {
    this.previousDisable = this.page === 1;
    this.nextDisable = this.page === this.totalPages;
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