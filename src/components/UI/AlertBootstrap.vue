<template>
  <div>
    <div v-if="isTodo" class="alert alert-todo alert-warning alert-dismissible" role="alert">
      <strong>{{todo.title}}!</strong> Напоминаю выполнить задачу.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div v-if="isSignIn" class="alert alert-success alert-dismissible" role="alert">
      <strong>Чтобы восстановить ваш пароль</strong> откройте ваш адрес электронной почты куда была отправлена ссылка и следуйте инструкциям.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "AlertBootstrap",
  props: {
    todo: {
      type: Object,
    },
    isTodo: {
      type: Boolean,
    },
    isSignIn: {
      type: Boolean
    },
  },
  computed: {
    ...mapState({
      dateNow: state => state.todos.dateNow
    })
  }
}
</script>

<style lang="scss" scoped>
.alert-todo {
  top: 56px;
  right: 0;
  z-index: 9999;
  position: fixed;
}

</style>