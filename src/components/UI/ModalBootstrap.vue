<template>
  <div class="modal fade" :id="cssId" tabindex="-1" aria-labelledby="modalWindowLabel" aria-hidden="true">
    <div class="modal-dialog">
      <!--      Создание задачи-->
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Создать задачу
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Опишите задачу</label>
              <input type="text" class="form-control" v-model="todo.title">
              <div id="emailHelp" class="form-text">Это поле отвечает за название задачи</div>
            </div>
          </div>
          <div class="modal-footer">
            <button-bootstrap css-class="btn-secondary" data-bs-dismiss="modal">Закрыть</button-bootstrap>
            <button-bootstrap @click.native="createTodo()" css-class="btn-primary">Сохранить</button-bootstrap>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBootstrap from "@/components/UI/ButtonBootstrap";
export default {
  name: "ModalBootstrap",
  components: {ButtonBootstrap},
  data() {
    return {
      todo: {completed: false, id: '', title: '', userId: 1}
    }
  },
  props: {
    cssId: {
      type: String,
      required: true
    }
  },
  methods: {
    createTodo() {
      const modal = document.querySelector('.btn-close')
      this.todo.id = Date.now()
      this.$emit('create', this.todo)
      modal.click();
    }
  }
}
</script>

<style scoped>

</style>