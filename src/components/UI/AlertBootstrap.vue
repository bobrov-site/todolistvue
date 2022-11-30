<template>
  <div :class="{'show fade' : ringTime}" class="alert alert-warning alert-dismissible" role="alert">
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
    ringTime: {
      type: Boolean,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.alert {
  position: fixed;
  top: 56px;
  right: 0;
}

</style>