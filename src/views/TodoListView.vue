<template>
<div class="todolist">
  <ContainerBootstrap>
    <div class="row">
      <div class="col-12 text-center">
        <TitlePage text="Список задач"/>
      </div>
    </div>
  </ContainerBootstrap>
</div>
</template>

<script>
import ContainerBootstrap from "@/components/UI/ContainerBootstrap";
import TitlePage from "@/components/TitlePage";
export default {
  name: "TodoListView",
  components: {TitlePage, ContainerBootstrap}
}
</script>

<style lang="scss" scoped>

</style>