<template>
  <div class="modal fade" :id="cssId" tabindex="-1" aria-labelledby="modalWindowLabel" aria-hidden="true">
    <div class="modal-dialog">
      <!--      Изменение задачи-->
      <div v-if="tusk" class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Изменить задачу <span class="text-primary">{{tusk.title}}</span>
          </h5>
          <button type="button" :id="'btn-close' + cssId" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Изменить текст задачи</label>
              <input type="text" class="form-control" :placeholder="tusk.title" v-model="title">
              <div id="emailHelp" class="form-text">Это поле отвечает за название задачи</div>
            </div>
          </div>
          <div class="modal-footer">
            <button-bootstrap id="btn-close" css-class="btn-secondary" data-bs-dismiss="modal">Закрыть</button-bootstrap>
            <button-bootstrap @click.native="changeTodo()" css-class="btn-primary">Сохранить</button-bootstrap>
          </div>
        </form>
      </div>
      <!--      Создание задачи-->
      <div v-else class="modal-content">
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
      todo: {completed: false, id: '', title: '', userId: 1},
      title: ''
    }
  },
  props: {
    cssId: {
      type: String,
      required: true
    },
    tusk: {
      type: Object
    }
  },
  methods: {
    createTodo() {
      const modal = document.querySelector('.btn-close')
      this.todo.id = Date.now()
      this.$emit('create', this.todo)
      modal.click();
    },
    changeTodo() {
      const modal = document.getElementById('btn-close' + this.cssId)
      this.$emit('change', this.title);
      modal.click();
    }
  }
}
</script>

<style scoped>

</style>