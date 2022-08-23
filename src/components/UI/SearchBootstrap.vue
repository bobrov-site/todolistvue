<template>
  <form class="d-flex">
    <input class="form-control me-2" type="button" placeholder="Найти задачу" model:value="searchQuery" @update:model-value="setSearchQuery" aria-label="Search">
    <button-bootstrap  css-class="btn-outline-success">Поиск</button-bootstrap>
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

  }
}
</script>

<style scoped>

</style>