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
            <button-bootstrap :isCreateOrChangeTodo="true" data-bs-toggle="modal" :data-bs-target="'#changeTodo'+ todo.id" css-class="btn-primary me-3">Изменить</button-bootstrap>
            <button-bootstrap @click.native="removeTodo(todo.id)" css-class="btn-danger me-3">Удалить</button-bootstrap>
            <button-bootstrap data-bs-toggle="modal" :data-bs-target="'#setReminderTodo' + todo.id" :is-calendar="true" css-class="btn-outline-secondary">Напомнить</button-bootstrap>
            <ModalBootstrap @change="changeTodo" :tusk="todo" :css-id="'changeTodo'+ todo.id"/>
            <ModalBootstrap @set="setReminder" :is-reminder-todo="true" :tusk="todo" :css-id="'setReminderTodo' + todo.id"/>
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
    },
    changeTodo(title) {
      this.$store.commit('todos/setTitle', {id: this.todo.id, title: title})
    },
    setReminder(date) {
      console.log('added date to store');
      this.$store.commit('todos/setReminder', {id: this.todo.id, date: date})
    }
  }
}
</script>

<style lang="scss" scoped>
.card:hover {
  transition: 0.2s ease-in;
  box-shadow: 0 1rem 3rem rgba(#000, .175) !important;
}
.form-switch .form-check-input {
  margin-left: 0;
}
</style>