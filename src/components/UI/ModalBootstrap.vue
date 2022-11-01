<template>
  <div class="modal fade" :id="cssId" tabindex="-1" aria-labelledby="modalWindowLabel" aria-hidden="true">
    <div class="modal-dialog">
      <!--      Изменение задачи-->
      <div v-if="tusk" class="modal-content">
<!--        Изменение задачи модальное окно-->
        <div v-if="!isReminderTodo" class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Изменить задачу <span class="text-primary">{{tusk.title}}</span>
          </h5>
          <button type="button" :id="'btn-close' + cssId" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form v-if="!isReminderTodo">
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
        <!--        Установить напоминание модальное окно-->
        <div v-if="isReminderTodo" class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Напомнить о задаче <span class="text-primary">{{tusk.title}}</span>
          </h5>
          <button type="button" :id="'btn-close' + cssId" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form v-if="isReminderTodo">
          <div class="modal-body modal-body-reminder">
            <div class="mb-3">
              <label for="exampleLabel" class="form-label d-block">Установить дату и время задачи</label>
              <date-picker
                  :value-type="'DD MMM YYYY H:mm'"
                  :show-second="false"
                  :input-class="'form-control'"
                  :inline="true"
                  :type="'datetime'"
                  v-model="date"
                  :lang="lang"
              ></date-picker>
            </div>
            <div>
              <h5>{{date}}</h5>
              <div v-if="date" class="form-text">Дата и время задачи</div>
            </div>
          </div>
          <div class="modal-footer">
            <button-bootstrap css-class="btn-secondary" data-bs-dismiss="modal">Закрыть</button-bootstrap>
            <button-bootstrap @click.native="changeReminder()" css-class="btn-primary">Сохранить</button-bootstrap>
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
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/ru';

export default {
  name: "ModalBootstrap",
  components: {ButtonBootstrap, DatePicker},
  data() {
    return {
      todo: {completed: false, id: '', title: '', userId: 1},
      title: '',
      date: null,
      lang: {
        formatLocale: {
          firstDayOfWeek: 1,
        },
        monthBeforeYear: false,
      },
    }
  },
  props: {
    cssId: {
      type: String,
      required: true
    },
    tusk: {
      type: Object
    },
    isReminderTodo: {
      type: Boolean,
      default: false,
    },
    isCreateOrChangeTodo: {
      type: Boolean,
      default: false,
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
    },
    changeReminder() {
      const modal = document.getElementById('btn-close' + this.cssId);
      console.log('click button')
      this.$emit('change', this.date);
      modal.click();
    },
  }
}
</script>

<style lang="scss" scoped>

.modal-body-reminder {
  //min-height: 400px;
}
</style>