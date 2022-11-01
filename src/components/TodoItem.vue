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
            <button-bootstrap v-if="!todo.reminder" data-bs-toggle="modal" :data-bs-target="'#changeReminderTodo' + todo.id" :is-calendar="true" css-class="btn-outline-secondary">Напомнить</button-bootstrap>
            <button-bootstrap v-if="todo.reminder" data-bs-toggle="modal" :data-bs-target="'#changeReminderTodo' + todo.id" :is-calendar="true" css-class="btn-outline-secondary">Изменить</button-bootstrap>
            <ModalBootstrap @change="changeTodo" :tusk="todo" :css-id="'changeTodo'+ todo.id"/>
            <ModalBootstrap @change="setReminder($event, todo.id)" :is-reminder-todo="true" :tusk="todo" :css-id="'changeReminderTodo' + todo.id"/>
          </div>
          <div class="card-date d-inline-flex text-muted">
            <span class="align-self-center">id {{todo.id}}</span>
          </div>
        </div>
        <div class="mt-2 d-flex align-content-center justify-content-between">
          <BadgeBootstrap v-if="todo.reminder" css-class="bg-primary" :text="todo.reminder"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBootstrap from "@/components/UI/ButtonBootstrap";
import ModalBootstrap from "@/components/UI/ModalBootstrap";
import BadgeBootstrap from "@/components/UI/BadgeBootstrap";
import {mapActions} from "vuex";

export default {
  name: "TodoItem",
  components: {BadgeBootstrap, ModalBootstrap, ButtonBootstrap},
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.$set(this.todo, 'reminder', '');
  },
  methods: {
    ...mapActions({
       addReminderProperty :'todos/addReminderProperty'
  }),
    setCompleted(event, id) {
      this.$store.commit('todos/setCompleted', {completed: event.target.checked , id: id});
    },
    removeTodo(id) {
      this.$store.commit('todos/removeTodo', id);
    },
    changeTodo(title) {
      this.$store.commit('todos/setTitle', {id: this.todo.id, title: title})
    },
    setReminder(date, id) {
      this.$store.commit('todos/setReminder', {reminder: date, id:id})
    }
  },
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
.card-text {
  margin-bottom: 0.5rem;
}
</style>