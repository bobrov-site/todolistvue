<template>
  <div class="col">
    <div class="card">
      <div class="card-body" :class="todo.completed ? 'bg-light' : ''">
        <h5 class="card-title">{{todo.title}}</h5>
        <p v-if="todo.completed === true" class="card-text text-success">Выполнено</p>
        <p v-else class="card-text text-danger">Невыполнено</p>
        <div class="d-flex align-content-center justify-content-between">
          <div class="btn-list">
            <button type="button" class="btn btn-primary">Изменить</button>
            <button type="button" class="btn btn-danger">Удалить</button>
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
export default {
  name: "TodoItem",
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