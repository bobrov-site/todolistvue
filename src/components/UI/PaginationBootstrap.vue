<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li @click="previousPage(page)" :class="{disabled : previousDisable}" class="page-item">
        <router-link :to="'/todolist/' + String(page - 1)" class="page-link">Предыдущая</router-link>
      </li>
      <li v-for="pageNumber in totalPages" :key="pageNumber" :class="{'active' : page === pageNumber}" class="page-item">
        <span @click="changePage(pageNumber)" class="page-link">{{pageNumber}}</span>
      </li>
      <li @click="nextPage(page)" :class="{disabled : nextDisable}" class="page-item">
        <router-link :to="'/todolist/' + String(page + 1)" class="page-link">Далее</router-link>
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
    },
    nextPage(pageNumber) {
      const nextPageNumber = Number(pageNumber + 1)
      this.$store.commit('todos/setPage', nextPageNumber)
    },
    previousPage(pageNumber) {
      const previousPageNumber = Number(pageNumber - 1);
      this.$store.commit('todos/setPage', previousPageNumber);
    }
  },
  mounted() {
    this.nextDisable = this.page === this.totalPages;
    this.previousDisable = this.page === 1;
  },
  watch: {
    page: function (val) {
      console.log(val)
      this.nextDisable = val === this.totalPages;
      this.previousDisable = val === 1;
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