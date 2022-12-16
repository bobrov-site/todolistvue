<template>
  <div class="border p-4">
    <h3>{{title}}</h3>
    <ul class="list-group list-group-numbered">
      <li class="list-group-item">Создавать/редактировать/удалять напоминания 📄</li>
      <li class="list-group-item">Изменять статус напоминания по отдельности или все сразу ✅</li>
      <li class="list-group-item">Устанавливать дату и время напоминания ⏱️ (со звуком 🔉)</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BenefitsTable",
  props: {
    title: {
      type: String,
      require: true
    }
  }
}
</script>

<style scoped>

</style>