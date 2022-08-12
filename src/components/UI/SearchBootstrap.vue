<template>
  <form class="d-flex">
    <input class="form-control me-2" type="search" placeholder="Найти задачу" aria-label="Search">
    <button-bootstrap css-class="btn-outline-success">Поиск</button-bootstrap>
  </form>
</template>

<script>
import buttonBootstrap from "@/components/UI/ButtonBootstrap";
export default {
  name: "SearchBootstrap",
  components: {buttonBootstrap}
}
</script>

<style scoped>

</style>