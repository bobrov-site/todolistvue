<template>
<div class="todolist">
  <ContainerBootstrap>
    <div class="row">
      <div class="col-12 text-center">
        <TitlePage text="Список задач"/>
      </div>
    </div>
    <TodoList/>
  </ContainerBootstrap>
</div>
</template>

<script>
import ContainerBootstrap from "@/components/UI/ContainerBootstrap";
import TitlePage from "@/components/TitlePage";
import TodoList from "@/components/TodoList";
export default {
  name: "TodoListView",
  components: {TodoList, TitlePage, ContainerBootstrap}
}
</script>

<style lang="scss" scoped>

</style>