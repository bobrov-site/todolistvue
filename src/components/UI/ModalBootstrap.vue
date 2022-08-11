<template>
  <div class="modal fade" :id="cssId" tabindex="-1" aria-labelledby="modalWindowLabel" aria-hidden="true">
    <div class="modal-dialog">
<!--      Создание задачи-->
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            {{title}}
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Опишите задачу</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">Это поле отвечает за название задачи</div>
          </div>
        </div>
        <div class="modal-footer">
          <button-bootstrap css-class="btn-secondary" data-bs-dismiss="modal">Закрыть</button-bootstrap>
          <button-bootstrap css-class="btn-primary">Сохранить</button-bootstrap>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBootstrap from "@/components/UI/ButtonBootstrap";
export default {
  name: "ModalBootstrap",
  components: {ButtonBootstrap},
  props: {
    cssId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>