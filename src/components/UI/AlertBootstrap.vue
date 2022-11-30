<template>
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>{{todo.title}}!</strong> Напоминаю выполнить задачу.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
</template>

<script>
export default {
  name: "AlertBootstrap",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style scoped>

</style>