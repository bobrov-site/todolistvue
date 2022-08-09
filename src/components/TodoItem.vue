<template>
  <div class="col">
    <div class="card">
      <div class="card-body" :class="todo.completed ? 'bg-light' : ''">
        <h5 class="card-title">{{todo.title}}</h5>
        <p v-if="todo.completed === true" class="card-text text-success">Выполнено</p>
        <p v-else class="card-text text-danger">Невыполнено</p>
        <div class="d-flex align-content-center justify-content-between">
          <div class="btn-list">
            <button-bootstrap css-class="btn-primary">Изменить</button-bootstrap>
            <button-bootstrap css-class="btn-danger">Удалить</button-bootstrap>
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
export default {
  name: "TodoItem",
  components: {ButtonBootstrap},
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-list {
  button:first-child {
    margin-right: 1rem;
  }
}
</style>