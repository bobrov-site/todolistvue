<template>
<div class="signUp">
  <ContainerBootstrap>
    <div class="row justify-content-center">
      <div class="col-7">
        <div class="border p-4">
          <h3>Что дает регистрация? 🤔</h3>
          <ul class="list-group list-group-numbered">
            <li class="list-group-item">Создавать/редактировать/удалять напоминания 📄</li>
            <li class="list-group-item">Изменять статус напоминания по отдельности или все сразу ✅</li>
            <li class="list-group-item">Устанавливать дату и время напоминания ⏱️ (со звуком 🔉)</li>
          </ul>
        </div>
      </div>
      <div class="col-5">
        <div class="border p-4">
          <h2>Регистрация</h2>
          <FormBootstrap/>
        </div>
      </div>
    </div>
  </ContainerBootstrap>
</div>
</template>

<script>
import ContainerBootstrap from "@/components/UI/ContainerBootstrap.vue";
import FormBootstrap from "@/components/UI/FormBootstrap.vue";

export default {
  name: "SignUpView",
  components: {FormBootstrap, ContainerBootstrap}
}
</script>

<style scoped>

</style>