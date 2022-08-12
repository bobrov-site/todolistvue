<template>
  <div class="col">
    <div :class="todo.completed ? 'shadow-sm' : ''" class="card">
      <div class="card-body" :class="todo.completed ? 'bg-light' : ''">
        <div class="d-flex align-self-center justify-content-between">
          <h5 :class="todo.completed ? 'text-success' : ''" class="card-title">{{todo.title}}</h5>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" :id="'flexSwitchCheckChecked' + todo.id" @change="setCompleted($event, todo.id)" :checked="todo.completed">
          </div>
        </div>
        <p v-if="todo.completed === true" class="card-text text-success">Выполнено</p>
        <p v-else class="card-text text-danger">Невыполнено</p>
        <div class="d-flex align-content-center justify-content-between">
          <div class="btn-list">
            <button-bootstrap data-bs-toggle="modal" data-bs-target="#changeTodo" css-class="btn-primary">Изменить</button-bootstrap>
            <button-bootstrap @click.native="removeTodo(todo.id)" css-class="btn-danger">Удалить</button-bootstrap>
            <ModalBootstrap :todo="todo" css-id="changeTodo"/>
          </div>
          <div class="card-date d-inline-flex text-muted">
            <span class="align-self-center">id {{todo.id}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBootstrap from "@/components/UI/ButtonBootstrap";
import ModalBootstrap from "@/components/UI/ModalBootstrap";

export default {
  name: "TodoItem",
  components: {ModalBootstrap, ButtonBootstrap},
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    setCompleted(event, id) {
      this.$store.commit('todos/setCompleted', {completed: event.target.checked , id: id});
    },
    removeTodo(id) {
      this.$store.commit('todos/removeTodo', id);
    }
  }
}
</script>

<style lang="scss" scoped>
.form-switch .form-check-input {
  margin-left: 0;
}
.btn-list {
  button:first-child {
    margin-right: 1rem;
  }
}
</style>