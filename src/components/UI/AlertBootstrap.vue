<template>
  <div class="alert alert-warning alert-dismissible" role="alert">
    <strong>{{todo.title}}!</strong> Напоминаю выполнить задачу.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "AlertBootstrap",
  props: {
    todo: {
      type: Object,
      required: true,
    }
  },
  computed: {
    ...mapState({
      dateNow: state => state.todos.dateNow
    })
  }
}
</script>

<style lang="scss" scoped>
.alert {
  position: fixed;
  top: 56px;
  right: 0;
  z-index: 9999;
}

</style>