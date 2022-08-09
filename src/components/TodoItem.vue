<template>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Приготовить покушать</h5>
        <p class="card-text">Очень срочное задание</p>
        <div class="d-flex align-content-center justify-content-between">
          <div class="btn-list">
            <button type="button" class="btn btn-primary">Изменить</button>
            <button type="button" class="btn btn-danger">Удалить</button>
          </div>
          <div class="card-date d-inline-flex text-muted">
            <span class="align-self-center">09.08.2022 14:28</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem"
}
</script>

<style lang="scss" scoped>
.btn-list {
  button:first-child {
    margin-right: 1rem;
  }
}
</style>